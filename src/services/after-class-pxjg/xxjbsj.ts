// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学校基本数据 GET /xxjbsj/${param0} */
export async function getXXJBSJ(
  params: {
    // path
    /** 学校ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XXDM?: string;
      XH?: string;
      XXRY?: string;
      XXMC?: string;
      XXYWMC?: string;
      XXDZ?: string;
      XXYZBM?: string;
      XZQHM?: string;
      XZQ?: string;
      JXNY?: string | any;
      XQR?: string;
      XXBXLXM?: string;
      XXZGBMM?: string;
      FDDBRH?: string;
      FRZSH?: string;
      XZGH?: string;
      XZXM?: string;
      DWFZRH?: string;
      ZZJGM?: string;
      LXDH?: string;
      LXR?: string;
      CZDH?: string;
      DZXX?: string;
      ZYDZ?: string;
      LSYG?: string;
      XXBBM?: string;
      SSZGDWM?: string;
      SZDCXLXM?: string;
      SZDJJSXM?: string;
      SZDMZSX?: string;
      XXXZ?: number;
      XXRXNL?: number;
      CZXZ?: number;
      CZRXNL?: number;
      GZXZ?: number;
      ZJXYYM?: string;
      FJXYYM?: string;
      ZSBJ?: string;
      XD?: string;
    };
    message?: string;
  }>(`/xxjbsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除学校基本数据 DELETE /xxjbsj/${param0} */
export async function deleteXXJBSJ(
  params: {
    // path
    /** 学校ID */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxjbsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有学校基本数据 POST /xxjbsj/getAll */
export async function getAllXXJBSJ(
  body: {
    /** 学校代码 */
    XXDM?: string;
    /** 学校ID */
    xxId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.XXJBSJ[] };
    message?: string;
  }>('/xxjbsj/getAll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建学校基本数据 PUT /xxjbsj/create */
export async function createXXJBSJ(body: API.CreateXXJBSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XXDM?: string;
      XH?: string;
      XXRY?: string;
      XXMC?: string;
      XXYWMC?: string;
      XXDZ?: string;
      XXYZBM?: string;
      XZQHM?: string;
      XZQ?: string;
      JXNY?: string | any;
      XQR?: string;
      XXBXLXM?: string;
      XXZGBMM?: string;
      FDDBRH?: string;
      FRZSH?: string;
      XZGH?: string;
      XZXM?: string;
      DWFZRH?: string;
      ZZJGM?: string;
      LXDH?: string;
      LXR?: string;
      CZDH?: string;
      DZXX?: string;
      ZYDZ?: string;
      LSYG?: string;
      XXBBM?: string;
      SSZGDWM?: string;
      SZDCXLXM?: string;
      SZDJJSXM?: string;
      SZDMZSX?: string;
      XXXZ?: number;
      XXRXNL?: number;
      CZXZ?: number;
      CZRXNL?: number;
      GZXZ?: number;
      ZJXYYM?: string;
      FJXYYM?: string;
      ZSBJ?: string;
      XD?: string;
    };
    message?: string;
  }>('/xxjbsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新学校基本数据 PUT /xxjbsj/update/${param0} */
export async function updateXXJBSJ(
  params: {
    // path
    /** 学校ID */
    id: string;
  },
  body: API.UpdateXXJBSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xxjbsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取学校的首页统计数据 POST /xxjbsj/homePage */
export async function homePage(
  body: {
    XXJBSJId?: string;
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/xxjbsj/homePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 学校查看考勤趋势 POST /xxjbsj/getAttendanceTrend */
export async function getAttendanceTrend(
  body: {
    XXJBSJId?: string;
    startDate?: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/xxjbsj/getAttendanceTrend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 学校按日期统计收款，退款信息 POST /xxjbsj/getRefund */
export async function getRefund(
  body: {
    XXJBSJId?: string;
    startDate?: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/xxjbsj/getRefund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学校代办事项 POST /xxjbsj/getAllUnfinish */
export async function getAllUnfinish(
  body: {
    XXJBSJId?: string;
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/xxjbsj/getAllUnfinish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
