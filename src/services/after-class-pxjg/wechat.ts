// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 微信扫码认证 GET /wechat/auth */
export async function wechatOauth(options?: { [key: string]: any }) {
  return request<any>('/wechat/auth', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 微信终端认证 GET /wechat/platAuth */
export async function wechatPlatOauth(options?: { [key: string]: any }) {
  return request<any>('/wechat/platAuth', {
    method: 'GET',
    ...(options || {}),
  });
}

/** wechat认证回调 GET /wechat/auth/callback */
export async function wechatAuthCallback(options?: { [key: string]: any }) {
  return request<any>('/wechat/auth/callback', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 企业微信服务商数据回调验证 GET /wechat/dataCallback */
export async function wechatDataCallback(options?: { [key: string]: any }) {
  return request<any>('/wechat/dataCallback', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 企业微信服务商数据回调 POST /wechat/dataCallback */
export async function wechatDataCallback_2(options?: { [key: string]: any }) {
  return request<any>('/wechat/dataCallback', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 企业微信服务商指令回调验证 GET /wechat/cmdCallback */
export async function wechatDataCallback_3(options?: { [key: string]: any }) {
  return request<any>('/wechat/cmdCallback', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 企业微信服务商指令回调 POST /wechat/cmdCallback */
export async function wechatDataCallback_4(options?: { [key: string]: any }) {
  return request<any>('/wechat/cmdCallback', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取wx.config签名 POST /wechat/getQYJsSignature */
export async function getQYJsSignature(
  body: {
    /** 签名用的url必须是调用JS接口页面的完整URL */
    url?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data: { appId?: string; timestamp?: number; nonceStr?: string; signature?: string };
    message?: string;
  }>('/wechat/getQYJsSignature', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取wx.agentConfig签名 POST /wechat/getYYJsSignature */
export async function getYYJsSignature(
  body: {
    /** 签名用的url必须是调用JS接口页面的完整URL */
    url?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      corpid?: string;
      agentid?: string;
      timestamp?: number;
      nonceStr?: string;
      signature?: string;
    };
    message?: string;
  }>('/wechat/getYYJsSignature', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 微信应用设置 GET /wechat/settings */
export async function settingOnWechat(options?: { [key: string]: any }) {
  return request<any>('/wechat/settings', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取部门列表 GET /wechat/getDepList */
export async function getDepList(
  params: {
    // query
    /** 部门id。获取指定部门及其下的子部门。 如果不填，默认获取全量组织架构 */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/getDepList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门成员详情 GET /wechat/getDepUsers */
export async function getDepUsers(
  params: {
    // query
    /** 部门id */
    id: string;
    /** 1/0：是否递归获取子部门下面的成员 */
    fetch_child: 0 | 1;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/getDepUsers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门成员列表(教师) GET /wechat/getDepUserList */
export async function getDepUserList(
  params: {
    // query
    /** 部门id */
    id: string;
    /** 1/0：是否递归获取子部门下面的成员 */
    fetch_child: 0 | 1;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/getDepUserList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门列表(学校) GET /wechat/getSchDepList */
export async function getSchDepList(
  params: {
    // query
    /** 部门id */
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/getSchDepList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wechat支付回调 POST /wechat/trade/callback */
export async function wechatTradeCallback(options?: { [key: string]: any }) {
  return request<any>('/wechat/trade/callback', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 发送消息 POST /wechat/sendMsg */
export async function sendMsg(
  body: {
    /** 已关注「学校通知」的家长列表 */
    to_external_user?: string[];
    /** 家校通讯录家长列表 */
    to_parent_userid?: string[];
    /** 家校通讯录学生列表 */
    to_student_userid?: string[];
    /** 家校通讯录部门列表 */
    to_party?: string[];
    /** 消息类型 */
    msgtype?: string;
    /** 消息内容 */
    content?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>('/wechat/sendMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
