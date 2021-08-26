// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取机构入驻申请记录 GET /khjgrzsq/${param0} */
export async function KHJGRZSQ(
  params: {
    // path
    /** 机构入驻申请记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZT?: string;
      BZ?: string;
      XZQHM?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
    };
    message?: string;
  }>(`/khjgrzsq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除机构入驻申请记录 DELETE /khjgrzsq/${param0} */
export async function deleteKHJGRZSQ(
  params: {
    // path
    /** 机构入驻申请记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjgrzsq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建机构入驻申请记录 PUT /khjgrzsq/create */
export async function createKHJGRZSQ(body: API.CreateKHJGRZSQ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZT?: any;
      BZ?: string;
      XZQHM?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
    };
    message?: string;
  }>('/khjgrzsq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取机构入驻申请记录 POST /khjgrzsq/getAll */
export async function getKHJGRZSQ(
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
    data?: { count?: number; rows?: API.KHJGRZSQ[] };
    message?: string;
  }>('/khjgrzsq/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新机构入驻申请记录 PUT /khjgrzsq/update/${param0} */
export async function updateKHJGRZSQ(
  params: {
    // path
    /** 机构入驻申请记录ID */
    id: string;
  },
  body: API.UpdateKHJGRZSQ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjgrzsq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
