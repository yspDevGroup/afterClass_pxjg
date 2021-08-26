// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教材数据 GET /jcsj/${param0} */
export async function getJCSJ(
  params: {
    // path
    /** 教材ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      JCBM?: string;
      JCMC?: string;
      ISBN?: string;
      ZZ?: string;
      BB?: string;
      YC?: string;
      DJ?: number;
      CBS?: string;
      FXBH?: string;
      CBRQ?: string | any;
      ZD?: string;
      KB?: string;
      ZS?: number;
      YS?: number;
      NRJJ?: string;
    };
    message?: string;
  }>(`/jcsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教材数据 DELETE /jcsj/${param0} */
export async function deleteJCSJ(
  params: {
    // path
    /** 课程ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jcsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取学校全部教材数据 GET /jcsj/xxdm/${param0} */
export async function getJCSJByXX(
  params: {
    // path
    /** 学校代码 */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; data?: API.JCSJ[]; message?: string }>(
    `/jcsj/xxdm/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 创建教材数据 PUT /jcsj/create */
export async function createJCSJ(body: API.CreateJCSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      JCBM?: string;
      JCMC?: string;
      ISBN?: string;
      ZZ?: string;
      BB?: string;
      YC?: string;
      DJ?: number;
      CBS?: string;
      FXBH?: string;
      CBRQ?: string | any;
      ZD?: string;
      KB?: string;
      ZS?: number;
      YS?: number;
      NRJJ?: string;
    };
    message?: string;
  }>('/jcsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教材数据 PUT /jcsj/update/${param0} */
export async function updateJCSJ(
  params: {
    // path
    /** 教材ID */
    id: string;
  },
  body: API.UpdateJCSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jcsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
