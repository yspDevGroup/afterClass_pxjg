// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取作息方案数据 GET /zxfa/${param0} */
export async function getZXFA(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getZXFAParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      FAMC?: string;
      KSRQ?: string | any;
      JSRQ?: string | any;
      QSSJ?: string;
      SM?: string;
      SFQY?: number;
      ZXSJs?: {
        id?: string;
        MC?: string;
        SD?: string;
        SX?: string;
        KSSJ?: string;
        JSSJ?: string;
        SYXQ?: string;
        SC?: number;
        BH?: number;
      }[];
    };
    message?: string;
  }>(`/zxfa/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除作息方案数据 DELETE /zxfa/${param0} */
export async function deleteZXFA(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteZXFAParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/zxfa/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有作息方案数据 POST /zxfa/ */
export async function getAllZXFA(
  body: {
    /** 校区ID */
    XQSJId?: string;
    /** 方案名称 */
    FAMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: API.ZXFA[]; message?: string }>('/zxfa/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建作息方案数据 PUT /zxfa/create */
export async function createZXFA(body: API.CreateZXFA, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      FAMC?: string;
      KSRQ?: string | any;
      JSRQ?: string | any;
      QSSJ?: string;
      SM?: string;
      SFQY?: number;
      ZXSJs?: {
        id?: string;
        MC?: string;
        SD?: string;
        SX?: string;
        KSSJ?: string;
        JSSJ?: string;
        SYXQ?: string;
        SC?: number;
        BH?: number;
      }[];
    };
    message?: string;
  }>('/zxfa/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新作息方案数据 PUT /zxfa/update/${param0} */
export async function updateZXFA(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateZXFAParams,
  body: API.UpdateZXFA,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/zxfa/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
