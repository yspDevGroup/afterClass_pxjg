// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务教师请假记录 GET /khjsqj/${param0} */
export async function getKHJSQJ(
  params: {
    // path
    /** 教师请假记录ID */
    id: string;
  },
  options?: { [key: string]: any }
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
      BZ?: string;
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
      SPJS?: { id?: string; XM?: string; WechatUserId?: string };
      KHJSQJKCs?: {
        QJRQ?: string;
        KCMC?: string;
        KHBJSJ?: { id?: string; BJMC?: string };
        XXSJPZ?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string };
      }[];
    };
    message?: string;
  }>(`/khjsqj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后服务教师请假记录 DELETE /khjsqj/${param0} */
export async function deleteKHJSQJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjsqj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后服务教师请假记录 POST /khjsqj/getAll */
export async function getAllKHJSQJ(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 教师姓名 */
    JSXM?: string;
    /** 请假状态 */
    QJZT?: number[];
    /** 请假日期 */
    QJRQ?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjsqj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后服务教师请假记录 PUT /khjsqj/create */
export async function createKHJSQJ(body: API.CreateKHJSQJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      QJSC?: number;
      QJYY?: string;
      QJZT?: number;
      BZ?: string;
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
      SPJS?: { id?: string; XM?: string; WechatUserId?: string };
      KHJSQJKCs?: {
        QJRQ?: string;
        KCMC?: string;
        KHBJSJ?: { id?: string; BJMC?: string };
        XXSJPZ?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string };
      }[];
    };
    message?: string;
  }>('/khjsqj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后服务教师请假记录 PUT /khjsqj/update/${param0} */
export async function updateKHJSQJ(
  params: {
    // path
    /** 教师请假记录ID */
    id: string;
  },
  body: API.UpdateKHJSQJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjsqj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
