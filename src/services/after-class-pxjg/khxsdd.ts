// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后服务订单记录 GET /khxsdd/${param0} */
export async function getKHXSDD(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      DDBH?: string;
      XDSJ?: string;
      ZFFS?: '线上支付' | '线下支付';
      ZFSJ?: string;
      DZFP?: string;
      DDZT?: '待付款' | '已付款' | '已过期' | '待退款' | '已退款';
      DDFY?: number;
      TKSJ?: string;
      DDLX?: number;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      KHBJSJ?:
        | {
            id?: string;
            BJMC?: string;
            KSS?: number;
            FY?: string;
            KKRQ?: string;
            JKRQ?: string;
            KHKCSJ?: { id?: string; KCMC?: string };
          }
        | any;
      KHXXZZFW?:
        | {
            id?: string;
            FWMC?: string;
            FWNR?: string;
            FWZT?: number;
            FY?: string;
            KSRQ?: string;
            JSRQ?: string;
            BMKSSJ?: string;
            BMJSSJ?: string;
            FWTP?: string;
            KHZZFW?: { id?: string; FWMC?: string; FWNR?: string; FWJGMC?: string; FWZT?: number };
          }
        | any;
    };
    message?: string;
  }>(`/khxsdd/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后服务订单记录 DELETE /khxsdd/${param0} */
export async function deleteKHXSDD(
  params: {
    // path
    /** 类型ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsdd/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后服务订单记录 POST /khxsdd/ */
export async function getAllKHXSDD(
  body: {
    /** 订单类型 */
    DDLX?: number;
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 班级名称 */
    bjmc?: string;
    /** 课程名称 */
    kcmc?: string;
    /** 课后服务订单状态 */
    DDZT?: string[];
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHXSDD[]; message?: string }>('/khxsdd/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后服务订单记录 PUT /khxsdd/create */
export async function createKHXSDD(body: API.CreateKHXSDD, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data?: {
      id?: string;
      DDBH?: string;
      XDSJ?: string;
      ZFFS?: '线上支付' | '线下支付';
      ZFSJ?: string;
      DZFP?: string;
      DDZT?: '待付款' | '已付款' | '已过期' | '待退款' | '已退款';
      DDFY?: number;
      TKSJ?: string;
      DDLX?: number;
      XSJBSJ?: {
        id?: string;
        XH?: string;
        XM?: string;
        WechatUserId?: string;
        BJSJ?: { id?: string; BJ?: string; NJSJ?: { id?: string; NJMC?: string; XD?: string } };
      };
      KHBJSJ?:
        | {
            id?: string;
            BJMC?: string;
            KSS?: number;
            FY?: string;
            KKRQ?: string;
            JKRQ?: string;
            KHKCSJ?: { id?: string; KCMC?: string };
          }
        | any;
      KHXXZZFW?:
        | {
            id?: string;
            FWMC?: string;
            FWNR?: string;
            FWZT?: number;
            FY?: string;
            KSRQ?: string;
            JSRQ?: string;
            BMKSSJ?: string;
            BMJSSJ?: string;
            FWTP?: string;
            KHZZFW?: { id?: string; FWMC?: string; FWNR?: string; FWJGMC?: string; FWZT?: number };
          }
        | any;
    };
    message?: string;
  }>('/khxsdd/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 订单支付，获取支付链接 POST /khxsdd/pay */
export async function payKHXSDD(
  body: {
    /** 课后服务订单ID */
    ddIds?: string[];
    /** 课后服务班级ID */
    bjId?: string;
    /** 跳转地址 */
    returnUrl?: string;
    /** 学生ID */
    xsId?: string;
    /** 课程名称 */
    kcmc?: string;
    /** 课后服务订单支付金额 */
    amount?: number;
    /** 学校ID */
    XXJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>('/khxsdd/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 订单申请退款 POST /khxsdd/refund */
export async function refundKHXSDD(
  body: {
    /** 课后服务订单ID */
    ddId?: string;
    /** 课后服务订单退款金额 */
    amount?: number;
    /** 课后服务订单退款原因 */
    reason?: string;
    /** 使用设备所在网络的IP地址 */
    deviceIp?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>('/khxsdd/refund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 订单过期 DELETE /khxsdd/overdue/${param0} */
export async function overdueKHXSDD(
  params: {
    // path
    /** 订单ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khxsdd/overdue/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 移动端查询学生订单信息 POST /khxsdd/getStudentOrders */
export async function getStudentOrders(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: API.KHXSDD[]; message?: string }>('/khxsdd/getStudentOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 导出课后服务订单记录 POST /khxsdd/exportStudentOrders */
export async function exportStudentOrders(
  body: {
    /** 订单类型 */
    DDLX?: number;
    /** 学生ID */
    XSJBSJId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 班级名称 */
    bjmc?: string;
    /** 课程名称 */
    kcmc?: string;
    /** 课后服务订单状态 */
    DDZT?: string[];
  },
  options?: { [key: string]: any }
) {
  return request<{ status?: 'ok' | 'error'; data?: string; message?: string }>('/khxsdd/exportStudentOrders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
