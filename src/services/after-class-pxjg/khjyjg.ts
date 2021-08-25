// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取课后教育机构信息 GET /khjyjg/${param0} */
export async function KHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZZJGDM?: string;
      FRDBXM?: string;
      FRDBSFZH?: string;
      QYJGDZ?: string;
      XZQHM?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
    };
    message?: string;
  }>(`/khjyjg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后教育机构信息 DELETE /khjyjg/${param0} */
export async function deleteKHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjyjg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建课后教育机构信息 PUT /khjyjg/create */
export async function createKHJYJG(body: API.CreateKHJYJG, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZZJGDM?: string;
      FRDBXM?: string;
      FRDBSFZH?: string;
      QYJGDZ?: string;
      XZQHM?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
    };
    message?: string;
  }>('/khjyjg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课后教育机构信息 POST /khjyjg/getAll */
export async function getKHJYJG(
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
    data?: { count?: number; rows?: API.KHJYJG[] };
    message?: string;
  }>('/khjyjg/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后教育机构信息 PUT /khjyjg/update/${param0} */
export async function updateKHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  body: API.UpdateKHJYJG,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjyjg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
