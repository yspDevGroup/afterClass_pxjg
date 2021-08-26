/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-26 19:52:52
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { Link } from 'umi';

import { schoolList } from '../mock';
import styles from './index.less';
import { Divider } from 'antd';

const SchoolManagement = () => {
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center',
    },
    {
      title: '学校名称',
      dataIndex: 'XXMC',
      key: 'XXMC',
      align: 'center',
      width: 300,
      ellipsis: true,
    },
    {
      title: '所属区域',
      dataIndex: 'SSQY',
      key: 'SSQY',
      align: 'center',
    },
    {
      title: '学段',
      key: 'XD',
      dataIndex: 'XD',
      align: 'center',
      valueType: 'select',
      filters: true,
      onFilter: true,
      valueEnum: {
        全学段: { text: '全学段' },
        学前: { text: '学前' },
        小学: { text: '小学' },
        初中: { text: '初中' },
        高中: { text: '高中' },
      },
      width: 150,
    },
    {
      title: '联系人',
      key: 'LXR',
      dataIndex: 'LXR',
      align: 'center',
      width: 110,
      render: (_, record) => record.XXJBSJ?.LXR,
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 180,
      render: (_, record) => record.XXJBSJ?.LXDH,
    },
    {
      title: '课程数量',
      key: 'KCXX',
      dataIndex: 'KCXX',
      align: 'center',
      render: (_, record) => {
        return <div>{record.KCXX?.length}</div>
      }
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 200,
      align: 'center',
      render: (_, record) => (
        <>
          <Link to={{
            pathname: '/businessManagement/schoolManagement/detail',
            state: {
              type: 'school',
              data: record
            }
          }}>学校详情</Link>
          <Divider type='vertical' />
          <Link to={{
            pathname: '/businessManagement/schoolManagement/detail',
            state: {
              type: 'course',
              data: record
            }
          }}>课程详情</Link>
        </>
      )
    }
  ];

  return (
    <ProTable<any>
      columns={columns}
      className={styles.schoolTable}
      actionRef={actionRef}
      search={false}
      dataSource={schoolList}
      options={{
        setting: false,
        fullScreen: false,
        density: false,
        reload: false,
        search: {
          placeholder: '学校名称'
        }
      }}
      rowKey="id"
      dateFormatter="string"
    />
  );
};

export default SchoolManagement;
