/* eslint-disable max-params */
import React, { useEffect, useRef, useState } from 'react';
import { Space, Button, Tag, message, Popconfirm } from 'antd';
import { history, useModel } from 'umi';
import ProTable, { ActionType } from '@ant-design/pro-table';
import classes from '../index.less';
import { deleteKHJYJG, getCourses } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { updateKHKCSJ } from '@/services/after-class-pxjg/khkcsj';

/**
 * 机构端-课程列表
 * @returns
 */
const MechanismCourse = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const actionRef = useRef<ActionType>();
  const confirm = async (id: any) => {
    const res = await deleteKHJYJG({ id });
    if (res.status === 'ok') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error(res.message);
    }
  };
  const columns: any[] = [
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      search: false
    },
    {
      title: '适用年级',
      key: 'NJSJs',
      dataIndex: 'NJSJs',
      align: 'center',
      render: (text: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              return <Tag key={item.id}>{item.XD === '初中' ? `${item.NJMC}` : `${item.XD}${item.NJMC}`}</Tag>;
            })}
          />
        );
      }
    },
    {
      title: '代课老师',
      key: 'KHKCJs',
      dataIndex: 'KHKCJs',
      align: 'center',
      render: (text: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              return <Tag key={item.KHJSSJ.id}>{item.KHJSSJ.XM}</Tag>;
            })}
          />
        );
      }
    },
    {
      title: '课程状态',
      key: 'KCZT',
      dataIndex: 'KCZT',
      align: 'center',
      render: (text: any) => {
        switch (text) {
          case 1:
            return '已发布';
          case 2:
            return '已备案';
          default:
            return '待发布';
        }
      }
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text: any, record: any, index: any, action: any) => (
        <Space size="middle">
          <a
            onClick={() => {
              history.push({
                pathname: `/courseManagement/mechanismCourse/edit`,
                state: { ...record, type: 'info' }
              });
            }}
          >
            查看
          </a>
          {record.KCZT === 0 ? (
            <a
              onClick={async () => {
                const res = await updateKHKCSJ({ id: record?.id }, { KCZT: 1 });
                if (res.status === 'ok') {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error('操作失败');
                }
              }}
            >
              发布
            </a>
          ) : record.KCZT === 1 ? (
            <a
              onClick={async () => {
                const res = await updateKHKCSJ({ id: record?.id }, { KCZT: 0 });
                if (res.status === 'ok') {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error('操作失败');
                }
              }}
            >
              撤销
            </a>
          ) : (
            ''
          )}
          {record.KCZT === 0 ? (
            <>
              <a
                onClick={() => {
                  history.push({
                    pathname: `/courseManagement/mechanismCourse/edit`,
                    state: { ...record, type: 'edit' }
                  });
                }}
              >
                编辑
              </a>
              <Popconfirm title={`确定要删除 “${record?.KCMC}” 数据吗?`} onConfirm={() => confirm(record?.id)}>
                <a>删除</a>
              </Popconfirm>
            </>
          ) : (
            ''
          )}
        </Space>
      )
    }
  ];
  return (
    <div className={classes.proTable}>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        search={false}
        rowKey="id"
        dateFormatter="string"
        request={async (param = {}, sort, filter) => {
          const params = {
            ...sort,
            ...filter,
            page: param.current,
            pageSize: param.pageSize,
            JGId: currentUser?.jgId,
            KCMC: param.keyword
          };
          const res = await getCourses(params);
          if (res.status === 'ok') {
            return {
              data: res.data.rows,
              success: true,
              total: res.data.count
            };
          } else {
            return {
              data: [],
              success: false,
              total: 0
            };
          }
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/courseManagement/mechanismCourse/edit');
            }}
          >
            新增课程
          </Button>
        ]}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false,
          search: {
            placeholder: '课程名称'
          }
        }}
      />
    </div>
  );
};

export default MechanismCourse;
