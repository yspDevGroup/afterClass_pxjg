// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学生评价记录详情 GET /khxspj/${param0} */
export async function getKHXSPJ(
  params: {
    // path
    /** 学生评价记录ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJFS?: number;
      PY?: string;
      KHBJSJId?: string;
      createdAt?: string;
      updatedAt?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
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
        KHKCSJ?: { id?: string; KCMC?: string };
      };
    };
    message?: string;
  }>(`/khxspj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除学生评价记录 DELETE /khxspj/${param0} */
export async function deleteKHXSPJ(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxspj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有学生评价记录 POST /khxspj/ */
export async function getAllKHXSPJ(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 教师ID */
    JSId?: string;
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
    data?: { count?: number; rows?: API.KHXSPJ[] };
    message?: string;
  }>('/khxspj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建学生评价记录 PUT /khxspj/create */
export async function createKHXSPJ(body: API.CreateKHXSPJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      PJFS?: number;
      PY?: string;
      KHBJSJId?: string;
      createdAt?: string;
      updatedAt?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string };
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
        KHKCSJ?: { id?: string; KCMC?: string };
      };
    };
    message?: string;
  }>('/khxspj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新学生评价记录 PUT /khxspj/update/${param0} */
export async function updateKHXSPJ(
  params: {
    // path
    /** 学生评价记录ID */
    id: string;
  },
  body: API.UpdateKHXSPJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxspj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
