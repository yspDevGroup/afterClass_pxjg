// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取房间类型 GET /fjlx/${param0} */
export async function getFJLX(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: { id?: string; FJLX?: string };
    message?: string;
  }>(`/fjlx/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除房间类型 DELETE /fjlx/${param0} */
export async function deleteFJLX(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/fjlx/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有房间类型 POST /fjlx/ */
export async function getAllFJLX(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 房间类型 */
    name?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.FJLX[]; message?: string }>('/fjlx/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建房间类型 PUT /fjlx/create */
export async function createFJLX(body: API.CreateFJLX, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: { id?: string; FJLX?: string };
    message?: string;
  }>('/fjlx/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新房间类型 PUT /fjlx/update/${param0} */
export async function updateFJLX(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  body: API.UpdateFJLX,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/fjlx/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
