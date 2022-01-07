// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务数据 GET /khfwsj/${param0} */
export async function getKHFWSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHFWSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      FWMC?: string;
      FWMS?: string;
      FWTP?: string;
      FWZT?: number;
      FWFY?: number;
      ZDKCS?: number;
      XQSJId?: string;
      XQSJ?: { id?: string; XQMC?: string; XQH?: string; XQDZ?: string };
      XNXQId?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string };
      NJSJs?: { id?: string; NJ?: number; NJMC?: string; XD?: string }[];
      KHBJSJs?: { id?: string; BJMC?: string; KCTP?: string }[];
    };
    message?: string;
  }>(`/khfwsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新课后服务数据 PUT /khfwsj/${param0} */
export async function updateKHFWSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHFWSJParams,
  body: API.UpdateKHFWSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khfwsj/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 删除课后服务数据 DELETE /khfwsj/${param0} */
export async function deleteKHFWSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHFWSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khfwsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 新增课后服务数据 PUT /khfwsj/create */
export async function createKHFWSJ(body: API.CreateKHFWSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      FWMC?: string;
      FWMS?: string;
      FWTP?: string;
      FWZT?: number;
      FWFY?: number;
      ZDKCS?: number;
      XQSJId?: string;
      XQSJ?: { id?: string; XQMC?: string; XQH?: string; XQDZ?: string };
      XNXQId?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string };
      NJSJs?: { id?: string; NJ?: number; NJMC?: string; XD?: string }[];
      KHBJSJs?: { id?: string; BJMC?: string; KCTP?: string }[];
    };
    message?: string;
  }>('/khfwsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取所有课后服务数据 POST /khfwsj/getAll */
export async function getAllKHFWSJ(
  body: {
    FWMC?: string;
    XNXQId?: string;
    FWZT?: number[];
    /** 年级IDs */
    NJSJIds?: string[];
    XQSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHFWSJ[] };
    message?: string;
  }>('/khfwsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
