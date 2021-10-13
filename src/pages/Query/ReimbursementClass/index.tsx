import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import { cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
import styles from './index.less'
const { Option } = Select;
const ReimbursementClass = () => {
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
      title: '操作',
      align: 'center',
      search: false,
      render: (_, record) => {
        return (
          <Space>
            <Link
              to={{
                pathname: '/query/reimbursementClass/details',
                state: record
              }}
            >
              详情
            </Link>

          </Space>
        );
      }
    }
  ];
  useEffect(() => {
    (async () => {
      const res = await cooperateSchool({
        type: 0,
        JGId: currentUser?.jgId,
        page: 0,
        pageSize: 0
      })
      if (res.status === 'ok') {

        setDataSource(res.data?.rows)

      }
    })()
  }, [])
  return (
    <>
      <div style={{ padding: '16px' }}>
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





    </>

  )
}
ReimbursementClass.wrappers = ['@/wrappers/auth'];
export default ReimbursementClass