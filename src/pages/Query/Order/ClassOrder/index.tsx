import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react';
import { Button, Input, Select } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { getCourses } from '@/services/after-class-pxjg/jyjgsj';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { cooperateSchoolOrderList } from '@/services/after-class-pxjg/khjyjg';
import { getAllKHKCLX } from '@/services/after-class-pxjg/khkclx';
import SemesterSelect from '@/components/Search/SemesterSelect';
import SearchLayout from '@/components/Search/Layout';
import { getTableWidth } from '@/utils';

const { Search } = Input;
const { Option } = Select;
const ClassOrder = (props: any) => {
  const { xxId, XXMC, jgId } = props.location.state;
  const actionRef = useRef<ActionType>();
  const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);
  const [studentName, setStudentName] = useState<any>();
  const [coursName, setcoursName] = useState<any>();
  const [kclxOptions, setKCLXOptions] = useState<any>();
  const [kclx, setKCLX] = useState<any>();
  const [courseList, setcourseList] = useState<any>([]);
  // 选择学年学期
  const [term, setTerm] = useState<string>();
  const getData = async (XQId?: string) => {
    const res = await cooperateSchoolOrderList({
      KHJYJGId: jgId,
      XXId: xxId,
      XQId: XQId ? XQId : term,
      KCId: coursName,
      XSMC: studentName,
      page: 0,
      pageSize: 0,
      KCTAGId: kclx
    });
    if (res.status === 'ok') {
      setDataSource(res.data?.rows);
    }
    const kclxRes = await getAllKHKCLX({ name: '' });
    if (kclxRes.status === 'ok') {
      const data = kclxRes.data?.map((item: any) => {
        return {
          value: item.id,
          text: item.KCTAG
        };
      });
      setKCLXOptions(data);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getCourses({
        JGId: jgId
      });
      if (res.status === 'ok') {
        setcourseList(res.data?.rows);
      }
    })();
  }, []);

  useEffect(() => {
    getData();
  }, [studentName, coursName, kclx]);
  const columns: ProColumns<API.KHXSDD>[] | undefined = [
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
      width: 100,
      fixed: 'left',
      ellipsis: true,
      render: (_text: any, record: any) => {
        const showWXName = record?.XSJBSJ?.XM === '未知' && record?.XSJBSJ?.XM.WechatUserId;
        return showWXName ? (
          <WWOpenDataCom type="userName" openid={record?.XSJBSJ?.WechatUserId} />
        ) : (
          record?.XSJBSJ?.XM
        );
      }
    },
    {
      title: '行政班名称',
      dataIndex: 'BJSJ',
      key: 'BJSJ',
      align: 'center',
      width: 130,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return `${record?.XSJBSJ?.BJSJ?.NJSJ?.NJMC}${record?.XSJBSJ?.BJSJ?.BJ}`;
      }
    },
    {
      title: '课程名称',
      dataIndex: 'BJMC',
      key: 'BJMC',
      align: 'center',
      width: 160,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.KHKCSJ.KCMC}</div>;
      }
    },
    {
      title: '课程班名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      width: 160,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.BJMC}</div>;
      }
    },
    {
      title: '课程类型',
      dataIndex: 'KCTAG',
      key: 'KCTAG',
      align: 'center',
      width: 160,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.KHKCSJ?.KHKCLX?.KCTAG}</div>;
      }
    },
    {
      title: '课程费用(元)',
      dataIndex: 'KCFY',
      key: 'KCFY',
      align: 'center',
      width: 110,
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.FY}</div>;
      }
    },
    {
      title: '教辅费用(元)',
      dataIndex: 'JCFY',
      key: 'JCFY',
      align: 'center',
      width: 110,
      render: (_text: any, record: any) => {
        return <div>{Number(record.DDFY) - Number(record?.KHBJSJ?.FY)}</div>;
      }
    },
    {
      title: '订单总费用(元)',
      dataIndex: 'DDFY',
      key: 'DDFY',
      align: 'center',
      width: 120
    },
    {
      title: '下单时间',
      dataIndex: 'XDSJ',
      key: 'XDSJ',
      align: 'center',
      width: 170,
      ellipsis: true
    },
    {
      title: '付款时间',
      dataIndex: 'ZFSJ',
      key: 'ZFSJ',
      align: 'center',
      width: 170,
      ellipsis: true
    },
    {
      title: '订单费用(元)',
      dataIndex: 'DDFY',
      key: 'DDFY',
      align: 'center',
      width: 130,
      ellipsis: true
    },
    {
      title: '支付方式',
      dataIndex: 'ZFFS',
      key: 'ZFFS',
      align: 'center',
      ellipsis: true,
      width: 150,
    }
  ];
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
      <ProTable
        dataSource={dataSource}
        columns={columns}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false
        }}
        search={false}
        actionRef={actionRef}
        headerTitle={
          <SearchLayout>
            <SemesterSelect XXJBSJId={xxId} onChange={(value: string) => {
              getData(value);
              setTerm(value);
            }} />
            <div>
              <label htmlFor='kcname'>学生姓名：</label>
              <Search
                placeholder="请输入学生姓名"
                allowClear
                onSearch={(value) => {
                  setStudentName(value);
                }}
              />
            </div>
            <div>
              <label htmlFor='kcname'>课程类型：</label>
              <Select
                allowClear
                onChange={(value: string) => {
                  setKCLX(value);
                }}
              >
                {kclxOptions?.map((item: any) => {
                  return (
                    <Option key={item.value} value={item.value}>
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <label htmlFor='kcname'>课程名称：</label>
              <Select
                allowClear
                onChange={(value: string) => {
                  setcoursName(value);
                }}
              >
                {courseList?.map((item: any) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.KCMC}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </SearchLayout>
        }
      />
    </>
  );
};
ClassOrder.wrappers = ['@/wrappers/auth'];
export default ClassOrder;
