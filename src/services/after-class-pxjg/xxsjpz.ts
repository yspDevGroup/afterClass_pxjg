// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校时间配置数据 GET /xxsjpz/${param0} */
export async function getXXSJPZ(
  params: {
    // path
    /** 学校时间配置ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      KJS?: string;
      TITLE?: string;
      BZXX?: string;
      TYPE?: '0' | '1' | '2';
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
    };
    message?: string;
  }>(`/xxsjpz/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除学校时间配置数据 DELETE /xxsjpz/${param0} */
export async function deleteXXSJPZ(
  params: {
    // path
    /** 学校时间配置ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxsjpz/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有学校时间配置数据 POST /xxsjpz/all */
export async function getAllXXSJPZ(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 类型，0:时段维护，1:报名开始/结束时间，2:开课/结课日期 */
    type?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ status?: 'ok' | 'error'; data?: API.XXSJPZ[]; message?: string }>(
    '/xxsjpz/all',
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

/** 创建学校时间配置数据 PUT /xxsjpz/create */
export async function createXXSJPZ(body: API.CreateXXSJPZ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      KJS?: string;
      TITLE?: string;
      BZXX?: string;
      TYPE?: '0' | '1' | '2';
      XXJBSJ?: {
        id?: string;
        XXDM?: string;
        XXMC?: string;
        XXYWMC?: string;
        XXDZ?: string;
        XXYZBM?: string;
        XZQHM?: string;
      };
      XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
    };
    message?: string;
  }>('/xxsjpz/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新学校时间配置数据 PUT /xxsjpz/update/${param0} */
export async function updateXXSJPZ(
  params: {
    // path
    /** 学校时间配置ID */
    id: string;
  },
  body: API.UpdateXXSJPZ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxsjpz/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
