// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建WechatToken GET /wechat/createToken */
export async function createWechatToken(options?: { [key: string]: any }) {
  return request<any>('/wechat/createToken', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前微信用户 GET /wechat/currentUser */
export async function currentWechatUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.currentWechatUserParams,
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/currentUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 接收应用注册信息并入库 POST /wechat/syncAuthInfo */
export async function syncAuthInfo(options?: { [key: string]: any }) {
  return request<any>('/wechat/syncAuthInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 给家长发送消息通知 POST /wechat/sendMessageToParent */
export async function sendMessageToParent(
  body: {
    CorpId?: string;
    to?: string;
    text?: string;
    ids?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/sendMessageToParent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 给老师发送消息通知 POST /wechat/sendMessageToTeacher */
export async function sendMessageToTeacher(
  body: {
    to?: string;
    text?: string;
    ids?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/sendMessageToTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送离校通知 POST /wechat/msgLeaveSchool */
export async function msgLeaveSchool(
  body: {
    KHBJSJId: string;
    CorpId?: string;
    text: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/wechat/msgLeaveSchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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
    url: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { appId?: string; timestamp?: number; nonceStr?: string; signature?: string };
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
    url: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: {
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
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepListParams,
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
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepUsersParams,
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
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepUserListParams,
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
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSchDepListParams,
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
    msgtype: string;
    /** 消息内容 */
    content: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/wechat/sendMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
