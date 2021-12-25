// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课程类型 GET /khkclx/${param0} */
export async function getKHKCLX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHKCLXParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; KCLX?: string; KCTAG?: string };
    message?: string;
  }>(`/khkclx/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课程类型 DELETE /khkclx/${param0} */
export async function deleteKHKCLX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHKCLXParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkclx/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课程类型 POST /khkclx/ */
export async function getAllKHKCLX(
  body: {
    /** 课程类型 */
    name?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHKCLX[]; message?: string }>('/khkclx/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课程类型 PUT /khkclx/create */
export async function createKHKCLX(body: API.CreateKHKCLX, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; KCLX?: string; KCTAG?: string };
    message?: string;
  }>('/khkclx/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课程类型 PUT /khkclx/update/${param0} */
export async function updateKHKCLX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHKCLXParams,
  body: API.UpdateKHKCLX,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkclx/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
