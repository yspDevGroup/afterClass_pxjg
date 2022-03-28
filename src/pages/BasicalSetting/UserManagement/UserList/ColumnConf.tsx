/*
 * @description: 表格列配置
 * @author: zpl
 * @Date: 2021-11-19 10:31:02
 * @LastEditTime: 2022-03-28 16:32:25
 * @LastEditors: zpl
 */
import { message, Space, Tag, Tooltip } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import { updateTeacherUser } from '@/services/after-class-pxjg/teacherUser';
import type { ColumnOptions, TeacherUser } from './type';
import PutUser from './PutUser';

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
      width: columnOptions?.realname?.width || 80,
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
      width: columnOptions?.UserTypes?.width || 120,
      // 默认显示
      hideInTable: columnOptions?.UserTypes?.hidden,
      // 默认搜索
      search: columnOptions?.UserTypes ? columnOptions.UserTypes.search : undefined,
      render: (_dom, entity) => {
        return (
          <Tooltip title={entity?.UserTypes?.map(({ name }) => name).join(', ')}>
            <Space>
              {entity?.UserTypes?.map(({ name }, i) => {
                if (i < 3) {
                  return <Tag key={name}>{name}</Tag>;
                }
                return '';
              })}
            </Space>
          </Tooltip>
        );
      }
    },
    {
      title: '最近登录时间',
      key: 'loginTime',
      dataIndex: 'loginTime',
      valueType: 'dateTime',
      width: columnOptions?.loginTime?.width || 100,
      // 默认显示
      hideInTable: columnOptions?.loginTime?.hidden,
      search: false,
      align: 'center'
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
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
      search: false,
      align: 'center'
    },
    {
      title: '教师信息',
      key: 'JZGJBSJ',
      dataIndex: 'JZGJBSJ',
      width: columnOptions?.JZGJBSJ?.width || 60,
      // 默认显示
      hideInTable: columnOptions?.JZGJBSJ?.hidden,
      // 默认不搜索
      search: columnOptions?.JZGJBSJ ? columnOptions.JZGJBSJ.search : false,
      ellipsis: true,
      render: (_dom, entity) => {
        return (
          <Tooltip
            title={
              <>
                <div>{`${entity.JZGJBSJ?.KHJYJG?.QYMC}`}</div>
                <div>{`${entity.JZGJBSJ?.XM}(${entity.JZGJBSJ?.GH})`}</div>
              </>
            }
          >
            {entity.JZGJBSJ?.XM}
          </Tooltip>
        );
      },
      align: 'center'
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: 120,
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
