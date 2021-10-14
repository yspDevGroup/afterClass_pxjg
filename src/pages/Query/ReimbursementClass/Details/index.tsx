import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message,Button } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { getKHTKSJ, updateKHTKSJ } from '@/services/after-class-pxjg/khtksj';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import styles from '../index.less'

const { Option } = Select;
const Details = (props:any) => {
  const { id } = props.location.state
  const [termList, setTermList] = useState<any>();
  const [dataSource, setDataSource] = useState<any>([]);

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
      dataIndex: 'XSXM',
      key: 'XSXM',
      align: 'center',
      filters:true,
      
    },
    {
      title: '课程名称 ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      search:false,
      render: (text: any) => {
        return text?.KHKCSJ?.KCMC;
      },
    },
    {
      title: '课程班名称  ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      valueEnum:{
        all: { text: '全部', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
      render: (text: any) => {
        return text?.BJMC;
      },
    },
    // {
    //   title: '学校名称',
    //   dataIndex: '',
    //   key: '',
    //   align: 'center',

    // },
    {
      title: '退课课时数',
      dataIndex: 'KSS',
      key: 'KSS',
      align: 'center',
      search:false,

    },
    {
      title: '状态',
      dataIndex: 'ZT',
      key: 'ZT',
      align: 'center',
      search:false,
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
      search:false
    },
  ];
  useEffect(() => {
    (async () => {
      const res = await getKHTKSJ({ XXJBSJId: id })
      if (res.status === 'ok') {
        console.log(res.data?.rows);

        setDataSource(res.data?.rows)
      }


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
      <div className={styles.Tables}>
        <ProTable
        onSubmit={(value)=>{
          console.log(value);
          
          console.log('aaaaa');
          

       }}
          dataSource={dataSource}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false,
          }}
          // search={false}
        />

      </div>


    </>
  )
}
Details.wrappers = ['@/wrappers/auth']
export default Details