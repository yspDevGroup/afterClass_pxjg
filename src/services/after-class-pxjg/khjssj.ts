// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据ID获取机构教师信息 GET /khjssj/${param0} */
export async function KHJSSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.KHJSSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
      XM?: string;
      XB?: string;
      MZ?: string;
      LXDH?: string;
      CSRQ?: string | any;
      DZXX?: string;
      SFZJLX?: string;
      SFZJH?: string;
      BZ?: string;
      ZP?: string;
      ZGZS?: string;
      ZGZSBH?: string;
      JL?: number;
      XL?: string;
      BYYX?: string;
      SXZY?: string;
      JSKM?: string;
    };
    message?: string;
  }>(`/khjssj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除机构教师信息 DELETE /khjssj/${param0} */
export async function deleteKHJSSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHJSSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjssj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建机构教师信息 PUT /khjssj/create */
export async function createKHJSSJ(body: API.CreateKHJSSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
      XM?: string;
      XB?: string;
      MZ?: string;
      LXDH?: string;
      CSRQ?: string | any;
      DZXX?: string;
      SFZJLX?: string;
      SFZJH?: string;
      BZ?: string;
      ZP?: string;
      ZGZS?: string;
      ZGZSBH?: string;
      JL?: number;
      XL?: string;
      BYYX?: string;
      SXZY?: string;
      JSKM?: string;
    };
    message?: string;
  }>('/khjssj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机构教师信息 POST /khjssj/getAll */
export async function getKHJSSJ(
  body: {
    /** 关键字筛选，姓名/电话 */
    keyWord?: string;
    /** 课后服务机构ID */
    JGId: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHJSSJ[] };
    message?: string;
  }>('/khjssj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新机构教师信息 PUT /khjssj/update/${param0} */
export async function updateKHJSSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHJSSJParams,
  body: API.UpdateKHJSSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khjssj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 查看教师课表 POST /khjssj/getSchedule */
export async function getSchedule(options?: { [key: string]: any }) {
  return request<any>('/khjssj/getSchedule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查看教师所教课程 POST /khjssj/getCourse */
export async function getCourse(options?: { [key: string]: any }) {
  return request<any>('/khjssj/getCourse', {
    method: 'POST',
    ...(options || {}),
  });
}
