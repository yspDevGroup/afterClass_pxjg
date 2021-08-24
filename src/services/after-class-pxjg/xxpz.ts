// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校配置数据 GET /xxpz/${param0} */
export async function getXXPZ(
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
    data?: {
      KEY?: 'BMKSSJ' | 'BMJSSJ' | 'KKRQ' | 'JKRQ' | 'TITLE';
      VALUE?: string;
      REMARK?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
    };
    message?: string;
  }>(`/xxpz/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除学校配置数据 DELETE /xxpz/${param0} */
export async function deleteXXPZ(
  params: {
    // path
    /** 学校配置ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxpz/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有学校配置数据 GET /xxpz/all */
export async function getAllXXPZ(
  body: {
    /** 学年 */
    xn?: string;
    /** 学期 */
    xq?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.XXPZ[]; message?: string }>('/xxpz/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建学校配置数据 PUT /xxpz/create */
export async function createXXPZ(body: API.CreateXXPZ[], options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      KEY?: 'BMKSSJ' | 'BMJSSJ' | 'KKRQ' | 'JKRQ' | 'TITLE';
      VALUE?: string;
      REMARK?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
    };
    message?: string;
  }>('/xxpz/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新学校配置数据 PUT /xxpz/update/${param0} */
export async function updateXXPZ(
  params: {
    // path
    /** 学校配置ID */
    id: string;
  },
  body: API.UpdateXXPZ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxpz/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
