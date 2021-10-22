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
      XZQ?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
      CorpID?: string;
      XD?: string;
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
      XZQ?: string;
      LXRXM?: string;
      LXDH?: string;
      JGFWFW?: string;
      YYZZ?: string;
      BXXKZ?: string;
      JGJJ?: string;
      ZT?: number;
      CorpID?: string;
      XD?: string;
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
    /** 合作状态，0:合作中，1:已结束 */
    type?: number;
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
    XNXQId?: string;
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

/** 获取机构的年级信息 POST /khjyjg/getAllGrades */
export async function getAllGrades(
  body: {
    XD?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { id?: string; XD?: string; NJMC?: string; NJJC?: string }[];
    message?: string;
  }>('/khjyjg/getAllGrades', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** 获取机构的首页统计数据 POST /khjyjg/homePage */
export async function homePage(
  body: {
    KHJYJGId?: string;
    XN?: string;
    XQ?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/homePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课后服务机构课程评价信息 POST /khjyjg/getCourseEvaluation */
export async function getCourseEvaluation(
  body: {
    /** 机构ID */
    KHJYJGId?: string;
    /** 课程名称 */
    KCMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/getCourseEvaluation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课后服务课程的合作学校列表 POST /khjyjg/getCourseSchools */
export async function getCourseSchools(
  body: {
    /** 课程ID */
    KHKCSJId?: string;
    /** 学校名称 */
    XXMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      count?: number;
      rows?: {
        id?: string;
        XXMC?: string;
        XD?: string;
        LXR?: string;
        LXDH?: string;
        PJFS?: number;
      }[];
    };
    message?: string;
  }>('/khjyjg/getCourseSchools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的合作学校订单 POST /khjyjg/cooperateSchoolOrder */
export async function cooperateSchoolOrder(
  body: {
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
  return request<any>('/khjyjg/cooperateSchoolOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的合作学校订单列表 POST /khjyjg/cooperateSchoolOrderList */
export async function cooperateSchoolOrderList(
  body: {
    /** 机构id */
    KHJYJGId?: string;
    /** 学校id */
    XXId?: string;
    /** 学期id */
    XQId?: string;
    /** 课程id */
    KCId?: string;
    /** 学生名称 */
    XSMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/cooperateSchoolOrderList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 培训机构查看考勤趋势 POST /khjyjg/getAttendanceTrend */
export async function getAttendanceTrend(
  body: {
    KHJYJGId?: string;
    startDate?: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khjyjg/getAttendanceTrend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
