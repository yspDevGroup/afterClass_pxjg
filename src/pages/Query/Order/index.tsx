import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Input, Space, Tag, } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useModel } from 'umi';
import { cooperateSchoolOrder } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { getTableWidth } from '@/utils';
import SearchLayout from '@/components/Search/Layout';

const { Search } = Input;
const Order = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [school, setSchool] = useState<string>();

  const columns: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      align: 'center',
      dataIndex: 'index',
      valueType: 'index',
      fixed: 'left',
      width: 58
    },
    {
      title: '学校名称',
      dataIndex: 'XXMC',
      key: 'XXMC',
      align: 'center',
      fixed: 'left',
      width: 130
    },
    {
      title: '所属学段',
      key: 'XD',
      dataIndex: 'XD',
      align: 'center',
      search: false,
      width: 120,
      render: (_: any, record: any) => {
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
      key: 'kcCount',
      dataIndex: 'kcCount',
      align: 'center',
      width: 100,
      search: false,
    },
    {
      title: '课程订单数量',
      key: 'ddCount',
      dataIndex: 'ddCount',
      align: 'center',
      width: 100,
      search: false,
    },
    {
      title: '操作',
      align: 'center',
      search: false,
      width: 100,
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space>
            <Link
              to={{
                pathname: '/query/order/classorder',
                state: {
                  xxId: record?.id,
                  XXMC: record?.XXMC,
                  jgId: currentUser?.jgId
                }
              }}
            >
              详情
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
    getSchool(school)
  }, [school])
  const getSchool = async (name?: string) => {
    const res = await cooperateSchoolOrder({
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
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1,
          }}
          scroll={{ x: getTableWidth(columns) }}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false,
          }}
          search={false}
          headerTitle={
            <SearchLayout>
              <div>
                <label htmlFor='kcname'>学校名称：</label>
                <Search placeholder="请输入" allowClear onSearch={(value: string) => {
                  setSchool(value);
                }} />
              </div>
            </SearchLayout>
          }
        />
      </div>

    </div>

  )
}
Order.wrappers = ['@/wrappers/auth'];
export default Order
