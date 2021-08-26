// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学生学习简历 PUT /xsxxjl/create */
export async function createXSXXJL(body: API.CreateXSXXJL, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XXQSRQ?: string;
      XXZZRQ?: string | any;
      XXDW?: string;
      XXNR?: string;
      SXZYMC?: string;
      SHXWM?: string;
      XXZMR?: string;
      XXJLBZ?: string;
    };
    message?: string;
  }>('/xsxxjl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生学习简历 POST /xsxxjl/getAll */
export async function getXSXXJL(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.XSXXJL[] };
    message?: string;
  }>('/xsxxjl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除学生学习简历 DELETE /xsxxjl/${param0} */
export async function deleteXSXXJL(
  params: {
    // path
    /** 简历ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsxxjl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学生学习简历 PUT /xsxxjl/update/${param0} */
export async function updateXSXXJL(
  params: {
    // path
    /** 学生学习简历ID */
    id: string;
  },
  body: API.UpdateXSXXJL,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsxxjl/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
