// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建学校课后增值服务 PUT /khxxzzfw/create */
export async function createKHXXZZFW(body: API.CreateKHXXZZFW, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      FWMC?: string;
      FWNR?: string;
      FWZT?: number;
      FY?: number;
      KSRQ?: string | any;
      JSRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      FWTP?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string };
      XQSJ?: { id?: string; XQMC?: string };
      KHZZFW?: { id?: string; FWMC?: string; FWNR?: string; FWJGMC?: string; FWZT?: number };
    };
    message?: string;
  }>('/khxxzzfw/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取学校课后增值服务 POST /khxxzzfw/getAll */
export async function getKHXXZZFW(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课后增值服务ID */
    KHZZFWId?: string;
    /** 状态 */
    FWZT?: number;
    /** 服务名称 */
    FWMC?: string;
    /** 增值服务名称 */
    ZZFWMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXXZZFW[] };
    message?: string;
  }>('/khxxzzfw/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取学校课后增值服务 GET /khxxzzfw/${param0} */
export async function KHXXZZFW(
  params: {
    // path
    /** 学校课后增值服务ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      FWMC?: string;
      FWNR?: string;
      FWZT?: number;
      FY?: number;
      KSRQ?: string | any;
      JSRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      FWTP?: string;
      XNXQ?: { id?: string; XN?: string; XQ?: string };
      XQSJ?: { id?: string; XQMC?: string };
      KHZZFW?: { id?: string; FWMC?: string; FWNR?: string; FWJGMC?: string; FWZT?: number };
    };
    message?: string;
  }>(`/khxxzzfw/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除学校课后增值服务 DELETE /khxxzzfw/${param0} */
export async function deleteKHXXZZFW(
  params: {
    // path
    /** 学校课后增值服务ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxxzzfw/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 更新学校课后增值服务 PUT /khxxzzfw/update/${param0} */
export async function updateKHXXZZFW(
  params: {
    // path
    /** 学校课后增值服务数据ID */
    id: string;
  },
  body: API.UpdateKHXXZZFW,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxxzzfw/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 获取学生报名的增值服务 POST /khxxzzfw/getStudent */
export async function getStudent(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课后学校增值服务ID */
    KHXXZZFWId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      count?: number;
      rows?: {
        XSId?: string;
        XSXM?: string;
        createdAt?: string;
        KHXXZZFWId?: string;
        KHXXZZFW: {
          id?: string;
          FWMC?: string;
          FWNR?: string;
          FWZT?: number;
          FY?: number;
          KSRQ?: string | any;
          JSRQ?: string | any;
          BMKSSJ?: string;
          BMJSSJ?: string;
          FWTP?: string;
          KHZZFW?: { id?: string; FWMC?: string; FWNR?: string; FWJGMC?: string; FWZT?: number };
        };
      }[];
    };
    message?: string;
  }>('/khxxzzfw/getStudent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
