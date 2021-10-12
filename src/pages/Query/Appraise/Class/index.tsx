import { Link, useModel } from 'umi';
import { Select, Rate, Button, Tag } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useState } from 'react';
import { getAllClasses } from '@/services/after-class-pxjg/khbjsj';
import { getClassesEvaluation } from "@/services/after-class-pxjg/khbjsj"
// import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';


import { useEffect } from 'react';


const { Option } = Select;
const Class = (props: any) => {
    const { KHKCSJId } = props.location.state

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
            dataIndex: 'KHBJJs',
            key: 'KHBJJs',
            align: 'center',
            render: (text: any) => {
            return (
                    <EllipsisHint
                        width="100%"
                        text={text.map((item) => {
                            return (
                                <Tag key={item.id} color="#EFEFEF" style={{ color: '#333' }}>
                                    {item.KHJSSJ.XM}
                                </Tag>
                            );
                        })}
                    />)

            }

        },
        {
            title: '评价人数',
            dataIndex: 'pj_count',
            key: ' pj_count',
            align: 'center',
            render: (text: any) => text

        },
        {
            title: '班级人数',
            dataIndex: 'xs_count',
            key: 'xs_count ',
            align: 'center',
            render: (text: any) => text

        },
        {
            title: '班级评分',
            dataIndex: 'pj_avg',
            key: 'pj_avg',
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
    const [dataSource, setDataSource] = useState<any>([]);

    const { currentUser } = initialState || {};
    useEffect(() => {
        (async () => {
            const res = await getClassesEvaluation({
                KHKCSJId

            })
         setDataSource(res.data.rows)
        })()

    }, [])

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