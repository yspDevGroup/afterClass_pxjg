// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建课后增值服务 PUT /khzzfw/create */
export async function createKHZZFW(body: API.CreateKHZZFW, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      FWMC?: string;
      FWNR?: string;
      FWJGMC?: string;
      FWZT?: number;
      NJSJs?: { id?: string; NJ?: number; NJMC?: string; XD?: string }[];
    };
    message?: string;
  }>('/khzzfw/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课后增值服务 POST /khzzfw/getAll */
export async function getKHZZFW(
  body: {
    /** 学校ID */
    XXJBSJId: string;
    /** 状态 */
    FWZT?: number;
    /** 服务名称 */
    FWMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHZZFW[] };
    message?: string;
  }>('/khzzfw/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除课后增值服务 DELETE /khzzfw/${param0} */
export async function deleteKHZZFW(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHZZFWParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khzzfw/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新课后增值服务 PUT /khzzfw/update/${param0} */
export async function updateKHZZFW(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHZZFWParams,
  body: API.UpdateKHZZFW,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khzzfw/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 通过学校id筛选课后增值服务 POST /khzzfw/getAllFWByschooId */
export async function getAllFWByschooId(
  body: {
    /** 学校ID */
    XXJBSJId: string;
    /** 年级ID */
    NJSJId?: string;
    /** 状态 */
    FWZT?: number;
    /** 服务名称 */
    FWMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khzzfw/getAllFWByschooId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
