// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校公告记录 GET /xxgg/${param0} */
export async function getXXGG(
  params: {
    // path
    /** 学校配置ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: { id?: string; BT?: string; NR?: string; ZT?: string; LX?: string; updatedAt?: string };
    message?: string;
  }>(`/xxgg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除学校公告记录 DELETE /xxgg/${param0} */
export async function deleteXXGG(
  params: {
    // path
    /** 学校配置ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxgg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有学校公告记录 POST /xxgg/all */
export async function getAllXXGG(
  body: {
    /** 公告状态 */
    status?: string[];
    /** 学校ID */
    XXJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.XXGG[]; message?: string }>('/xxgg/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建学校公告记录 PUT /xxgg/create */
export async function createXXGG(body: API.CreateXXGG, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: { id?: string; BT?: string; NR?: string; ZT?: string; LX?: string; updatedAt?: string };
    message?: string;
  }>('/xxgg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新学校公告记录 PUT /xxgg/update/${param0} */
export async function updateXXGG(
  params: {
    // path
    /** 学校配置ID */
    id: string;
  },
  body: API.UpdateXXGG,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxgg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
