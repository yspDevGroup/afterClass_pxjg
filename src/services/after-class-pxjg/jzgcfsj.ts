// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师惩罚信息 PUT /jzgcfsj/create */
export async function createJZGCFSJ(body: API.CreateJZGCFSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      MC?: string;
      RQ?: string | any;
      ZZJG?: string;
      CFYY?: string;
      LY?: string;
    };
    message?: string;
  }>('/jzgcfsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师惩罚信息 POST /jzgcfsj/getAll */
export async function getJZGCFSJ(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.JZGCFSJ[] };
    message?: string;
  }>('/jzgcfsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师惩罚信息 DELETE /jzgcfsj/${param0} */
export async function deleteJZGCFSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGCFSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgcfsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师惩罚信息 PUT /jzgcfsj/update/${param0} */
export async function updateJZGCFSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGCFSJParams,
  body: API.UpdateJZGCFSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgcfsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
