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
