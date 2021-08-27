// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取课后课程申请记录 GET /khkcsq/${param0} */
export async function KHKCSQ(
  params: {
    // path
    /** 课程申请记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZT?: number;
      BZ?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
      RZSJ?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>(`/khkcsq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后课程申请记录 DELETE /khkcsq/${param0} */
export async function deleteKHKCSQ(
  params: {
    // path
    /** 课程申请记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khkcsq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建课后课程申请记录 PUT /khkcsq/create */
export async function createKHKCSQ(body: API.CreateKHKCSQ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZT?: number;
      BZ?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
      RZSJ?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/khkcsq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课后课程申请记录 POST /khkcsq/getAll */
export async function getKHKCSQ(
  body: {
    /** 机构ID */
    JGId?: string;
    /** 课程引入状态 */
    ZT?: number[];
    /** 课程名称 */
    KCMC?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 班级状态 */
    BJZT?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khkcsq/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后课程申请记录 PUT /khkcsq/update/${param0} */
export async function updateKHKCSQ(
  params: {
    // path
    /** 课程申请记录ID */
    id: string;
  },
  body: API.UpdateKHKCSQ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khkcsq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
