import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Button, Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
const { Option } = Select;
import { LeftOutlined, } from '@ant-design/icons';
import { getKHXKJL } from '@/services/after-class-pxjg/khxkjl'
import styles from '../index.less'


const Details = (props: any) => {
    const { KHKCSJ, XXJBSJ, id } = props.location.state
    const [termList, setTermList] = useState<any>();
    const [dataSource, setDataSource] = useState<any>([]);
    useEffect(() => {
        (async () => {
            const res = await getKHXKJL(
                {
                    XXJBSJId: XXJBSJ.id,
                    KHKCSJId: KHKCSJ.id,
                    page: 0,
                    pageSize: 0
                }
            )
            console.log(res.data?.rows);

            setDataSource(res.data?.rows)
        })()
    }, [])

    const columns: ProColumns<API.KHXSDD>[] | undefined = [
        {
            title: '序号',
            dataIndex: 'index',
            valueType: 'index',
            width: 58,
            align: 'center'
        },
        {
            title: '巡课日期',
            dataIndex: 'RQ',
            key: 'RQ',
            align: 'center',
            width: 120,
            valueType: 'date'
             
        },
        {
            title: '巡课教师',
            dataIndex: 'XKJS',
            key: 'XKJS',
            align: 'center',
            render: (text: any) => text?.XM,
            width: 120
        },
        {
            title: '授课教师',
            dataIndex: 'SKJS',
            key: 'SKJS',
            align: 'center',
            render: (text: any) => text?.XM,
            width: 120
        },
        // {
        //   title: '课程名称',
        //   dataIndex: 'KHBJSJ',
        //   key: 'KHBJSJ',
        //   align: 'center',
        //   render: (text: any) => text?.KCMC,
        //   width: 120

        // },
        {
            title: '班级名称',
            dataIndex: 'KHBJSJ',
            key: 'KHBJSJ',
            align: 'center',
            render: (text: any) => text?.BJMC,
            width: 120

        },
        {
            title: '准时上课',
            dataIndex: 'SFZSSK',
            key: 'SFZSSK',
            align: 'center',
            render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
            width: 120
        },
        {
            title: '为原定教师',
            dataIndex: 'SFYDJS',
            key: ' SFYDJS',
            align: 'center',
            render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
            width: 150
        },
        {
            title: '课堂点名',
            dataIndex: 'SFDM',
            key: ' SFDM',
            align: 'center',
            render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
            width: 120
        },
        {
            title: '实到人数是否准确',
            dataIndex: 'RSSFZQ',
            key: ' RSSFZQ',
            align: 'center',
            render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
            width: 150
        },
        {
            title: '应到人数',
            dataIndex: 'YDRS',
            key: 'YDRS',
            align: 'center',
            width: 120,
        },
        {
            title: '实到人数',
            dataIndex: 'SDRS',
            key: 'SDRS',
            align: 'center',
            width: 120,
        },
        {
            title: '巡课确认人数',
            dataIndex: 'QRRS',
            key: 'QRRS',
            align: 'center',
            width: 120,
        },
        {
            title: '备注信息',
            dataIndex: 'BZXX',
            key: 'BZXX',
            align: 'center',
            width: 220,
            render: (text) => {
                return (
                    <Tooltip title={text}>
                        <div style={{
                            textOverflow: 'ellipsis',
                            width: '100px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textAlign: 'center',
                            margin: '0 auto',
                        }}>{text}</div>
                    </Tooltip>
                )
            }
        },
    ]

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
            <div className={styles.TabTop}>
                <span>{`${KHKCSJ.KCMC}(${XXJBSJ.XXMC})`}</span>
                <span>
                    所属学年学期:
                    <Select
                        style={{ width: 200 }}
                        onChange={(value: string) => {

                        }}
                    >
                        {termList?.map((item: any) => {
                            return <Option key={item.value} value={item.value}>{item.text}</Option>;
                        })}
                    </Select>
                </span>
            </div>
            <div className={styles.TabList}>
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

                />

            </div>



        </>
    )
}
Details.wrappers = ['@/wrappers/auth'];

export default Details