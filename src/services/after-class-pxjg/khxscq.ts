// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务出勤记录 GET /khxscq/${param0} */
export async function getKHXSCQ(
  params: {
    // path
    /** 出勤记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      CQZT?: '出勤' | '请假' | '缺席';
      CQRQ?: string | any;
      KHPKSJId?: string;
      XSJBSJ?: { id?: string; XH?: string; XM?: string; WechatUserId?: string };
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '待开班' | '已开班' | '已结课';
        BJRS?: number;
        KSS?: number;
        FY?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
      };
    };
    message?: string;
  }>(`/khxscq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后服务出勤记录 DELETE /khxscq/${param0} */
export async function deleteKHXSCQ(
  params: {
    // path
    /** 出勤记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxscq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后服务出勤记录 POST /khxscq/ */
export async function getAllKHXSCQ(
  body: {
    /** 学生ID */
    xsId?: string;
    /** 班级ID */
    bjId?: string;
    /** 出勤状态 */
    CQZT?: string;
    /** 出勤日期 */
    CQRQ?: string;
    /** 课程排课ID */
    pkId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHXSCQ[]; message?: string }>('/khxscq/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后服务出勤记录 PUT /khxscq/create */
export async function createKHXSCQ(body: API.CreateKHXSCQ[], options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      CQZT?: '出勤' | '请假' | '缺席';
      CQRQ?: string | any;
      KHPKSJId?: string;
      XSJBSJ?: { id?: string; XH?: string; XM?: string; WechatUserId?: string };
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '待开班' | '已开班' | '已结课';
        BJRS?: number;
        KSS?: number;
        FY?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
      };
    };
    message?: string;
  }>('/khxscq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后服务出勤记录 PUT /khxscq/update/${param0} */
export async function updateKHXSCQ(
  params: {
    // path
    /** 出勤记录ID */
    id: string;
  },
  body: API.UpdateKHXSCQ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxscq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 学生出勤记录统计 POST /khxscq/statistical */
export async function countKHXSCQ(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      KHBJSJId?: string;
      KCMC?: string;
      BJMC?: string;
      normal?: number;
      abnormal?: number;
      remain?: number;
    }[];
    message?: string;
  }>('/khxscq/statistical', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
