/*
 * @description: 批量操作按钮
 * @author: zpl
 * @Date: 2021-11-19 09:42:24
 * @LastEditTime: 2022-03-25 13:43:27
 * @LastEditors: zpl
 */
import type { FC, Key } from 'react';
import { message, Popconfirm, Space } from 'antd';
import type { ActionType } from '@ant-design/pro-table';
import { WarningOutlined } from '@ant-design/icons';

import { updateTeacherUser } from '@/services/after-class-pxjg/teacherUser';

type Props_Alert_Enterprise = {
  /** 企业编码 */
  enterpriseCode?: string;
  /** 企业名称 */
  enterpriseName?: string;
  /** 选中行的id集合 */
  selectedRowKeys: Key[];
  /** 表格操作对象，用于刷新表格等操作 */
  action?: ActionType;
};

/**
 * 启用用户按钮
 *
 * @param {*} { selectedRowKeys, action }
 * @return {*}
 */
const EnableUser: FC<{
  /** 选中行的id集合 */
  selectedRowKeys: Key[];
  /** 表格操作对象，用于刷新表格等操作 */
  action?: ActionType;
}> = ({ selectedRowKeys, action }) => {
  return (
    <Popconfirm
      key="enable"
      title={`确定要启用选中的 ${selectedRowKeys.length} 个账号吗？`}
      onConfirm={async () => {
        await Promise.all(
          selectedRowKeys.map(async (key) => {
            await updateTeacherUser({ id: key as string }, { status: 1 });
          })
        );
        message.success('操作成功');
        action?.reload();
      }}
      okText="确定"
      cancelText="取消"
    >
      <a>启用</a>
    </Popconfirm>
  );
};

/**
 * 禁用用户按钮
 *
 * @param {*} { selectedRowKeys, action }
 * @return {*}
 */
const DisableUser: FC<{
  /** 选中行的id集合 */
  selectedRowKeys: Key[];
  /** 表格操作对象，用于刷新表格等操作 */
  action?: ActionType;
}> = ({ selectedRowKeys, action }) => {
  return (
    <Popconfirm
      key="disable"
      title={`确定要禁用选中的 ${selectedRowKeys.length} 个账号吗？`}
      onConfirm={async () => {
        await Promise.all(
          selectedRowKeys.map(async (key) => {
            await updateTeacherUser({ id: key as string }, { status: 0 });
          })
        );
        message.success('操作成功');
        action?.reload();
      }}
      okText="确定"
      cancelText="取消"
    >
      <a>禁用</a>
    </Popconfirm>
  );
};

/**
 * 删除用户按钮
 *
 * @param {*} { selectedRowKeys, action }
 * @return {*}
 */
const DeleteUser: FC<{
  /** 选中行的id集合 */
  selectedRowKeys: Key[];
  /** 表格操作对象，用于刷新表格等操作 */
  action?: ActionType;
}> = ({ selectedRowKeys, action }) => {
  return (
    <Popconfirm
      key="delete"
      icon={<WarningOutlined style={{ color: 'red' }} />}
      title="删除之后，数据不可恢复，确定要删除吗?"
      onConfirm={async () => {
        await Promise.all(
          selectedRowKeys.map(async (key) => {
            // await delUsers({ id: key as string });
          })
        );
        message.success('删除成功');
        action?.reload();
        action?.clearSelected?.();
      }}
      okText="确定"
      cancelText="取消"
    >
      <a>批量删除</a>
    </Popconfirm>
  );
};

/**
 * 渲染用户批量操作按钮
 *
 * @param {Props_Alert_Enterprise} {
 *   selectedRowKeys,
 *   action
 * }
 * @return {*} {React.ReactNode}
 */
export const tableAlertOptionRender = ({ selectedRowKeys, action }: Props_Alert_Enterprise): React.ReactNode => {
  return (
    <Space size={16}>
      <EnableUser selectedRowKeys={selectedRowKeys} action={action} />
      <DisableUser selectedRowKeys={selectedRowKeys} action={action} />
    </Space>
  );
};
