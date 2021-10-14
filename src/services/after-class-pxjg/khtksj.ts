// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建课后服务退课记录 PUT /khtksj/create */
export async function createKHTKSJ(body: API.CreateKHTKSJ[], options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; message?: string }>('/khtksj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课后服务退课记录 POST /khtksj/getAll */
export async function getKHTKSJ(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课后服务班级ID */
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
    data?: { count?: number; rows?: API.KHTKSJ[] };
    message?: string;
  }>('/khtksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除课后服务退课记录 DELETE /khtksj/${param0} */
export async function deleteKHTKSJ(
  params: {
    // path
    /** 课后服务退课记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khtksj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新课后服务退课记录 PUT /khtksj/update/${param0} */
export async function updateKHTKSJ(
  params: {
    // path
    /** 课后服务退课记录ID */
    id: string;
  },
  body: API.UpdateKHTKSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khtksj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取学生退课信息 POST /khtksj/getAllTK */
export async function getAllTK(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 行政区划码 */
    XZQHM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    XXJBSJId?: string | any;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHTKSJ[] };
    message?: string;
  }>('/khtksj/getAllTK', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构端获取学生退课信息 POST /khtksj/getAllTKByAgency */
export async function getAllTKByAgency(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 班级ID */
    KHBJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 机构ID */
    KHJYJGId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHTKSJ[] };
    message?: string;
  }>('/khtksj/getAllTKByAgency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
