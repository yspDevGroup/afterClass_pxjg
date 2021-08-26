// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学生家庭成员 PUT /xsjtcy/create */
export async function createXSJTCY(body: API.CreateXSJTCY, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      GXM?: string;
      CYXM?: string;
      CSNY?: string;
      MZM?: string;
      GJDQM?: string;
      JKZKM?: string;
      CYGZDW?: string;
      CYEM?: string;
      ZYJSZWM?: string;
      ZWJBM?: string;
      DH?: string;
      DZXX?: string;
      SFJHR?: string;
      XBM?: string;
      XLM?: string;
      LXDZ?: string;
      SJHM?: string;
    };
    message?: string;
  }>('/xsjtcy/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生家庭成员 POST /xsjtcy/getAll */
export async function getXSJTCY(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.XSJTCY[] };
    message?: string;
  }>('/xsjtcy/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除学生家庭成员 DELETE /xsjtcy/${param0} */
export async function deleteXSJTCY(
  params: {
    // path
    /** 学生家庭成员ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjtcy/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新学生家庭成员 PUT /xsjtcy/update/${param0} */
export async function updateXSJTCY(
  params: {
    // path
    /** 学生家庭成员数据ID */
    id: string;
  },
  body: API.UpdateXSJTCY,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjtcy/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
