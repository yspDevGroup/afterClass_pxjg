// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务教师请假记录 GET /khjsqj/${param0} */
export async function getKHJSQJ(
  params: {
    // path
    /** 教师请假记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      QJSC?: number;
      QJYY?: string;
      QJZT?: number;
    };
    message?: string;
  }>(`/khjsqj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后服务教师请假记录 DELETE /khjsqj/${param0} */
export async function deleteKHJSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjsqj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后服务教师请假记录 POST /khjsqj/ */
export async function getAllKHJSQJ(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 教师ID */
    JSId?: string;
    /** 请假状态 */
    QJZT?: number[];
    /** 请假类型 */
    QJLX?: string;
    /** 请假日期 */
    QJRQ?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJSQJ[] };
    message?: string;
  }>('/khjsqj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后服务教师请假记录 PUT /khjsqj/create */
export async function createKHJSQJ(body: API.CreateKHJSQJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      QJSC?: number;
      QJYY?: string;
      QJZT?: number;
    };
    message?: string;
  }>('/khjsqj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后服务教师请假记录 PUT /khjsqj/update/${param0} */
export async function updateKHJSQJ(
  params: {
    // path
    /** 教师请假记录ID */
    id: string;
  },
  body: API.UpdateKHJSQJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjsqj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
