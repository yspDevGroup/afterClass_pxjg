// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取课后课程申请记录 GET /khkcsq/${param0} */
export async function KHKCSQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.KHKCSQParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      ZT?: number;
      BZ?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
      RZSJ?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>(`/khkcsq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后课程申请记录 DELETE /khkcsq/${param0} */
export async function deleteKHKCSQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHKCSQParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkcsq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 创建课后课程申请记录 PUT /khkcsq/create */
export async function createKHKCSQ(body: API.CreateKHKCSQ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      ZT?: number;
      BZ?: string;
      SQR?: string;
      SQRId?: string;
      SPR?: string;
      SPRId?: string;
      RZSJ?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/khkcsq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课后课程申请记录 POST /khkcsq/getAll */
export async function getKHKCSQ(
  body: {
    /** 机构ID */
    JGId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 课程引入状态 */
    ZT?: number[];
    /** 课程名称 */
    KCMC?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 班级状态 */
    BJZT?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khkcsq/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后课程申请记录 PUT /khkcsq/update/${param0} */
export async function updateKHKCSQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHKCSQParams,
  body: API.UpdateKHKCSQ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khkcsq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 学校查看机构课程的历史记录 POST /khkcsq/getHistoriesBySchool */
export async function getHistoriesBySchool(
  body: {
    /** 课程名称 */
    KCMC?: string;
    /** 课后教育机构名称 */
    KHJYJG?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khkcsq/getHistoriesBySchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 学校查看机构待引入课程 POST /khkcsq/getToIntroduceBySchool */
export async function getToIntroduceBySchool(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 课程所属学段 */
    XD?: string[];
    /** 课后教育机构名称 */
    KHJYJG?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khkcsq/getToIntroduceBySchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
