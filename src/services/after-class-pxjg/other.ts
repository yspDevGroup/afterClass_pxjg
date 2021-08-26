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
