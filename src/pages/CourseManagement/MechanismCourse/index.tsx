/* eslint-disable max-params */
import React, { useEffect, useRef, useState } from 'react';
import { Space, Button, Tag, message, Popconfirm } from 'antd';
import { history, useModel } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import ProTable, { ActionType } from '@ant-design/pro-table';
import classes from '../index.less';
import { getCourses } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { deleteKHKCSJ, updateKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
import WWOpenDataCom from '@/components/WWOpenDataCom';

/**
 * 机构端-课程列表
 * @returns
 */
const MechanismCourse = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const actionRef = useRef<ActionType>();
  const confirm = async (id: any) => {
    const res = await deleteKHKCSJ({ id });
    if (res.status === 'ok') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error(res.message);
    }
  };
  const columns: any[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center'
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      search: false,
      width: 200
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      width: 120,
      search: false,
      render: (text: any) => {
        return text?.KCTAG || '-';
      }
    },
    {
      title: '适用年级',
      key: 'NJSJs',
      dataIndex: 'NJSJs',
      align: 'center',
      width: 160,
      render: (text: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              return (
                <Tag key={item.id} style={{ margin: '4px' }}>
                  {item.XD === '初中' ? `${item.NJMC}` : `${item.XD}${item.NJMC}`}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '任课教师',
      key: 'KHKCJs',
      dataIndex: 'KHKCJs',
      align: 'center',
      width: 130,
      render: (text: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              const showWXName = item.JZGJBSJ.XM === '未知' && item.JZGJBSJ.WechatUserId;
              return <Tag key={item?.JZGJBSJId}>{showWXName ? (<WWOpenDataCom type="userName" openid={item.JZGJBSJ.WechatUserId} />):(item.JZGJBSJ.XM)}</Tag>;
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
      width: 120,
      render: (text: any) => {
        switch (text) {
          case 1:
            return '已申报';
          case 2:
            return '已准入';
          default:
            return '待申报';
        }
      }
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      width: 230,
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
            详情
          </a>
          {record.KCZT === 0 ? (
            <a
              onClick={async () => {
                const res = await updateKHKCSJ({ id: record?.id }, { KCZT: 1 });
                if (res.status === 'ok') {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error(res.message || '操作失败');
                }
              }}
            >
              申报
            </a>
          ) : record.KCZT === 1 ? (
            <Popconfirm
              title={`确定要撤销 “${record?.KCMC}” 吗?`}
              onConfirm={async () => {
                const res = await updateKHKCSJ({ id: record?.id }, { KCZT: 0 });
                if (res.status === 'ok') {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error(res.message || '操作失败');
                }
              }}
            >
              <a>撤销</a>
            </Popconfirm>
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
        // eslint-disable-next-line react/no-unstable-nested-components
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/courseManagement/mechanismCourse/edit');
            }}
          >
            <PlusOutlined /> 新增课程
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

MechanismCourse.wrappers = ['@/wrappers/auth'];
export default MechanismCourse;
