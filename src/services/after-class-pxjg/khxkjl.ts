// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建巡课记录 PUT /khxkjl/create */
export async function createKHXKJL(body: API.CreateKHXKJL, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      RQ?: string;
      SFZSSK?: boolean;
      SFYDJS?: boolean;
      SFDM?: boolean;
      RSSFZQ?: boolean;
      YDRS?: number;
      SDRS?: number;
      QRRS?: number;
      BZXX?: string;
      XKJSId?: string;
      SKJSId?: string;
      FJSJId?: string;
      KHBJSJId?: string;
      KHBJSJ?: { id?: string; BJMC?: string };
      FJSJ?: { id?: string; FJBH?: string; FJMC?: string; FJLC?: string };
      XKJS?: { id?: string; XM?: string };
      SKJS?: { id?: string; XM?: string };
    };
    message?: string;
  }>('/khxkjl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取巡课记录 POST /khxkjl/getAll */
export async function getKHXKJL(
  body: {
    /** 日期 */
    RQ?: string;
    /** 巡课教师ID */
    XKJSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 场地ID */
    FJSJId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXKJL[] };
    message?: string;
  }>('/khxkjl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID查找巡课记录 GET /khxkjl/${param0} */
export async function KHXKJL(
  params: {
    // path
    /** 巡课记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      RQ?: string;
      SFZSSK?: boolean;
      SFYDJS?: boolean;
      SFDM?: boolean;
      RSSFZQ?: boolean;
      YDRS?: number;
      SDRS?: number;
      QRRS?: number;
      BZXX?: string;
      XKJSId?: string;
      SKJSId?: string;
      FJSJId?: string;
      KHBJSJId?: string;
      KHBJSJ?: { id?: string; BJMC?: string };
      FJSJ?: { id?: string; FJBH?: string; FJMC?: string; FJLC?: string };
      XKJS?: { id?: string; XM?: string };
      SKJS?: { id?: string; XM?: string };
    };
    message?: string;
  }>(`/khxkjl/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除巡课记录 DELETE /khxkjl/${param0} */
export async function deleteKHXKJL(
  params: {
    // path
    /** 巡课记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxkjl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新巡课记录 PUT /khxkjl/update/${param0} */
export async function updateKHXKJL(
  params: {
    // path
    /** 巡课记录数据ID */
    id: string;
  },
  body: API.UpdateKHXKJL,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxkjl/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
