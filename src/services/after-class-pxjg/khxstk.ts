// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取退款记录详情 GET /khxstk/${param0} */
export async function getKHXSTK(
  params: {
    // path
    /** 退款记录ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      TKBH?: string;
      TKJE?: number;
      TKZT?: number;
      TKSJ?: string;
      SPSJ?: string;
      BZ?: string;
      createdAt?: string;
      KHBJSJId?: string;
      KHXSDDId?: string;
      XXJBSJId?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string } | any;
      KHBJSJ?: { BJMC?: string; KHKCSJ?: { KCMC?: string } } | any;
      KHXXZZFW?: { id?: string; FWMC?: string; KHZZFW?: { id?: string; FWMC?: string; FWJGMC?: string } } | any;
    };
    message?: string;
  }>(`/khxstk/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除退款记录 DELETE /khxstk/${param0} */
export async function deleteKHXSTK(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxstk/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有退款记录 POST /khxstk/ */
export async function getAllKHXSTK(
  body: {
    /** 退款状态 */
    TKZT?: number[];
    /** 退款类型,0:退款;1:停餐 */
    LX?: number;
    /** 学生ID */
    XSJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程数据Id */
    KHKCSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 课后服务类型Id */
    KHFWLXId?: string;
    /** 课后服务名称 */
    KHFWMC?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.KHXSTK[] };
    message?: string;
  }>('/khxstk/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建退款记录 PUT /khxstk/create */
export async function createKHXSTK(body: API.CreateKHXSTK, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      TKBH?: string;
      TKJE?: number;
      TKZT?: number;
      TKSJ?: string;
      SPSJ?: string;
      BZ?: string;
      createdAt?: string;
      KHBJSJId?: string;
      KHXSDDId?: string;
      XXJBSJId?: string;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      JZGJBSJ?: { id?: string; XM?: string; WechatUserId?: string } | any;
      KHBJSJ?: { BJMC?: string; KHKCSJ?: { KCMC?: string } } | any;
      KHXXZZFW?: { id?: string; FWMC?: string; KHZZFW?: { id?: string; FWMC?: string; FWJGMC?: string } } | any;
    };
    message?: string;
  }>('/khxstk/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新退款记录 PUT /khxstk/update/${param0} */
export async function updateKHXSTK(
  params: {
    // path
    /** 退款记录ID */
    id: string;
  },
  body: API.UpdateKHXSTK,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxstk/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 导出退款记录 POST /khxstk/exportTKJL */
export async function exportTKJL(
  body: {
    /** 退款状态 */
    TKZT?: number[];
    /** 退款类型,0:退款;1:停餐 */
    LX?: number;
    /** 学生ID */
    XSJBSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程数据Id */
    KHKCSJId?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 课后服务类型Id */
    KHFWLXId?: string;
    /** 课后服务名称 */
    KHFWMC?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khxstk/exportTKJL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
