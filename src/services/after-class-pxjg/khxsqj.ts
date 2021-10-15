// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务请假记录 GET /khxsqj/${param0} */
export async function getKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      QJSC?: number;
      QJYY?: string;
      QJZT?: number;
      QJLX?: '按课时请假' | '按时间请假';
      createdAt?: string;
      updatedAt?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      KHQJKCs?: {
        QJRQ?: string;
        KCMC?: string;
        KHBJSJ?: {
          id?: string;
          BJMC?: string;
          BJMS?: string;
          BJZT?: '待开班' | '已开班' | '已结课';
          BJRS?: number;
          KSS?: number;
          FY?: number;
          KCTP?: string;
          XQSJ?: { id?: any; XXJBSJ?: { XXMC?: any } };
          KHBJJs?: {
            JSLX?: string;
            id?: string;
            JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
          }[];
        };
      }[];
    };
    message?: string;
  }>(`/khxsqj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后服务请假记录 DELETE /khxsqj/${param0} */
export async function deleteKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsqj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后服务请假记录 POST /khxsqj/ */
export async function getAllKHXSQJ(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 教师ID */
    JSId?: string;
    /** 请假状态 */
    QJZT?: number[];
    /** 请假类型 */
    QJLX?: string;
    /** 请假日期 */
    QJRQ?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXSQJ[] };
    message?: string;
  }>('/khxsqj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后服务请假记录 PUT /khxsqj/create */
export async function createKHXSQJ(body: API.CreateKHXSQJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      QJSC?: number;
      QJYY?: string;
      QJZT?: number;
      QJLX?: '按课时请假' | '按时间请假';
      createdAt?: string;
      updatedAt?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      KHQJKCs?: {
        QJRQ?: string;
        KCMC?: string;
        KHBJSJ?: {
          id?: string;
          BJMC?: string;
          BJMS?: string;
          BJZT?: '待开班' | '已开班' | '已结课';
          BJRS?: number;
          KSS?: number;
          FY?: number;
          KCTP?: string;
          XQSJ?: { id?: any; XXJBSJ?: { XXMC?: any } };
          KHBJJs?: {
            JSLX?: string;
            id?: string;
            JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
          }[];
        };
      }[];
    };
    message?: string;
  }>('/khxsqj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按时间请假获取请假课时数 POST /khxsqj/qjkss */
export async function getQJKSS(
  body: {
    /** 请假开始时间 */
    KSSJ?: string | any;
    /** 请假结束时间 */
    JSSJ?: string | any;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学生ID */
    XSJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { KHBJSJId?: string; QJRQ?: string }[];
    message?: string;
  }>('/khxsqj/qjkss', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后服务请假记录 PUT /khxsqj/update/${param0} */
export async function updateKHXSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  body: API.UpdateKHXSQJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsqj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局查看请假记录 POST /khxsqj/getAllAbsences */
export async function getAllAbsences(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    XXJBSJId?: string | any;
    /** 请假状态 */
    QJZT?: number[];
    /** 请假类型 */
    QJLX?: string;
    /** 请假日期 */
    QJRQ?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXSQJ[] };
    message?: string;
  }>('/khxsqj/getAllAbsences', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
