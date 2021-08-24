// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取校区数据 GET /xqsj/${param0} */
export async function getXQSJ(
  params: {
    // path
    /** 校区ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XQH?: string;
      XQMC?: string;
      XQDZ?: string;
      XQYZBM?: string;
      XQLXDH?: string;
      XQCZDH?: string;
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      JZGJBSJ?: { id?: string; GH?: string; XM?: string; YWXM?: string; XMPY?: string };
    };
    message?: string;
  }>(`/xqsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除校区数据 DELETE /xqsj/${param0} */
export async function deleteXQSJ(
  params: {
    // path
    /** 校区ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xqsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有校区数据 GET /xqsj/all */
export async function getAllXQSJ(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: API.XQSJ[]; message?: string }>('/xqsj/all', {
    method: 'GET',
    ...(options || {})
  });
}

/** 创建校区数据 PUT /xqsj/create */
export async function createXQSJ(body: API.CreateXQSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XQH?: string;
      XQMC?: string;
      XQDZ?: string;
      XQYZBM?: string;
      XQLXDH?: string;
      XQCZDH?: string;
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      JZGJBSJ?: { id?: string; GH?: string; XM?: string; YWXM?: string; XMPY?: string };
    };
    message?: string;
  }>('/xqsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新校区数据 PUT /xqsj/update/${param0} */
export async function updateXQSJ(
  params: {
    // path
    /** 校区ID */
    id: string;
  },
  body: API.UpdateXQSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xqsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
