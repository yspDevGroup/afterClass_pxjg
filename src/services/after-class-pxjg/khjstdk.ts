// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务教师调代课详情 GET /khjstdk/${param0} */
export async function getKHJSTDK(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHJSTDKParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      LX?: number;
      ZT?: number;
      BZ?: string;
      DKBZ?: string;
      SKRQ?: string | any;
      TKRQ?: string | any;
      DKSPSJ?: string;
      SKJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      DKJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      SKFJ?: { id?: string; BH?: string; FJMC?: string } | any;
      TKFJ?: { id?: string; BH?: string; FJMC?: string } | any;
      SKJC?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string } | any;
      TKJC?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string } | any;
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        KCTP?: string;
        KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
      };
      desKHBJSJ?:
        | {
            id?: string;
            BJMC?: string;
            KCTP?: string;
            KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
          }
        | any;
      SPJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>(`/khjstdk/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后服务教师调代课 DELETE /khjstdk/${param0} */
export async function deleteKHJSTDK(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHJSTDKParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjstdk/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后服务教师调代课 POST /khjstdk/getAll */
export async function getAllKHJSTDK(
  body: {
    /** 类型 */
    LX?: number[];
    /** 状态 */
    ZT?: number[];
    /** 学年学期ID */
    XNXQId?: string;
    /** 授课教师ID */
    SKJSId?: string;
    /** 代课教师ID */
    DKJSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 换课班级ID */
    DESKHBJSJId?: string;
    /** 学校ID */
    XXJBSJId: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJSTDK[] };
    message?: string;
  }>('/khjstdk/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后服务教师调代课 PUT /khjstdk/create */
export async function createKHJSTDK(body: API.CreateKHJSTDK, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      LX?: number;
      ZT?: number;
      BZ?: string;
      DKBZ?: string;
      SKRQ?: string | any;
      TKRQ?: string | any;
      DKSPSJ?: string;
      SKJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      DKJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      SKFJ?: { id?: string; BH?: string; FJMC?: string } | any;
      TKFJ?: { id?: string; BH?: string; FJMC?: string } | any;
      SKJC?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string } | any;
      TKJC?: { id?: string; KSSJ?: string; JSSJ?: string; TITLE?: string } | any;
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        KCTP?: string;
        KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
      };
      desKHBJSJ?:
        | {
            id?: string;
            BJMC?: string;
            KCTP?: string;
            KHKCSJ?: { id?: string; KCMC?: string; KCTP?: string };
          }
        | any;
      SPJS?: { id?: string; XM?: string; WechatUserId?: string } | any;
      createdAt?: string;
      updatedAt?: string;
    };
    message?: string;
  }>('/khjstdk/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后服务教师调代课 PUT /khjstdk/update/${param0} */
export async function updateKHJSTDK(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHJSTDKParams,
  body: API.UpdateKHJSTDK,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjstdk/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 根据班级查找当天的调代课记录 POST /khjstdk/getTodaySubstitute */
export async function getTodaySubstitute(
  body: {
    /** 班级ID */
    KHBJSJIds?: string[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJSTDK[] };
    message?: string;
  }>('/khjstdk/getTodaySubstitute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
