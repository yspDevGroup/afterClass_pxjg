// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 验证认证链接 POST /xaedu/validateUrl */
export async function validateUrl(
  body: {
    /** 认证票据 */
    ticket: string;
    /** 认证对应的服务地址 */
    service: string;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      username?: string;
      list?: {
        id?: string;
        GH?: string;
        XM?: string;
        LXDH?: string;
        WechatUserId?: string;
        QYMC?: string;
        CorpID?: string;
      }[];
    };
    message?: string;
  }>('/xaedu/validateUrl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据手机号获取所有匹配的教师信息 POST /xaedu/getUsers */
export async function getUsers(
  body: {
    /** 用户电话 */
    phone: string;
    /** 当前登录的第三方用户名 */
    username: string;
    /** 访问平台 */
    plat: string;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
      XM?: string;
      LXDH?: string;
      WechatUserId?: string;
      QYMC?: string;
      CorpID?: string;
      status?: number;
    }[];
    message?: string;
  }>('/xaedu/getUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 用户选择绑定，并发送验证码 POST /xaedu/bindUser */
export async function bindUser(
  body: {
    /** 选择绑定的课后服务教师ID */
    teacherId: string;
    /** 用户名 */
    username: string;
    /** 选择绑定的企微CorpID */
    CorpID: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/xaedu/bindUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 校验验证码 POST /xaedu/checkCode */
export async function checkCode(
  body: {
    /** 课后服务教师ID */
    teacherId: string;
    /** 用户名 */
    username: string;
    /** 验证码 */
    code: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/xaedu/checkCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建token信息 POST /xaedu/createToken */
export async function createToken(
  body: {
    /** 课后服务教师ID */
    teacherId: string;
    /** 用户名 */
    username: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/xaedu/createToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
