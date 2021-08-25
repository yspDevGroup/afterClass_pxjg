import React, { useRef, useState } from 'react'
import { Tabs, Space, Select, Input, Button } from 'antd';
import { history } from "umi";
import ProTable, { ActionType } from '@ant-design/pro-table';
const { Search } = Input;
/**
 * 机构端-课程列表
 * @returns
 */
const MechanismCourse = () => {
  const actionRef = useRef<ActionType>();

  const columns: any[] = [
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
    },
    {
      title: '课程类型',
      dataIndex: 'KCLX',
      key: 'KCLX',
    },
    {
      title: '适用学段',
      key: 'SYXD',
      dataIndex: 'SYXD',
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
    },
    {
      title: '代课老师',
      key: 'DKLS',
      dataIndex: 'DKLS',
    },
    {
      title: '课程费用',
      key: 'KCFY',
      dataIndex: 'KCFY',
    },
    {
      title: '引入数量',
      key: 'YRSL',
      dataIndex: 'YRSL',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={()=>{
            history.push('/courseManagement/mechanismCourse/edit')
          }}>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const  data = [
    {},
    {}
  ];
  return (
      <div>
        <ProTable
          actionRef={actionRef}
          columns={columns}
          dataSource={data}
          search={false}
          rowKey="id"
          dateFormatter="string"
          toolBarRender={() => [
            <Button
              key="type"
            >
              课程类型维护
            </Button>,
            <Button
              type="primary"
              key="primary"
              onClick={()=>{
                history.push('/courseManagement/mechanismCourse/edit')
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
  )
}

export default MechanismCourse
