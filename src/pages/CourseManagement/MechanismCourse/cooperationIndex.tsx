import React, { useEffect, useRef, useState } from 'react'
import { Tabs, Space, Select, Input, Button, Modal } from 'antd';
import { history, useModel } from "umi";
import ProTable, { ActionType } from '@ant-design/pro-table';
import classes from '../index.less';
import { getCourses } from '@/services/after-class-pxjg/khjyjg';
const { Search } = Input;
/**
 * 机构端-合作课程
 * @returns
 */
const CooperationIndex = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const actionRef = useRef<ActionType>();

  const columns: any[] = [
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      search: false
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
    },
    {
      title: '引入学校',
      dataIndex: 'YRXX',
      key: 'YRXX',
      align: 'center'
    },
    {
      title: '已开班数',
      dataIndex: 'YKBS',
      key: 'YKBS',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>查看</a>
        </Space>
      ),
    },
  ];
  const  data = [
    {},
    {}
  ];
  return (
      <div className={classes.proTable}>
        <ProTable
          actionRef={actionRef}
          columns={columns}
          dataSource={data}
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
                YRZT: [2],
                KCMC: param.keyword
              }
              const res = await getCourses(params);
              if(res.status === 'ok'){
                return {
                  data: res.data.rows,
                  success: true,
                  total: res.data.count
                };
              }else{
                return {
                  data: [],
                  success: false,
                  total: 0
                };

              }
            }
          }
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
      </div>
  )
}

export default CooperationIndex;
