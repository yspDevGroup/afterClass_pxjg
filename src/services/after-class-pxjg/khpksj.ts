// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后排课数据 GET /khpksj/${param0} */
export async function getKHPKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHPKSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
      RQ?: string;
      PKTYPE?: number;
      PKBZ?: string;
      KHBJSJ?: {
        id?: string;
        BJMC?: string;
        BJMS?: string;
        BJZT?: '未开班' | '已开班' | '已结课';
        ZJS?: string;
        FJS?: string;
        BJRS?: number;
        KSS?: number;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        KCTP?: string;
        NJS?: string;
        XQ?: string;
        NJSName?: string;
        XQName?: string;
        ZJSName?: string;
        FJSName?: string;
        KHKCSJ?: {
          id?: string;
          KCMC?: string;
          KCTP?: string;
          KCZT?: number;
          KCMS?: string;
          KKRQ?: string | any;
          JKRQ?: string | any;
          BMKSSJ?: string;
          BMJSSJ?: string;
        };
      };
      XXSJPZ?: {
        id?: string;
        KSSJ?: string;
        JSSJ?: string;
        KJS?: string;
        TITLE?: string;
        BZXX?: string;
        TYPE?: 0 | 1 | 2;
      };
      FJSJ?: {
        id?: string;
        FJBH?: string;
        FJMC?: string;
        FJLC?: string;
        FJJZMJ?: number;
        FJSYMJ?: number;
        FJRS?: number;
        FJLX?: string;
        XQ?: string;
        XQName?: string;
      };
    };
    message?: string;
  }>(`/khpksj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后排课数据 DELETE /khpksj/${param0} */
export async function deleteKHPKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHPKSJParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khpksj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 获取课后排课数据 GET /khpksj/weekSchedule/${param0} */
export async function getKHPKSJByBJID(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHPKSJByBJIDParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; data?: API.KHPKSJ[]; message?: string }>(`/khpksj/weekSchedule/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后排课数据 POST /khpksj/ */
export async function getAllKHPKSJ(
  body: {
    /** 年级ID */
    njId: string;
    /** 学年学期ID */
    XNXQId: string;
    /** 场地id */
    FJSJId?: string;
    /** 行政班id */
    BJSJId?: string;
    /** 排课类型 */
    PKTYPE?: string;
    /** 课程名称 */
    name: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: API.KHPKSJ[]; message?: string }>('/khpksj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后排课数据 PUT /khpksj/create */
export async function createKHPKSJ(
  body: {
    bjIds?: string[];
    data?: API.CreateKHPKSJ[];
  },
  options?: { [key: string]: any }
) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      WEEKDAY?: string;
      XXSJPZId?: string;
      KHBJSJId?: string;
      FJSJId?: string;
      RQ?: string;
      PKTYPE?: string;
      XNXQId?: string;
    }[];
    message?: string;
  }>('/khpksj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 批量为某个课程班在部分日期进行排课创建 PUT /khpksj/bulkCreatePK */
export async function bulkCreatePK(
  body: {
    /** 上课日期(周几):0,1,2,3,4,5,6 */
    WEEKDAY?: string;
    /** 课后班级数据id */
    KHBJSJId?: string;
    /** 学校时间配置id */
    XXSJPZId?: string;
    /** 学年学期id */
    XNXQId?: string;
    /** 场地id */
    FJSJId?: string;
    /** 具体日期 */
    RQs?: any[];
    /** 排课类型:0:按天排课,1:按周排课,3:单双周排课 */
    PKTYPE?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khpksj/bulkCreatePK', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 添加按日排课 PUT /khpksj/addKHPKSJ */
export async function addKHPKSJ(
  body: {
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    /** 学校时间配置ID */
    XXSJPZId?: string;
    /** 课后班级ID */
    KHBJSJId?: string;
    /** 房间ID */
    FJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 日期 */
    RQ?: string;
    /** 是否单双周:0:单周,1:双周 */
    IsDSZ?: number;
    /** 排课备注 */
    PKBZ?: string;
    /** 排课类型:0:按天排课,1:按周排课,2:单周排课,3:双周排课 */
    PKTYPE?: number;
  },
  options?: { [key: string]: any }
) {
  return request<{ status: 'ok' | 'error'; data?: { id?: string }; message?: string }>('/khpksj/addKHPKSJ', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 查看所有排课 POST /khpksj/getAllPK */
export async function getAllPK(
  body: {
    /** 课后班级ID */
    KHBJSJIds?: string[];
    /** 课后课程ID */
    KHKCSJId?: string;
    /** 房间ID */
    FJSJId?: string;
    /** 场地类型ID */
    FJLXId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
    /** 学年学期ID */
    XNXQId: string;
    /** 学校基本数据id */
    XXJBSJId: string;
    /** 校区数据id */
    XQSJId?: string;
    /** 行政班id */
    BJSJId?: string;
    /** 年级id */
    NJSJId?: string;
    /** 日期 */
    RQ?: string;
    /** 排课类型:0:按天排课,1:按周排课,2:单周排课,3:双周排课 */
    PKTYPE?: number[];
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khpksj/getAllPK', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后排课数据 PUT /khpksj/update/${param0} */
export async function updateKHPKSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHPKSJParams,
  body: API.UpdateKHPKSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khpksj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 查看机构课表 POST /khpksj/getAgencySchedule */
export async function getAgencySchedule(
  body: {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 机构ID */
    KHJYJGId: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khpksj/getAgencySchedule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 课时判断 POST /khpksj/judge */
export async function judgeKHPKSJ(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    /** 课程班ID */
    KHBJSJId: string;
    /** 课时数 */
    KSS: number;
    /** 排课类型 */
    startDate?: string;
    /** 课程名称 */
    endDate?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khpksj/judge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取班级信息及课表 GET /khpksj/classSchedule/${param0} */
export async function classSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.classScheduleParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khpksj/classSchedule/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}
