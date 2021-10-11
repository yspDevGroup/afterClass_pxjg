import { Link, useModel } from 'umi';
import { Select, Rate, Button, Tag } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useState } from 'react';
import { getAllClasses } from '@/services/after-class-pxjg/khbjsj';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';


import { useEffect } from 'react';


const { Option } = Select;
const Class = (props: any) => {
const {id} = props.location.state

    const columns: ProColumns<any>[] | undefined = [
        {
            title: '序号',
            dataIndex: 'index',
            valueType: 'index',
            width: 58,
            align: 'center'
        },
        {
            title: '班级名称',
            dataIndex: 'BJMC',
            key: 'BJMC',
            align: 'center',
            // render:(text:any)=>text.BJMC

        },
        {
            title: '主讲师',
            dataIndex: 'ZJS',
            key: 'ZJS',
            align: 'center',
            render: (text:any) => {
                return text
                
                
                // return (
                //     <EllipsisHint
                //         width="100%"
                //         text={record.KHBJJs.map((item) => {
                //             return (
                //                 <Tag key={item.id} color="#EFEFEF" style={{ color: '#333' }}>
                //                     {item.KHJSSJ.XM}
                //                 </Tag>
                //             );
                //         })}
                //     />)

            }

        },
        {
            title: '评价人数',
            dataIndex: 'xs_count',
            key: ' xs_count',
            align: 'center',
            render: (text: any) => text

        },
        {
            title: '班级人数',
            dataIndex: 'BJRS',
            key: 'BJRS ',
            align: 'center',
            render: (text: any) => text

        },
        {
            title: '班级评分',
            dataIndex: 'pk_count',
            key: 'pk_count',
            align: 'center',
            render: (text: any) => <Rate count={5} defaultValue={text} disabled={true} />,

        },
        {
            title: '查看互评详情',
            dataIndex: 'XSXM',
            key: 'XSXM',
            align: 'center',
            render: (_, record) => (
                <>
                    <Link
                        to={{
                            pathname: '/query/appraise/details',
                            state: {
                                type: 'detail',
                                data: record,
                            },
                        }}
                    >
                        详情
                    </Link>
                </>
            ),
        },
    ]
    const [classList, SetclassList] = useState<any>();
    const { initialState } = useModel('@@initialState');
    const [dataSource, setDataSource] = useState<any>([
        {
            BJMC:'一年级二班',
            ZJS:'李磊',
            xs_count:5,
            BJRS:5,
            pk_count:4
        },
        {
            BJMC:'二年级二班',
            ZJS:'韩梅梅',
            xs_count:3,
            BJRS:3,
            pk_count:4
        },
        {
            BJMC:'三年级二班',
            ZJS:'李艳茹',
            xs_count:8,
            BJRS:8,
            pk_count:4
        },
    ]);

    const { currentUser } = initialState || {};
    // useEffect(() => {
    //     //获取学年学期
    //     (async () => {
    //         const res1 = await getAllSemester({
    //             KHJYJGId:currentUser.jgId,
    //             XXJBSJId:id,
    //         })
    //         if (res1.status === 'ok') {
                
    //             (async () => {
    //                 const res = await getAllClasses({
    //                     XNXQId: res1.data[0].id,
    //                     KHKCSJId:id
    //                 })
    //                 if (res.status === 'ok') {
    //                     console.log(res);
                        
    //                     setDataSource(res.data.rows)
    //                 }


    //             })()

    //         }


    //     })()

    // }, [])

    return (
        <>
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
            <div>
                <span>
                    班级名称:
                    <Select
                        // value={}
                        style={{ width: 200 }}
                        onChange={(value: string) => {
                            // 选择不同课程
                            // choseclass(value);
                        }}
                    >
                        {classList?.map((item: any) => {
                            return (
                                <Option key={item.value} value={item.value}>
                                    {item.text}
                                </Option>
                            );
                        })}
                    </Select>
                    <ProTable
                        columns={columns}
                        dataSource={dataSource}
                        rowKey="id"
                        search={false}
                        options={{
                            setting: false,
                            fullScreen: false,
                            density: false,
                            reload: false,
                        }}

                    />
                </span>
            </div>

        </>
    )
}
 Class.wrappers = ['@/wrappers/auth']
export default Class