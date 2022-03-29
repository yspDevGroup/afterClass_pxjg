// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询所有教师登录用户 POST /teacherUser/getAll */
export async function getAllTeacherUser(
  body: {
    /** 启用状态 */
    status?: number;
    /** 企微ID */
    CorpID: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/teacherUser/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建教师登录用户 PUT /teacherUser/create */
export async function CreateTeacherUser(
  body: API.CreateTeacherUser,
  options?: { [key: string]: any },
) {
  return request<any>('/teacherUser/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教师登录用户 PUT /teacherUser/update/${param0} */
export async function updateTeacherUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTeacherUserParams,
  body: API.updateTeacherUser,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/teacherUser/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 重名检测 POST /teacherUser/checkUsername */
export async function checkUsername(
  body: {
    /** 用户名 */
    username: string;
    /** 机构企微ID */
    CorpID: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/teacherUser/checkUsername', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师登录用户 DELETE /teacherUser/${param0} */
export async function DeleteTeacherUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteTeacherUserParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/teacherUser/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
