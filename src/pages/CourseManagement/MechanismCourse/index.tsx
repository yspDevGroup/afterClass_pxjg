/* eslint-disable max-params */
import React, { useEffect, useRef, useState } from 'react';
import { Space, Button, Tag, message, Popconfirm, Input } from 'antd';
import { history, useModel } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import ProTable, { ActionType } from '@ant-design/pro-table';
import classes from '../index.less';
import { getCourses } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { deleteKHKCSJ, updateKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { getTableWidth } from '@/utils';
import SearchLayout from '@/components/Search/Layout';

/**
 * 机构端-课程列表
 * @returns
 */
const { Search } = Input;
const MechanismCourse = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [curCourse, setCurCourse] = useState<string>();
  const [dataSource, setDataSource] = useState<any>();
  const actionRef = useRef<ActionType>();

  const getData = async () => {
    const res = await getCourses({
      JGId: currentUser?.jgId,
      KCMC: curCourse,
      page: 0,
      pageSize: 0
    });
    if (res.status === 'ok') {
      setDataSource(res.data.rows)
    }
  };

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
      fixed: 'left',
      align: 'center'
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      search: false,
      fixed: 'left',
      width: 160,
      ellipsis: true
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      width: 120,
      search: false,
      ellipsis: true,
      render: (_: any, record: any) => {
        const text = record?.KHKCLX;
        return text?.KCTAG || '-';
      }
    },
    {
      title: '适用年级',
      key: 'NJSJs',
      dataIndex: 'NJSJs',
      align: 'center',
      width: 160,
      ellipsis: true,
      render: (_: any, record: any) => {
        const text = record?.NJSJs;
        return (
          <EllipsisHint
            width="100%"
            text={
              text?.length &&
              text.map((item: any) => {
                return (
                  <Tag key={item.id} style={{ margin: '4px' }}>
                    {`${item.XD}${item.NJMC}`}
                  </Tag>
                );
              })
            }
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
      ellipsis: true,
      render: (_: any, record: any) => {
        const text = record?.KHKCJs;
        return (
          <EllipsisHint
            width="100%"
            text={
              text?.length &&
              text.map((item: any) => {
                const showWXName = item.JZGJBSJ.XM === '未知' && item.JZGJBSJ.WechatUserId;
                return (
                  <Tag key={item?.JZGJBSJId}>
                    {showWXName ? (
                      <WWOpenDataCom type="userName" openid={item.JZGJBSJ.WechatUserId} />
                    ) : (
                      item.JZGJBSJ.XM
                    )}
                  </Tag>
                );
              })
            }
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
      ellipsis: true,
      render: (_: any, record: any) => {
        switch (record?.KCZT) {
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
      width: 150,
      fixed: 'right',
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

  useEffect(() => {
    getData();
  }, [curCourse]);

  return (
    <div className={classes.proTable}>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        dataSource={dataSource}
        search={false}
        rowKey="id"
        dateFormatter="string"
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        headerTitle={
          <SearchLayout>
            <div>
              <label htmlFor='type'>课程名称：</label>
              <Search placeholder="搜索课程名称：" allowClear onSearch={(value: string) => {
                setCurCourse(value);
              }} />
            </div>
          </SearchLayout>
        }
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
          reload: false
        }}
      />
    </div>
  );
};

MechanismCourse.wrappers = ['@/wrappers/auth'];
export default MechanismCourse;
