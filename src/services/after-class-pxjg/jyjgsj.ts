// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取教育机构数据 GET /jyjgsj/${param0} */
export async function JYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BMBM?: string;
      BMMC?: string;
      SJBMBM?: string;
      BMJB?: number;
      XZQH?: string;
      JGLX?: number;
      BMIPFW?: string;
      BZ?: string;
      ZT?: number;
      CorpID?: string;
    };
    message?: string;
  }>(`/jyjgsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教育机构数据 DELETE /jyjgsj/${param0} */
export async function deleteJYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建教育机构数据 PUT /jyjgsj/create */
export async function createJYJGSJ(body: API.CreateJYJGSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BMBM?: string;
      BMMC?: string;
      SJBMBM?: string;
      BMJB?: number;
      XZQH?: string;
      JGLX?: number;
      BMIPFW?: string;
      BZ?: string;
      ZT?: number;
      CorpID?: string;
    };
    message?: string;
  }>('/jyjgsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构数据 POST /jyjgsj/getAll */
export async function getJYJGSJ(
  body: {
    XZQHM?: string;
    /** 是否为市教育局 */
    isCity?: boolean;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.JYJGSJ[] };
    message?: string;
  }>('/jyjgsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教育机构数据 PUT /jyjgsj/update/${param0} */
export async function updateJYJGSJ(
  params: {
    // path
    /** 教育机构ID */
    id: string;
  },
  body: API.UpdateJYJGSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/jyjgsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构下的所有学校 POST /jyjgsj/getAllSchools */
export async function getAllSchools(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 市行政区划码 */
    SXZQHM?: string;
    /** 市行政区名称 */
    SXZQMC?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getAllSchools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构下的所有课后服务机构 POST /jyjgsj/getAllInstitutions */
export async function getAllInstitutions(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 市行政区划码 */
    SXZQHM?: string;
    /** 市行政区名称 */
    SXZQMC?: string;
    /** 类型 */
    LX?: number;
    /** 状态 */
    ZT?: number[];
    /** 机构名称 */
    JGMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getAllInstitutions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构下的所有本区课程信息(已备案课程) POST /jyjgsj/getAllCourses */
export async function getAllCourses(
  body: {
    /** 课程名称 */
    KCMC?: string;
    /** 课程来源 */
    KCLY?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getAllCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育机构下的所有本区课程信息(待引入课程) POST /jyjgsj/toIntroduceCourses */
export async function toIntroduceCourses(
  body: {
    /** 课程名称 */
    KCMC?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/toIntroduceCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构的课程列表 POST /jyjgsj/getCourses */
export async function getCourses(
  body: {
    JGId?: string;
    KCMC?: string;
    /** 课程状态 */
    KCZT?: number[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学校的课程列表 POST /jyjgsj/getCoursesBySchool */
export async function getCoursesBySchool(
  body: {
    XXJBSJId?: string;
    XNXQId?: string;
    KCMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getCoursesBySchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取教育局的首页统计数据 POST /jyjgsj/homePage */
export async function homePage(
  body: {
    JYJGSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/homePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 教育局获取订单信息 POST /jyjgsj/getOrders */
export async function getOrders(
  body: {
    XZQHM?: string;
    XXJBSJId?: string;
    DDLX?: number;
    /** 学年学期ID */
    XNXQId?: string;
    KCMC?: string;
    KHZZFWId?: string;
    KHXXZZFWId?: string;
    KHKCLXId?: string;
    /** 班级名称 */
    bjmc?: string;
    /** 课程名称 */
    kcmc?: string;
    /** 课后服务订单状态 */
    DDZT?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取市教育局大屏数据 POST /jyjgsj/getScreenInfo */
export async function getScreenInfo(
  body: {
    XZQHM?: string;
    XN?: string;
    XQ?: string;
    /** 是否为市教育局 */
    isCity?: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getScreenInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取课程评价信息 POST /jyjgsj/getCoursesEvaluation */
export async function getCoursesEvaluation(
  body: {
    XZQHM?: string;
    SXZQHM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 课程类型 */
    KCLX?: string;
    /** 课程来源 */
    KCLY?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 机构ID */
    KHJYJGId?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getCoursesEvaluation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取课程的各学校评价信息 POST /jyjgsj/getSchoolCoursesEvaluation */
export async function getSchoolCoursesEvaluation(
  body: {
    XZQHM?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 课程所属机构 */
    SSJGLX?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getSchoolCoursesEvaluation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取课程统计报表 POST /jyjgsj/getCoursesInfo */
export async function getCoursesInfo(
  body: {
    XZQHM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 课程类型 */
    KCLX?: string;
    /** 课程来源 */
    KCLY?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 机构ID */
    KHJYJGId?: string;
    /** 学年学期 */
    XNXQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getCoursesInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取全部课程的统计报表 POST /jyjgsj/getAllCoursesInfo */
export async function getAllCoursesInfo(
  body: {
    XZQHM?: string;
    SXZQHM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 课程类型 */
    KCLX?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 课程来源 */
    KCLY?: string;
    /** 学年学期 */
    XNXQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getAllCoursesInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取课程的全部班级统计报表 POST /jyjgsj/getClassesByCourse */
export async function getClassesByCourse(
  body: {
    XZQHM?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getClassesByCourse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局按日期统计收费信息 POST /jyjgsj/getTotalCost */
export async function getTotalCost(
  body: {
    XZQHM?: string;
    startDate?: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getTotalCost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局查看考勤趋势 POST /jyjgsj/getAttendanceTrend */
export async function getAttendanceTrend(
  body: {
    XZQHM?: string;
    startDate?: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getAttendanceTrend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局查看所有学校的请假列表 POST /jyjgsj/getSchoolsQJ */
export async function getSchoolsQJ(
  body: {
    XZQHM?: string;
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getSchoolsQJ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局查看所有学校的退课退款 POST /jyjgsj/getSchoolsTK */
export async function getSchoolsTK(
  body: {
    XZQHM?: string;
    /** 学校基本数据id */
    XXJBSJId?: string;
    isTK?: boolean;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getSchoolsTK', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学校的课程列表2 POST /jyjgsj/getCoursesBySchool2 */
export async function getCoursesBySchool2(
  body: {
    XXJBSJId?: string;
    KCMC?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getCoursesBySchool2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 市教育局查看区县教育局统计数据 POST /jyjgsj/getEducationStatistic */
export async function getEducationStatistic(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getEducationStatistic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 市教育局查看区县教育局热门课程 POST /jyjgsj/getHotclass */
export async function getHotclass(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getHotclass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 市教育局查看区县教育局好评课程 POST /jyjgsj/getGoodClass */
export async function getGoodClass(
  body: {
    /** 行政区划码 */
    XZQHM?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jyjgsj/getGoodClass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
