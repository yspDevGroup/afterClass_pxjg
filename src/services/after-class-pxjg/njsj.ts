// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取年级数据 GET /njsj/${param0} */
export async function getNJSJ(
  params: {
    // path
    /** 年级ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      NJ?: number;
      NJMC?: string;
      XD?: string;
      NJJC?: string;
      SFBY?: number;
      NJZR?: { id?: string; GH?: string; XM?: string };
      FNJZR?: { id?: string; GH?: string; XM?: string };
      BJSJs?: { id?: string; BH?: number; BJ?: string }[];
    };
    message?: string;
  }>(`/njsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除年级数据 DELETE /njsj/${param0} */
export async function deleteNJSJ(
  params: {
    // path
    /** 年级ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/njsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询年级数据 POST /njsj/ */
export async function getAllNJSJ(
  body: {
    /** 学段 */
    XD?: string[] | any;
    /** 年级 */
    NJ?: number;
    /** 年级名称 */
    NJMC?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.NJSJ[] };
    message?: string;
  }>('/njsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建年级数据 PUT /njsj/create */
export async function createNJSJ(body: API.CreateNJSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      NJ?: number;
      NJMC?: string;
      XD?: string;
      NJJC?: string;
      SFBY?: number;
      NJZR?: { id?: string; GH?: string; XM?: string };
      FNJZR?: { id?: string; GH?: string; XM?: string };
      BJSJs?: { id?: string; BH?: number; BJ?: string }[];
    };
    message?: string;
  }>('/njsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新年级数据 PUT /njsj/update/${param0} */
export async function updateNJSJ(
  params: {
    // path
    /** 年级ID */
    id: string;
  },
  body: API.UpdateNJSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/njsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建年级数据 PUT /njsj/multiCreate */
export async function multiCreate(
  body: {
    XD?: string;
    NJS?: number;
    BJS?: number;
    XQSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; message?: string }>('/njsj/multiCreate', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前已有年级的学段 POST /njsj/getAllXD */
export async function allXD(
  body: {
    XQSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: string[]; message?: string }>('/njsj/getAllXD', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
