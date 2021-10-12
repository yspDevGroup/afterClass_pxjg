import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react'
import { Rate, Button, Modal } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import { getAllKHXSPJ } from '@/services/after-class-pxjg/khxspj'
import { getKHBJPJ } from '@/services/after-class-pxjg/khbjpj'

const Details = (props: any) => {
    const { data } = props.location.state;
    // 弹出框显示隐藏
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [DetailsValue, setDetailsValue] = useState('');
    // 列表对象引用，可主动执行刷新等操作
    const actionRef = useRef<ActionType>();
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const teacher: ProColumns<any>[] | undefined = [
        {
            title: '序号',
            dataIndex: 'index',
            valueType: 'index',
            width: 58,
            align: 'center'
        },
        {
            title: '评价时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            align: 'center',
            width: 200,
        },
        {
            title: '课程评分',
            dataIndex: '',
            key: '',
            align: 'center',
            width: 200,
            render: (_, record) => <Rate count={5} defaultValue={record?.PJFS} disabled={true} />,
        },
        {
            title: '评价人',
            dataIndex: 'PJR',
            key: '',
            align: 'center',


        },
        {
            title: '评价内容',
            dataIndex: 'PY',
            key: 'PY',
            align: 'center',
            ellipsis: true
        },

    ];

    const student: ProColumns<any>[] | undefined = [
        {
            title: '序号',
            dataIndex: 'index',
            valueType: 'index',
            width: 58,
            align: 'center'
        },
        {
            title: '学生姓名',
            dataIndex: 'XSXM',
            key: 'XSXM',
            align: 'center',
        },
        {
            title: '班级',
            dataIndex: '',
            key: '',
            align: 'center',
            //   render: () => {
            //     return   <span>{ListState.BJMC}</span> ;
            //   },
        },
        {
            title: '评价时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            align: 'center',
            width: 200,
        },
        {
            title: '课程评分',
            dataIndex: '',
            key: '',
            align: 'center',
            width: 200,
            render: (_, record) => <Rate count={5} defaultValue={record?.PJFS} disabled={true} />,
        },
        {
            title: '该学生课堂表现',
            dataIndex: 'PY',
            key: 'PY',
            align: 'center',
            render: (text: any) => {
                return (
                    <a
                        onClick={() => {
                            setDetailsValue(text)

                            setIsModalVisible(true)
                        }}

                    >
                        课堂表现
                    </a>

                );



            },
        },
    ];
    const [StuList, setStuList] = useState<API.KHXSDD[] | undefined>([]);
    const [teacherList, setTeacherList] = useState<API.KHXSDD[] | undefined>([]);
    const [activeKey, setActiveKey] = useState<string>('student');
    useEffect(() => {
     
        (async () => {
            const res2 = await getAllKHXSPJ({
                KHBJSJId: data.id,
                JSId: '',
                page: 0,
                pageSize: 0,
            });
            if (res2.status === 'ok') {
                // 老师给学生的评语
                setStuList(res2.data?.rows)
            }
        })(),
            (async () => {
                const res = await getKHBJPJ({
                    // 课后班级数据
                    KHBJSJId: data.id,
                    XSId: '',
                    XXJBSJId: '',
                    page: 0,
                    pageSize: 0,
                });
                if (res?.data?.rows) {
                    //家长给老师的评价
                    setTeacherList(res.data.rows);

                }
            })();
        }, []);

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
            <ProTable
                columns={activeKey === 'student'? teacher : student}
                dataSource={activeKey ==='student'? teacherList : StuList}
                rowKey="id"
                search={false}
                actionRef={actionRef}
                options={{
                    setting: false,
                    fullScreen: false,
                    density: false,
                    reload: false,
                }}
                toolbar={{
                    menu: {
                        type: 'tab',
                        activeKey,
                        items: [
                            {
                                key: 'teacher',
                                label: <span>学生评价</span>
                            },
                            {
                                key: 'student',
                                label: <span>课程反馈</span>
                            }
                        ],
                        onChange: (key) => {
                            setActiveKey(key as string);
                            actionRef.current?.reload();
                        }
                    }
                }}
            />
            <Modal visible={isModalVisible} onCancel={handleCancel} title='表现详情'
                footer={null}
            >
                <span>{DetailsValue}</span>
            </Modal>
        </>
    )
}
Details.wrappers = ['@/wrappers/auth']
export default Details