import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react'
import { Select,Button } from 'antd';
import { useModel, } from 'umi';
import { LeftOutlined, } from '@ant-design/icons';
import { getAllKHXSDD } from '@/services/after-class-pxjg/khxsdd';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';


const { Option } = Select;

type selectType = { label: string; value: string };
const ServiceOrder = (props: any) => {
    const { id } = props.location.state
    const { initialState } = useModel('@@initialState');
    const { currentUser } = initialState || {};
    const actionRef = useRef<ActionType>();

    const columns: ProColumns<API.KHXSDD>[] | undefined = [
        {
            title: '序号',
            dataIndex: 'index',
            valueType: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '学生姓名',
            dataIndex: 'XSXM',
            key: 'XSXM',
            align: 'center',
          },
          {
            title: '服务名称',
            dataIndex: 'KHXXZZFW',
            key: 'KHXXZZFW',
            align: 'center',
            render: (text: any) => {
              return <div>{text?.FWMC}</div>;
            },
          },
          {
            title: '下单时间',
            dataIndex: 'XDSJ',
            key: 'XDSJ',
            align: 'center',
          },
          {
            title: '付款时间',
            dataIndex: 'ZFSJ',
            key: 'ZFSJ',
            align: 'center',
          },
          {
            title: '订单费用(元)',
            dataIndex: 'DDFY',
            key: 'DDFY',
            align: 'center',
          },
          {
            title: '订单状态',
            dataIndex: 'DDZT',
            key: 'DDZT',
            align: 'center',
          },
    ];
    const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);

    const [activeKey, setActiveKey] = useState<string>('paid');



    useEffect(() => {
        (async () => {
            const res1 = await getAllSemester({
                KHJYJGId: currentUser.jgId,
                XXJBSJId: id,

            })
            if (res1.status === 'ok') {
                (async () => {
                    const res = await getAllKHXSDD({
                        XNXQId: res1.data[0].id,
                        XXJBSJId: id,
                        //父传子判断要请求的状态
                        DDZT: activeKey,
                        DDLX: 1
                    })
                    setDataSource(res?.data)
                })()



            }


        })()
    }, [activeKey])


    return (
        <>
            <div>
            </div>
            <Button
                type="primary"
                onClick={() => {
                    history.go(-1);
                }}
                style={{
                    marginBottom: '24px',
                }}
            >
                <LeftOutlined />
                返回上一页
            </Button>
            <ProTable
                dataSource={dataSource}
                columns={columns}
                options={{
                    setting: false,
                    fullScreen: false,
                    density: false,
                    reload: false,

                }}
                search={false}
                toolbar={{
                    menu: {
                        type: 'tab',
                        activeKey,
                        items: [
                            {
                                key: '待付款',
                                label: <span>待付款</span>
                            },
                            {
                                key: '已付款',
                                label: <span>已付款</span>
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

    )

}
ServiceOrder.wrappers = ['@/wrappers/auth']
export default ServiceOrder