// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** sso认证回调 GET /sso/auth/callback */
export async function ssoAuthCallback(options?: { [key: string]: any }) {
  return request<any>('/sso/auth/callback', {
    method: 'GET',
    ...(options || {})
  });
}

/** sso Token失效回调 GET /sso/expired/callback */
export async function ssoExpiredCallback(options?: { [key: string]: any }) {
  return request<any>('/sso/expired/callback', {
    method: 'GET',
    ...(options || {})
  });
}

/** 同步用户信息 POST /sso/synchroUsers */
export async function synchroUsers(
  body: {
    type?: '老师' | '学生';
    /** 学校代码 */
    XXDM?: string;
    sign?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/sso/synchroUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取用户信息 POST /sso/getUserInfos */
export async function getUserInfos(
  body: {
    type?: '老师' | '学生';
    /** 学号/工号 */
    username?: string;
    /** 学校代码 */
    XXDM?: string;
    sign?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/sso/getUserInfos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** sso 首页获取学校通知通告 POST /sso/getSchoolNotice */
export async function getSchoolNotice(options?: { [key: string]: any }) {
  return request<any>('/sso/getSchoolNotice', {
    method: 'POST',
    ...(options || {})
  });
}

/** sso 获取所有学校信息 POST /sso/getSchools */
export async function getSchools(options?: { [key: string]: any }) {
  return request<any>('/sso/getSchools', {
    method: 'POST',
    ...(options || {})
  });
}
