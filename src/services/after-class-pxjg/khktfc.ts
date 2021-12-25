// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课堂风采记录详情 GET /khktfc/${param0} */
export async function getKHKTFC(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHKTFCParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      NR?: string;
      TP?: string;
      createdAt?: string;
      KHBJSJId?: string;
      JZGJBSJId?: string;
    };
    message?: string;
  }>(`/khktfc/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课堂风采记录 DELETE /khktfc/${param0} */
export async function deleteKHKTFC(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHKTFCParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khktfc/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课堂风采记录 POST /khktfc/ */
export async function getAllKHKTFC(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 学生数据ID */
    XSJBSJId?: string;
    /** 学校ID */
    XXJBSJId: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: any[] };
    message?: string;
  }>('/khktfc/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课堂风采记录 PUT /khktfc/create */
export async function createKHKTFC(body: API.CreateKHKTFC, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      NR?: string;
      TP?: string;
      createdAt?: string;
      KHBJSJId?: string;
      JZGJBSJId?: string;
    };
    message?: string;
  }>('/khktfc/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课堂风采记录 PUT /khktfc/update/${param0} */
export async function updateKHKTFC(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHKTFCParams,
  body: API.UpdateKHKTFC,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khktfc/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 筛选所有课堂风采记录 POST /khktfc/getAllpresence */
export async function getAllpresence(
  body: {
    /** 学年学期id */
    XNXQId: string;
    /** 课程id */
    KHKCId?: string;
    /** 课后班级id */
    KHBJId?: string;
    /** 课后课程来源 */
    KHKCLY?: string;
    /** 课后课程教师姓名 */
    KHKCJSXM?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khktfc/getAllpresence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
