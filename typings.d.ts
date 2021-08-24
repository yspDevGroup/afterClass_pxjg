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
/** 后台地址 */
declare const ENV_backUrl: string;
/** 认证客户端id */
declare const clientId: string;
/** 认证客户端密钥 */
declare const clientSecret: string;

/** 运行环境类型 */
type PlatType = 'com-wx-mobile' | 'wx-mobile' | 'mobile' | 'com-wx-pc' | 'wx-pc' | 'pc';

type UserInfo = {
  id?: string;
  username: string;
  realName: string;
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
