// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 账密登录 POST /auth/account */
export async function postAccount(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { currentAuthority?: string[]; token?: string; type?: 'account' | 'mobile' | 'github' };
    message?: string;
  }>('/auth/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出登录 GET /auth/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error' }>('/auth/outLogin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 账密登录 POST /auth/login */
export async function login(
  body: {
    /** 登录类型 */
    authType: string;
    /** 登录平台 */
    plat: string;
    /** 用户名(本地登录/教育平台登录) */
    username?: string;
    /** 密码(本地登录) */
    password?: string;
    /** 教师ID(教育平台登录) */
    teacherId?: string;
    /** 企业ID */
    CorpId?: string;
    /** 应用ID */
    suiteID?: string;
    /** 企微用户ID */
    UserId?: string;
    /** 企微票据 */
    user_ticket?: string;
    /** 企微外部联系人ID */
    external_userid?: string;
    /** 是否为管理员 */
    isAdmin?: number;
    /** SSO token */
    access_token?: string;
    /** SSO token类型 */
    token_type?: string;
    /** SSO 刷新token */
    refresh_token?: string;
    /** SSO token有效期 */
    expires_in?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户 GET /auth/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<any>('/auth/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
