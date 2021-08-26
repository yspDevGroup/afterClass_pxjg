// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务请假记录 GET /khxsqj/${param0} */
export async function getKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: {
      KSSJ?: string | any;
      JSSJ?: string | any;
      QJSC?: number;
      QJYY?: string;
      QJZT?: '已确认' | '待确认' | '已过期';
      QJLX?: '按课时请假' | '按时间请假';
      XSId?: string;
      KHBJSJs?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
        ZJS?: string;
        FJS?: string;
        BJRS?: number;
        KSS?: number;
        FY?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
        NJS?: string;
        XQ?: string;
        NJSName?: string;
        XQName?: string;
        ZJSName?: string;
        FJSName?: string;
      }[];
    };
    message?: string;
  }>(`/khxsqj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后服务请假记录 DELETE /khxsqj/${param0} */
export async function deleteKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsqj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后服务请假记录 POST /khxsqj/ */
export async function getAllKHXSQJ(
  body: {
    /** 学生ID */
    XSId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHXSQJ[]; message?: string }>('/khxsqj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后服务请假记录 PUT /khxsqj/create */
export async function createKHXSQJ(body: API.CreateKHXSQJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      KSSJ?: string | any;
      JSSJ?: string | any;
      QJSC?: number;
      QJYY?: string;
      QJZT?: '已确认' | '待确认' | '已过期';
      QJLX?: '按课时请假' | '按时间请假';
      XSId?: string;
      KHBJSJs?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
        ZJS?: string;
        FJS?: string;
        BJRS?: number;
        KSS?: number;
        FY?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
        NJS?: string;
        XQ?: string;
        NJSName?: string;
        XQName?: string;
        ZJSName?: string;
        FJSName?: string;
      }[];
    };
    message?: string;
  }>('/khxsqj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按时间请假获取请假课时数 POST /khxsqj/qjkss */
export async function getQJKSS(
  body: {
    /** 请假开始时间 */
    KSSJ?: string | any;
    /** 请假结束时间 */
    JSSJ?: string | any;
    /** 学年 */
    xn?: string;
    /** 学期 */
    xq?: string;
    /** 学生ID */
    XSId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { KHBJSJId?: string; QJRQ?: string }[];
    message?: string;
  }>('/khxsqj/qjkss', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后服务请假记录 PUT /khxsqj/update/${param0} */
export async function updateKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  body: API.UpdateKHXSQJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsqj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
