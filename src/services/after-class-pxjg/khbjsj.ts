// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取课后班级数据 GET /khbjsj/${param0} */
export async function getKHBJSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKHBJSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除课后班级数据 DELETE /khbjsj/${param0} */
export async function deleteKHBJSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKHBJSJParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khbjsj/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询所有课后班级数据 POST /khbjsj/ */
export async function getAllKHBJSJ(
  body: {
    /** 课后课程ID */
    kcId?: string;
    /** 年级ID */
    njId?: string;
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否启用 */
    ISQY?: number;
    /** 学年学期ID */
    XNXQId: string;
    /** 班级状态 */
    bjzt?: string[];
    /** 校区ID */
    xqId?: string;
    /** 页数 */
    page: number;
    /** 每页记录数 */
    pageSize: number;
    /** 班级名称 */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建课后班级数据 PUT /khbjsj/create */
export async function createKHBJSJ(body: API.CreateKHBJSJ, options?: { [key: string]: any }) {
  return request<any>('/khbjsj/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新课后班级数据 PUT /khbjsj/update/${param0} */
export async function updateKHBJSJ(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKHBJSJParams,
  body: API.UpdateKHBJSJ,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/khbjsj/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 获取班级已报名学生信息 GET /khbjsj/enrolled/${param0} */
export async function getEnrolled(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEnrolledParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/enrolled/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取课后服务班级已报名学生信息 GET /khbjsj/serEnrolled/${param0} */
export async function getSerEnrolled(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSerEnrolledParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/serEnrolled/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取学生的班级信息 POST /khbjsj/getStudentClasses */
export async function getStudentClasses(
  body: {
    /** 学生ID */
    XSJBSJId: string;
    /** 状态 */
    ZT?: number[];
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否走班 */
    ISZB?: number;
    /** 是否启用 */
    ISQY?: number;
    /** 学年学期ID */
    XNXQId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getStudentClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生可评价班级信息 POST /khbjsj/getStudentEvaluationClasses */
export async function getStudentEvaluationClasses(
  body: {
    /** 学生ID */
    XSJBSJId: string;
    /** 学年学期ID */
    XNXQId: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getStudentEvaluationClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
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
    /** 班级ID */
    BJSJId?: string;
    /** 校区数据ID */
    XQSJId?: string;
    /** 班级状态 */
    BJZT?: string;
    /** 班级名称 */
    BJMC?: string;
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否走班 */
    ISZB?: number;
    /** 是否启用 */
    ISQY?: number;
    /** 课程类型 */
    KCTAG?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getAllClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取班级对应的服务班引用班级 POST /khbjsj/getNJbyKHBJSJId */
export async function getNJbyKHBJSJId(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    /** 课后班级数据id */
    KHBJSJId: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getNJbyKHBJSJId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
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
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否走班 */
    ISZB?: number;
    /** 是否启用 */
    ISQY?: number;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getClassesEvaluation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 移动端报名时获取班级详细信息 GET /khbjsjdetail/${param0} */
export async function getClassDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClassDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsjdetail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取班级与教师信息 POST /khbjsj/getClasses */
export async function getClasses(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 年级ID */
    NJSJId?: string;
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否启用 */
    ISQY?: number;
    /** 是否走班 */
    ISZB?: number;
    /** 课程类型 */
    KCTAG?: string;
    /** 校区ID */
    XQSJId?: string;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课程班的学生信息 POST /khbjsj/getClassStudents */
export async function getClassStudents(
  body: {
    /** 班级ID */
    KHBJSJId: string;
    ZT?: number[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getClassStudents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消开班 POST /khbjsj/cancleClass */
export async function cancleClass(
  body: {
    /** 班级ID */
    KHBJSJId: string;
    /** 班级ID */
    JZGJBSJId: string;
    /** 备注信息 */
    BZ: string;
    /** 学生列表 */
    XSlist?: { XSJBSJId?: string; ZT?: number }[];
    /** 设备IP */
    deviceIp: string;
    /** 通知内容 */
    MSG: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/cancleClass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据课后班级Id查询授课教师 POST /khbjsj/getTeachersByBJId */
export async function getTeachersByBJId(
  body: {
    /** 班级ID */
    KHBJSJId: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getTeachersByBJId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新或创建课程班课程安排记录 PUT /khbjsj/upsert */
export async function upsertKHBJKSSJ(
  body: {
    /** 班级ID */
    KHBJSJId: string;
    /** 课程安排信息 */
    DATA?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/upsert', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取课程班课程安排记录 POST /khbjsj/getAllKHBJKSSJ */
export async function getAllKHBJKSSJ(
  body: {
    /** 班级列表 */
    KHBJSJIds: string[];
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getAllKHBJKSSJ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取为主教师的班级列表 POST /khbjsj/getMainTeacher */
export async function getMainTeacher(
  body: {
    /** 班级列表 */
    KHBJSJIds: string[];
    /** 教师ID */
    JZGJBSJId: string;
    /** 教师类型 */
    JSLX: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getMainTeacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 课程班-学生报名 POST /khbjsj/studentRegistration */
export async function studentRegistration(
  body: {
    ZT?: number;
    XSJBSJIds?: string[];
    KHBJSJId?: string;
    JZGJBSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/studentRegistration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询未指定教师的课程班 POST /khbjsj/getNoTeacherClasses */
export async function getNoTeacherClasses(
  body: {
    BJZT?: string;
    RQ?: string;
    XNXQId: string;
    /** 是否启用 */
    ISQY?: number;
    /** 是否被服务使用:0没有，1有 */
    ISFW?: number;
    /** 是否走班 */
    ISZB?: number;
    XQSJId?: string;
    NJSJId?: string;
    KHKCLXId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getNoTeacherClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询按行政班开设的课程班可交换的课程班 POST /khbjsj/getExchengeableClasses */
export async function getExchengeableClasses(
  body: {
    XNXQId: string;
    KHBJSJId: string;
    RQ: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getExchengeableClasses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 筛选适用年级的班级基础信息 POST /khbjsj/getAllClassesByNJ */
export async function getAllClassesByNJ(
  body: {
    /** 学年学期ID */
    XNXQId?: string;
    /** 课程ID */
    KHKCSJId?: string;
    /** 校区数据ID */
    XQSJId?: string;
    /** 班级数据Id */
    BJSJId?: string;
    /** 年级IDs */
    NJSJIds?: string[];
    /** 班级状态 */
    BJZT?: string;
    /** 是否启用 */
    ISQY?: number;
    /** 是否走班 */
    ISZB?: number;
    /** 课后课程类型ids */
    KHKCLXIds?: string[];
    /** 班级名称 */
    BJMC?: string;
    /** 报名类型，0:先报名后缴费,1:缴费后自动报名,2:免费课程 */
    BMLX?: number;
    /** 页数 */
    page?: number;
    /** 每页记录数 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getAllClassesByNJ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 判断学生选课报名时间冲突 POST /khbjsj/judgeClassConflict */
export async function judgeClassConflict(
  body: {
    /** 学年学期ID */
    XNXQId: string;
    /** 课程班ID */
    KHBJSJId: string;
    /** 学生ID */
    XSJBSJId: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/judgeClassConflict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量修改班级状态 POST /khbjsj/bulkUpdate */
export async function bulkUpdate(
  body: {
    /** 课程班ID */
    KHBJSJIds: string[];
    BJZT?: '未开班' | '已开班' | '已结课';
    BMZT?: 0 | 1;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/bulkUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据学期获取班级列表 POST /khbjsj/getClassesBySemester */
export async function getClassesBySemester(
  body: {
    XNXQId: string;
    XQSJId?: string;
    KHKCSJId?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getClassesBySemester', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 移动端获取班级详情 GET /khbjsj/getMobileClassDetail/${param0} */
export async function getMobileClassDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMobileClassDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/khbjsj/getMobileClassDetail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 按日期查询之后的代课与请假记录 POST /khbjsj/getRecordByDate */
export async function getRecordByDate(
  body: {
    KHBJSJId: string;
    JZGJBSJId: string;
    startDate: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/getRecordByDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改班级教师 POST /khbjsj/changeTeachers */
export async function changeTeachers(
  body: {
    KHBJSJId: string;
    XNXQId: string;
    startDate: string;
    JZGJBSJIds?: { JZGJBSJId?: string; JSLX?: number; JSXM?: string }[];
  },
  options?: { [key: string]: any },
) {
  return request<any>('/khbjsj/changeTeachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
