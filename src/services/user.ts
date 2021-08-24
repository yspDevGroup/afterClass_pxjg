/*
 * @description:
 * @author: zpl
 * @Date: 2021-07-15 09:38:05
 * @LastEditTime: 2021-08-24 11:51:04
 * @LastEditors: zpl
 */
import { request } from 'umi';
import { base64Encode } from './../utils';

/**
 * 获取当前登录的用户信息
 *
 * @export
 * @return {*}  {Promise<UserInfo>}
 */
export async function getCurrentUser(): Promise<{
  status: 'ok' | 'error';
  data: UserInfo;
  message?: string;
}> {
  return request('/user/currentUser');
}

/**
 * 微信模式登录
 *
 * @export
 * @param {({
 *   username: string;
 *   password: string;
 *   grant_type: 'password' | 'authorization_code';
 * })} params
 * @return {*}  {Promise<TokenInfo>}
 */
export async function loginWithWechat(params: {
  username: string;
  password: string;
  grant_type: 'password' | 'authorization_code';
}): Promise<TokenInfo> {
  const authorization = `${clientId}:${clientSecret}`;
  return request('/oauth2/token', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${base64Encode(authorization)}`
      // Authorization: 'Basic bXlfYXBwOm15X3NlY3JldA=='
    },
    body: Object.keys(params)
      .map((key) => `${key}=${params[key] as string}`)
      .join('&')
  });
}

/** 账密登录 POST /auth/account */
export async function postAccount(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: { currentAuthority?: string[]; token?: string; type?: 'account' };
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

/** 新建账号 POST /user */
export async function postUsers(
  body: {
    username?: string;
    password?: string;
    realName?: string;
    mobile?: string;
    email?: string;
    verificationCode?: string;
    status?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{
    data: {
      id?: string;
      username?: string;
      password?: string;
      realName?: string;
      mobile?: string;
      email?: string;
      verificationCode?: string;
      status?: string;
      verificationCodeExpiresAt?: string;
      logonTime?: string;
      lastLoginTime?: string;
      createdAt?: string;
      updatedAt?: string;
    };
  }>('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取账号列表 GET /users */
export async function getUsers() {
  return request<
    {
      id?: string;
      username?: string;
      password?: string;
      realName?: string;
      mobile?: string;
      email?: string;
      verificationCode?: string;
      status?: string;
      verificationCodeExpiresAt?: string;
      logonTime?: string;
      lastLoginTime?: string;
      createdAt?: string;
      updatedAt?: string;
    }[]
  >('/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

/** 修改账号信息 PUT /users/${param0} */
export async function putUsers(
  params: {
    /** 账号ID */
    id: string;
  },
  body: {
    id?: string;
    username?: string;
    password?: string;
    realName?: string;
    mobile?: string;
    email?: string;
    verificationCode?: string;
    status?: string;
    verificationCodeExpiresAt?: string;
    logonTime?: string;
    lastLoginTime?: string;
    createdAt?: string;
    updatedAt?: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/users/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 删除账号数据 DELETE /users/${param0} */
export async function delUsers(
  params: {
    /** 账号ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/users/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}
/** 同步账号数据 POST /users/${param0} */
export async function syncUserList(
  body: {
    XXDM?: string;
    type: '老师' | '学生';
  },
  options?: { [key: string]: any }
) {
  return request<{
    data: { message: string };
  }>('/users/sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 修改用户密码 PUT /users/password/:username */
export async function putPassword(
  params: {
    username?: string;
  },
  body: {
    oldPassword: string;
    newPassword: string;
  },
  options?: { [key: string]: any }
) {
  const { username: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/users/password/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
