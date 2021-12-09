// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校审批配置 GET /xxsppz/${param0} */
export async function getXXSPPZ(
  params: {
    // path
    /** 学校ID */
    xxId: string;
  },
  options?: { [key: string]: any }
) {
  const { xxId: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      JSQJ?: boolean;
      XSQJ?: boolean;
      JSTK?: boolean;
      JSDK?: boolean;
      XSTK?: boolean;
      JSBQ?: boolean;
      JSBQ_KSRQ?: string;
      JSBQ_JSRQ?: string;
    };
    message?: string;
  }>(`/xxsppz/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建/更新学校审批配置 PUT /xxsppz/create */
export async function createXXSPPZ(body: API.CreateXXSPPZ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      JSQJ?: boolean;
      XSQJ?: boolean;
      JSTK?: boolean;
      JSDK?: boolean;
      XSTK?: boolean;
      JSBQ?: boolean;
      JSBQ_KSRQ?: string;
      JSBQ_JSRQ?: string;
    };
    message?: string;
  }>('/xxsppz/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除学校审批配置 DELETE /xxsppz/${param0} */
export async function deleteXXSPPZ(
  params: {
    // path
    /** 学校审批配置ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxsppz/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}
