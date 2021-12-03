// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教师认领课程班记录 GET /khbjjsrl/${param0} */
export async function getKHBJJSRL(
  params: {
    // path
    /** 认领记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      RQ?: string;
      JSLX?: number;
      KHBJSJ?: { id?: string; BJMC?: string };
      JZGJBSJ?: { id?: string; XM?: string; GH?: string; LXDH?: string; WechatUserId?: string };
      XXSJPZ?: {
        id?: string;
        KSSJ?: string;
        JSSJ?: string;
        KJS?: string;
        TITLE?: string;
        BZXX?: string;
      };
    };
    message?: string;
  }>(`/khbjjsrl/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除教师认领课程班记录 DELETE /khbjjsrl/${param0} */
export async function deleteKHBJJSRL(
  params: {
    // path
    /** 教师认领课程班记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khbjjsrl/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 教师认领课程班记录 POST /khbjjsrl/getAll */
export async function getAll(
  body: {
    /** 日期 */
    RQ?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 节次ID */
    XXSJPZId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHBJJSRL[] };
    message?: string;
  }>('/khbjjsrl/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建/更新教师认领课程班记录 PUT /khbjjsrl/create */
export async function createKHBJJSRL(body: API.CreateKHBJJSRL, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      RQ?: string;
      JSLX?: number;
      KHBJSJ?: { id?: string; BJMC?: string };
      JZGJBSJ?: { id?: string; XM?: string; GH?: string; LXDH?: string; WechatUserId?: string };
      XXSJPZ?: {
        id?: string;
        KSSJ?: string;
        JSSJ?: string;
        KJS?: string;
        TITLE?: string;
        BZXX?: string;
      };
    };
    message?: string;
  }>('/khbjjsrl/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
