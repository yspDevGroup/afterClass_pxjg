// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学生奖励数据 PUT /xsjlsj/create */
export async function createXSJLSJ(body: API.CreateXSJLSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      JLMC?: string;
      JLJBM?: string;
      JLDJM?: string;
      HJLBM?: string;
      JLYY?: string;
      JLJE?: string;
      JLWH?: string;
      JLXND?: string;
      BJDW?: string;
      JLLXM?: string;
      JLFSM?: string;
      HJXM?: string;
      HJRQ?: string | any;
    };
    message?: string;
  }>('/xsjlsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生奖励数据 POST /xsjlsj/getAll */
export async function getXSJLSJ(
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
    data?: { count?: number; rows?: API.XSJLSJ[] };
    message?: string;
  }>('/xsjlsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除学生奖励数据 DELETE /xsjlsj/${param0} */
export async function deleteXSJLSJ(
  params: {
    // path
    /** 学生奖励ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjlsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学生奖励 PUT /xsjlsj/update/${param0} */
export async function updateXSJLSJ(
  params: {
    // path
    /** 学生奖励数据ID */
    id: string;
  },
  body: API.UpdateXSJLSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjlsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
