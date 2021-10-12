// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课堂风采记录详情 GET /khktfc/${param0} */
export async function getKHKTFC(
  params: {
    // path
    /** 课堂风采记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      NR?: string;
      TP?: string;
      createdAt?: string;
      KHBJSJId?: string;
      JZGJBSJId?: string;
    };
    message?: string;
  }>(`/khktfc/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课堂风采记录 DELETE /khktfc/${param0} */
export async function deleteKHKTFC(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khktfc/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课堂风采记录 POST /khktfc/ */
export async function getAllKHKTFC(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHKTFC[] };
    message?: string;
  }>('/khktfc/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课堂风采记录 PUT /khktfc/create */
export async function createKHKTFC(body: API.CreateKHKTFC, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      NR?: string;
      TP?: string;
      createdAt?: string;
      KHBJSJId?: string;
      JZGJBSJId?: string;
    };
    message?: string;
  }>('/khktfc/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课堂风采记录 PUT /khktfc/update/${param0} */
export async function updateKHKTFC(
  params: {
    // path
    /** 课堂风采记录ID */
    id: string;
  },
  body: API.UpdateKHKTFC,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khktfc/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
