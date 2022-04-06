// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 运营端获取首页信息接口 POST /operation/homePage */
export async function homePage(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/operation/homePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 教育局数据 POST /operation/educations */
export async function educations(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/operation/educations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 学校数据 POST /operation/schools */
export async function schools(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/operation/schools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 机构数据 POST /operation/agencies */
export async function agencies(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/operation/agencies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
