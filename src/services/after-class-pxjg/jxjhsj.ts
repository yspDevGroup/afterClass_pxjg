// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教学计划数据 GET /jxjhsj/${param0} */
export async function getJXJHSJ(
  params: {
    // path
    /** 教学计划ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KCH?: string;
      SKNJ?: string;
      SKXN?: string;
      SKXQM?: string;
      KSFSM?: string;
      KCSJId?: string;
    };
    message?: string;
  }>(`/jxjhsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教学计划数据 DELETE /jxjhsj/${param0} */
export async function deleteJXJHSJ(
  params: {
    // path
    /** 教学计划ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jxjhsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取学校全部教学计划数据 GET /jxjhsj/xxdm/${param0} */
export async function getJXJHSJByXX(
  params: {
    // path
    /** 学校代码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; data?: API.JXJHSJ[]; message?: string }>(
    `/jxjhsj/xxdm/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 创建教学计划数据 PUT /jxjhsj/create */
export async function createJXJHSJ(body: API.CreateJXJHSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KCH?: string;
      SKNJ?: string;
      SKXN?: string;
      SKXQM?: string;
      KSFSM?: string;
      KCSJId?: string;
    };
    message?: string;
  }>('/jxjhsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教学计划数据 PUT /jxjhsj/update/${param0} */
export async function updateJXJHSJ(
  params: {
    // path
    /** 教学计划ID */
    id: string;
  },
  body: API.UpdateJXJHSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jxjhsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
