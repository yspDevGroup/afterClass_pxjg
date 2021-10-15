import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { useModel } from 'umi';
import { getAllKHXSDD } from '@/services/after-class-pxjg/khxsdd';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { LeftOutlined } from '@ant-design/icons';

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
      render: (test: any) => test.XM
    },
    {
      title: '课程名称',
      dataIndex: 'BJMC',
      key: 'BJMC',
      align: 'center',
      valueType: 'select',
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.KHKCSJ.KCMC}</div>;
      }
    },
    {
      title: '课程班名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      search: false,
      render: (_text: any, record: any) => {
        return <div>{record?.KHBJSJ?.BJMC}</div>;
      }
    },
    {
      title: '下单时间',
      dataIndex: 'XDSJ',
      key: 'XDSJ',
      align: 'center',
      search: false
    },
    {
      title: '付款时间',
      dataIndex: 'ZFSJ',
      key: 'ZFSJ',
      align: 'center',
      search: false
    },
    {
      title: '订单费用(元)',
      dataIndex: 'DDFY',
      key: 'DDFY',
      align: 'center',
      search: false
    },
    {
      title: '订单状态',
      dataIndex: 'DDZT',
      key: 'DDZT',
      align: 'center',
      search: false
    }
  ];
  const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);
  const [activeKey, setActiveKey] = useState<string>('已付款');
  const [classList, setclassList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getAllKHXSDD({
        XXJBSJId: id,
        DDZT: activeKey,
        DDLX: 0
      });
      setDataSource(res?.data);
    })();
  }, [activeKey]);
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
        // search={false}
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
