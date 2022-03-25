// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取节次信息数据 GET /jcxx/${param0} */
export async function getJCXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getJCXXParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; MC?: string; YWMC?: string; SC?: number; SM?: string };
    message?: string;
  }>(`/jcxx/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除节次信息数据 DELETE /jcxx/${param0} */
export async function deleteJCXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJCXXParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jcxx/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有节次信息数据 GET /jcxx/ */
export async function getAllJCXX(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: API.JCXX[]; message?: string }>('/jcxx/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建节次信息数据 PUT /jcxx/create */
export async function createJCXX(body: API.CreateJCXX, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; MC?: string; YWMC?: string; SC?: number; SM?: string };
    message?: string;
  }>('/jcxx/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新节次信息数据 PUT /jcxx/update/${param0} */
export async function updateJCXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJCXXParams,
  body: API.UpdateJCXX,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jcxx/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
