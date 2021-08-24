// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学校配置数据 PUT /xxjbpz/create */
export async function createXXJBPZ(body: API.CreateXXJBPZ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: { id?: string; NJZDZZ?: number; NJZDZZSFWC?: number; NJZDZZRQ?: string };
    message?: string;
  }>('/xxjbpz/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新学校配置数据 PUT /xxjbpz/update/${param0} */
export async function updateXXJBPZ(
  params: {
    // path
    /** 学校配置数据ID */
    id: string;
  },
  body: API.UpdateXXJBPZ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxjbpz/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 获取学校配置数据 POST /xxjbpz/ */
export async function allXXJBPZ(
  body: {
    XQSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.XXJBPZ[]; message?: string }>('/xxjbpz/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
