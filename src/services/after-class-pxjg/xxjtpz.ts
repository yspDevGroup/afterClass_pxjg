// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询所有学校静态配置 POST /xxjtpz/getAll */
export async function getAllXXJTPZ(
  body: {
    /** 学年学期数据id */
    XNXQId?: string;
    /** 校区数据Id */
    XQSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/xxjtpz/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建学校静态配置 PUT /xxjtpz/create */
export async function CreateXXJTPZ(
  body: {
    /** 时间配置str */
    sjpzstr?: string;
    /** 学年学期数据id */
    XNXQId?: string;
    /** 校区数据Id */
    XQSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/xxjtpz/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
