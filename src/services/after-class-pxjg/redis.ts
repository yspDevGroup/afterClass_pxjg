// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取哈希数据 POST /redis/getHash */
export async function getHash(
  body: {
    key: string;
    fields: string[];
    isAll: boolean;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: any[]; message?: string }>('/redis/getHash', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
