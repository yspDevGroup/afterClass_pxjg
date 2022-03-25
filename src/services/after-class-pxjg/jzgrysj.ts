// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建教师荣誉信息 PUT /jzgrysj/create */
export async function createJZGRYSJ(body: API.CreateJZGRYSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      JB?: string;
      LX?: string;
      MC?: string;
      RQ?: string | any;
      ZZJG?: string;
      HJYY?: string;
      LY?: string;
      BSMC?: string;
      JX?: string;
      NR?: string;
    };
    message?: string;
  }>('/jzgrysj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师荣誉信息 POST /jzgrysj/getAll */
export async function getJZGRYSJ(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 级别 */
    JB?: string;
    /** 来源 */
    LY?: string;
    /** 荣誉类型 */
    LX?: string[];
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.JZGRYSJ[] };
    message?: string;
  }>('/jzgrysj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师荣誉信息 DELETE /jzgrysj/${param0} */
export async function deleteJZGRYSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGRYSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgrysj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师荣誉信息 PUT /jzgrysj/update/${param0} */
export async function updateJZGRYSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGRYSJParams,
  body: API.UpdateJZGRYSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgrysj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
