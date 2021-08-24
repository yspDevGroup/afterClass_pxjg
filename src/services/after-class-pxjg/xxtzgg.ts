// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取学校通知公告 GET /xxtzgg/${param0} */
export async function XXTZGG(
  params: {
    // path
    /** 学校通知公告ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BT?: string;
      FBT?: string;
      GJC?: string;
      ZT?: string;
      LX?: string;
      BH?: number;
      ZY?: string;
      TP?: string;
      ZZ?: string;
      RQ?: string;
      LY?: string;
      SFTT?: number;
      SFTJ?: number;
      NR?: string;
    };
    message?: string;
  }>(`/xxtzgg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除学校通知公告 DELETE /xxtzgg/${param0} */
export async function deleteXXTZGG(
  params: {
    // path
    /** 学校通知公告ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxtzgg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建学校通知公告 PUT /xxtzgg/create */
export async function createXXTZGG(body: API.CreateXXTZGG, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BT?: string;
      FBT?: string;
      GJC?: string;
      ZT?: string;
      LX?: string;
      BH?: number;
      ZY?: string;
      TP?: string;
      ZZ?: string;
      RQ?: string;
      LY?: string;
      SFTT?: number;
      SFTJ?: number;
      NR?: string;
    };
    message?: string;
  }>('/xxtzgg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取学校通知公告 POST /xxtzgg/getAll */
export async function getXXTZGG(
  body: {
    /** 标题 */
    BT?: string;
    /** 状态 */
    ZT?: string[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.XXTZGG[] };
    message?: string;
  }>('/xxtzgg/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新学校通知公告 PUT /xxtzgg/update/${param0} */
export async function updateXXTZGG(
  params: {
    // path
    /** 学校通知公告ID */
    id: string;
  },
  body: API.UpdateXXTZGG,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxtzgg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
