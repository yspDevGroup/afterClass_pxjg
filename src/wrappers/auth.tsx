/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2021-08-30 09:20:59
 * @LastEditors: zpl
 */
import { useAccess } from 'umi';
import { getLoginPath, gotoLink } from '@/utils';

export default (props: any) => {
  const { isLogin } = useAccess();

  const path = location.pathname.toLowerCase();
  const isAuthPage = path.startsWith('/authcallback');

  if (!isLogin && !isAuthPage) {
    const loginPath = getLoginPath();
    gotoLink(loginPath);
    return;
  }

  return <>{props.children}</>;
};
