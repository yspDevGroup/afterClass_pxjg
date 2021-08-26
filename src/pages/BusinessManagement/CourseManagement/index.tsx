/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-26 19:26:13
 * @LastEditors: Sissle Lynn
 */
import React, { useRef, useState } from 'react';
import { Link, useModel } from 'umi';
import { Button, Divider, FormInstance, message, Modal, Tag } from 'antd';
import ProTable, { RequestData } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import OperationForm from '../components/operationForm';
import { TableListParams } from '@/constant';

import styles from './index.less';
import { KHKCSQSJ } from '../data';
import { getKHKCSQ, updateKHKCSQ } from '@/services/after-class-pxjg/khkcsq';

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
  const handleSubmit = async () => {
    try {
      const values = await form?.validateFields();
      const { id, ...rest } = values;
      const result = await updateKHKCSQ({ id }, { ...rest });
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
  const columns: ProColumns<KHKCSQSJ>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center',
    },
    {
      title: '申请学校',
      key: 'XXJBSJ',
      dataIndex: 'XXJBSJ',
      align: 'center',
      width: 220,
      hideInTable: activeKey !== 'audit',
      render: (_, record) => record.XXJBSJ?.XXMC,
    },
    {
      title: '课程名称',
      dataIndex: 'KHKCSJ',
      key: 'KHKCSJ',
      align: 'center',
      width: 200,
      ellipsis: true,
      render: (_, record) => record.KHKCSJ?.KCMC,
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
      align: 'center',
      ellipsis: true,
      render: (_, record) => {
        const grade = record.KHKCSJ?.NJSJs;
        return <div>
          {grade?.map((item, index) => {
            return <span key={item.id}>
              {index > 2 ? '' : index === 2 ?
                <Tag key='more' color="#EFEFEF" style={{ color: '#333' }}>...</Tag> :
                <Tag color="#EFEFEF" style={{ color: '#333' }}>{item.NJMC}</Tag>}
            </span>
          })}
        </div>
      },
    },
    {
      title: '引入学校',
      key: 'YRXY',
      dataIndex: 'YRXY',
      align: 'center',
      hideInTable: activeKey === 'audit',
    },
    {
      title: '联系人',
      key: 'LXR',
      dataIndex: 'LXR',
      align: 'center',
      width: 110,
      hideInTable: activeKey !== 'audit',
      render: (_, record) => record.XXJBSJ?.LXR,
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 180,
      hideInTable: activeKey !== 'audit',
      render: (_, record) => record.XXJBSJ?.LXDH,
    },
    {
      title: '申请时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      align: 'center',
      hideInTable: activeKey !== 'audit',
      width: 200
    },
    {
      title: '操作人',
      key: 'SPR',
      dataIndex: 'SPR',
      hideInTable: activeKey === 'audit',
      align: 'center',
    },
    {
      title: '状态',
      key: 'ZT',
      dataIndex: 'ZT',
      hideInTable: activeKey !== 'history',
      align: 'center',
      width: 90
    },
    {
      title: '操作',
      valueType: 'option',
      width: 180,
      align: 'center',
      render: (_, record) => {
        return <>{activeKey !== 'audit' ? <Link to={{
          pathname: '/businessManagement/courseManagement/detail',
          state: record.XXJBSJ
        }}>详情</Link> :
          <div>
            <Link to={{
              pathname: '/businessManagement/courseManagement/detail',
              state: record.XXJBSJ
            }}>学校详情</Link>
            <Divider type='vertical' />
            <a onClick={() => {
              setRecordId(record.id!);
              setModalVisible(true);
            }}>审核</a>
          </div>}
        </>
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
        request={
          async (
            params: KHKCSQSJ & {
              pageSize?: number;
              current?: number;
              keyword?: string;
            },
            sort,
            filter,
          ): Promise<Partial<RequestData<KHKCSQSJ>>> => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            const opts: TableListParams = {
              ...params,
              sorter: sort && Object.keys(sort).length ? sort : undefined,
              filter,
            };
            const res = await getKHKCSQ({ JGId: currentUser?.jgId, page: 0, pageSize: 0 }, opts);
            if (res.status === 'ok') {
              let data = res.data?.rows;
              let curData;
              switch (activeKey) {
                case 'audit':
                  curData = data?.filter((item: KHKCSQSJ) => item.ZT === '申请中');
                  break;
                case 'duration':
                  curData = data?.filter((item: KHKCSQSJ) => item.ZT === '服务中');
                  break;
                case 'history':
                  curData = data?.filter((item: KHKCSQSJ) => item.ZT !== '服务中' && item.ZT !== '申请中');
                  break;
              };
              return {
                data: curData,
                total: res.data.count,
                success: true,
              };
            }
            return {}
          }}
        // dataSource={activeKey === 'audit' ? applyCourseList : courseList}
        toolbar={{
          menu: {
            type: 'tab',
            activeKey,
            items: [
              {
                key: 'audit',
                label: <span>待处理申请</span>,
              },
              {
                key: 'duration',
                label: <span>合作中课程</span>,
              },
              {
                key: 'history',
                label: <span>历史课程</span>,
              },
            ],
            onChange: (key) => {
              setActiveKey(key as string);
              actionRef.current?.reload();
            },
          },
        }}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false,
        }}
        rowKey="id"
        dateFormatter="string"
      />
      <Modal
        title='待处理申请'
        destroyOnClose
        width="35vw"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit} >
            确定
          </Button>
        ]}
        style={{ maxHeight: '430px' }}
        centered
        maskClosable={false}
      >
        <OperationForm
          current={{
            id: recordId,
            ZT: '已通过'
          }}
          setForm={setForm}
        />
      </Modal>
    </div>
  );
};

export default CourseManagement;
