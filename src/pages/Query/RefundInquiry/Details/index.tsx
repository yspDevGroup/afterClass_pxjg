import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Button, Input, message } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { getCourses } from '@/services/after-class-pxjg/jyjgsj';

import { Link, useModel } from 'umi';
import styles from '../index.less';
import { getCurrentXQ } from '@/utils';
import { getAllTKByAgency } from '@/services/after-class-pxjg/khtksj';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { getTableWidth } from '@/utils';
const { Search } = Input;
const { Option } = Select;
const Details = (props: any) => {
  const { id } = props.location.state;
  const [termList, setTermList] = useState<any>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [StudentName, SetStudentName] = useState<any>('');
  const [coursName, setcoursName] = useState<any>();
  const [courseList, setcourseList] = useState<any>([]);
  const [term, setTerm] = useState<string>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const getXNXQ = async (xxdm: string, jgdm: string) => {
    const res = await getAllSemester({
      KHJYJGId: jgdm,
      XXJBSJId: xxdm
    });
    if (res?.status === 'ok') {
      const { data = [] } = res;
      const currentXQ = getCurrentXQ(data);
      const term = [].map.call(data, (item: any) => {
        return {
          value: item.id,
          text: `${item.XN} ${item.XQ}`
        };
      });

      setTermList(term);
      setTerm(currentXQ?.id || data[0].id);
    } else {
      message.error(res.message);
    }
  };
  // table表格数据
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 58,
      fixed: 'left'
    },
    {
      title: '学生姓名',
      dataIndex: 'XSJBSJ',
      key: 'XSJBSJ',
      align: 'center',
      fixed: 'left',
      width: 120,
      render: (_text: any, record: any) => {
        const showWXName = record?.XSJBSJ?.XM === '未知' && record?.XSJBSJ?.WechatUserId;
        if (showWXName) {
          return <WWOpenDataCom type="userName" openid={record?.XSJBSJ?.WechatUserId} />;
        }
        return record?.XSJBSJ?.XM;
      }
    },
    {
      title: '行政班名称',
      dataIndex: 'BJSJ',
      key: 'BJSJ',
      align: 'center',
      width: 120,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return `${record?.XSJBSJ?.BJSJ?.NJSJ?.NJMC}${record?.XSJBSJ?.BJSJ?.BJ}`;
      }
    },
    {
      title: '课程名称 ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      search: false,
      width: 140,
      ellipsis: true,
      render: (_, record: any) => {
        return record?.KHBJSJ?.KHKCSJ?.KCMC;
      }
    },
    {
      title: '课程班名称  ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      width: 140,
      ellipsis: true,
      render: (_, record: any) => {
        return record.KHBJSJ?.BJMC;
      }
    },
    {
      title: '退款金额',
      dataIndex: 'KHXSTKs',
      key: 'KHXSTKs',
      align: 'center',
      width: 110,
      search: false,
      render: (_, record: any) => {
        return record.KHXSTKs?.[0].TKJE;
      }
    },
    {
      title: '状态',
      dataIndex: 'ZT',
      key: 'ZT',
      width: 100,
      align: 'center',
      search: false,
      valueEnum: {
        0: {
          text: '申请中',
          status: 'Processing'
        },
        1: {
          text: '已通过',
          status: 'Success'
        },
        2: {
          text: '已驳回',
          status: 'Error'
        }
      }
    },
    {
      title: '申请时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 170,
      search: false,
      ellipsis: true
    }
  ];
  useEffect(() => {
    if (currentUser?.jgId) {
      // 获取学年学期
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getXNXQ(id, currentUser?.jgId);
        (async () => {
          const res = await getCourses({
            JGId: currentUser?.jgId
          });
          if (res.status === 'ok') {
            setcourseList(res.data?.rows);
          }
        })();
    }
  }, [currentUser]);
  useEffect(() => {
    (async () => {
      const res = await getAllTKByAgency({
        XXJBSJId: id,
        KHJYJGId: currentUser?.jgId,
        XNXQId: term,
        KCMC: coursName || '',
        page: 0,
        pageSize: 0,
        XSXM: StudentName
      });
      if (res.status === 'ok') {
        setDataSource(res.data?.rows);
      }
    })();
  }, [term, StudentName, coursName]);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.go(-1);
        }}
        style={{
          marginBottom: '8px'
        }}
      >
        <LeftOutlined />
        返回上一页
      </Button>
      <div className={styles.TabTop}>
        <span>
          所属学年学期：
          <Select
            allowClear={true}
            value={term}
            style={{ width: 200 }}
            onChange={(value: string) => {
              setTerm(value);
            }}
          >
            {termList?.map((item: any) => {
              return (
                <Option key={item.value} value={item.value}>
                  {item.text}
                </Option>
              );
            })}
          </Select>
        </span>
        <span>
          学生姓名：
          <Search
            style={{ width: 200 }}
            placeholder="请输入学生姓名"
            allowClear
            onSearch={(value) => {
              SetStudentName(value);
            }}
          />
        </span>
        <span>
          课程名称：
          <Search
            placeholder="请输入课程名称"
            allowClear
            onSearch={(value) => {
              setcoursName(value);
            }}
            style={{ width: 200 }}
          />
        </span>
      </div>
      <div className={styles.Tables}>
        <ProTable
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
          }}
          scroll={{ x: getTableWidth(columns) }}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
          search={false}
        />
      </div>
    </>
  );
};
Details.wrappers = ['@/wrappers/auth'];
export default Details;
