import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message,Space ,Button} from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import {getCourseSchools } from '@/services/after-class-pxjg/khjyjg';
import { LeftOutlined, } from '@ant-design/icons';
import styles from '../index.less'
const { Option } = Select;
const  Appraise=(props:any)=>{
const  {id} = props.location.state.data
const [SchoolList, setSchoolList] = useState<any>([]);
const [dataSource, setDataSource] = useState<any>([]);
const [school,setschool] = useState<any>([]);
const { initialState } = useModel('@@initialState');
const { currentUser } = initialState || {};

 
  
const columns: ProColumns<any>[] | undefined = [
        {
          title: '序号',
          align: 'center',
          dataIndex: 'index',
          valueType: 'index'
        },
        {
          title: '学校名称',
          dataIndex: 'XXMC',
          key: 'XXMC',
          align: 'center'
        },
        {
          title: '所属学段',
          key: 'XD',
          dataIndex: 'XD',
          align: 'center',
          search: false
        },
        {
          title: '联系人',
          key: 'LXR',
          dataIndex: 'LXR',
          align: 'center',
          width: 110,
          search: false
        },
        {
          title: '联系电话',
          key: 'LXDH',
          dataIndex: 'LXDH',
          align: 'center',
          width: 180,
          search: false
        },
        // {
        //   title: '课程数量',
        //   key: 'KHKCSQs',
        //   dataIndex: 'KHKCSQs',
        //   align: 'center',
        //   width: 90,
        //   search: false,
        //   render: (text:any) =>text.length
        // },
        {
          title: '查看学校班级',
          align: 'center',
          search: false,
          render: (_, record) => {
            return (
              <Space>
                <Link
                  to={{
                    pathname: '/query/Appraise/class',
                    state:{KHKCSJId:id,data:record},
                   
                  }}
                >
                  详情
                </Link>
               
              </Space>
            );
          }
        }
      ];
      useEffect(()=>{
        (async()=>{
          const res= await getCourseSchools({
            KHKCSJId:id
          })
         
          
          setDataSource(res.data?.rows)
       })()
      },[])
    return(
        <div>
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
             <div >
                <span>
                学校名称：
                    <Select
                        value={school}
                        style={{ width: 200 }}
                        onChange={(value: string) => {
                            //更新多选框的值
                            //   setCurXNXQId(value);
                        }}
                    >
                        {SchoolList?.map((item: any) => {
                            return (
                                <Option key={item.value} value={item.value}>
                                    {item.text}
                                </Option>
                            );
                        })}
                    </Select>
                </span>
            </div>
            <div className={styles.Tables}>
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
       


            

        </div>

    )
}
Appraise.wrappers = ['@/wrappers/auth'];
export default  Appraise