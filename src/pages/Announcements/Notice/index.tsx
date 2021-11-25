/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-09 17:41:43
 * @LastEditTime: 2021-09-08 17:10:01
 * @LastEditors: wsl
 */
import React, { useState, useRef, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Switch, message } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { history, useModel } from 'umi';
import Option from '../components/Option';
import type { TableListItem } from '../data';
import styles from '../index.module.less';
import moment from 'moment';
import { getKHJYTZGG, updateKHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';
import { getTableWidth } from '@/utils';

const Notice = () => {
  const [dataSource, setDataSource] = useState<API.JYJGTZGG[]>();
  const actionRef = useRef<ActionType>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '标题',
      dataIndex: 'BT',
      key: 'BT',
      ellipsis: true,
      align: 'center',
      fixed: 'left',
      width: 180
    },
    {
      title: '作者',
      dataIndex: 'ZZ',
      key: 'ZZ',
      ellipsis: true,
      align: 'center',
      width: 120,
      search: false
    },
    {
      title: '发布时间',
      dataIndex: 'RQ',
      key: 'RQ',
      valueType: 'dateTime',
      hideInForm: true,
      align: 'center',
      width: 160,
      search: false
    },
    {
      title: '发布状态',
      dataIndex: 'ZT',
      key: 'ZT',
      width: 120,
      align: 'center',
      valueEnum: {
        草稿: { text: '草稿', status: 'Default' },
        已发布: { text: '已发布', status: 'Success' }
      }
    },
    {
      title: '头条',
      dataIndex: 'SFTT',
      key: 'SFTT',
      defaultSortOrder: 'descend',
      search: false,
      align: 'center',
      width: 120,
      render: (text, record) => {
        return (
          <Switch
            key="SFTT"
            defaultChecked={!!text}
            size="small"
            onChange={async (checked: boolean) => {
              const data = {
                SFTT: checked === true ? 1 : 0
              };
              try {
                const resUpdateJYJGTZGG = await updateKHJYTZGG({ id: record.id }, data);
                if (resUpdateJYJGTZGG.status === 'ok') {
                  message.success('设置成功');
                  actionRef?.current?.reload();
                } else {
                  message.error('设置失败，请联系管理员或稍后再试。');
                }
              } catch (err) {
                message.error('设置失败，请联系管理员或稍后再试。');
              }
            }}
          />
        );
      }
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      key: 'option',
      width: 150,
      fixed: 'right',
      render: (_, record) => (
        <div className={styles.optionCol}>
          <Option
            id={record.id}
            ZT={record.ZT}
            record={record}
            refreshHandler={() => {
              if (actionRef.current) {
                actionRef?.current?.reload();
              }
            }}
          />
        </div>
      ),
      align: 'center'
    }
  ];

  return (
    <>
      <ProTable<any>
        headerTitle={<div style={{ fontWeight: 'bold' }}>通知列表</div>}
        actionRef={actionRef}
        className={styles.proTableStyles}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        toolBarRender={(_action) => [
          <Button
            key="xinjian"
            type="primary"
            onClick={() => {
              history.push('/announcements/notice/editArticle');
            }}
          >
            <PlusOutlined /> 新建
          </Button>
        ]}
        request={async (params, sorter, filter) => {
          if (params.ZT || params.BT) {
            const resgetXXTZGG = await getKHJYTZGG({
              KHJYJGId: currentUser?.jgId,
              BT: params.BT,
              ZT: params.ZT ? [params.ZT] : ['已发布', '草稿'],
              LX: 0,
              page: 0,
              pageSize: 0
            });
            if (resgetXXTZGG.status === 'ok') {
              setDataSource(resgetXXTZGG.data?.rows);
            }
          } else {
            const resgetXXTZGG = await getKHJYTZGG({
              KHJYJGId: currentUser?.jgId,
              BT: '',
              ZT: ['已发布', '草稿'],
              LX: 0,
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

Notice.wrappers = ['@/wrappers/auth'];
export default Notice;
