/*
 * @description: 表格列配置
 * @author: zpl
 * @Date: 2021-11-19 10:31:02
 * @LastEditTime: 2022-03-25 17:55:37
 * @LastEditors: zpl
 */
import { message, Popconfirm } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';

import type { ColumnOptions, TeacherUser } from './type';
import PutUser from './PutUser';
import { updateTeacherUser } from '@/services/after-class-pxjg/teacherUser';

/**
 * 封装列配置
 *
 * @param {ColumnOptions} [columnOptions]
 * @param {boolean} [readonly]
 * @return {*}  {ProColumns<UserInfo>[]}
 */
const ColumnConf = (
  CorpID: string,
  columnOptions?: ColumnOptions,
  readonly?: boolean
): ProColumns<TeacherUser.UserInfo>[] => {
  return [
    {
      title: '账号',
      key: 'username',
      dataIndex: 'username',
      width: columnOptions?.username?.width || 100,
      // 默认显示
      hideInTable: columnOptions?.username?.hidden,
      // 默认搜索
      search: columnOptions?.username ? columnOptions.username.search : undefined
    },
    {
      title: '姓名',
      key: 'realname',
      dataIndex: 'realname',
      width: columnOptions?.realname?.width || 100,
      // 默认显示
      hideInTable: columnOptions?.realname?.hidden,
      // 默认搜索
      search: columnOptions?.realname ? columnOptions.realname.search : undefined,
      align: 'center'
    },
    {
      title: '教师ID',
      key: 'JZGJBSJId',
      dataIndex: 'JZGJBSJId',
      width: columnOptions?.JZGJBSJId?.width || 120,
      // 默认隐藏
      hideInTable: !columnOptions?.JZGJBSJId || columnOptions.JZGJBSJId.hidden,
      // 默认不搜索
      search: columnOptions?.JZGJBSJId ? columnOptions.JZGJBSJId.search : false
    },
    {
      title: '用户身份',
      key: 'usertype',
      dataIndex: 'usertype',
      width: columnOptions?.usertype?.width || 120,
      // 默认显示
      hideInTable: columnOptions?.usertype?.hidden,
      // 默认搜索
      search: columnOptions?.usertype ? columnOptions.usertype.search : undefined
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      align: 'center',
      valueType: 'select',
      filters: true,
      valueEnum: {
        1: {
          text: '启用',
          status: 'Success'
        },
        0: {
          text: '禁用',
          status: 'Error'
        }
      },
      width: columnOptions?.status?.width || 100,
      // 默认显示
      hideInTable: columnOptions?.status?.hidden,
      search: false
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: 150,
      // eslint-disable-next-line max-params
      render: (text, record, _, action) => {
        return (
          <>
            <a
              onClick={async () => {
                const { id, status } = record;
                const newStatus = status === 1 ? 0 : 1;
                await updateTeacherUser({ id: id! }, { status: newStatus });
                message.success(`已${newStatus ? '启用' : '禁用'}`);
                action?.reload();
              }}
            >
              {record.status === 1 ? '禁用' : '启用'}
            </a>
            <PutUser
              CorpID={CorpID}
              defaultValue={record}
              onSave={async (user: TeacherUser.UserInfo) => {
                for (const key in user) {
                  if (Object.prototype.hasOwnProperty.call(user, key)) {
                    const opt = user[key];
                    if (opt === '') {
                      user[key] = undefined;
                    }
                  }
                }
                const { id, ...oldInfo } = record;
                await updateTeacherUser({ id: id! }, { ...oldInfo, ...user });
                message.success('更新完成');
                action?.reload();
                return true;
              }}
            />
          </>
        );
      },
      hideInTable: readonly
    }
  ];
};

export default ColumnConf;
