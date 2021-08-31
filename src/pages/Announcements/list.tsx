/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-09 17:41:43
 * @LastEditTime: 2021-08-31 10:16:20
 * @LastEditors: wsl
 */
import React, { useState, useRef, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Switch, message } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { history } from 'umi';
import Option from './components/Option';
import type { TableListItem } from './data';
import styles from './index.module.less';
import { defImg } from './data';
import moment from 'moment';
import { getKHJYTZGG, updateKHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';

const TableList: React.FC = () => {
  const [dataSource, setDataSource] = useState<API.JYJGTZGG[]>();
  const actionRef = useRef<ActionType>();

  const ongetXXTZGG = async () => {
    const resgetXXTZGG = await getKHJYTZGG({
      BT: '',
      LX: 0,
      ZT: ['已发布', '草稿'],
      /** 页数 */
      page: 0,
      /** 每页记录数 */
      pageSize: 0
    });
    if (resgetXXTZGG.status === 'ok') {
      setDataSource(resgetXXTZGG.data?.rows);
    }
  };
  useEffect(() => {
    ongetXXTZGG();
  }, []);
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '标题',
      dataIndex: 'BT',
      key: 'BT',
      ellipsis: true,
      align: 'center'
    },
    {
      title: '发布时间',
      dataIndex: 'RQ',
      key: 'RQ',
      valueType: 'dateTime',
      hideInForm: true,
      align: 'center',
      search: false
    },
    {
      title: '发布状态',
      dataIndex: 'ZT',
      key: 'ZT',
      width: '10em',
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
      width: '6em',
      render: (text, record) => {
        return (
          <Switch
            key="SFTT"
            defaultChecked={!!text}
            size="small"
            disabled={record.ZT === '已发布' ? true : false}
            onChange={async (checked: boolean) => {
              const data = {
                ...record,
                RQ: moment(record.RQ).format(),
                SFTT: checked === true ? 1 : 0
              };
              try {
                const resUpdateJYJGTZGG = await updateKHJYTZGG({ id: record.id }, data);
                if (resUpdateJYJGTZGG.status === 'ok') {
                  message.success('设置成功');
                  ongetXXTZGG();
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
      title: '推荐',
      dataIndex: 'SFTJ',
      key: 'SFTJ',
      search: false,
      align: 'center',
      width: '6em',
      render: (text, record) => {
        return (
          <Switch
            key="SFTJ"
            defaultChecked={!!text}
            size="small"
            disabled={record.ZT === '已发布' ? true : false}
            onChange={async (checked: boolean) => {
              const data = {
                ...record,
                RQ: moment(record.RQ).format(),
                SFTJ: checked === true ? 1 : 0
              };
              try {
                const resUpdateJYJGTZGG = await updateKHJYTZGG({ id: record.id }, data);
                if (resUpdateJYJGTZGG.status === 'ok') {
                  message.success('设置成功');
                  ongetXXTZGG();
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
      width: '15em',
      render: (_, record) => (
        <div className={styles.optionCol}>
          <Option
            id={record.id}
            ZT={record.ZT}
            record={record}
            ongetXXTZGG={ongetXXTZGG}
            refreshHandler={() => {
              if (actionRef.current) {
                actionRef.current.reload();
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
        headerTitle="公告列表"
        actionRef={actionRef}
        className={styles.proTableStyles}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button
            key="xinjian"
            type="primary"
            onClick={() => {
              history.push('/announcements/editArticle');
            }}
          >
            <PlusOutlined /> 新建
          </Button>
        ]}
        request={async (params, sorter, filter) => {
          if (params.ZT || params.BT) {
            const resgetXXTZGG = await getKHJYTZGG({
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

export default TableList;
