// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学生处分数据 PUT /xscfsj/create */
export async function createXSCFSJ(body: API.CreateXSCFSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      CFMCM?: string;
      CFYY?: string;
      CFRQ?: string | any;
      CFWH?: string;
      CFCXRQ?: string | any;
      CFCXWH?: string;
    };
    message?: string;
  }>('/xscfsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生处分数据 POST /xscfsj/getAll */
export async function getXSCFSJ(
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
    data?: { count?: number; rows?: API.XSCFSJ[] };
    message?: string;
  }>('/xscfsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除学生处分数据 DELETE /xscfsj/${param0} */
export async function deleteXSCFSJ(
  params: {
    // path
    /** 学生处分ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xscfsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学生处分 PUT /xscfsj/update/${param0} */
export async function updateXSCFSJ(
  params: {
    // path
    /** 学生处分数据ID */
    id: string;
  },
  body: API.UpdateXSCFSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xscfsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
