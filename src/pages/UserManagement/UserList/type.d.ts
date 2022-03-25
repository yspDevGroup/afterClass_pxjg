/*
 * @description: 用户列表数据结构定义
 * @author: zpl
 * @Date: 2021-11-18 18:01:21
 * @LastEditTime: 2022-03-25 14:15:24
 * @LastEditors: zpl
 */
declare namespace TeacherUser {
  type UserInfo = {
    id?: string;
    /** 机构ID */
    CorpID: string;
    /** 用户名 */
    username: string;
    /** 密码 */
    password?: string;
    /** 真实姓名 */
    realname: string;
    /** 账号状态，1 启用，0 禁用 */
    status: 0 | 1;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 最近登录时间 */
    loginTime?: string;
    /** 用户身份 */
    usertype: string[];
  };
}

export type ColumnOptions = {
  [key in keyof TeacherUser.UserInfo]: {
    /** 是否在表格中隐藏 */
    hidden?: true;
    /** 列宽 */
    width?: number;
    /** 是否参与搜索 */
    search?: false;
  };
} & {
  /** 更新用户方法 */
  putUsers: (id: string, info: TeacherUser.UserInfo) => Promise<TeacherUser.UserInfo>;
};

export type UserListProps = {
  /** 机构ID */
  CorpID: string;
  /** 是否只读 */
  readonly?: true;
  /** 是否隐藏头部标题 */
  hiddenTitle?: true;
  /** 搜索表单样式 */
  filterType?: 'query' | 'light';
  /** 列配置 */
  columnOptions?: ColumnOptions;
};
