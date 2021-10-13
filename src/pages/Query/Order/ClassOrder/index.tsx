import ProTable, { ProColumns,ActionType } from '@ant-design/pro-table';
import {useState,useEffect,useRef} from 'react'
import { Select, Button} from 'antd';
import {useModel,} from 'umi';
import { getAllKHXSDD } from '@/services/after-class-pxjg/khxsdd';
import { getAllSemester} from '@/services/after-class-pxjg/khjyjg';
import { LeftOutlined, } from '@ant-design/icons';



const { Option } = Select;

type selectType = { label: string; value: string };
const ClassOrder=(props:any)=>{
    const {id}=props.location.state
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
          title: '班级',
          dataIndex: 'BJMC',
          key: 'BJMC',
          align: 'center',
          render: (_text: any, record: any) => {
            return <div>{record?.KHBJSJ?.BJMC}</div>;
          },
        },
        {
          title: '课程名称',
          dataIndex: 'KCMC',
          key: 'KCMC',
          align: 'center',
          render: (_text: any, record: any) => {
            return <div>{record?.KHBJSJ?.KHKCSJ?.KCMC}</div>;
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
  const [activeKey, setActiveKey] = useState<string>('待付款');
   useEffect(()=>{
      (async()=>{
          const res1=await getAllSemester({
            KHJYJGId:currentUser.jgId,
            XXJBSJId:id,

           })
          if(res1.status==='ok'){
            (async()=>{
                const res= await getAllKHXSDD({
                  //机构id
                    KHJYJGId:currentUser?.jgId,
                    XNXQId:res1.data[0].id,
                    XXJBSJId:id,
                    DDZT:activeKey,
                    DDLX:0
                })
                setDataSource(res?.data)
             })()
             
          }
         })()
  },[activeKey])
    

    return(
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
ClassOrder.wrappers = ['@/wrappers/auth']
export default ClassOrder