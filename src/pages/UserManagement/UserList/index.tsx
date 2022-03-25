/*
 * @description: 用户列表
 * @author: zpl
 * @Date: 2021-11-18 16:55:08
 * @LastEditTime: 2022-03-25 18:20:23
 * @LastEditors: zpl
 */
import React, { useRef, useState, useEffect } from 'react';
import type { FC, Key } from 'react';
import { message } from 'antd';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { SortOrder } from 'antd/lib/table/interface';

import { tableAlertOptionRender } from './TableAlertOptionRender';
import { toolBarRender } from './ToolBarRender';
import ColumnConf from './ColumnConf';
import type { TeacherUser, UserListProps } from './type.d';
import {
  getAllTeacherUser as getUserList,
  CreateTeacherUser as addUser
} from '@/services/after-class-pxjg/teacherUser';

import styles from './index.less';

const UserList: FC<UserListProps> = ({ CorpID, readonly, hiddenTitle, filterType = 'query', columnOptions }) => {
  const actionRef = useRef<ActionType>();
  const [seleteRowNum, setSeleteRowNum] = useState<number>(0);

  const columns: ProColumns<TeacherUser.UserInfo>[] = ColumnConf(CorpID, columnOptions, readonly);

  let scrollX = 0;
  columns.map((c) => {
    if (!c.hideInTable) {
      scrollX += c.width ? Number(c.width) : 100;
    }
    return c.width;
  });

  let scrollYOutSide = filterType === 'light' ? 19 : 23;
  if (seleteRowNum) {
    scrollYOutSide += 3;
  }

  const toolBar = (
    action: ActionType | undefined,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rows: {
      selectedRowKeys?: (string | number)[];
      selectedRows?: TeacherUser.UserInfo[];
    }
  ) => {
    return toolBarRender({
      CorpID,
      createHandler: async (user: TeacherUser.UserInfo) => {
        for (const key in user) {
          if (Object.prototype.hasOwnProperty.call(user, key)) {
            const opt = user[key];
            if (opt === '') {
              user[key] = undefined;
            }
          }
        }
        if (user.password) {
          await addUser({ ...user, password: user.password });
          message.success('创建完成');
          action?.reload();
          return true;
        }
        message.warn('请设置用户密码');
        return false;
      }
    });
  };

  /**
   * 批量操作按钮
   *
   * @param {{ selectedRowKeys: Key[] }} { selectedRowKeys }
   *
   */
  const tableAlertOption = ({ selectedRowKeys }: { selectedRowKeys: Key[] }) => {
    return tableAlertOptionRender({
      selectedRowKeys,
      action: actionRef.current
    });
  };

  useEffect(() => {
    actionRef.current?.reload();
    actionRef.current?.clearSelected!();
  }, [CorpID]);

  return (
    <ProTable<TeacherUser.UserInfo>
      columns={columns}
      actionRef={actionRef}
      sortDirections={['asc' as SortOrder, 'desc' as SortOrder]}
      request={async (tableParams = {}, sort, filter) => {
        const { JZGJBSJId, current, pageSize, ...opts } = tableParams;
        for (const key in opts) {
          if (Object.prototype.hasOwnProperty.call(opts, key)) {
            const opt = opts[key];
            if (opt === '') {
              opts[key] = undefined;
            }
          }
        }
        const { status } = filter;
        const params: {
          status?: number;
          CorpID: string;
          JZGJBSJId?: string;
          page?: number;
          pageSize?: number;
        } = { CorpID, JZGJBSJId, page: current, pageSize, ...opts };
        if (status?.length) {
          params.status = status.length > 1 ? undefined : parseInt(status[0] as string, 10);
        }
        const res = await getUserList(params);
        if (res.status === 'ok') {
          const { count, rows } = res.data;
          return {
            success: true,
            data: rows,
            total: count
          };
        }
        message.error(res.message || '用户数据查询失败');
        return {
          success: true,
          data: [],
          total: 0
        };
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage'
      }}
      rowKey="id"
      search={{
        filterType,
        labelWidth: 'auto'
      }}
      rowSelection={{
        onChange: (selectedRowKeys: React.Key[]) => {
          setSeleteRowNum(selectedRowKeys.length);
        }
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        // type: 'radio'
      }}
      toolBarRender={toolBar}
      tableAlertOptionRender={tableAlertOption}
      scroll={{ y: `calc(100vh - ${scrollYOutSide}rem)`, x: scrollX }}
      pagination={{
        defaultPageSize: 20
      }}
      className={styles.list}
      headerTitle
      options={{
        setting: false,
        fullScreen: false,
        density: false,
        reload: false
      }}
    />
  );
};

export default UserList;
