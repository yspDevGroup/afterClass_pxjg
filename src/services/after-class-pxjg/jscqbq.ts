// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取单个教师出勤补签数据 GET /jscqbq/${param0} */
export async function getJSCQBQ(
  params: {
    // path
    /** 补签记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      SPZT?: number;
      BQRQ?: string;
      QKYY?: string;
      SQNR?: '出勤' | '请假' | '代课';
      SPSM?: string;
      SPRId?: string;
      BQRId?: string;
      KHBJSJId?: string;
      XXSJPZId?: string;
      SPR?: { id?: string; XM?: string; WechatUserId?: string } | any;
      BQR?: { id?: string; XM?: string; WechatUserId?: string } | any;
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        KCTP?: string;
        KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
      };
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>(`/jscqbq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除单个教师出勤补签数据 DELETE /jscqbq/${param0} */
export async function deleteJSCQBQ(
  params: {
    // path
    /** 补签记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jscqbq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有教师出勤补签数据 POST /jscqbq/ */
export async function getAllJSCQBQ(
  body: {
    /** 学校基本数据id */
    XXJBSJId?: string;
    /** 审批状态 */
    SPZT?: number[];
    /** 补签人id */
    BQRId?: string;
    /** 补签人姓名 */
    BQRXM?: string;
    /** 审批人id */
    SPRId?: string;
    /** 学年学期id */
    XNXQId?: string;
    /** 申请内容：出勤，请假，代课 */
    SQNR?: string;
    /** 补签开始日期 */
    START_DATE?: string;
    /** 补签结束日期 */
    END_DATE?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.JSCQBQ[]; message?: string }>('/jscqbq/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建单个教师出勤补签数据 PUT /jscqbq/create */
export async function CreateJSCQBQ(body: API.CreateJSCQBQ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      SPZT?: number;
      BQRQ?: string;
      QKYY?: string;
      SQNR?: '出勤' | '请假' | '代课';
      SPSM?: string;
      SPRId?: string;
      BQRId?: string;
      KHBJSJId?: string;
      XXSJPZId?: string;
      SPR?: { id?: string; XM?: string; WechatUserId?: string } | any;
      BQR?: { id?: string; XM?: string; WechatUserId?: string } | any;
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        KCTP?: string;
        KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
      };
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/jscqbq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新单个教师出勤补签数据 PUT /jscqbq/update/${param0} */
export async function updateJSCQBQ(
  params: {
    // path
    /** 补签记录ID */
    id: string;
  },
  body: API.UpdateJSCQBQ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jscqbq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
