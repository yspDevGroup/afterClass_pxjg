/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-09-07 19:52:51
 * @LastEditors: Sissle Lynn
 */
import React, { useRef, useState } from 'react';
import ProTable, { RequestData } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { Link, useModel } from 'umi';

import styles from './index.less';
import { Divider, Tag } from 'antd';
import { TableListParams } from '@/constant';
import { cooperateSchool } from '@/services/after-class-pxjg/khjyjg';
import { KHHZXYSJ } from '../data';
import EllipsisHint from '@/components/EllipsisHint';

const SchoolManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();
  const [activeKey, setActiveKey] = useState<string>('duration');

  const columns: ProColumns<KHHZXYSJ>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center'
    },
    {
      title: '学校名称',
      dataIndex: 'XXMC',
      key: 'XXMC',
      align: 'center',
      width: 160,
      ellipsis: true
    },
    // {
    //   title: '所属区域',
    //   dataIndex: 'SSQY',
    //   key: 'SSQY',
    //   align: 'center',
    //   width: 90,
    //   ellipsis: true,
    // },
    {
      title: '学段',
      key: 'XD',
      dataIndex: 'XD',
      align: 'center',
      width: 150,
      render: (_, record) => {
        const type = record.XD?.split(/,/g);
        return (
          <EllipsisHint
            width="100%"
            text={type?.map((item: any) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Tag color="#EFEFEF" style={{ color: '#333' }}>
                  {item}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '联系人',
      key: 'LXR',
      dataIndex: 'LXR',
      align: 'center',
      width: 80
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 140
    },
    {
      title: '课程数量',
      key: 'KHKCSQs',
      dataIndex: 'KHKCSQs',
      align: 'center',
      width: 80,
      render: (_, record) => {
        return <div>{record.KHKCSQs?.length}</div>;
      }
    },
    {
      title: '操作',
      valueType: 'option',
      width: 180,
      align: 'center',
      render: (_, record) => (
        <>
          <Link
            to={{
              pathname: '/businessManagement/schoolManagement/detail',
              state: {
                type: 'school',
                data: record
              }
            }}
          >
            学校详情
          </Link>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: '/businessManagement/schoolManagement/courseList',
              state: {
                type: 'course',
                data: {
                  type: 'list',
                  xxmc: record.XXMC,
                  xxid: record.id,
                  jgid: currentUser?.jgId
                }
              }
            }}
          >
            课程列表
          </Link>
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
      request={async (
        params: KHHZXYSJ & {
          pageSize?: number;
          current?: number;
          keyword?: string;
        },
        sort,
        filter
      ): Promise<Partial<RequestData<KHHZXYSJ>>> => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        const opts: TableListParams = {
          ...params,
          sorter: sort && Object.keys(sort).length ? sort : undefined,
          filter
        };
        let status = activeKey === 'duration' ? 0 : 1;
        const res = await cooperateSchool(
          { JGId: currentUser?.jgId, name: opts.keyword || '', type: status, page: 0, pageSize: 0 },
          opts
        );
        if (res.status === 'ok') {
          return {
            data: res.data?.rows,
            total: res.data.count,
            success: true
          };
        }
        return {};
      }}
      toolbar={{
        menu: {
          type: 'tab',
          activeKey,
          items: [
            {
              key: 'duration',
              label: <span>合作中学校</span>
            },
            {
              key: 'history',
              label: <span>历史学校</span>
            }
          ],
          onChange: (key) => {
            setActiveKey(key as string);
            actionRef.current?.reload();
          }
        }
      }}
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
      rowKey="id"
      dateFormatter="string"
    />
  );
};

SchoolManagement.wrappers = ['@/wrappers/auth'];

export default SchoolManagement;
