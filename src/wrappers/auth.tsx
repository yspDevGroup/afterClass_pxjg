/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2022-04-08 18:53:18
 * @LastEditors: Wu Zhan
 */
import { useAccess, useModel, history } from 'umi';
import { getLoginPath, gotoLink } from '@/utils';

export default (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { isLogin, auth } = useAccess();

  const path = location.pathname.toLowerCase();
  const isAuthPage = path.startsWith('/authcallback');
  const isLoginPage = path.startsWith('/user');
  if (!isLogin && !isAuthPage && !isLoginPage) {
    const loginPath = getLoginPath(initialState?.buildOptions, true);
    gotoLink(loginPath);
    return '';
  }

  // if (auth === '其他') {
  //   history.replace('/403?message=抱歉，您的企业暂未通过审核，请联系管理员');
  //   return '';
  // }

  return <>{props.children}</>;
};
