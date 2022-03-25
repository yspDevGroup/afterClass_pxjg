// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务-课程班上课时间安排 POST /kcbsksj/getAll */
export async function getKCBSKSJ(
  body: {
    KHBJSJId?: string[];
    XNXQId?: string;
    XN?: string;
    XQ?: string;
    JZGJBSJId?: string;
    startDate?: string;
    endDate?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/kcbsksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重新计算已有数据 GET /kcbsksj/calcAllPeriod */
export async function calcAllPeriod(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; message?: string }>('/kcbsksj/calcAllPeriod', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有已开班的班级ID GET /kcbsksj/getAllClassIds */
export async function getAllClassIds(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string[]; message?: string }>(
    '/kcbsksj/getAllClassIds',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 合并重复教师 GET /kcbsksj/mergeTeachers */
export async function mergeTeachers(options?: { [key: string]: any }) {
  return request<any>('/kcbsksj/mergeTeachers', {
    method: 'GET',
    ...(options || {}),
  });
}
