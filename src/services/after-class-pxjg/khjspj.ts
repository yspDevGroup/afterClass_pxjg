// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教师评价记录详情 GET /khjspj/${param0} */
export async function getKHJSPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHJSPJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      PJFS?: number;
      PY?: string;
      JSId?: string;
      KHBJSJId?: string;
      XSJBSJ?: { id?: string; XH?: string; XM?: string; WechatUserId?: string };
    };
    message?: string;
  }>(`/khjspj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除教师评价记录 DELETE /khjspj/${param0} */
export async function deleteKHJSPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHJSPJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjspj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有教师评价记录 POST /khjspj/ */
export async function getAllKHJSPJ(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 班级ID */
    bjId?: string;
    /** 评价类型 */
    PJLX?: string;
    /** 评价日期 */
    PJRQ?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHJSPJ[]; message?: string }>('/khjspj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建教师评价记录 PUT /khjspj/create */
export async function createKHJSPJ(body: API.CreateKHJSPJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      PJFS?: number;
      PY?: string;
      JSId?: string;
      KHBJSJId?: string;
      XSJBSJ?: { id?: string; XH?: string; XM?: string; WechatUserId?: string };
    };
    message?: string;
  }>('/khjspj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新教师评价记录 PUT /khjspj/update/${param0} */
export async function updateKHJSPJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHJSPJParams,
  body: API.UpdateKHJSPJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjspj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
