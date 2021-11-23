// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传文件 POST /upload/uploadFile */
export async function uploadFile(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/uploadFile',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 导入教师信息 POST /upload/importTeachers */
export async function importTeachers(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/importTeachers',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 导入场地信息 POST /upload/importSites */
export async function importSites(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/importSites',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 导入学生信息 POST /upload/importStudents */
export async function importStudents(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/importStudents',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 企业微信教师导入 POST /upload/importWechatTeachers */
export async function importWechatTeachers(
  params: {
    // query
    /** 登录平台类型 */
    plat?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/importWechatTeachers',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
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
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/syncWechatTeachers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
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
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>(
    '/upload/syncWechatStudents',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
