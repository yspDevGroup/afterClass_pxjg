// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取学生数据 GET /xsjbsj/${param0} */
export async function getXSJBSJ(
  params: {
    // path
    /** 学生ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XH?: string;
      XM?: string;
      YWXM?: string;
      XMPY?: string;
      CYM?: string;
      XBM?: string;
      CSRQ?: string | any;
      CSDM?: string;
      JG?: string;
      MZM?: string;
      GJDQM?: string;
      SFZJLXM?: string;
      SFZJH?: string;
      HYZKM?: string;
      GATQWM?: string;
      ZZMMM?: string;
      JKZKM?: string;
      XYZJM?: string;
      XXM?: string;
      SFZJYXQ?: string | any;
      DSZYBZ?: string;
      RXNY?: string | any;
      NJ?: string;
      BH?: string;
      XSLBM?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      SFLDRK?: string;
      TC?: string;
      LXDH?: string;
      TXDZ?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      XJH?: string;
      XQSJ?: { id?: string; XQH?: string; XQMC?: string; XQDZ?: string };
      BJSJ?: {
        id?: string;
        BH?: string;
        BJ?: string;
        NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      };
    };
    message?: string;
  }>(`/xsjbsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除学生数据 DELETE /xsjbsj/${param0} */
export async function deleteXSJBSJ(
  params: {
    // path
    /** 学生ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjbsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有学生数据 POST /xsjbsj/ */
export async function getAllXSJBSJ(
  body: {
    /** 学号,姓名模糊匹配 */
    keyWord?: string;
    /** 班级ID */
    bjId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{
    status?: 'ok' | 'error';
    data?: { count?: number; rows?: API.XSJBSJ[] };
    message?: string;
  }>('/xsjbsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建学生数据 PUT /xsjbsj/create */
export async function createXSJBSJ(body: API.CreateXSJBSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XH?: string;
      XM?: string;
      YWXM?: string;
      XMPY?: string;
      CYM?: string;
      XBM?: string;
      CSRQ?: string | any;
      CSDM?: string;
      JG?: string;
      MZM?: string;
      GJDQM?: string;
      SFZJLXM?: string;
      SFZJH?: string;
      HYZKM?: string;
      GATQWM?: string;
      ZZMMM?: string;
      JKZKM?: string;
      XYZJM?: string;
      XXM?: string;
      SFZJYXQ?: string | any;
      DSZYBZ?: string;
      RXNY?: string | any;
      NJ?: string;
      BH?: string;
      XSLBM?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      SFLDRK?: string;
      TC?: string;
      LXDH?: string;
      TXDZ?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      XJH?: string;
      XQSJ?: { id?: string; XQH?: string; XQMC?: string; XQDZ?: string };
      BJSJ?: {
        id?: string;
        BH?: string;
        BJ?: string;
        NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      };
    };
    message?: string;
  }>('/xsjbsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新学生数据 PUT /xsjbsj/update/${param0} */
export async function updateXSJBSJ(
  params: {
    // path
    /** 学生ID */
    id: string;
  },
  body: API.UpdateXSJBSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/xsjbsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 获取学生画像 GET /xsjbsj/portrait/${param0} */
export async function getPortrait(
  params: {
    // path
    /** 学生ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      XH?: string;
      XM?: string;
      YWXM?: string;
      XMPY?: string;
      CYM?: string;
      XBM?: string;
      CSRQ?: string | any;
      CSDM?: string;
      JG?: string;
      MZM?: string;
      GJDQM?: string;
      SFZJLXM?: string;
      SFZJH?: string;
      HYZKM?: string;
      GATQWM?: string;
      ZZMMM?: string;
      JKZKM?: string;
      XYZJM?: string;
      XXM?: string;
      SFZJYXQ?: string | any;
      DSZYBZ?: string;
      RXNY?: string | any;
      NJ?: string;
      BH?: string;
      XSLBM?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      SFLDRK?: string;
      TC?: string;
      LXDH?: string;
      TXDZ?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      XJH?: string;
      XSCFSJs?: {
        id?: string;
        CFMCM?: string;
        CFYY?: string;
        CFRQ?: string | any;
        CFWH?: string;
        CFCXRQ?: string | any;
        CFCXWH?: string;
      }[];
      XSJLSJs?: {
        id?: string;
        JLMC?: string;
        JLJBM?: string;
        JLDJM?: string;
        HJLBM?: string;
        JLYY?: string;
        JLJE?: string;
        JLWH?: string;
        JLXND?: string;
        BJDW?: string;
        JLLXM?: string;
        JLFSM?: string;
        HJXM?: string;
        HJRQ?: string | any;
      }[];
      XSXXJLs?: {
        id?: string;
        XXQSRQ?: string | any;
        XXZZRQ?: string | any;
        XXDW?: string;
        XXNR?: string;
        SXZYMC?: string;
        SHXWM?: string;
        XXZMR?: string;
        XXJLBZ?: string;
      }[];
      BJSJ?: {
        id?: string;
        BH?: string;
        BJ?: string;
        NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
      };
    };
    message?: string;
  }>(`/xsjbsj/portrait/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}
