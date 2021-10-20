import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Space, Tag, } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useModel } from 'umi';
import { cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
import styles from './index.less';
import EllipsisHint from '@/components/EllipsisHint';

const Order = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

   const columns: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      align: 'center',
      dataIndex: 'index',
      valueType: 'index',
      fixed:'left',
      width: 58
    },
    {
      title: '学校名称',
      dataIndex: 'XXMC',
      key: 'XXMC',
      align: 'center',
      fixed:'left',
      width: 130
    },
    {
      title: '所属学段',
      key: 'XD',
      dataIndex: 'XD',
      align: 'center',
      search: false,
      width: 120,
      render: (_: any,record: any) => {
        const text = record?.XD?.split(/,/g);
        return (
          <EllipsisHint
            width="100%"
            text={text?.length && text.map((item: any) => {
              return (
                <Tag key={item} style={{ margin: '4px' }}>
                  {item}
                </Tag>
              );
            })}
          />
        );
      }
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
      width: 150,
      search: false
    },
    {
      title: '合作课程数量',
      key: 'KHKCSQs',
      dataIndex: 'KHKCSQs',
      align: 'center',
      width: 100,
      search: false,
      render: (_: any,record: any) =>{
        return record?.KHKCSQs?.length
      }
    },
    {
      title: '操作',
      align: 'center',
      search: false,
      width: 100,
      fixed:'right',
      render: (_, record) => {
        return (
          <Space>
            <Link
              to={{
                pathname: '/query/order/classorder',
                state: record
              }}
            >
              课程订单
            </Link>
            {/* <Link
                  to={{
                    pathname:'/query/order/serviceorder',
                    state: record
                  }}
                >
                  服务订单
                </Link> */}

          </Space>
        );
      }
    }
  ];
  useEffect(() => {
    getSchool()
  }, [])
  const getSchool = async (name?: string) => {
    const res = await cooperateSchool({
      type: 0,
      JGId: currentUser?.jgId,
      page: 0,
      pageSize: 0,
      name
    })
    if (res.status === 'ok') {
      setDataSource(res.data?.rows)
    }
  }
  return (
    <div>
      <div>
        <ProTable
          toolbar={{
            onSearch: (value: string) => {
              getSchool(value)
            }
          }}
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1,
          }}
          scroll={{ x: 1000 }}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false,
            search: {
              placeholder: '学校名称',
              allowClear: true
            }
          }}
          search={false}
        />

      </div>

    </div>

  )
}
Order.wrappers = ['@/wrappers/auth'];
export default Order
