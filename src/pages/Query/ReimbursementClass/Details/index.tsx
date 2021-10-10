import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { getKHTKSJ, updateKHTKSJ } from '@/services/after-class-pxjg/khtksj';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';

const { Option } = Select;
const Details=(props)=>{
    const {id} = props.location.state
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
    },
    {
      title: '课程名称 ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      render: (text: any) => {
        return text?.KHKCSJ?.KCMC;
      },
    },
    {
      title: '课程班名称  ',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
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
    },
    {
      title: '状态',
      dataIndex: 'ZT',
      key: 'ZT',
      align: 'center',
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
    },
    // {
    //   title: '操作',
    //   dataIndex: '',
    //   key: '',
    //   align: 'center',
    //   render: (record: any) =>
    //     record.ZT === 0 ? (
    //       <>
    //         <Popconfirm
    //           title="确认要同意么?"
    //           onConfirm={async () => {
    //             // try {
    //             //   if (record.id) {
    //             //     const params = { id: record.id };
    //             //     const body = { ZT: 1 };
    //             //     const res3 = await updateKHTKSJ(params, body);
    //             //     if (res3.status === 'ok') {
    //             //       message.success('已同意退课');
    //             //       actionRef.current?.reload();
    //             //     }
    //             //   }
    //             // } catch (err) {
    //             //   message.error('删除课程出现错误，请联系管理员确认已删除');
    //             // }
    //           }}
    //         >
    //           <a>同意</a>
    //         </Popconfirm>
    //         <Divider type="vertical" />
    //         <Popconfirm
    //           title="不同意"
    //           onConfirm={async () => {
    //             // try {
    //             //   if (record.id) {
    //             //     const params = { id: record.id };
    //             //     const body = { ZT: 2 };
    //             //     const res3 = await updateKHTKSJ(params, body);
    //             //     if (res3.status === 'ok') {
    //             //       message.success('驳回退课申请');
    //             //       actionRef.current?.reload();
    //             //     }
    //             //   }
    //             // } catch (err) {
    //             //   message.error('删除课程出现错误，请联系管理员确认已删除');
    //             // }
    //           }}
    //         >
    //           <a>不同意</a>
    //         </Popconfirm>
    //       </>
    //     ) : (
    //       ''
    //     ),
    // },
  ];
  useEffect(()=>{
      (async()=>{
          const res=await getKHTKSJ({XXJBSJId:id})
         if(res.status==='ok'){
           console.log(res.data?.rows);
           
            setDataSource(res.data?.rows)
         }
          

      })()
  },[])
    return(
        <>
            <div >
        <span>
          所属学年学期：
          <Select
            // value={curXNXQId}
            style={{ width: 200 }}
            onChange={(value: string) => {
              //更新多选框的值
            //   setCurXNXQId(value);
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
      </div>
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
            
        </>
    )
}
export default Details