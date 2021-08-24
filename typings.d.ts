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
/** 后台地址 */
declare const ENV_backUrl: string;
/** 访问域名 */
declare const ENV_host: string;
/** 认证客户端id */
declare const clientId: string;
/** 认证客户端密钥 */
declare const clientSecret: string;

/** 运行环境类型 */
type PlatType = 'com-wx-mobile' | 'wx-mobile' | 'mobile' | 'com-wx-pc' | 'wx-pc' | 'pc';

type UserInfo = {
  id?: string;
  /** 学校代码 */
  XXDM?: string;
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
  expires_in?: number;
  refresh_token?: string;
  token_type?: string;
};
