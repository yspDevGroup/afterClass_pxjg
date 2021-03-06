/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2022-04-13 17:14:13
 * @LastEditors: Wu Zhan
 */
import React, { useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import { Button, Divider, Input, FormInstance, message, Modal, Tag } from 'antd';
import ProTable, { RequestData } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import OperationForm from '../components/OperationForm';
import { applyStatus, TableListParams } from '@/constant';

import styles from './index.less';
import { KHKCSQSJ } from '../data';
import { getKHKCSQ, updateKHKCSQ } from '@/services/after-class-pxjg/khkcsq';
import EllipsisHint from '@/components/EllipsisHint';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { getTableWidth } from '@/utils';

const { Search } = Input;
const CourseManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();
  // 设置模态框显示状态
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // 模态框的新增或编辑form定义
  const [form, setForm] = useState<FormInstance<any>>();
  const [recordId, setRecordId] = useState<string>();
  const [activeKey, setActiveKey] = useState<string>('audit');
  const [courseName, setCourseName] = useState<string>('');
  const [schoolName, setSchoolName] = useState<string>('');
  const handleSubmit = async () => {
    try {
      const values = await form?.validateFields();
      const { id, ...rest } = values;
      const result = await updateKHKCSQ({ id }, { ...rest, SQRId: currentUser?.UserId, SPR: currentUser?.username });
      if (result.status === 'ok') {
        message.success('审核操作成功');
        setModalVisible(false);
        actionRef.current?.reload();
      } else {
        message.error(result.message);
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  const changeList = (type: string, val: string) => {
    type === 'kc' ? setCourseName(val) : setSchoolName(val);
    actionRef.current?.reload();
  };
  const columns: ProColumns<KHKCSQSJ>[] = [
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
      dataIndex: 'KHKCSJ',
      key: 'KHKCSJ',
      align: 'center',
      width: 150,
      fixed: 'left',
      ellipsis: true,
      render: (_, record) => record.KHKCSJ?.KCMC
    },
    {
      title: '学校名称',
      key: 'XXJBSJ',
      dataIndex: 'XXJBSJ',
      align: 'center',
      width: 150,
      ellipsis: true,
      render: (_, record) => record.XXJBSJ?.XXMC
    },
    {
      title: '合作时间',
      key: 'YRSJ',
      dataIndex: 'YRSJ',
      align: 'center',
      width: 120,
      ellipsis: true,
      hideInTable: activeKey !== 'duration',
      render: (_, record) => record.updatedAt
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      width: 100,
      search: false,
      ellipsis: true,
      render: (_, record) => {
        return record.KHKCSJ?.KHKCLX?.KCTAG || '-';
      }
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
      align: 'center',
      width: 200,
      hideInTable: activeKey === 'audit',
      render: (_, record) => {
        const grade = record.KHKCSJ?.NJSJs;
        return (
          <EllipsisHint
            width="100%"
            text={grade?.map((item) => {
              return (
                <Tag key={item.id} style={{ color: '#333', margin: '4px' }}>
                  {item.NJMC}
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
      width: 80,
      hideInTable: activeKey !== 'audit',
      render: (_, record) => record.XXJBSJ?.LXR
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 120,
      hideInTable: activeKey !== 'audit',
      render: (_, record) => record.XXJBSJ?.LXDH
    },
    {
      title: '申请时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      align: 'center',
      hideInTable: activeKey !== 'audit',
      width: 180
    },
    {
      title: '任课教师',
      key: 'RKJS',
      dataIndex: 'RKJS',
      align: 'center',
      width: 150,
      hideInTable: activeKey !== 'duration',
      render: (_, record) => {
        const teacher = record.KHKCSJ?.KHKCJs;
        return (
          <EllipsisHint
            width="100%"
            text={teacher?.map((item: any) => {
              const showWXName = item?.JZGJBSJ?.XM === '未知' && item?.JZGJBSJ?.WechatUserId;
              return (
                <Tag key={item?.JZGJBSJId}>
                  {showWXName ? (
                    <WWOpenDataCom type="userName" openid={item?.JZGJBSJ?.WechatUserId} />
                  ) : (
                    item?.JZGJBSJ?.XM
                  )}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '操作人',
      key: 'SPR',
      dataIndex: 'SPR',
      hideInTable: true,
      align: 'center',
      width: 80
    },
    {
      title: '状态',
      key: 'ZT',
      dataIndex: 'ZT',
      hideInTable: activeKey !== 'history',
      align: 'center',
      width: 100,
      render: (_, record) => {
        return <span>{record.ZT ? applyStatus[record.ZT] : '-'}</span>;
      }
    },
    {
      title: '操作时间',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      align: 'center',
      hideInTable: activeKey !== 'history',
      width: 180
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      fixed: 'right',
      align: 'center',
      render: (_, record) => {
        return (
          <>
            <div>
              <Link
                to={{
                  pathname: '/businessManagement/courseManagement/detail',
                  state: {
                    type: 'school',
                    data: record.XXJBSJ
                  }
                }}
              >
                学校详情
              </Link>
              <Divider type="vertical" />
              {activeKey !== 'audit' ? (
                <>
                  <Link
                    to={{
                      pathname: '/courseManagement/mechanismCourse/edit',
                      state: {
                        ...record.KHKCSJ,
                        type: 'info'
                      }
                    }}
                  >
                    课程详情
                  </Link>
                  <Divider type="vertical" />
                  <Link
                    to={{
                      pathname: '/businessManagement/courseManagement/detail',
                      state: {
                        type: 'course',
                        data: {
                          type: 'detail',
                          xxid: record.XXJBSJId,
                          jgid: currentUser?.jgId,
                          kcid: record.KHKCSJ?.id,
                          xxmc: record.XXJBSJ?.XXMC
                        }
                      }
                    }}
                  >
                    班级详情
                  </Link>
                </>
              ) : (
                <a
                  onClick={() => {
                    setRecordId(record.id!);
                    setModalVisible(true);
                  }}
                >
                  确认合作
                </a>
              )}
            </div>
          </>
        );
      }
    }
  ];

  return (
    <div>
      <ProTable<KHKCSQSJ>
        columns={columns}
        className={styles.courseTable}
        actionRef={actionRef}
        search={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        request={async (
          params: KHKCSQSJ & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort,
          filter
        ): Promise<Partial<RequestData<KHKCSQSJ>>> => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          const opts: TableListParams = {
            ...params,
            sorter: sort && Object.keys(sort).length ? sort : undefined,
            filter
          };
          let status = activeKey === 'audit' ? [0] : activeKey === 'duration' ? [1] : [2, 3];
          const res = await getKHKCSQ(
            { JGId: currentUser?.jgId, ZT: status, KCMC: courseName, XXMC: schoolName, page: 0, pageSize: 0 },
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
                key: 'audit',
                label: <span>待处理申请</span>
              },
              {
                key: 'duration',
                label: <span>合作中课程</span>
              },
              {
                key: 'history',
                label: <span>历史课程</span>
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
          search: (
            <div>
              <Search
                name="KCMC"
                style={{ width: 200, marginRight: '16px' }}
                allowClear
                placeholder="课程名称"
                onSearch={(value: string) => changeList('kc', value)}
              />
              <Search
                name="XXMC"
                style={{ width: 200 }}
                allowClear
                placeholder="学校名称"
                onSearch={(value: string) => changeList('xx', value)}
              />
            </div>
          )
        }}
        rowKey="id"
        dateFormatter="string"
      />
      <Modal
        title="待处理申请"
        destroyOnClose
        width="35vw"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="submit" type="primary" onClick={handleSubmit}>
            确定
          </Button>,
          <Button key="back" onClick={() => setModalVisible(false)}>
            取消
          </Button>
        ]}
        style={{ maxHeight: '430px' }}
        centered
        maskClosable={false}
      >
        <OperationForm
          current={{
            id: recordId,
            ZT: '1'
          }}
          setForm={setForm}
        />
      </Modal>
    </div>
  );
};

CourseManagement.wrappers = ['@/wrappers/auth'];
export default CourseManagement;
