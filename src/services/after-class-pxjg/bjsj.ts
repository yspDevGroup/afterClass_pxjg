// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取班级数据 GET /bjsj/${param0} */
export async function getBJSJ(
  params: {
    // path
    /** 班级ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BH?: number;
      BJ?: string;
      JBNY?: string | any;
      BZRGH?: string;
      BZXH?: string;
      BJRYCH?: string;
      XZ?: string;
      BJLXM?: string;
      WLLX?: string;
      BYRQ?: string | any;
      SFSSMZSYJXB?: string;
      SYJXMSM?: string;
      SKDD?: string;
      BJJC?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      BZR?: { id?: string; GH?: string; XM?: string };
      FBZR?: { id?: string; GH?: string; XM?: string };
    };
    message?: string;
  }>(`/bjsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除班级数据 DELETE /bjsj/${param0} */
export async function deleteBJSJ(
  params: {
    // path
    /** 班级ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/bjsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有班级数据 POST /bjsj/ */
export async function getAllBJSJ(
  body: {
    /** 年级ID */
    njId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.BJSJ[] };
    message?: string;
  }>('/bjsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建班级数据 PUT /bjsj/create */
export async function createBJSJ(body: API.CreateBJSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BH?: number;
      BJ?: string;
      JBNY?: string | any;
      BZRGH?: string;
      BZXH?: string;
      BJRYCH?: string;
      XZ?: string;
      BJLXM?: string;
      WLLX?: string;
      BYRQ?: string | any;
      SFSSMZSYJXB?: string;
      SYJXMSM?: string;
      SKDD?: string;
      BJJC?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      BZR?: { id?: string; GH?: string; XM?: string };
      FBZR?: { id?: string; GH?: string; XM?: string };
    };
    message?: string;
  }>('/bjsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新班级数据 PUT /bjsj/update/${param0} */
export async function updateBJSJ(
  params: {
    // path
    /** 班级ID */
    id: string;
  },
  body: API.UpdateBJSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/bjsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 为班级添加任课老师 POST /bjsj/addTeacher */
export async function addTeacher(
  body: {
    /** 班级ID */
    BJSJId?: string;
    /** 课程ID */
    KCSJId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; message?: string }>('/bjsj/addTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取班级任课老师信息 POST /bjsj/classTeachers */
export async function classTeachers(
  body: {
    /** 班级ID */
    bjId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      KCSJ?: { id?: string; KCMC?: string };
      JZGJBSJ?: { id?: string; GH?: string; XM?: string };
    }[];
    message?: string;
  }>('/bjsj/classTeachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改班级任课老师信息 POST /bjsj/updateClassTeacher/${param0} */
export async function updateClassTeacher(
  params: {
    // path
    /** 班级任课老师信息ID */
    id: string;
  },
  body: {
    /** 班级ID */
    BJSJId?: string;
    /** 课程ID */
    KCSJId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(
    `/bjsj/updateClassTeacher/${param0}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** 删除班级任课老师信息 DELETE /bjsj/classTeacher/${param0} */
export async function deleteClassTeacher(
  params: {
    // path
    /** 班级任课老师信息ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/bjsj/classTeacher/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查找学校所有班级数据 POST /bjsj/getSchoolClasses */
export async function getSchoolClasses(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 年级ID */
    njId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/bjsj/getSchoolClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找班级的学生列表(行政班) POST /bjsj/getClassStudents */
export async function getClassStudents(
  body: {
    /** 班级ID */
    BJSJId?: string;
    /** 学生姓名 */
    XM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/bjsj/getClassStudents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
