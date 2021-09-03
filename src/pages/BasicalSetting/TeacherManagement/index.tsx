/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 09:22:33
 * @LastEditTime: 2021-09-03 19:02:09
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
import { PlusOutlined } from '@ant-design/icons';
import { Link, useModel, history } from 'umi';

import styles from './index.less';
import { TableListParams } from '@/constant';
import { deleteKHJSSJ, getKHJSSJ } from '@/services/after-class-pxjg/khjssj';
import { Button, Divider, message, Popconfirm } from 'antd';


const TeacherManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();

  const handleConfirm = async (id: any) => {
    const res = await deleteKHJSSJ({ id });
    if (res.status === 'ok') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error(res.message);
    }
  };
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
            pathname: '/basicalSetting/teacherManagement/detail',
            state: {
              type: 'detail',
              data: record
            }
          }}>详情</Link>
          <Divider type='vertical' />
          <Link to={{
            pathname: '/basicalSetting/teacherManagement/detail',
            state: {
              type: 'edit',
              data: record
            }
          }}>编辑</Link>
          <Divider type='vertical' />
          <Popconfirm title={`确定要删除 “${record?.XM}” 数据吗?`} onConfirm={() => handleConfirm(record?.id)}>
            <a>删除</a>
          </Popconfirm>
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
          const res = await getKHJSSJ({ JGId: currentUser?.jgId, keyWord: opts.keyword, page: 0, pageSize: 0 }, opts);
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
          placeholder: '教师名称/联系电话',
          allowClear: true
        }
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      toolBarRender={() => [
        <Button key="button" type="primary" onClick={() => history.push('/basicalSetting/teacherManagement/detail', { type: 'newAdd' })}>
         <PlusOutlined /> 新建
        </Button>
      ]}
      rowKey="id"
      dateFormatter="string"
    />
  );
};

TeacherManagement.wrappers = ['@/wrappers/auth'];

export default TeacherManagement;