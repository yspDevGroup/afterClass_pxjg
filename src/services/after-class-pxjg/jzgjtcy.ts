// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师家庭成员 PUT /jzgjtcy/create */
export async function createJZGJTCY(body: API.CreateJZGJTCY, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GXM?: string;
      CYXM?: string;
      XBM?: string;
      CYGZDW?: string;
      ZYM?: string;
      ZYJSZWM?: string;
      ZWJBM?: string;
      ZZMMM?: string;
      CYLXDH?: string;
      HYZKM?: string;
      QJDM?: string;
    };
    message?: string;
  }>('/jzgjtcy/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取教师家庭成员 POST /jzgjtcy/getAll */
export async function getJZGJTCY(
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
    data?: { count?: number; rows?: API.JZGJTCY[] };
    message?: string;
  }>('/jzgjtcy/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除教师家庭成员 DELETE /jzgjtcy/${param0} */
export async function deleteJZGJTCY(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGJTCYParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgjtcy/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新教师家庭成员 PUT /jzgjtcy/update/${param0} */
export async function updateJZGJTCY(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGJTCYParams,
  body: API.UpdateJZGJTCY,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgjtcy/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
