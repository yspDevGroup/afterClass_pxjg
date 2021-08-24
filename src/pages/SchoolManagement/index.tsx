/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-24 18:27:41
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import styles from './index.less';

const TermManagement = () => {
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<any>[] = [
    {
      title: '学年',
      dataIndex: 'XN',
      key: 'XN',
      align: 'center'
    },
    {
      title: '学期',
      dataIndex: 'XQ',
      key: 'XQ',
      align: 'center'
    },
    {
      title: '开始日期',
      key: 'KSRQ',
      dataIndex: 'KSRQ',
      align: 'center'
    },
    {
      title: '结束日期',
      key: 'JSRQ',
      dataIndex: 'JSRQ',
      align: 'center'
    }
  ];

  return (
    <ProTable<any>
      columns={columns}
      className={styles.termTable}
      actionRef={actionRef}
      search={false}
      options={{
        setting: false,
        fullScreen: false,
        density: false,
        reload: false
      }}
      rowKey="id"
      dateFormatter="string"
      toolBarRender={() => [
        <Button type="primary" key="add">
          新增
        </Button>
      ]}
    />
  );
};

export default TermManagement;
