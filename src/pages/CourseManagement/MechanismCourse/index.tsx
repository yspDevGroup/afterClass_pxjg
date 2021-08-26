import React, { useEffect, useRef, useState } from 'react'
import { Tabs, Space, Select, Input, Button, Modal } from 'antd';
import { history } from "umi";
import ProTable, { ActionType } from '@ant-design/pro-table';
import Sitclass from './Sitclass';
import { getAllKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
const { Search } = Input;
/**
 * 机构端-课程列表
 * @returns
 */
const MechanismCourse = () => {
  const actionRef = useRef<ActionType>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  useEffect(() => {
    (
      async ()=>{
        const res = await getAllKHKCSJ({page: 0, pageSize: 0});
      }
    )()
  }, [])
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
      title: '引入数量',
      key: 'YRSL',
      dataIndex: 'YRSL',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>查看</a>
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
              onClick={() => setModalVisible(true)}
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
            },
          }}
        />
        <Modal
          title="课程类型维护"
          destroyOnClose
          width="500px"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          centered
          maskClosable={false}
          bodyStyle={{
            maxHeight: '65vh',
            minHeight: "300px",
            overflowY: 'auto',
          }}
        >
          <Sitclass />
        </Modal>
      </div>
  )
}

export default MechanismCourse
