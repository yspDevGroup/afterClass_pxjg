// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取所有课后教育局审批记录 POST /khjyjspjl/getAllSPJL */
export async function getAllSPJL(
  body: {
    /** 课后教育局Id */
    KHJYJId?: string;
    /** 课后教育机构名称 */
    KHJYJGMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJYJSPJL[] };
    message?: string;
  }>('/khjyjspjl/getAllSPJL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后教育局审批记录 PUT /khjyjspjl/createKHJYJSPJL */
export async function CreateKHJYJSPJL(body: API.CreateKHJYJSPJL, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      ZT?: number;
      BZ?: string;
      SPR?: string;
      SPRId?: string;
      KHJYJG: {
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
      };
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/khjyjspjl/createKHJYJSPJL', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
