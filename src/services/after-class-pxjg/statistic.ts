// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询市教育局统计信息 POST /statistic/getAll */
export async function getCityJYJTJSJ(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 行政区划码 */
    XZQHM: string;
    /** 是否为市教育局 */
    isCity: boolean;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      JYJMC?: string;
      XZQHM?: string;
      XXS?: number;
      JGS?: number;
      JSS?: number;
      XSS?: number;
      XXKCS?: number;
      JGKCS?: number;
      BJS?: number;
      TKXSS?: number;
      SFZE?: number;
      TFZE?: number;
      XN?: string;
      XQ?: string;
      JYJId?: string;
    }[];
    message?: string;
  }>('/statistic/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
