// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学科数据 PUT /xksj/create */
export async function createXKSJ(body: API.CreateXKSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; XKMC?: string; XD?: string };
    message?: string;
  }>('/xksj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学科数据 POST /xksj/getAll */
export async function getXKSJ(
  body: {
    /** 学段 */
    XD?: string;
    /** 学科名称 */
    XKMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.XKSJ[] };
    message?: string;
  }>('/xksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除学科数据 DELETE /xksj/${param0} */
export async function deleteXKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXKSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xksj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
