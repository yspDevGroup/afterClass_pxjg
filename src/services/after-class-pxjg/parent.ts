// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取家长信息 GET /parent/${param0} */
export async function getDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      XM?: string;
      LXDH?: string;
      XSJBSJs?: {
        id?: string;
        XM?: string;
        XH?: string;
        WechatUserId?: string;
        BJSJ?: {
          id?: string;
          BH?: number;
          BJ?: string;
          NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
        };
      }[];
      XXJBSJs?: { id?: string; XXMC?: string; XXDM?: string; XD?: string }[];
    };
    message?: string;
  }>(`/parent/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除家长信息 DELETE /parent/${param0} */
export async function deleteParent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteParentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/parent/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建家长信息 PUT /parent/create */
export async function createParent(body: API.CreateParent, options?: { [key: string]: any }) {
  return request<{
    status: 'ok' | 'error';
    data?: {
      id?: string;
      XM?: string;
      LXDH?: string;
      XSJBSJs?: {
        id?: string;
        XM?: string;
        XH?: string;
        WechatUserId?: string;
        BJSJ?: {
          id?: string;
          BH?: number;
          BJ?: string;
          NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
        };
      }[];
      XXJBSJs?: { id?: string; XXMC?: string; XXDM?: string; XD?: string }[];
    };
    message?: string;
  }>('/parent/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取家长信息 POST /parent/getAll */
export async function getParent(
  body: {
    /** 学校ID */
    XXJBSJId?: string;
    /** 姓名 */
    XM?: string;
    /** 联系电话 */
    LXDH?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: API.Parent[]; message?: string }>(
    '/parent/getAll',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 更新家长信息 PUT /parent/update/${param0} */
export async function updateParent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateParentParams,
  body: API.UpdateParent,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{ status: 'ok' | 'error'; message?: string }>(`/parent/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 家长导入 POST /parent/import */
export async function importParent(options?: { [key: string]: any }) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>('/parent/import', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 学生选择家长 POST /parent/bindParent */
export async function bindParent(
  body: {
    /** 学校ID */
    XXJBSJId: string;
    /** 学生ID */
    XSJBSJId: string;
    /** 家长ID */
    ParentIds: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ status: 'ok' | 'error'; data?: string; message?: string }>(
    '/parent/bindParent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
