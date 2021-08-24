// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取机构教师信息 GET /khjssj/${param0} */
export async function KHJSSJ(
  params: {
    // path
    /** 机构教师ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      GH?: string;
      XM?: string;
      XB?: string;
      LXDH?: string;
      CSRQ?: string | any;
      DZXX?: string;
      SFZJLX?: string;
      SFZJH?: string;
      BZ?: string;
    };
    message?: string;
  }>(`/khjssj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除机构教师信息 DELETE /khjssj/${param0} */
export async function deleteKHJSSJ(
  params: {
    // path
    /** 机构教师ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjssj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建机构教师信息 PUT /khjssj/create */
export async function createKHJSSJ(body: API.CreateKHJSSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      GH?: string;
      XM?: string;
      XB?: string;
      LXDH?: string;
      CSRQ?: string | any;
      DZXX?: string;
      SFZJLX?: string;
      SFZJH?: string;
      BZ?: string;
    };
    message?: string;
  }>('/khjssj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取机构教师信息 POST /khjssj/getAll */
export async function getKHJSSJ(
  body: {
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJSSJ[] };
    message?: string;
  }>('/khjssj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新机构教师信息 PUT /khjssj/update/${param0} */
export async function updateKHJSSJ(
  params: {
    // path
    /** 机构教师ID */
    id: string;
  },
  body: API.UpdateKHJSSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjssj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
