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

/** 查找机构所有课后服务教师调代课记录 POST /khjstdk/getAllByAgency */
export async function getAllByAgency(
  body: {
    /** 类型 */
    LX?: number[];
    /** 状态 */
    ZT?: number[];
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 授课教师ID */
    SKJSId?: string;
    /** 代课教师ID */
    DKJSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 换课班级ID */
    DESKHBJSJId?: string;
    /** 机构ID */
    KHJYJGId: string;
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
  }>('/khjstdk/getAllByAgency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后服务机构教师调代课记录 PUT /khjstdk/createByAgency */
export async function createByAgency(body: API.CreateKHJSTDK, options?: { [key: string]: any }) {
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
  }>('/khjstdk/createByAgency', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据ID更新课后服务机构教师调代课记录 PUT /khjstdk/updateAgency/${param0} */
export async function updateAgency(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAgencyParams,
  body: {
    /** 类型 */
    LX?: number;
    /** 状态 */
    ZT?: number;
    /** 备注信息 */
    BZ?: string;
    /** 代课备注信息 */
    DKBZ?: string;
    /** 原定上课日期 */
    SKRQ?: string | any;
    /** 调课后的上课日期 */
    TKRQ?: string | any;
    /** 代课老师操作时间 */
    DKSPSJ?: string | any;
    /** 授课教师ID */
    SKJSId?: string | any;
    /** 代课教师ID */
    DKJSId?: string | any;
    /** 原定场地ID */
    SKFJId?: string | any;
    /** 调课后场地ID */
    TKFJId?: string | any;
    /** 审批教师ID */
    SPJSId?: string | any;
    /** 原定节次ID */
    SKJCId?: string | any;
    /** 调课后节次ID */
    TKJCId?: string | any;
    /** 换课班级ID */
    DESKHBJSJId?: string | any;
    /** 机构ID */
    KHJYJGId: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjstdk/updateAgency/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}
