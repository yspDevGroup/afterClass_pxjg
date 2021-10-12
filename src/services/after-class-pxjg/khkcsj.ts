// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后课程数据详情 POST /khkcsj/detail */
export async function getKHKCSJ(
  body: {
    /** 课程ID */
    kcId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khkcsj/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询所有课后课程数据 POST /khkcsj/ */
export async function getAllKHKCSJ(
  body: {
    /** 是否与班级关联查询 */
    isRequired?: boolean;
    /** 课程类型ID */
    KHKCLXId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 年级ID 班级维度 */
    njId?: string;
    /** 页数 */
    page?: number;
    /** 课程来源 */
    SSJGLX?: string;
    /** 每页记录数 */
    pageSize?: number;
    /** 课程名称 */
    KCMC?: string;
    /** 课程状态 */
    KCZT?: number[];
    /** 课后教育机构名称 */
    KHJYJG?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khkcsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后课程数据 PUT /khkcsj/create */
export async function createKHKCSJ(body: API.CreateKHKCSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KCMC?: string;
      KCTP?: string;
      KCZT?: number;
      KCMS?: string;
      SSJGLX?: string;
      KBYS?: string;
      KHKCLX?: { id?: string; KCLX?: string };
      KHBJSJs?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '待开班' | '已开班' | '已结课';
        ZJS?: string;
        FJS?: string;
        BJRS?: number;
        KSS?: number;
        FY?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
        KBYS?: string;
        NJS?: string;
        XQ?: string;
        NJSName?: string;
        XQName?: string;
        ZJSName?: string;
        FJSName?: string;
      }[];
    };
    message?: string;
  }>('/khkcsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除课后课程数据 DELETE /khkcsj/${param0} */
export async function deleteKHKCSJ(
  params: {
    // path
    /** 课后课程ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khkcsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新课后课程数据 PUT /khkcsj/update/${param0} */
export async function updateKHKCSJ(
  params: {
    // path
    /** 课后课程ID */
    id: string;
  },
  body: API.UpdateKHKCSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khkcsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID查找所有年级 GET /khkcsj/njs/${param0} */
export async function allNJs(
  params: {
    // path
    /** 课后课程ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: { NJS?: string[]; NJSName?: string[] };
    message?: string;
  }>(`/khkcsj/njs/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据年级ID查找所有课后课程 POST /khkcsj/khkcs */
export async function allKCsByNJ(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程类型ID */
    kclxId?: string;
    /** 课程状态 */
    kczt?: string;
    /** 年级ID */
    njId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      KCMC?: string;
      KCTP?: string;
      KCZT?: number;
      KCMS?: string;
      XNXQId?: string;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
    }[];
    message?: string;
  }>('/khkcsj/khkcs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据课程ID获取合作中学校列表 POST /khkcsj/getSchools */
export async function getSchools(
  body: {
    /** 课程ID */
    KHKCSJId?: string;
    /** 学校名称 */
    XXMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khkcsj/getSchools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学校课程基础信息 POST /khkcsj/getAllCourses */
export async function getAllCourses(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khkcsj/getAllCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
