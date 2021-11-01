// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务教师出勤记录 GET /khjscq/${param0} */
export async function getKHJSCQ(
  params: {
    // path
    /** 教师出勤记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      CQZT?: '出勤' | '请假' | '缺席' | '代课';
      CQRQ?: string;
      XXSJPZId?: string;
      JZGJBSJId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>(`/khjscq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后服务教师出勤记录 DELETE /khjscq/${param0} */
export async function deleteKHJSCQ(
  params: {
    // path
    /** 教师出勤记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjscq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后服务教师出勤记录 POST /khjscq/getAll */
export async function getAllKHJSCQ(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 出勤状态 */
    CQZT?: string;
    /** 出勤日期 */
    CQRQ?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHJSCQ[]; message?: string }>(
    '/khjscq/getAll',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 创建课后服务教师出勤记录 PUT /khjscq/create */
export async function createKHJSCQ(body: API.CreateKHJSCQ[], options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      CQZT?: '出勤' | '请假' | '缺席' | '代课';
      CQRQ?: string;
      XXSJPZId?: string;
      JZGJBSJId?: string;
      KHBJSJId?: string;
    };
    message?: string;
  }>('/khjscq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后服务教师出勤记录 PUT /khjscq/update/${param0} */
export async function updateKHJSCQ(
  params: {
    // path
    /** 教师出勤记录ID */
    id: string;
  },
  body: API.UpdateKHJSCQ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjscq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 教师出勤记录统计 POST /khjscq/statistical */
export async function countKHJSCQ(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      KHBJSJId?: string;
      KSS?: number;
      KCMC?: string;
      BJMC?: string;
      attendance?: number;
      absenteeism?: number;
      leave?: number;
      substitute?: number;
    }[];
    message?: string;
  }>('/khjscq/statistical', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 教师代课统计 POST /khjscq/statisSubstitute */
export async function statisSubstitute(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjscq/statisSubstitute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
