// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师工作简历 PUT /jzggzjl/create */
export async function createJZGGZJL(body: API.CreateJZGGZJL, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GZQSRQ?: string;
      GZZZRQ?: string | any;
      GZDW?: string;
      GZNR?: string;
      CRDZZW?: string;
      CRZYJSZWM?: string;
      GZZMR?: string;
      GZJLBZ?: string;
    };
    message?: string;
  }>('/jzggzjl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取教师工作简历 POST /jzggzjl/getAll */
export async function getJZGGZJL(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.JZGGZJL[] };
    message?: string;
  }>('/jzggzjl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除教师工作简历 DELETE /jzggzjl/${param0} */
export async function deleteJZGGZJL(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGGZJLParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzggzjl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新教师工作简历 PUT /jzggzjl/update/${param0} */
export async function updateJZGGZJL(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGGZJLParams,
  body: API.UpdateJZGGZJL,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzggzjl/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
