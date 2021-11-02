/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2021-11-01 12:11:04
 * @LastEditors: zpl
 */
import { useAccess, useModel } from 'umi';
import { getLoginPath, gotoLink } from '@/utils';

export default (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { isLogin } = useAccess();

  const path = location.pathname.toLowerCase();
  const isAuthPage = path.startsWith('/authcallback');

  if (!isLogin && !isAuthPage) {
    const loginPath = getLoginPath(initialState?.buildOptions);
    gotoLink(loginPath);
    return;
  }

  return <>{props.children}</>;
};
