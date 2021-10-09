// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教师评价记录详情 GET /khjspj/${param0} */
export async function getKHJSPJ(
  params: {
    // path
    /** 教师评价记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJFS?: number;
      PY?: string;
      JSId?: string;
      XSId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>(`/khjspj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教师评价记录 DELETE /khjspj/${param0} */
export async function deleteKHJSPJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjspj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有教师评价记录 POST /khjspj/ */
export async function getAllKHJSPJ(
  body: {
    /** 学生ID */
    xsId?: string;
    /** 班级ID */
    bjId?: string;
    /** 评价类型 */
    PJLX?: string;
    /** 评价日期 */
    PJRQ?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHJSPJ[]; message?: string }>('/khjspj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建教师评价记录 PUT /khjspj/create */
export async function createKHJSPJ(body: API.CreateKHJSPJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJFS?: number;
      PY?: string;
      JSId?: string;
      XSId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>('/khjspj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教师评价记录 PUT /khjspj/update/${param0} */
export async function updateKHJSPJ(
  params: {
    // path
    /** 教师评价记录ID */
    id: string;
  },
  body: API.UpdateKHJSPJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjspj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
