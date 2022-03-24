// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传文件 POST /upload/uploadFile */
export async function uploadFile(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/uploadFile', {
    method: 'POST',
    ...(options || {})
  });
}

/** 导入教师信息 POST /upload/importTeachers */
export async function importTeachers(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/importTeachers', {
    method: 'POST',
    ...(options || {})
  });
}

/** 导入场地信息 POST /upload/importSites */
export async function importSites(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/importSites', {
    method: 'POST',
    ...(options || {})
  });
}

/** 导入学生信息 POST /upload/importStudents */
export async function importStudents(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/importStudents', {
    method: 'POST',
    ...(options || {})
  });
}

/** 企业微信教师导入 POST /upload/importWechatTeachers */
export async function importWechatTeachers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importWechatTeachersParams,
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/importWechatTeachers', {
    method: 'POST',
    params: {
      ...params
    },
    ...(options || {})
  });
}

/** 企业微信教师同步 POST /upload/syncWechatTeachers */
export async function syncWechatTeachers(
  body: {
    /** 应用ID */
    suiteID?: string;
    /** 企业ID */
    CorpId?: string;
    /** 学校ID */
    xxId?: string;
    /** 机构ID */
    jgId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/syncWechatTeachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 企业微信学生同步 POST /upload/syncWechatStudents */
export async function syncWechatStudents(
  body: {
    /** 应用ID */
    suiteID?: string;
    /** 企业ID */
    CorpId?: string;
    /** 学校ID */
    xxId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/upload/syncWechatStudents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 导入行政班学生列表进行报名 POST /upload/importStudentSignUp */
export async function importStudentSignUp(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: any[]; message?: string }>('/upload/importStudentSignUp', {
    method: 'POST',
    ...(options || {})
  });
}

/** 导入教师巡课安排 POST /upload/importTeacherXKAP */
export async function importTeacherXKAP(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: any[]; message?: string }>('/upload/importTeacherXKAP', {
    method: 'POST',
    ...(options || {})
  });
}

/** 课表导入 POST /upload/importSchedule */
export async function importSchedule(options?: { [key: string]: any }) {
  return request<any>('/upload/importSchedule', {
    method: 'POST',
    ...(options || {})
  });
}
