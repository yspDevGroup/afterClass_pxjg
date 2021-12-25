// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取校内机构数据 GET /xnjgsj/${param0} */
export async function getXNJGSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getXNJGSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      LSJGH?: string;
      LSJGMC?: string;
      JGMC?: string;
      JGJC?: string;
      FZR?: { id?: string; GH?: string; XM?: string };
      JZGJBSJs?: { id?: string; GH?: string; XM?: string; LXDH?: string; DZXX?: string }[];
    };
    message?: string;
  }>(`/xnjgsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除校内机构数据 DELETE /xnjgsj/${param0} */
export async function deleteXNJGSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteXNJGSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xnjgsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有校内机构数据 POST /xnjgsj/getAll */
export async function getAllXNJGSJ(
  body: {
    /** 隶属机构号 */
    LSJGH?: string;
    /** 机构名称 */
    JGMC?: string;
    /** 负责人ID */
    FZRGH?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.XNJGSJ[] };
    message?: string;
  }>('/xnjgsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建校内机构数据 PUT /xnjgsj/create */
export async function createXNJGSJ(body: API.CreateXNJGSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      LSJGH?: string;
      LSJGMC?: string;
      JGMC?: string;
      JGJC?: string;
      FZR?: { id?: string; GH?: string; XM?: string };
      JZGJBSJs?: { id?: string; GH?: string; XM?: string; LXDH?: string; DZXX?: string }[];
    };
    message?: string;
  }>('/xnjgsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新校内机构数据 PUT /xnjgsj/update/${param0} */
export async function updateXNJGSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateXNJGSJParams,
  body: API.UpdateXNJGSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/xnjgsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 为校内机构添加成员 PUT /xnjgsj/createMembers */
export async function createMembers(
  body: {
    /** 机构ID */
    id: string;
    /** 教师ID数组 */
    jzgIds: string[];
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; message?: string }>('/xnjgsj/createMembers', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
