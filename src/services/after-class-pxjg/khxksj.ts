// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建巡课安排 PUT /khxksj/create */
export async function createKHXKSJ(body: API.CreateKHXKSJ[], options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/khxksj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取巡课安排 POST /khxksj/getAll */
export async function getKHXKSJ(
  body: {
    /** 学校ID */
    XXJBSJId: string;
    /** 日期 */
    RQ?: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXKSJ[] };
    message?: string;
  }>('/khxksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 删除巡课安排 DELETE /khxksj */
export async function deleteKHXKSJ(
  body: {
    /** 巡课日期 */
    RQ?: string;
    /** 学校ID */
    XXJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; message?: string }>('/khxksj', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新巡课安排 PUT /khxksj/update */
export async function updateKHXKSJ(body: API.UpdateKHXKSJ[], options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; message?: string }>('/khxksj/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据日期查询当天的排课数据 POST /khxksj/getScheduleByDate */
export async function getScheduleByDate(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 日期 */
    RQ: string;
    /** 周几 */
    WEEKDAY: string;
    /** 学校ID */
    XXJBSJId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khxksj/getScheduleByDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据日期区间和教师id查询巡课记录 POST /khxksj/getXKrecordBydate */
export async function getXKrecordBydate(
  body: {
    /** 教师ID */
    JZGJBSJId: string;
    /** 开始日期 */
    StarDate: string;
    /** 结束日期 */
    EndDate: string;
    /** 学校ID */
    XXJBSJId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khxksj/getXKrecordBydate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据课程ID查询当天的排课数据 POST /khxksj/getCourseSchedule */
export async function getCourseSchedule(
  body: {
    /** 课程ID */
    KHKCSJId: string;
    /** 日期 */
    RQ: string;
    /** 周几 */
    WEEKDAY: string;
    /** 学校ID */
    XXJBSJId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khxksj/getCourseSchedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
