/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-27 09:44:07
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import ProTable, { RequestData } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { Link, useModel } from 'umi';

import { schoolList } from '../mock';
import styles from './index.less';
import { Divider } from 'antd';
import { TableListParams } from '@/constant';
import { cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
import { KHHZXYSJ } from '../data';

const SchoolManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<KHHZXYSJ>[] = [
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
      width: 90,
      ellipsis: true,
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
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 180,
    },
    {
      title: '课程数量',
      key: 'KHKCSQs',
      dataIndex: 'KHKCSQs',
      align: 'center',
      width: 90,
      render: (_, record) => {
        return <div>{record.KHKCSQs?.length}</div>
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
              data: record.KHKCSQs
            }
          }}>课程详情</Link>
        </>
      )
    }
  ];

  return (
    <ProTable<KHHZXYSJ>
      columns={columns}
      className={styles.schoolTable}
      actionRef={actionRef}
      search={false}
      request={
        async (
          params: KHHZXYSJ & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort,
          filter,
        ): Promise<Partial<RequestData<KHHZXYSJ>>> => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          const opts: TableListParams = {
            ...params,
            sorter: sort && Object.keys(sort).length ? sort : undefined,
            filter,
          };
          const res = await cooperateSchool({ JGId: currentUser?.jgId, page: 0, pageSize: 0 }, opts);
          if (res.status === 'ok') {
            return {
              data: res.data?.rows,
              total: res.data.count,
              success: true,
            };
          }
          return {}
        }}
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
