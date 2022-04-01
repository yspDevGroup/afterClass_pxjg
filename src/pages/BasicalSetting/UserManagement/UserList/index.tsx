/*
 * @description: 用户列表
 * @author: zpl
 * @Date: 2021-11-18 16:55:08
 * @LastEditTime: 2022-04-01 09:00:08
 * @LastEditors: Wu Zhan
 */
import React, { useRef, useState, useEffect } from 'react';
import type { FC, Key } from 'react';
import { message } from 'antd';
import type { ActionType, ListToolBarProps, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { SortOrder } from 'antd/lib/table/interface';

import { tableAlertOptionRender } from './TableAlertOptionRender';
import { toolBarRender } from './ToolBarRender';
import ColumnConf from './ColumnConf';
import type { TeacherUser, UserListProps } from './type';
import {
  getAllTeacherUser as getUserList,
  CreateTeacherUser as addUser
} from '@/services/after-class-pxjg/teacherUser';

import styles from './index.less';

const UserList: FC<UserListProps> = ({ CorpID, readonly, filterType = 'query', columnOptions }) => {
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

  const toolBar = (): ListToolBarProps => {
    const btns = toolBarRender({
      CorpID,
      createHandler: async (user: API.CreateTeacherUser | API.updateTeacherUser) => {
        const res = await addUser(user as API.CreateTeacherUser);
        const { status } = res;
        if (status === 'ok') {
          message.success('创建完成');
          actionRef.current?.reload();
          return true;
        }
        message.error(res.message || '用户创建失败');
        return false;
      }
    });
    return {
      search: {
        placeholder: '请输入账号或姓名'
      },
      actions: btns
    };
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
      search={false}
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
      rowSelection={{
        onChange: (selectedRowKeys: React.Key[]) => {
          setSeleteRowNum(selectedRowKeys.length);
        }
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        // type: 'radio'
      }}
      toolbar={toolBar()}
      tableAlertOptionRender={tableAlertOption}
      scroll={{ y: `calc(100vh - ${scrollYOutSide}rem)`, x: scrollX }}
      pagination={{
        defaultPageSize: 20
      }}
      // className={styles.list}
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
