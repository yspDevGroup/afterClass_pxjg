// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取作息时间数据 GET /zxsj/${param0} */
export async function getZXSJ(
  params: {
    // path
    /** 作息时间ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      MC?: string;
      SD?: string;
      SX?: string;
      KSSJ?: string;
      JSSJ?: string;
      SYXQ?: string;
      SC?: number;
    };
    message?: string;
  }>(`/zxsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除作息时间数据 DELETE /zxsj/${param0} */
export async function deleteZXSJ(
  params: {
    // path
    /** 作息时间ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/zxsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有作息时间数据 POST /zxsj/ */
export async function getAllZXSJ(
  body: {
    ZXFAId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.ZXSJ[]; message?: string }>('/zxsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建作息时间数据 PUT /zxsj/create */
export async function createZXSJ(body: API.CreateZXSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      MC?: string;
      SD?: string;
      SX?: string;
      KSSJ?: string;
      JSSJ?: string;
      SYXQ?: string;
      SC?: number;
    };
    message?: string;
  }>('/zxsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新作息时间数据 PUT /zxsj/update/${param0} */
export async function updateZXSJ(
  params: {
    // path
    /** 作息时间ID */
    id: string;
  },
  body: API.UpdateZXSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/zxsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
