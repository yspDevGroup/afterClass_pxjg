// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学生评价记录详情 GET /khxspj/${param0} */
export async function getKHXSPJ(
  params: {
    // path
    /** 学生评价记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJRQ?: string | any;
      PJLX?: '节次评价' | '总评价';
      PJFS?: string;
      PY?: string;
      JSId?: string;
      XSId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>(`/khxspj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除学生评价记录 DELETE /khxspj/${param0} */
export async function deleteKHXSPJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxspj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有学生评价记录 POST /khxspj/ */
export async function getAllKHXSPJ(
  body: {
    /** 教师ID */
    jsId?: string;
    /** 班级ID */
    bjId?: string;
    /** 评价类型 */
    PJLX?: string;
    /** 评价日期 */
    PJRQ?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHXSPJ[]; message?: string }>('/khxspj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建学生评价记录 PUT /khxspj/create */
export async function createKHXSPJ(body: API.CreateKHXSPJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJRQ?: string | any;
      PJLX?: '节次评价' | '总评价';
      PJFS?: string;
      PY?: string;
      JSId?: string;
      XSId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>('/khxspj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新学生评价记录 PUT /khxspj/update/${param0} */
export async function updateKHXSPJ(
  params: {
    // path
    /** 学生评价记录ID */
    id: string;
  },
  body: API.UpdateKHXSPJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxspj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
