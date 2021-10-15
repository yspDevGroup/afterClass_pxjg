import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Button, Input,message } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { Link, useModel } from 'umi';
import styles from '../index.less'
import { getCurrentXQ } from '@/utils';
import {getAllTKByAgency} from '@/services/after-class-pxjg/khtksj';
const { Search } = Input;

const { Option } = Select;
const Details = (props: any) => {
  const { id } = props.location.state
  const [termList, setTermList] = useState<any>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [classNameList, setclassNameList] = useState<any>([]);
  const [StudentName,SetStudentName ] = useState<any>('');
  const [className, setclassName] = useState<any>([]);
  const [term, setTerm] = useState<string>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const getXNXQ = async (xxdm: string, jgdm: string) => {
    const res = await getAllSemester({
        KHJYJGId: jgdm,
        XXJBSJId: xxdm,
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
        message.error(res.message,);
    }
};
 ///table表格数据
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 60,
    },
    {
      title: '学生姓名',
      dataIndex: 'XSJBSJ',
      key: 'XSJBSJ',
      align: 'center',
      render: (test) => test?.XM
    },
    {
      title: '行政班名称',
      dataIndex: 'BJSJ',
      key: 'BJSJ',
      align: 'center',
      width: 100,
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
      render: (text: any) => {
        return text?.BJMS;
      },
    },
    {
      title: '课程班名称  ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      render: (text: any) => {
        return <div>{text?.BJMC}</div>
      },
    },
    {
      title: '退课课时数',
      dataIndex: 'KSS',
      key: 'KSS',
      align: 'center',
      search: false
    },
    {
      title: '状态',
      dataIndex: 'ZT',
      key: 'ZT',
      align: 'center',
      search: false,
      valueEnum: {
        0: {
          text: '申请中',
          status: 'Processing',
        },
        1: {
          text: '已通过',
          status: 'Success',
        },
        2: {
          text: '已驳回',
          status: 'Error',
        },
      },
    },
    {
      title: '申请时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      search: false
    }
  ];
  useEffect(() => {
    // 获取学年学期
    getXNXQ(id, currentUser?.jgId),
      // 培训机构课程列表
      (async () => {
        const res = await getAllTKByAgency({
          XXJBSJId: id,
          KHJYJGId: currentUser?.jgId,
          page: 0,
          pageSize: 0
        });
        if (res.status === 'ok') {
          setclassNameList(res.data.rows);
        }
      })();
  }, []);
  useEffect(() => {
  (async () => {
      const res = await getAllTKByAgency({
        XXJBSJId: id,
        KHJYJGId:currentUser?.jgId,
        XNXQId:term,
        page:0,
        pageSize:0,
        XSXM:StudentName
      })
      if (res.status === 'ok') {
        setDataSource(res.data?.rows);
      }
    })();
  }, [term, StudentName, className]);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.go(-1);
        }}
        style={{
          marginBottom: '24px'
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
          <Select
            style={{ width: 200 }}
            onChange={(value: string) => {
              setclassName(value);
            }}
          >
            {classNameList?.map((item: any) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.KCMC}
                </Option>
              );
            })}
          </Select>
        </span>
      </div>

      <div className={styles.Tables}>
        <ProTable
          dataSource={dataSource}
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
