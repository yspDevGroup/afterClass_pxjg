// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务教师出勤记录 GET /khjscq/${param0} */
export async function getKHJSCQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHJSCQParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      CQZT?: '出勤' | '请假' | '缺席' | '代课';
      CQRQ?: string;
      XXSJPZId?: string;
      JZGJBSJId?: string;
      KHBJSJId?: string;
      JSLX?: number | any;
      JZGJBSJ?: { id?: string; XM?: string; GH?: string; LXDH?: string | any; WechatUserId?: string } | any;
      XXSJPZ?:
        | {
            id?: string;
            KSSJ?: string;
            JSSJ?: string;
            KJS?: string | any;
            TITLE?: string;
            BZXX?: string;
          }
        | any;
      KHBJSJ?: { id?: string; BJMC?: string } | any;
    };
    message?: string;
  }>(`/khjscq/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后服务教师出勤记录 DELETE /khjscq/${param0} */
export async function deleteKHJSCQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHJSCQParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjscq/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后服务教师出勤记录 POST /khjscq/getAll */
export async function getAllKHJSCQ(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 出勤状态 */
    CQZT?: string[];
    /** 出勤日期 */
    CQRQ?: string;
    /** 开始日期 */
    startDate?: string;
    /** 结束日期 */
    endDate?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHJSCQ[]; message?: string }>('/khjscq/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 统计月份累计出勤记录 POST /khjscq/computedMonth */
export async function computedMonth(
  body: {
    /** 教师ID */
    JZGJBSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 出勤状态 */
    CQZT?: string[];
    /** 年份 */
    YEAR?: number[];
    /** 月份 */
    MONTH?: number[];
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/computedMonth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后服务教师出勤记录 PUT /khjscq/create */
export async function createKHJSCQ(body: API.CreateKHJSCQ[], options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: any[]; message?: string }>('/khjscq/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后服务教师出勤记录 PUT /khjscq/update/${param0} */
export async function updateKHJSCQ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHJSCQParams,
  body: API.UpdateKHJSCQ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjscq/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 教师出勤记录统计 POST /khjscq/statistical */
export async function countKHJSCQ(
  body: {
    /** 教师ID */
    JZGJBSJId: string;
    /** 学年学期ID */
    XNXQId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/statistical', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 教师代课统计 POST /khjscq/statisSubstitute */
export async function statisSubstitute(
  body: {
    /** 教师ID */
    JZGJBSJId: string;
    /** 学年学期ID */
    XNXQId: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/statisSubstitute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 查找学校当天课后服务教师出勤记录 POST /khjscq/getAllByDate */
export async function getAllByDate(
  body: {
    /** 节次ID */
    XXSJPZIds: string[];
    /** 班级ID */
    KHBJSJIds: string[];
    /** 出勤状态 */
    CQZT: string[];
    /** 出勤日期 */
    CQRQ: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/getAllByDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 机构教师端出勤统计 POST /khjscq/statisticalByTeacher */
export async function statisticalByTeacher(
  body: {
    /** 教师ID */
    JZGJBSJId: string;
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 学校ID */
    XXJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/statisticalByTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 机构端教师出勤统计 POST /khjscq/agencyStatistical */
export async function agencyStatistical(
  body: {
    /** 是否导出 */
    output: boolean;
    /** 机构ID */
    KHJYJGId: string;
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 教师姓名 */
    JSXM?: string;
    /** 开始日期 */
    startDate?: string;
    /** 结束日期 */
    endDate?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/agencyStatistical', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 机构端教师出勤详情 POST /khjscq/agencyStatisticalDetail */
export async function agencyStatisticalDetail(
  body: {
    /** 是否导出 */
    output: boolean;
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 教师ID */
    JZGJBSJId: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 开始日期 */
    startDate?: string;
    /** 结束日期 */
    endDate?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khjscq/agencyStatisticalDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
