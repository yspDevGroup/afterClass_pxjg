// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Returns status and version of the application GET /_app/status */
export async function getStatus(options?: { [key: string]: any }) {
  return request<{ status?: string; version?: string }>('/_app/status', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 实时获取后台环境变量 GET /_app/env */
export async function getEnv(options?: { [key: string]: any }) {
  return request<{ status?: 'ok' | 'error'; data?: { yspAppEnv?: string; nodeEnv?: string } }>(
    '/_app/env',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
