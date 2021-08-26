// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建课程数据 PUT /kcsj/create */
export async function createKCSJ(body: API.CreateKCSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KCMC?: string;
      KCM?: string;
      KCDJM?: string;
      KCBM?: string;
      KCJJ?: string;
      KCYQ?: string;
      ZXS?: number;
      ZHXS?: number;
      ZXXS?: number;
      SKFSM?: string;
      JCBM?: string;
      CKSM?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      XKSJ?: { id?: string; XKMC?: string; XD?: string };
    };
    message?: string;
  }>('/kcsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除课程数据 DELETE /kcsj/${param0} */
export async function deleteKCSJ(
  params: {
    // path
    /** 课程ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/kcsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取课程数据 POST /kcsj/getAll */
export async function getKCSJ(
  body: {
    /** 年级ID */
    NJSJId?: string;
    /** 学科ID */
    XKSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KCSJ[] };
    message?: string;
  }>('/kcsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课程数据 PUT /kcsj/update/${param0} */
export async function updateKCSJ(
  params: {
    // path
    /** 课程ID */
    id: string;
  },
  body: API.UpdateKCSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/kcsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
