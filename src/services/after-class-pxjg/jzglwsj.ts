// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师论文信息 PUT /jzglwsj/create */
export async function createJZGLWSJ(body: API.CreateJZGLWSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      MC?: string;
      BH?: string;
      RQ?: string | any;
      CBH?: string;
      KW?: string;
      KWJB?: string;
      QS?: string;
      NR?: string;
      LY?: string;
    };
    message?: string;
  }>('/jzglwsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取教师论文信息 POST /jzglwsj/getAll */
export async function getJZGLWSJ(
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
    data?: { count?: number; rows?: API.JZGLWSJ[] };
    message?: string;
  }>('/jzglwsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除教师论文信息 DELETE /jzglwsj/${param0} */
export async function deleteJZGLWSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGLWSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzglwsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新教师论文信息 PUT /jzglwsj/update/${param0} */
export async function updateJZGLWSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGLWSJParams,
  body: API.UpdateJZGLWSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzglwsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
