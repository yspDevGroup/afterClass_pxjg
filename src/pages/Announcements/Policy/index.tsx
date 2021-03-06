/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-31 10:08:34
 * @LastEditTime: 2021-09-08 19:01:46
 * @LastEditors: wsl
 */
import React, { useState, useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Link, useModel } from 'umi';
import type { TableListItem } from '../data';
import styles from '../index.module.less';
import { getJYJGTZGG, updateJYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';
import { getTableWidth } from '@/utils';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';

const TableList = () => {
  const [dataSource, setDataSource] = useState<API.JYJGTZGG[]>();
  const actionRef = useRef<ActionType>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { jgId } = currentUser!;

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center',
    },
    {
      title: '标题',
      dataIndex: 'BT',
      key: 'BT',
      ellipsis: true,
      align: 'center',
      fixed: 'left',
      width: 180,
    },
    {
      title: '副标题',
      dataIndex: 'FBT',
      key: 'FBT',
      ellipsis: true,
      align: 'center',
      search: false,
      width: 120,
    },
    {
      title: '作者',
      dataIndex: 'ZZ',
      key: 'ZZ',
      align: 'center',
      width: 100,
      ellipsis: true,
      search: false
    },
    {
      title: '来源',
      dataIndex: 'LY',
      key: 'LY',
      align: 'center',
      width: 120,
      search: false,
      ellipsis: true,
      render: (text, record) => {
        return <>{record.JYJGSJ?.BMMC || ''}</>;
      },
    },
    {
      title: '关键词',
      dataIndex: 'GJC',
      key: 'GJC',
      width: 120,
      align: 'center',
      ellipsis: true,
      search: false,
    },
    {
      title: '发布时间',
      dataIndex: 'RQ',
      key: 'RQ',
      width: 160,
      valueType: 'dateTime',
      hideInForm: true,
      align: 'center',
      search: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      key: 'option',
      width: 120,
      fixed:'right',
      align: 'center',
      render: (text, record, action) => {
        return (
          <Link
            key="ck"
            to={{
              pathname: '/announcements/policy/articleDetails',
              state: record
            }}
          >
            查看
          </Link>
        );
      }
    }
  ];

  return (
    <>
      <ProTable<any>
        headerTitle={<div style={{ fontWeight: 'bold' }}>政策列表</div>}
        actionRef={actionRef}
        className={styles.proTableStyles}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1,
        }}
        scroll={{ x: getTableWidth(columns) }}
        request={async (params, sorter, filter) => {
          if (params.ZT || params.BT) {
            const resgetXXTZGG = await getJYJGTZGG({
              BT: params.BT,
              LX: 1,
              XZQHM: currentUser?.XZQHM,
              ZT: params.ZT ? [params.ZT] : ['已发布'],
              page: 0,
              pageSize: 0
            });
            if (resgetXXTZGG.status === 'ok') {
              setDataSource(resgetXXTZGG.data?.rows);
            }
          } else {
            const resgetXXTZGG = await getJYJGTZGG({
              BT: '',
              LX: 1,
              ZT: ['已发布'],
              XZQHM: currentUser?.XZQHM,
              page: 0,
              pageSize: 0
            });
            if (resgetXXTZGG.status === 'ok') {
              setDataSource(resgetXXTZGG.data?.rows);
            }
          }

          return '';
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

TableList.wrappers = ['@/wrappers/auth'];
export default TableList;
