// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师学习简历 PUT /jzgxxjl/create */
export async function createJZGXXJL(body: API.CreateJZGXXJL, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XXQSRQ?: string;
      XXZZRQ?: string;
      XXDW?: string;
      XXNR?: string;
      SXZYMC?: string;
      SHXWM?: string;
      XXZMR?: string;
      XXJLBZ?: string;
    };
    message?: string;
  }>('/jzgxxjl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师学习简历 POST /jzgxxjl/getAll */
export async function getJZGXXJL(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.JZGXXJL[] };
    message?: string;
  }>('/jzgxxjl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师学习简历 DELETE /jzgxxjl/${param0} */
export async function deleteJZGXXJL(
  params: {
    // path
    /** 教师学习简历ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jzgxxjl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师学习简历 PUT /jzgxxjl/update/${param0} */
export async function updateJZGXXJL(
  params: {
    // path
    /** 教师学习简历ID */
    id: string;
  },
  body: API.UpdateJZGXXJL,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jzgxxjl/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
