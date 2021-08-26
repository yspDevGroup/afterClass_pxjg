/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-26 09:28:04
 * @LastEditors: Sissle Lynn
 */
import React, { useRef, useState } from 'react';
import ProTable from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { Link } from 'umi';

import { applyCourseList, courseList } from '../mock';
import styles from './index.less';
import Tag from 'antd/es/tag';
import { Button, Divider, Modal } from 'antd';
import OperationForm from './components/operationForm';

const CourseManagement = () => {
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();
  // 设置模态框显示状态
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>('audit');

  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center',
    },
    {
      title: '申请学校',
      key: 'YRXY',
      dataIndex: 'YRXY',
      align: 'center',
      hideInTable: activeKey === 'all',
      render: (_, record) => {
        const school = record.YRXY?.split(/,/g);
        return <div>
          {school?.map((item: string, index: number) => item)}
        </div>
      },
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      width: 200,
      ellipsis: true,
    },
    {
      title: '课程类型',
      dataIndex: 'KCLX',
      key: 'KCLX',
      align: 'center',
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
      align: 'center',
      ellipsis: true,
      render: (_, record) => {
        const grade = record.SYNJ?.split(/,/g);
        return <div>
          {grade?.map((item: string, index: number) => {
            return <span key={item}>
              {index > 2 ? '' : index === 2 ?
                <Tag key='more' color="#EFEFEF" style={{ color: '#333' }}>...</Tag> : <Tag color="#EFEFEF" style={{ color: '#333' }}>{item}</Tag>}
            </span>
          }
          )}
        </div>
      },
    },
    {
      title: '引入学校',
      key: 'YRXY',
      dataIndex: 'YRXY',
      align: 'center',
      hideInTable: activeKey === 'audit',
      render: (_, record) => {
        const school = record.YRXY?.split(/,/g);
        return <div>
          {school?.map((item: string, index: number) => {
            return <span key={item}>
              {index > 1 ? '' : index === 1 ? <Tag key='more'>...</Tag> : <Tag>{item}</Tag>}
            </span>
          })}
        </div>
      },
    },
    {
      title: '申请时间',
      key: 'SQSJ',
      dataIndex: 'SQSJ',
      hideInTable: activeKey === 'all',
      align: 'center',
      width: '100'
    },
    {
      title: '操作人',
      key: 'CZR',
      dataIndex: 'CZR',
      hideInTable: activeKey === 'audit',
      align: 'center',
    },
    {
      title: '最新操作时间',
      key: 'CZSJ',
      dataIndex: 'CZSJ',
      hideInTable: activeKey === 'audit',
      align: 'center',
      width: '100'
    },
    {
      title: '操作',
      valueType: 'option',
      width: 110,
      align: 'center',
      render: (_, record) => {
        return <>{activeKey === 'all' ? <Link to={{
          pathname: '/businessManagement/schoolManagement/schoolInfo',
          state: record
        }}>详情</Link> :
          <div>
            <Link to={{
              pathname: '/businessManagement/schoolManagement/schoolInfo',
              state: record
            }}>同意</Link>
            <Divider type='vertical' />
            <Link to={{
              pathname: '/businessManagement/schoolManagement/schoolInfo',
              state: record
            }}>拒绝</Link>
          </div>}
        </>
      }
    }
  ];

  return (
    <div>
      <ProTable<any>
        columns={columns}
        className={styles.courseTable}
        actionRef={actionRef}
        search={false}
        dataSource={activeKey === 'audit' ? applyCourseList : courseList}
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
                key: 'all',
                label: <span>已合作课程</span>,
              },
            ],
            onChange: (key) => {
              setActiveKey(key as string);
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
        title='引入审核'
        destroyOnClose
        width="35vw"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            取消
          </Button>,
          <Button key="submit" type="primary" >
            确定
          </Button>
        ]}
        style={{ maxHeight: '430px' }}
        centered
        maskClosable={false}
      >
        <OperationForm
          setModalVisible={setModalVisible}
        />
      </Modal>
    </div>
  );
};

export default CourseManagement;
