// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取教职工所带班级信息 GET /bjsj/classesByTeacher/${param0} */
export async function getClasses(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassesParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; data?: API.BJSJ[]; message?: string }>(
    `/bjsj/classesByTeacher/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 获取教职工基本数据 GET /jzgjbsj/${param0} */
export async function getJZGJBSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getJZGJBSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
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
      JGH?: string;
      JTZZ?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      XLM?: string;
      GZNY?: string | any;
      LXNY?: string | any;
      CJNY?: string | any;
      BZLBM?: string;
      DABH?: string;
      DAWB?: string;
      TXDZ?: string;
      LXDH?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      TC?: string;
      GWZYM?: string;
      ZYRKXD?: string;
      ZC?: string;
      ZW?: string;
      BZ?: string;
      ZP?: string;
      ZGZS?: string;
      ZGZSBH?: string;
      JL?: number;
      XL?: string;
      BYYX?: string;
      SXZY?: string;
      QYMC?: string;
      XXMC?: string;
      JSKM?: string;
      WechatUserId?: string;
      XNJGSJs?: { id?: string; LSJGH?: string; LSJGMC?: string; JGMC?: string; JGJC?: string }[];
    };
    message?: string;
  }>(`/jzgjbsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除教职工基本数据 DELETE /jzgjbsj/${param0} */
export async function deleteJZGJBSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteJZGJBSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgjbsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有教职工基本数据 POST /jzgjbsj/ */
export async function getAllJZGJBSJ(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 机构ID */
    KHJYJGId?: string;
    /** 工号、姓名、联系电话模糊匹配 */
    keyWord?: string;
    /** 教师姓名 */
    name?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    status: 'ok' | 'error';
    data?: { count?: number; rows?: API.JZGJBSJ[] };
    message?: string;
  }>('/jzgjbsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建教职工基本数据 PUT /jzgjbsj/create */
export async function createJZG(body: API.CreateJZGJBSJ, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
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
      JGH?: string;
      JTZZ?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      XLM?: string;
      GZNY?: string | any;
      LXNY?: string | any;
      CJNY?: string | any;
      BZLBM?: string;
      DABH?: string;
      DAWB?: string;
      TXDZ?: string;
      LXDH?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      TC?: string;
      GWZYM?: string;
      ZYRKXD?: string;
      ZC?: string;
      ZW?: string;
      BZ?: string;
      ZP?: string;
      ZGZS?: string;
      ZGZSBH?: string;
      JL?: number;
      XL?: string;
      BYYX?: string;
      SXZY?: string;
      QYMC?: string;
      XXMC?: string;
      JSKM?: string;
      WechatUserId?: string;
      XNJGSJs?: { id?: string; LSJGH?: string; LSJGMC?: string; JGMC?: string; JGJC?: string }[];
    };
    message?: string;
  }>('/jzgjbsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新教职工基本数据 PUT /jzgjbsj/update/${param0} */
export async function updateJZGJBSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateJZGJBSJParams,
  body: API.UpdateJZGJBSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/jzgjbsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取教师画像 GET /jzgjbsj/portrait/${param0} */
export async function getPortrait(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPortraitParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      GH?: string;
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
      JGH?: string;
      JTZZ?: string;
      XZZ?: string;
      HKSZD?: string;
      HKXZM?: string;
      XLM?: string;
      GZNY?: string | any;
      LXNY?: string | any;
      CJNY?: string | any;
      BZLBM?: string;
      DABH?: string;
      DAWB?: string;
      TXDZ?: string;
      LXDH?: string;
      YZBM?: string;
      DZXX?: string;
      ZYDZ?: string;
      TC?: string;
      GWZYM?: string;
      ZYRKXD?: string;
      ZC?: string;
      ZW?: string;
      XNJGSJs?: { id?: string; LSJGH?: string; LSJGMC?: string; JGMC?: string; JGJC?: string }[];
      JZGCFSJs?: {
        id?: string;
        MC?: string;
        RQ?: string | any;
        ZZJG?: string;
        CFYY?: string;
        LY?: string;
      }[];
      JZGGZJLs?: {
        id?: string;
        GZQSRQ?: string | any;
        GZZZRQ?: string | any;
        GZDW?: string;
        GZNR?: string;
        CRDZZW?: string;
        CRZYJSZWM?: string;
        GZZMR?: string;
        GZJLBZ?: string;
      }[];
      JZGKTYJs?: {
        id?: string;
        MC?: string;
        LXRQ?: string | any;
        JTRQ?: string | any;
        KTBH?: string;
        LXDW?: string;
        CDRW?: string;
        CY?: string;
        NR?: string;
        LY?: string;
      }[];
      JZGLWSJs?: {
        id?: string;
        MC?: string;
        BH?: string;
        RQ?: string | any;
        CBH?: string;
        KW?: string;
        KWJB?: string;
        QS?: string;
        NR?: string;
        LY?: string;
      }[];
      JZGRYSJs?: {
        id?: string;
        JB?: string;
        LX?: string;
        MC?: string;
        RQ?: string | any;
        ZZJG?: string;
        HJYY?: string;
        LY?: string;
        BSMC?: string;
        JX?: string;
        NR?: string;
      }[];
      JZGXXJLs?: {
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
    };
    message?: string;
  }>(`/jzgjbsj/portrait/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 按日期查询教师的请假，调代课信息 POST /jzgjbsj/getTeachersApplication */
export async function getTeachersApplication(
  body: {
    JZGJBSJId: string;
    startDate: string;
    endDate?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jzgjbsj/getTeachersApplication', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取除对应课程以外的其他老师 POST /jzgjbsj/getIgnoreTeacherByClassesId */
export async function getIgnoreTeacherByClassesId(
  body: {
    /** 课后班级数据id */
    KHBJSJId: string;
    /** 学校基本数据id */
    XXJBSJId: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jzgjbsj/getIgnoreTeacherByClassesId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按学期查询教师为主班的课程班 POST /jzgjbsj/getClasses */
export async function getClasses_2(
  body: {
    /** 教师ID */
    JZGJBSJId: string;
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/jzgjbsj/getClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
