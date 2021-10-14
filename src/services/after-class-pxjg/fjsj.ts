// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取房间数据 GET /fjsj/${param0} */
export async function getFJSJ(
  params: {
    // path
    /** 房间ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      FJBH?: string;
      FJMC?: string;
      FJLC?: string;
      FJJZMJ?: number;
      FJSYMJ?: number;
      FJRS?: number;
      JXL?: string;
      BZXX?: string;
      XQ?: string;
      XQName?: string;
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      FJLX?: { id?: string; FJLX?: string };
    };
    message?: string;
  }>(`/fjsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除房间数据 DELETE /fjsj/${param0} */
export async function deleteFJSJ(
  params: {
    // path
    /** 房间ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/fjsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有房间数据 POST /fjsj/ */
export async function getAllFJSJ(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 场地类型ID */
    lxId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
    /** 场地名称 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.FJSJ[] };
    message?: string;
  }>('/fjsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建房间数据 PUT /fjsj/create */
export async function createFJSJ(body: API.CreateFJSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      FJBH?: string;
      FJMC?: string;
      FJLC?: string;
      FJJZMJ?: number;
      FJSYMJ?: number;
      FJRS?: number;
      JXL?: string;
      BZXX?: string;
      XQ?: string;
      XQName?: string;
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      FJLX?: { id?: string; FJLX?: string };
    };
    message?: string;
  }>('/fjsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新房间数据 PUT /fjsj/update/${param0} */
export async function updateFJSJ(
  params: {
    // path
    /** 房间ID */
    id: string;
  },
  body: API.UpdateFJSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/fjsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 查询房间占用情况 POST /fjsj/plan */
export async function getFJPlan(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 场地类型ID */
    lxId?: string;
    /** 场地ID */
    fjId?: string;
    /** 班级ID */
    bjId?: string;
    /** 课程ID */
    kcId?: string;
    /** 教师姓名 */
    JSXM?: string;
    /** 是否有排课 */
    isPk?: boolean;
    /** 学年 */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/fjsj/plan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
