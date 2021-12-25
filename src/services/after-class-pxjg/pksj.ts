// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询所有排课数据 POST /pksj/getAll */
export async function getAllPKSJ(
  body: {
    /** 班级ID */
    BJSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.PKSJ[]; message?: string }>('/pksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建排课数据 PUT /pksj/create */
export async function createPKSJ(body: API.CreatePKSJ[], options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; message?: string }>('/pksj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除排课数据 DELETE /pksj/${param0} */
export async function deletePKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePKSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/pksj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新排课数据 PUT /pksj/update/${param0} */
export async function updatePKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePKSJParams,
  body: API.UpdatePKSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/pksj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 查找教师课表 POST /pksj/getByTeacher */
export async function getByTeacher(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    /** 教师ID */
    JZGJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.Schedule[]; message?: string }>('/pksj/getByTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 查询所有排课数据,并根据年级班级分组 POST /pksj/allGroupByNJ */
export async function allGroupByNJ(
  body: {
    /** 班级ID */
    BJSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 学年学期ID */
    XNXQId: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.Schedule[]; message?: string }>('/pksj/allGroupByNJ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
