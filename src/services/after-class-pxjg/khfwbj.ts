// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建课后服务-服务班 PUT /khfwbj/create */
export async function createKHFWBJ(
  body: {
    BJSJId: string;
    XNXQId: string;
    ZT?: number;
    FWMC: string;
    FWTP?: string;
    FWMS?: string;
    FWFY?: number;
    KXSL?: number;
    /** 缴费类型，0:按月缴费,1:自由缴费 */
    JFLX?: number;
    KSRQ?: string;
    JSRQ?: string;
    KHBJSJIds?: { KHBJSJId?: string; LX?: number }[];
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khfwbj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课后服务-服务班 POST /khfwbj/getDetail */
export async function getKHFWBJ(
  body: {
    BJSJId: string;
    XNXQId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khfwbj/getDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除课后服务-服务班 DELETE /khfwbj/${param0} */
export async function deleteKHFWBJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHFWBJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khfwbj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新课后服务-服务班 PUT /khfwbj/update/${param0} */
export async function updateKHFWBJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHFWBJParams,
  body: {
    BJSJId?: string;
    XNXQId?: string;
    ZT?: number;
    FWMC?: string;
    FWTP?: string;
    FWMS?: string;
    FWFY?: number;
    KXSL?: number;
    /** 缴费类型，0:按月缴费,1:自由缴费 */
    JFLX?: number;
    KSRQ?: string;
    JSRQ?: string;
    KHBJSJIds?: { KHBJSJId?: string; LX?: number }[];
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khfwbj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 学生批量报名服务班 PUT /khfwbj/studentRegistration */
export async function studentRegistration(
  body: {
    KHFWBJId: string;
    ZT: number;
    KHFWSJPZIds: string[];
    XSJBSJIds: string[];
    KHBJSJIds?: string[];
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/khfwbj/studentRegistration', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 查询学生列表通过行政班级 POST /khfwbj/getStudentListByBjid */
export async function getStudentListByBjid(
  body: {
    BJSJId: string;
    KHFWSJPZId?: string;
    XSXMORXH?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khfwbj/getStudentListByBjid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 对未选课的学生选课 POST /khfwbj/chooseKCByXSId */
export async function chooseKCByXSId(
  body: {
    XSJBSJId: string;
    KHFWBJId?: string;
    KHFWSJPZId?: string;
    /** 学生报名服务班对应的课程班状态，0:正常;1:退课中;2:已退课;3:报名未缴费 */
    ZT?: number;
    KHBJSJIds?: string[];
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khfwbj/chooseKCByXSId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
