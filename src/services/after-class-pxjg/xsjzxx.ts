// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学生家长信息 PUT /xsjzxx/create */
export async function createXSJZXX(body: API.CreateXSJZXX, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; XM?: string; LXDH?: string; XB?: string };
    message?: string;
  }>('/xsjzxx/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生家长数据 GET /xsjzxx/${param0} */
export async function getXSJZXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getXSJZXXParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; XM?: string; LXDH?: string; XB?: string };
    message?: string;
  }>(`/xsjzxx/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除学生家长信息 DELETE /xsjzxx/${param0} */
export async function deleteXSJZXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXSJZXXParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xsjzxx/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学生家长信息 PUT /xsjzxx/update/${param0} */
export async function updateXSJZXX(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateXSJZXXParams,
  body: API.UpdateXSJZXX,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xsjzxx/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 建立学生与家长的联系 PUT /xsjzxx/createRelation */
export async function createRelation(
  body: {
    /** 关系 */
    GX: string;
    /** 微信OPEN_ID */
    OPEN_ID?: string;
    /** 学生ID */
    XSJBSJId: string;
    /** 家长ID */
    XSJZGXId: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { id?: string; GX?: string; OPEN_ID?: string; XSJBSJId?: string; XSJZGXId?: string };
    message?: string;
  }>('/xsjzxx/createRelation', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改学生与家长的联系 PUT /xsjzxx/updateRelation/${param0} */
export async function updateRelation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateRelationParams,
  body: {
    /** 关系 */
    GX?: string;
    /** 微信OPEN_ID */
    OPEN_ID?: string;
    /** 学生ID */
    XSJBSJId?: string;
    /** 家长ID */
    XSJZGXId?: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xsjzxx/updateRelation/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
