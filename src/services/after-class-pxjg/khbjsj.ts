// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后班级数据 GET /khbjsj/${param0} */
export async function getKHBJSJ(
  params: {
    // path
    /** 课后班级ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 删除课后班级数据 DELETE /khbjsj/${param0} */
export async function deleteKHBJSJ(
  params: {
    // path
    /** 课后班级ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khbjsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 查询所有课后班级数据 POST /khbjsj/ */
export async function getAllKHBJSJ(
  body: {
    /** 课后课程ID */
    kcId?: string;
    /** 年级ID */
    njId?: string;
    /** 学年学期ID */
    XNXQId?: string;
    /** 班级状态 */
    bjzt?: string[];
    /** 校区ID */
    xqId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
    /** 班级名称 */
    name?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 创建课后班级数据 PUT /khbjsj/create */
export async function createKHBJSJ(body: API.CreateKHBJSJ, options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '未开班' | '已开班' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      FY?: number;
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
      KHKCSJId?: string;
      KHKCSJ?: {
        id?: string;
        KCMC?: string;
        KCLX?: string;
        KCTP?: string;
        KCZT?: number;
        KCMS?: string;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        XNXQId?: string;
        KHKCLX?: { id?: string; KCLX?: string; KBYS?: string };
      };
      KHPKSJs?: { id?: string; WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6' }[];
      KHXSBJs?: { id?: string; createdAt?: string; XSId?: string; XSXM?: string }[];
    };
    message?: string;
  }>('/khbjsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新课后班级数据 PUT /khbjsj/update/${param0} */
export async function updateKHBJSJ(
  params: {
    // path
    /** 课后班级ID */
    id: string;
  },
  body: API.UpdateKHBJSJ,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status?: 'ok' | 'error'; message?: string }>(`/khbjsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { ...queryParams },
    data: body,
    ...(options || {})
  });
}

/** 获取班级已报名学生信息 GET /khbjsj/enrolled/${param0} */
export async function getEnrolled(
  params: {
    // path
    /** 课后班级ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/enrolled/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 获取学生的班级信息 POST /khbjsj/getStudentClasses */
export async function getStudentClasses(
  body: {
    /** 学生ID */
    XSJBSJId?: string;
    /** 状态 */
    ZT?: number[];
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getStudentClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取班级基础信息 POST /khbjsj/getAllClasses */
export async function getAllClasses(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 班级状态 */
    BJZT?: string;
    /** 班级名称 */
    BJMC?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getAllClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取学校班级的评价信息 POST /khbjsj/getClassesEvaluation */
export async function getClassesEvaluation(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 班级名称 */
    BJMC?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getClassesEvaluation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 移动端报名时获取班级详细信息 GET /khbjsjdetail/${param0} */
export async function getClassDetail(
  params: {
    // path
    /** 课后班级ID */
    id: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsjdetail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {})
  });
}

/** 获取班级与教师信息 POST /khbjsj/getClasses */
export async function getClasses(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课程班的学生信息 POST /khbjsj/getClassStudents */
export async function getClassStudents(
  body: {
    /** 班级ID */
    KHBJSJId?: string;
    ZT?: number[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getClassStudents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 取消开班 POST /khbjsj/cancleClass */
export async function cancleClass(
  body: {
    /** 班级ID */
    KHBJSJId?: string;
    /** 班级ID */
    JZGJBSJId?: string;
    /** 备注信息 */
    BZ?: string;
    /** 设备IP */
    deviceIp?: string;
    /** 通知内容 */
    MSG?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/cancleClass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 根据课后班级Id查询授课教师 POST /khbjsj/getTeachersByBJId */
export async function getTeachersByBJId(
  body: {
    /** 班级ID */
    KHBJSJId?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getTeachersByBJId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 更新或创建课程班课程安排记录 PUT /khbjsj/upsert */
export async function upsertKHBJKSSJ(
  body: {
    /** 班级ID */
    KHBJSJId?: string;
    /** 课程安排信息 */
    DATA?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/upsert', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取课程班课程安排记录 POST /khbjsj/getAllKHBJKSSJ */
export async function getAllKHBJKSSJ(
  body: {
    /** 班级列表 */
    KHBJSJIds?: string[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getAllKHBJKSSJ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}

/** 获取为主教师的班级列表 POST /khbjsj/getMainTeacher */
export async function getMainTeacher(
  body: {
    /** 班级列表 */
    KHBJSJIds?: string[];
    /** 教师ID */
    JZGJBSJId?: string;
    /** 教师类型 */
    JSLX?: string;
  },
  options?: { [key: string]: any }
) {
  return request<any>('/khbjsj/getMainTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {})
  });
}
