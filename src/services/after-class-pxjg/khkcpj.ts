// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取机构课程评价 GET /khkcpj/${param0} */
export async function getKHKCPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHKCPJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; PY?: string; KHKCSJId?: string; XXJBSJId?: string };
    message?: string;
  }>(`/khkcpj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除机构课程评价 DELETE /khkcpj/${param0} */
export async function deleteKHKCPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHKCPJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkcpj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有机构课程评价 POST /khkcpj/ */
export async function getAllKHKCPJ(
  body: {
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHKCPJ[]; message?: string }>('/khkcpj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建机构课程评价 PUT /khkcpj/create */
export async function createKHKCPJ(body: API.CreateKHKCPJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; PY?: string; KHKCSJId?: string; XXJBSJId?: string };
    message?: string;
  }>('/khkcpj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新机构课程评价 PUT /khkcpj/update/${param0} */
export async function updateKHKCPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHKCPJParams,
  body: API.UpdateKHKCPJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkcpj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
