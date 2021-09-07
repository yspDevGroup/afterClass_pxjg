/*
 * @description:
 * @author: wsl
 * @Date: 2021-09-07 10:39:32
 * @LastEditTime: 2021-09-07 11:01:16
 * @LastEditors: wsl
 */
import { request } from 'umi';

/** 获取学校基本数据 GET  */
export async function getProvince(options?: { [key: string]: any }) {
  return request<{
    status?: 'ok' | 'error';
    data: {};
    message?: string;
  }>('http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/100000_province.json', {
    method: 'GET',
    ...(options || {})
  });
}
