// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师课题研究 PUT /jzgktyj/create */
export async function createJZGKTYJ(body: API.CreateJZGKTYJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      MC?: string;
      LXRQ?: string;
      JTRQ?: string | any;
      KTBH?: string;
      LXDW?: string;
      CDRW?: string;
      CY?: string;
      NR?: string;
      LY?: string;
    };
    message?: string;
  }>('/jzgktyj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师课题研究 POST /jzgktyj/getAll */
export async function getJZGKTYJ(
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
    data?: { count?: number; rows?: API.JZGKTYJ[] };
    message?: string;
  }>('/jzgktyj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师课题研究 DELETE /jzgktyj/${param0} */
export async function deleteJZGKTYJ(
  params: {
    // path
    /** 教师课题研究ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jzgktyj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师课题研究 PUT /jzgktyj/update/${param0} */
export async function updateJZGKTYJ(
  params: {
    // path
    /** 教师课题研究ID */
    id: string;
  },
  body: API.UpdateJZGKTYJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jzgktyj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
