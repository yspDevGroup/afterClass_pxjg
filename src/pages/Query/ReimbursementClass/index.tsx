import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Popconfirm, Divider, message, Space, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import { computedDataOfSchool, cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
import styles from './index.less';
import EllipsisHint from '@/components/EllipsisHint';
import { getTableWidth } from '@/utils';

const { Option } = Select;
const ReimbursementClass = () => {
  const [school, setSchool] = useState<string>();
  const [dataSource, setDataSource] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
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
            text={
              text?.length &&
              text.map((item: any) => {
                return (
                  <Tag key={item} style={{ margin: '4px' }}>
                    {item}
                  </Tag>
                );
              })
            }
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
      title: '退课人次',
      key: 'td_count',
      dataIndex: 'td_count',
      align: 'center',
      width: 100,
      search: false
    },
    {
      title: '退课总课时',
      key: 'td_all_KSS',
      dataIndex: 'td_all_KSS',
      align: 'center',
      width: 100,
      search: false
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
  const getSchool = async () => {
    const res = await computedDataOfSchool({
      JGId: currentUser?.jgId,
      page: 0,
      pageSize: 0,
      name: school
    });
    if (res.status === 'ok') {
      setDataSource(res.data?.rows);
    }
  };
  useEffect(() => {
    getSchool();
  }, [school]);
  return (
    <div className={styles.Tables}>
      <ProTable
        toolbar={{
          onSearch: (value: string) => {
            setSchool(value);
          }
        }}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        dataSource={dataSource}
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
  );
};
ReimbursementClass.wrappers = ['@/wrappers/auth'];
export default ReimbursementClass;
