// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取校区数据 GET /xqsj/${param0} */
export async function getXQSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getXQSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      XQH?: string;
      XQMC?: string;
      XQDZ?: string;
      XQYZBM?: string;
      XQLXDH?: string;
      XQCZDH?: string;
    };
    message?: string;
  }>(`/xqsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除校区数据 DELETE /xqsj/${param0} */
export async function deleteXQSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXQSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xqsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有校区数据 POST /xqsj/all */
export async function getAllXQSJ(
  body: {
    XXJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: API.XQSJ[]; message?: string }>('/xqsj/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建校区数据 PUT /xqsj/create */
export async function createXQSJ(body: API.CreateXQSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      XQH?: string;
      XQMC?: string;
      XQDZ?: string;
      XQYZBM?: string;
      XQLXDH?: string;
      XQCZDH?: string;
    };
    message?: string;
  }>('/xqsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新校区数据 PUT /xqsj/update/${param0} */
export async function updateXQSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateXQSJParams,
  body: API.UpdateXQSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xqsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
