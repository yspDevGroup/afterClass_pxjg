/*
 * @description: 微信相关路由
 * @author: zpl
 * @Date: 2021-06-10 16:40:10
 * @LastEditTime: 2021-09-09 14:17:57
 * @LastEditors: Sissle Lynn
 */

import { getDepList } from "../after-class-pxjg/wechat";

/**
 * 获取校区列表，使用缓存
 *
 * @param {true} [refresh] 是否强制刷新
 * @return {*}
 */
export const queryXQList = async (
  refresh?: true,
): Promise<
  (WXDepType & {
    njList?: WXDepType[] | undefined;
  })[]
> => {
  if (typeof wxInfo === 'undefined') {
    ((w) => {
      // eslint-disable-next-line no-param-reassign
      w.wxInfo = {};
    })(window as Window & typeof globalThis & { wxInfo: any });
  }
  if (!wxInfo.xqList || refresh) {
    const res = await getDepList({});
    if (res.status === 'ok') {
      const depList = res.data.departments as WXDepType[];
      wxInfo.xqList = depList.filter((dep: WXDepType) => dep.type === 4);
      for (let i = 0; i < wxInfo.xqList.length; i += 1) {
        const xq = wxInfo.xqList[i];
        // 学段
        const xdIdList = depList.filter((dep) => dep.parentid === xq.id).map((dep) => dep.id);
        xq.njList = depList.filter((dep) => xdIdList.includes(dep.parentid));
      }
    }
  }
  return wxInfo.xqList;
};
