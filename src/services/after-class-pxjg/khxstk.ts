// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取退款记录详情 GET /khxstk/${param0} */
export async function getKHXSTK(
  params: {
    // path
    /** 退款记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      TKBH?: string;
      TKJE?: number;
      TKZT?: number;
      TKSJ?: string;
      SPSJ?: string;
      XSId?: string;
      XSXM?: string;
      createdAt?: string;
      KHBJSJId?: string;
      KHXSDDId?: string;
      XXJBSJId?: string;
    };
    message?: string;
  }>(`/khxstk/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除退款记录 DELETE /khxstk/${param0} */
export async function deleteKHXSTK(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxstk/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有退款记录 POST /khxstk/ */
export async function getAllKHXSTK(
  body: {
    /** 退款状态 */
    TKZT?: number[];
    /** 学生ID */
    XSId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 班级ID */
    KHBJSJId?: string;
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
    data?: { count?: number; rows?: API.KHXSTK[] };
    message?: string;
  }>('/khxstk/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建退款记录 PUT /khxstk/create */
export async function createKHXSTK(body: API.CreateKHXSTK, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      TKBH?: string;
      TKJE?: number;
      TKZT?: number;
      TKSJ?: string;
      SPSJ?: string;
      XSId?: string;
      XSXM?: string;
      createdAt?: string;
      KHBJSJId?: string;
      KHXSDDId?: string;
      XXJBSJId?: string;
    };
    message?: string;
  }>('/khxstk/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新退款记录 PUT /khxstk/update/${param0} */
export async function updateKHXSTK(
  params: {
    // path
    /** 退款记录ID */
    id: string;
  },
  body: API.UpdateKHXSTK,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxstk/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
