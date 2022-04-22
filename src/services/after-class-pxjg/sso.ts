// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建SSOToken POST /sso/createToken */
export async function createSSOToken(
  body: {
    /** 认证token */
    access_token: string;
    /** token有效时间 */
    expires_in: number;
    /** 刷新token */
    refresh_token: string;
    /** token类型 */
    token_type?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/createToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sso Token失效回调 GET /sso/expired/callback */
export async function ssoExpiredCallback(options?: { [key: string]: any }) {
  return request<any>('/sso/expired/callback', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 同步用户信息 POST /sso/synchroUsers */
export async function synchroUsers(
  body: {
    type: '老师' | '学生' | '家长';
    /** 学校代码 */
    XXDM: string;
    sign: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/synchroUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 POST /sso/getUserInfos */
export async function getUserInfos(
  body: {
    type: '老师' | '学生';
    /** 学号/工号 */
    username: string;
    /** 学校代码 */
    XXDM: string;
    sign: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/getUserInfos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sso 首页获取学校通知通告 POST /sso/getSchoolNotice */
export async function getSchoolNotice(options?: { [key: string]: any }) {
  return request<any>('/sso/getSchoolNotice', {
    method: 'POST',
    ...(options || {}),
  });
}

/** sso 获取所有学校信息 POST /sso/getSchools */
export async function getSchools(options?: { [key: string]: any }) {
  return request<any>('/sso/getSchools', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 批量创建/更新区县教育局统计数据 POST /sso/bulkCreateEducation */
export async function bulkCreateEducation(
  body: {
    JYJMC?: string;
    XZQHM?: string;
    XXS?: number;
    JGS?: number;
    JSS?: number;
    XSS?: number;
    KCS?: number;
    BJS?: number;
    TKXSS?: number;
    SFZE?: number;
    TFZE?: number;
    XN?: string;
    XQ?: string;
    JYJId?: string;
  }[],
  options?: { [key: string]: any },
) {
  return request<any>('/sso/bulkCreateEducation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建/更新学校统计数据 POST /sso/bulkCreateSchool */
export async function bulkCreateSchool(
  body: {
    XXMC?: string;
    XQMC?: string;
    XZQHM?: string;
    JSS?: number;
    JGS?: number;
    XSS?: number;
    TKXSS?: number;
    KCS?: number;
    JGKCS?: number;
    BJS?: number;
    SFZE?: number;
    TFZE?: number;
    XN?: string;
    XQ?: string;
    XXId?: string;
    XQId?: string;
  }[],
  options?: { [key: string]: any },
) {
  return request<any>('/sso/bulkCreateSchool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量创建/更新机构统计数据 POST /sso/bulkCreateAgency */
export async function bulkCreateAgency(
  body: {
    JGMC?: string;
    XZQHM?: string;
    JSS?: number;
    XXS?: number;
    XXKCS?: number;
    KCS?: number;
    BJS?: number;
    XSS?: number;
    TKXSS?: number;
    SFZE?: number;
    TFZE?: number;
    XN?: string;
    XQ?: string;
    JGId?: string;
  }[],
  options?: { [key: string]: any },
) {
  return request<any>('/sso/bulkCreateAgency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 学校新建教师 POST /sso/createTeacher */
export async function createTeacher(
  body: {
    /** 学校代码 */
    suiteID: string;
    /** 学校代码 */
    corpID: string;
    /** 企微用户ID */
    UserId: string;
    sign: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/createTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 学校删除教师 POST /sso/deleteTeacher */
export async function deleteTeacher(
  body: {
    /** 学校代码 */
    suiteID: string;
    /** 学校代码 */
    corpID: string;
    /** 企微用户ID */
    UserId: string;
    sign: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/deleteTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询行政区信息 POST /sso/getAdministrative */
export async function getAdministrative(
  body: {
    /** 查询类型,省市区 */
    type: 'province' | 'city' | 'region';
    /** 行政区划码 */
    code: string;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: { id?: string; lx?: string; dm?: string; mc?: string }[] };
    message?: string;
  }>('/sso/getAdministrative', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 学校新建/修改学生信息 POST /sso/createStudent */
export async function createStudent(
  body: {
    /** 学校代码 */
    corpID: string;
    /** 学生ID */
    UserId: string;
    sign: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/sso/createStudent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
