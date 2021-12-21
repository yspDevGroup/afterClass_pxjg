/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2021-12-21 12:35:51
 * @LastEditors: zpl
 */
import { useAccess, useModel, history } from 'umi';
import { getLoginPath, gotoLink } from '@/utils';

export default (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { isLogin, auth } = useAccess();

  const path = location.pathname.toLowerCase();
  const isAuthPage = path.startsWith('/authcallback');

  if (!isLogin && !isAuthPage) {
    const loginPath = getLoginPath(initialState?.buildOptions, true);
    gotoLink(loginPath);
    return '';
  }

  if (auth === '其他') {
    history.replace('/403?message=抱歉，您的企业暂未通过审核，请联系管理员');
    return '';
  }

  return <>{props.children}</>;
};
