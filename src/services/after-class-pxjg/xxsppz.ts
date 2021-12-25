// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校审批配置 GET /xxsppz/${param0} */
export async function getXXSPPZ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getXXSPPZParams,
  options?: { [key: string]: any }
) {
  const { xxId: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
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
    status: 'ok' | 'error';
    data?: {
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
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXXSPPZParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xxsppz/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}
