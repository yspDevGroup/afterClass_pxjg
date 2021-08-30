// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取课后教育机构信息 GET /khjyjg/${param0} */
export async function KHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      QYMC?: string;
      QYTB?: string;
      ZZJGDM?: string;
      FRDBXM?: string;
      FRDBSFZH?: string;
      QYJGDZ?: string;
      XZQHM?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
      KHJGRZSQs?: {
        id?: string;
        ZT?: number;
        LX?: number;
        BZ?: string;
        XZQHM?: string;
        SQR?: string;
        SQRId?: string;
        SPR?: string;
        SPRId?: string;
        RZSJ?: string;
        createdAt?: string;
        updatedAt?: string;
      }[];
    };
    message?: string;
  }>(`/khjyjg/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后教育机构信息 DELETE /khjyjg/${param0} */
export async function deleteKHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjyjg/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建课后教育机构信息 PUT /khjyjg/create */
export async function createKHJYJG(body: API.CreateKHJYJG, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      QYMC?: string;
      QYTB?: string;
      ZZJGDM?: string;
      FRDBXM?: string;
      FRDBSFZH?: string;
      QYJGDZ?: string;
      XZQHM?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
      KHJGRZSQs?: {
        id?: string;
        ZT?: number;
        LX?: number;
        BZ?: string;
        XZQHM?: string;
        SQR?: string;
        SQRId?: string;
        SPR?: string;
        SPRId?: string;
        RZSJ?: string;
        createdAt?: string;
        updatedAt?: string;
      }[];
    };
    message?: string;
  }>('/khjyjg/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课后教育机构信息 POST /khjyjg/getAll */
export async function getKHJYJG(
  body: {
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJYJG[] };
    message?: string;
  }>('/khjyjg/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后教育机构信息 PUT /khjyjg/update/${param0} */
export async function updateKHJYJG(
  params: {
    // path
    /** 课后教育机构ID */
    id: string;
  },
  body: API.UpdateKHJYJG,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khjyjg/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的合作学校 POST /khjyjg/cooperateSchool */
export async function cooperateSchool(
  body: {
    /** 学段信息 */
    XD?: string[];
    /** 学校名称 */
    name?: string;
    JGId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/cooperateSchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的课程信息 POST /khjyjg/getCourses */
export async function getCourses(
  body: {
    JGId?: string;
    KCMC?: string;
    /** 课程状态 */
    KCZT?: number[];
    /** 课程引入状态 */
    YRZT?: number[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/getCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看机构的已入驻课程 POST /khjyjg/cooperateCourse */
export async function cooperateCourse(
  body: {
    JGId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/cooperateCourse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的年级信息 GET /khjyjg/getAllGrades */
export async function getAllGrades(options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: { id?: string; XD?: string; NJMC?: string; NJJC?: string }[];
    message?: string;
  }>('/khjyjg/getAllGrades', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取机构与学校存在合作的学年学期数据 POST /khjyjg/getAllSemester */
export async function getAllSemester(
  body: {
    KHJYJGId?: string;
    XXJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/getAllSemester', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构与学校存在合作的课程列表 POST /khjyjg/getAllCourses */
export async function getAllCourses(
  body: {
    KHJYJGId?: string;
    XNXQId?: string;
    XXJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/getAllCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
