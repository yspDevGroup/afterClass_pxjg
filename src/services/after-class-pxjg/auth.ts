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
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 退出登录 POST /auth/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error' }>('/auth/outLogin', {
    method: 'POST',
    ...(options || {})
  });
}
