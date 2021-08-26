// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取教育机构数据 GET /jyjgsj/${param0} */
export async function JYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BMBM?: string;
      BMMC?: string;
      SJBMBM?: string;
      BMJB?: number;
      XZQH?: string;
      JGLX?: number;
      BMIPFW?: string;
      BZ?: string;
      ZT?: number;
    };
    message?: string;
  }>(`/jyjgsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教育机构数据 DELETE /jyjgsj/${param0} */
export async function deleteJYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建教育机构数据 PUT /jyjgsj/create */
export async function createJYJGSJ(body: API.CreateJYJGSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BMBM?: string;
      BMMC?: string;
      SJBMBM?: string;
      BMJB?: number;
      XZQH?: string;
      JGLX?: number;
      BMIPFW?: string;
      BZ?: string;
      ZT?: number;
    };
    message?: string;
  }>('/jyjgsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构数据 POST /jyjgsj/getAll */
export async function getJYJGSJ(
  body: {
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.JYJGSJ[] };
    message?: string;
  }>('/jyjgsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教育机构数据 PUT /jyjgsj/update/${param0} */
export async function updateJYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  body: API.UpdateJYJGSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
