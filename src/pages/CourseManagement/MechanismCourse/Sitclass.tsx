/* eslint-disable max-params */
/* eslint-disable react/jsx-key */

import { createKHKCLX, deleteKHKCLX, getAllKHKCLX, updateKHKCLX } from '@/services/after-class-pxjg/khkclx';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { Badge, message, Button, Popconfirm } from 'antd';
import React, { useRef, useState } from 'react';
import type { classType, TableListParams } from './data';

/**
 * 课程类型维护
 * @returns
 */
const Sitclass = () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<classType[]>([]);
  const columns: ProColumns<classType>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      ellipsis: true,
      width: 48,
    },
    {
      title: '名称',
      dataIndex: 'KCLX',
      align: 'center',
      ellipsis: true,
      width: 130,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
          { max: 10, message: '最长为 10 位' },
        ],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 140,
      align: 'center',
      render: (_text, record, _, action) =>
      [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id!);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          title="删除之后，数据不可恢复，确定要删除吗?"
          onConfirm={async () => {
            try {
              if (record.id) {
                const result = await deleteKHKCLX({ id: `${record.id}` });
                if (result.status === 'ok') {
                  message.success('信息删除成功');
                  actionRef.current?.reload();
                } else {
                  message.error(result.message);
                }
              }
            } catch (err) {
              message.error('删除失败，请联系管理员或稍后重试。');
            }
          }}
          okText="确定"
          cancelText="取消"
          placement="topRight"
        >
          <a>删除</a>
        </Popconfirm>,
      ]
    },
  ];

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          actionRef.current?.addEditRecord?.({
            id: (Math.random() * 1000000).toFixed(0),
            title: '新的一行',
          });
        }}
        icon={<PlusOutlined />}
        style={{ marginLeft: '25px', marginBottom: '16px' }}
      >
        新建
      </Button>
      <EditableProTable<any>
        rowKey="id"
        actionRef={actionRef}
        columns={columns}
        request={(params, sorter, filter) => {
          const opts: TableListParams = {
            ...params,
            sorter: sorter && Object.keys(sorter).length ? sorter : undefined,
            // filter,
          };
          return getAllKHKCLX({ name: '' }, opts);
        }}
        value={dataSource}
        recordCreatorProps={false}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
          onSave: async (_, row) => {
            try {
              const result = row.title
                ? await createKHKCLX({
                    KCLX: row.KCLX!,
                    KCTAG:''
                  })
                : await updateKHKCLX(
                    {
                      id: row.id!,
                    },
                    {
                      KCLX: row.KCLX!,
                    },
                  );
              if (result.status === 'ok') {
                message.success(row.title ? '信息新增成功' : '信息更新成功');
                actionRef.current?.reload();
              } else {
                message.error(result.message);
              }
            } catch (errorInfo) {
              console.log('Failed:', errorInfo);
            }
          },
        }}
      />
    </>
  );
};

export default Sitclass;
