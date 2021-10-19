import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react';
import { Button, Input, Select } from 'antd';
import { useModel } from 'umi';
import { getAllKHXSDD } from '@/services/after-class-pxjg/khxsdd';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { LeftOutlined } from '@ant-design/icons';
import { getCourses } from '@/services/after-class-pxjg/jyjgsj';
import WWOpenDataCom from '@/components/WWOpenDataCom';

const { Search } = Input;
const { Option } = Select;
type selectType = { label: string; value: string };
const ClassOrder = (props: any) => {
  const { id } = props.location.state;
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.KHXSDD>[] | undefined = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 60
    },
    {
      title: '学生姓名',
      dataIndex: 'XSJBSJ',
      key: 'XSJBSJ',
      align: 'center',
      width: 120,
      ellipsis: true,
      render: (_text: any, record: any) => {
        const showWXName = record?.XSJBSJ?.XM === '未知' && record?.XSJBSJ?.XM.WechatUserId;
        return showWXName ? (<WWOpenDataCom type="userName" openid={record?.XSJBSJ?.WechatUserId} />) : (record?.XSJBSJ?.XM);
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
      title: '下单时间',
      dataIndex: 'XDSJ',
      key: 'XDSJ',
      align: 'center',
      width: 170,
      ellipsis: true,
    },
    {
      title: '付款时间',
      dataIndex: 'ZFSJ',
      key: 'ZFSJ',
      align: 'center',
      width: 170,
      ellipsis: true,
    },
    {
      title: '订单费用(元)',
      dataIndex: 'DDFY',
      key: 'DDFY',
      align: 'center',
      width: 130,
      ellipsis: true,
    },
    {
      title: '订单状态',
      dataIndex: 'DDZT',
      key: 'DDZT',
      align: 'center',
      width: 160,
      ellipsis: true,
    }
  ];
  const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);
  const [activeKey, setActiveKey] = useState<string>('已付款');
  const [StudentName, SetStudentName] = useState<any>();
  const [coursName, setcoursName] = useState<any>();
  const [courseList, setcourseList] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const res = await getCourses({
        JGId: currentUser?.jgId
      })
      if (res.status === 'ok') {
        setcourseList(res.data?.rows)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const res = await getAllKHXSDD({
        XXJBSJId: id,
        DDZT: activeKey,
        DDLX: 0,
        XSXM: StudentName
      })
      setDataSource(res?.data)
    })()
  }, [activeKey, StudentName, coursName])
  const screenData = async (value: any) => {
    const { XSJBSJ } = value;
    const res = await getAllKHXSDD({
      XXJBSJId: id,
      XSXM: XSJBSJ,
      DDZT: activeKey,
      DDLX: 0
    });
    setDataSource(res?.data);
  };
  return (
    <>
      <div />
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
      <div style={{ padding: '24px 0' }}>
        <span>
          学生姓名：
          <Search style={{ width: 200 }}
            placeholder='请输入学生姓名'
            allowClear
            onSearch={(value) => {
              SetStudentName(value)

            }} />
        </span>
        <span style={{ marginLeft: '24px' }}>
          课程名称：
          <Select
            style={{ width: 200 }}
            onChange={(value: string) => {
              setcoursName(value)
            }}
          >
            {courseList?.map((item: any) => {
              return <Option key={item.id} value={item.id}>{item.KCMC}</Option>;
            })}
          </Select>
        </span>
      </div>
      <ProTable
        dataSource={dataSource}
        columns={columns}
        onSubmit={(value) => {
          screenData(value);
        }}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false
        }}
        search={false}
        toolbar={{
          menu: {
            type: 'tab',
            activeKey,
            items: [
              {
                key: '已付款',
                label: <span>已付款</span>
              },
              {
                key: '待付款',
                label: <span>待付款</span>
              },

              {
                key: '已过期',
                label: <span>已过期</span>
              }
            ],
            onChange: (key) => {
              setActiveKey(key as string);
              actionRef.current?.reload();
            }
          }
        }}
        actionRef={actionRef}
      />
    </>
  );
};
ClassOrder.wrappers = ['@/wrappers/auth'];
export default ClassOrder;
