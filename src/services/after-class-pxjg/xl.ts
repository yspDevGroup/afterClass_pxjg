// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取校历数据 GET /xl/${param0} */
export async function getXL(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getXLParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      BT?: string;
      KSRQ?: string;
      JSRQ?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string; JSRQ?: string };
    };
    message?: string;
  }>(`/xl/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除校历数据 DELETE /xl/${param0} */
export async function deleteXL(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXLParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有校历数据 POST /xl/getAll */
export async function getAllXL(
  body: {
    /** 标题 */
    BT?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.XL[] };
    message?: string;
  }>('/xl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建校历数据 PUT /xl/create */
export async function createXL(body: API.CreateXL, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      BT?: string;
      KSRQ?: string;
      JSRQ?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string; JSRQ?: string };
    };
    message?: string;
  }>('/xl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新校历数据 PUT /xl/update/${param0} */
export async function updateXL(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateXLParams,
  body: API.UpdateXL,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xl/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
