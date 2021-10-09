import { Link, useModel } from 'umi';
import { Select,Rate,Button } from 'antd';
import { LeftOutlined,} from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useEffect,useState } from 'react';
import { getAllCourses} from '@/services/after-class-pxjg/khjyjg';
import { getAllSemester} from '@/services/after-class-pxjg/khjyjg';






const Course=(data:any)=>{
  const {id}=data.location.state
  const [dataSource, setDataSource] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  

  useEffect(()=>{
    //获取学年学期
    (async()=>{
       const res1 =await getAllSemester({
        KHJYJGId:currentUser.jgId,
        XXJBSJId:id,
      })
      if(res1.status==='ok'){
        (async()=>{
          const res = await getAllCourses({
            KHJYJGId:currentUser.jgId,
            XXJBSJId:id,
            XNXQId:res1.data[0].id
          
          })
         
          if(res.status==='ok'){
            console.log(res);
            
           setDataSource(res.data)
            
          }
          
    
        })()
        
      }


    })()

  },[])
  
    const columns: ProColumns<any>[] | undefined = [
        {
          title: '序号',
          dataIndex: 'index',
          valueType: 'index',
          width: 58,
          align: 'center'
        },
        {
          title: '课程名称',
          dataIndex: 'KCMC',
          key: 'KCMC',
          align: 'center',
        
        },
        {
          title: '课程类型',
          dataIndex: 'KHKCLX',
          key: 'KHKCLX',
          align: 'center',
          render: (test: any) => {
            return test?.KCTAG;
          },
        },
        {
          title: '课程来源',
          dataIndex: 'KHJYJG',
          key: 'KHJYJG',
          align: 'center',
          render: (test:any,record:any) =>{
           return  record.SSJGLX?record?.SSJGLX:'-'
          }
          
      },
        // {
        //     title: '所属学校',
        //     dataIndex: 'XXJBSJ',
        //     key: 'XXJBSJ',
        //     align: 'center',
        //      render:(test:any,record: any)=>{
        //          return record.XXJBSJ ? record?.XXJBSJ.XXMC : '—'
        //         }
    
        // },
      
        {
          title: '课程评分',
          dataIndex: 'PJFS',
          key: 'PJFS',
          align: 'center',
          width: 200,
          render: (text:any) => <Rate count={5} defaultValue={text} disabled={true} />,
        },
       
        {
          title: '操作',
          dataIndex: 'XSXM',
          key: 'XSXM',
          align: 'center',
          render: (_, record) => (
            <>
              <Link
                to={{
                  pathname: '/query/appraise/class',
                  state: {
                    type: 'detail',
                    data: record,
                    idData:id
                  },
                }}
              >
                详情
              </Link>
            </>
          ),
        },
      ];
    return(
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
          返回上一页1
        </Button>
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
        </>
        


    )
}
export default Course