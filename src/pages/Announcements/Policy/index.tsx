/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-31 10:08:34
 * @LastEditTime: 2021-09-01 11:11:19
 * @LastEditors: wsl
 */
import React, { useState, useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Link, useModel } from 'umi';
import type { TableListItem } from '../data';
import styles from '../index.module.less';
import { getJYJGTZGG, updateJYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';

const TableList = () => {
  const [dataSource, setDataSource] = useState<API.JYJGTZGG[]>();
  const actionRef = useRef<ActionType>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { jgId } = currentUser!;

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '标题',
      dataIndex: 'BT',
      key: 'BT',
      ellipsis: true,
      align: 'center'
    },
    {
      title: '副标题',
      dataIndex: 'FBT',
      key: 'FBT',
      ellipsis: true,
      align: 'center',
      search: false
    },

    {
      title: '作者',
      dataIndex: 'ZZ',
      key: 'ZZ',
      width: '9em',
      align: 'center',
      search: false
    },
    {
      title: '来源',
      dataIndex: 'LY',
      key: 'LY',
      width: '9em',
      align: 'center',
      search: false
    },
    {
      title: '关键词',
      dataIndex: 'GJC',
      key: 'GJC',
      width: '9em',
      align: 'center',
      ellipsis: true,
      search: false
    },
    {
      title: '发布时间',
      dataIndex: 'RQ',
      key: 'RQ',
      width: '12em',
      valueType: 'dateTime',
      hideInForm: true,
      align: 'center',
      search: false
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      key: 'option',
      width: '15em',
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
        headerTitle="政策列表"
        actionRef={actionRef}
        className={styles.proTableStyles}
        rowKey="id"
        request={async (params, sorter, filter) => {
          const resgetKHJYJG = await KHJYJG({ id: jgId! });
          if (resgetKHJYJG.status === 'ok') {
            if (params.ZT || params.BT) {
              const resgetXXTZGG = await getJYJGTZGG({
                BT: params.BT,
                LX: 1,
                XZQHM: resgetKHJYJG.data.XZQHM,
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
                XZQHM: resgetKHJYJG.data.XZQHM,
                page: 0,
                pageSize: 0
              });
              if (resgetXXTZGG.status === 'ok') {
                setDataSource(resgetXXTZGG.data?.rows);
              }
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