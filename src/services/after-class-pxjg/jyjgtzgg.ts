// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取教育局通知公告 GET /jyjgtzgg/${param0} */
export async function JYJGTZGG(
  params: {
    // path
    /** 教育局通知公告ID */
    id: string;
  },
  options?: { [key: string]: any },
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
      LX?: number;
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
  }>(`/jyjgtzgg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教育局通知公告 DELETE /jyjgtzgg/${param0} */
export async function deleteJYJGTZGG(
  params: {
    // path
    /** 教育局通知公告ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgtzgg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建教育局通知公告 PUT /jyjgtzgg/create */
export async function createJYJGTZGG(body: API.CreateJYJGTZGG, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BT?: string;
      FBT?: string;
      GJC?: string;
      ZT?: string;
      LX?: number;
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
  }>('/jyjgtzgg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育局通知公告 POST /jyjgtzgg/getAll */
export async function getJYJGTZGG(
  body: {
    /** 标题 */
    BT?: string;
    /** 类型 */
    LX?: number;
    /** 状态 */
    ZT?: string[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.JYJGTZGG[] };
    message?: string;
  }>('/jyjgtzgg/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教育局通知公告 PUT /jyjgtzgg/update/${param0} */
export async function updateJYJGTZGG(
  params: {
    // path
    /** 教育局通知公告ID */
    id: string;
  },
  body: API.UpdateJYJGTZGG,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgtzgg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
