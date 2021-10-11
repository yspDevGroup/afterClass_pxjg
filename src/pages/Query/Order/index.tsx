import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message,Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import {cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
const { Option } = Select;
const Order=()=>{
  const [SchoolList, setSchoolList] = useState<any>([]);
  const [dataSource, setDataSource] = useState<any>([]);
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
          title: '查看详情',
          align: 'center',
          search: false,
          render: (_, record) => {
            return (
              <Space>
                <Link
                  to={{
                    pathname:'/query/order/classorder',
                    state: record
                  }}
                >
                  课程订单
                </Link>
                <Link
                  to={{
                    pathname:'/query/order/serviceorder',
                    state: record
                  }}
                >
                  服务订单
                </Link>
               
              </Space>
            );
          }
        }
      ];
      useEffect(()=>{
        (async()=>{
          const res= await cooperateSchool({
            type:0,
            JGId:currentUser?.jgId,
            page: 0,
            pageSize: 0
          })
          if(res.status==='ok'){
            
            setDataSource(res.data?.rows)
           
          }
        })()
      },[])
    return(
        <div>
             <div >
                <span>
                学校名称：
                    <Select
                        // value={curXNXQId}
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

    )
}
Order.wrappers = ['@/wrappers/auth'];
export default Order