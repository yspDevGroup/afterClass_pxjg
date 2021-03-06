// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建课后服务退课记录 PUT /khtksj/create */
export async function createKHTKSJ(body: API.CreateKHTKSJ[], options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: API.KHTKSJ[]; message?: string }>(
    '/khtksj/create',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 批量创建课后服务退课记录 PUT /khtksj/bulkCreateKHFWTK */
export async function bulkCreateKHFWTK(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    XSJBSJIds?: string[];
    /** 退课状态,0:申请中;1:已退课;2:不同意退课 */
    ZT: number;
    /** 课后服务班级id */
    KHFWBJId: string;
    KHFWSJPZIds?: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHTKSJ[]; message?: string }>(
    '/khtksj/bulkCreateKHFWTK',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取课后服务退课记录 POST /khtksj/getAll */
export async function getKHTKSJ(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 班级ID */
    BJSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课后服务类型 */
    KHFWLX?: string;
    /** 课后服务名称 */
    KHFWMC?: string;
    /** 课后服务班级ID */
    KHBJSJId?: string;
    /** 课后课程ID */
    KHKCSJId?: string;
    /** 学生报名服务班ID */
    XSFWBJId?: string;
    /** 退课类型，0:退课;1:停餐;2:服务班 */
    LX: number;
    /** 学校ID */
    XXJBSJId: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHTKSJ[] };
    message?: string;
  }>('/khtksj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除课后服务退课记录 DELETE /khtksj/${param0} */
export async function deleteKHTKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHTKSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khtksj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新课后服务退课记录 PUT /khtksj/update/${param0} */
export async function updateKHTKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHTKSJParams,
  body: API.UpdateKHTKSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khtksj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 区县教育局获取学生退课信息 POST /khtksj/getAllTK */
export async function getAllTK(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 行政区划码 */
    XZQHM: string;
    /** 学年学期ID */
    XNXQId?: string;
    XXJBSJId?: string | any;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khtksj/getAllTK', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构端获取学生退课信息 POST /khtksj/getAllTKByAgency */
export async function getAllTKByAgency(
  body: {
    /** 学生姓名 */
    XSXM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId: string;
    /** 机构ID */
    KHJYJGId: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khtksj/getAllTKByAgency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 机构端获取学生退款信息 POST /khtksj/getAllTK_ByJGid */
export async function getAllTKByJGid(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 学生姓名 */
    XSXM?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId: string;
    /** 机构ID */
    KHJYJGId: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khtksj/getAllTK_ByJGid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据学期查询所有退课，退餐信息 POST /khtksj/getAllRefunds */
export async function getAllRefunds(
  body: {
    /** 退课状态 */
    ZT?: number[];
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId: string;
    /** 课后服务班级ID */
    KHBJSJId?: string;
    /** 学生报名服务班ID */
    XSFWBJId?: string;
    /** 课后增值服务ID */
    KHXXZZFWId?: string;
    /** 退课类型，0:退课;1:停餐 */
    LX?: number;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khtksj/getAllRefunds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
