/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 09:22:33
 * @LastEditTime: 2021-08-28 15:39:40
 * @LastEditors: Sissle Lynn
 */
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
import { Link, useModel, history } from 'umi';

import styles from './index.less';
import { TableListParams } from '@/constant';
import { getKHJSSJ } from '@/services/after-class-pxjg/khjssj';
import { Button, Divider } from 'antd';


const TeacherManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
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
      title: '姓名',
      dataIndex: 'XM',
      key: 'XM',
      align: 'center',
      width: 120,
      ellipsis: true,
    },
    {
      title: '性别',
      dataIndex: 'XB',
      key: 'XB',
      align: 'center',
      width: 90,
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 180,
    },
    {
      title: '电子信箱',
      key: 'DZXX',
      dataIndex: 'DZXX',
      align: 'center',
      width: 110,
      ellipsis: true,
    },
    {
      title: '教龄（月）',
      key: 'JL',
      dataIndex: 'JL',
      align: 'center',
      width: 110,
      ellipsis: true,
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
            pathname: '/teachingStaff/teacherManagement/detail',
            state: {
              type: 'detail',
              data: record
            }
          }}>教师详情</Link>
          <Divider type='vertical' />
          <Link to={{
            pathname: '/teachingStaff/teacherManagement/detail',
            state: {
              type: 'edit',
              data: record
            }
          }}>编辑</Link>
          <Divider type='vertical' />
          <a>删除</a>
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
      request={
        async (
          params: any & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort,
          filter,
        ): Promise<Partial<RequestData<any>>> => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          const opts: TableListParams = {
            ...params,
            sorter: sort && Object.keys(sort).length ? sort : undefined,
            filter,
          };
          const res = await getKHJSSJ({ JGId: currentUser?.jgId, page: 0, pageSize: 0 }, opts);
          if (res.status === 'ok') {
            return {
              data: res.data?.rows,
              total: res.data?.count,
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
          placeholder: '教师名称'
        }
      }}
      toolBarRender={() => [
        <Button key="button" type="primary" onClick={() => history.push('/teachingStaff/teacherManagement/detail', { type: 'newAdd' })}>
          新建
        </Button>
      ]}
      rowKey="id"
      dateFormatter="string"
    />
  );
};

export default TeacherManagement;
