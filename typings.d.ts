declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.gif';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

/** 系统标题 */
declare const ENV_title: string;
/** 系统副标题 */
declare const ENV_subTitle: string;
/** 系统版权 */
declare const ENV_copyRight: string;
/** 访问域名 */
declare const ENV_host: string;
/** 后台地址 */
declare const ENV_backUrl: string;
/** 统一认证地址 */
declare const ssoHost: string;
/** 认证类型 */
declare const authType: 'wechat' | 'password' | 'authorization_code';
/** 认证客户端id */
declare const clientId: string;
/** 认证客户端密钥 */
declare const clientSecret: string;
declare const wx: any;
declare const WWOpenData: any;
declare const wxInfo: {
  xqList: (WXDepType & { njList?: WXDepType[] })[];
};
/** 运行环境类型 */
type PlatType = 'com-wx-mobile' | 'wx-mobile' | 'mobile' | 'com-wx-pc' | 'wx-pc' | 'pc';

type UserInfo = {
  id?: string;
  /** 学段 */
  XD?: string;
  /** 学校代码 */
  XXDM?: string;
  /** 行政区号码 */
  XZQHM?: string;
  /** 登录名，学号或工号 */
  loginName?: string;
  /** 姓名 */
  username?: string;
  /** 头像 */
  avatar?: string;
  /** 身份ID */
  identityId?: string;
  /** 部门ID */
  departmentId?: string;
  /** 状态，0无效1有效，其他可由业务自行定义 */
  status?: number;
  userType?: string;
  auth?: '老师' | '家长' | '管理员' | { authType?: string; appName?: string }[];
  adminAuth?: string[];
  /** 微信用户ID，智慧校园 学生或老师ID */
  userId?: string;
  /** 微信用户ID(教师) */
  UserId?: string;
  /** 机构ID */
  jgId?: string;
  /** 微信用户企业ID */
  CorpId?: string;
  subscriber_info?: {
    remark?: string;
    children?: { njId?: string; department?: string[]; student_userid?: string; name?: string }[];
  };
};

/** 全局初始信息 */
type InitialState = {
  currentUser: UserInfo | null;
};

/** 通过useAccess获取到的应用权限详情信息 */
type AccessInfo = {
  isLogin: boolean;
  isAdmin: boolean;
};

/** oAuth认证token */
type TokenInfo = {
  access_token: string;
  expires_in?: string;
  refresh_token?: string;
  token_type?: string;
};
// 微信部门的数据类型
type WXDepType = {
  /** 部门名称 */
  name?: string;
  /** 父亲部门id,根部门该项为0 */
  parentid?: number;
  /** 部门id,根部门固定为1 */
  id?: number;
  /** 部门类型，32位整型，1表示班级，2表示年级，3表示学段，4表示校区，5表示学校（根部门） */
  type?: number;
  /** 入学年份，仅标准年级返回，格式为YYYY */
  register_year?: number;
  /** 标准年级 */
  standard_grade?: number;
  /** 在父部门中的次序值，order值大的排序靠前。 */
  order?: number;
  department_admins?: {
    /** 部门管理员的userid */
    userid?: string;
    /** 部门管理员的类型，1表示校区负责人，2表示年级负责人，3表示班主任，4表示任课老师，5表示学段负责人 */
    type?: number;
    /** 教师或班主任的科目 */
    subject?: string;
  }[];
  /** 是否是已毕业，1表示是，0表示不是。仅部门类型为年级时才返回该字段 */
  is_graduated?: number;
  /** 是否开启班级群，1表示开启，0表示关闭。仅部门类型为班级时才返回该字段 */
  open_group_chat?: number;
  /** 班级群id。仅部门类型为班级时且open_group_chat为1时才返回该字段 */
  group_chat_id?: number;
};
