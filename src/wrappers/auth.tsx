/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2021-12-03 11:16:17
 * @LastEditors: Sissle Lynn
 */
import { useAccess, useModel } from 'umi';
import { getLoginPath, gotoLink } from '@/utils';

export default (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { isLogin } = useAccess();

  const path = location.pathname.toLowerCase();
  const isAuthPage = path.startsWith('/authcallback');

  if (!isLogin && !isAuthPage) {
    const loginPath = getLoginPath(initialState?.buildOptions, true);
    gotoLink(loginPath);
    return;
  }

  return <>{props.children}</>;
};
