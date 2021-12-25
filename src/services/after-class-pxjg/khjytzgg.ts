// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取课后教育机构通知公告 GET /khjytzgg/${param0} */
export async function KHJYTZGG(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.KHJYTZGGParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      BT?: string;
      FBT?: string;
      GJC?: string;
      ZT?: string;
      LX?: number;
      BH?: number;
      ZY?: string;
      TP?: string;
      ZZ?: string;
      RQ?: string;
      LY?: string;
      SFTT?: number;
      SFTJ?: number;
      NR?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>(`/khjytzgg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后教育机构通知公告 DELETE /khjytzgg/${param0} */
export async function deleteKHJYTZGG(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHJYTZGGParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjytzgg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建课后教育机构通知公告 PUT /khjytzgg/create */
export async function createKHJYTZGG(body: API.CreateKHJYTZGG, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      BT?: string;
      FBT?: string;
      GJC?: string;
      ZT?: string;
      LX?: number;
      BH?: number;
      ZY?: string;
      TP?: string;
      ZZ?: string;
      RQ?: string;
      LY?: string;
      SFTT?: number;
      SFTJ?: number;
      NR?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/khjytzgg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课后教育机构通知公告 POST /khjytzgg/getAll */
export async function getKHJYTZGG(
  body: {
    /** 标题 */
    BT?: string;
    /** 类型 */
    LX?: number;
    /** 机构ID */
    KHJYJGId: string;
    /** 状态 */
    ZT: string[];
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJYTZGG[] };
    message?: string;
  }>('/khjytzgg/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后教育机构通知公告 PUT /khjytzgg/update/${param0} */
export async function updateKHJYTZGG(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHJYTZGGParams,
  body: API.UpdateKHJYTZGG,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjytzgg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
