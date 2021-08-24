/*
 * @description: 统一页面鉴权
 * @author: zpl
 * @Date: 2021-08-19 11:59:39
 * @LastEditTime: 2021-08-24 11:32:37
 * @LastEditors: zpl
 */
import { useAccess, Redirect, Access } from 'umi';

export default (props: any) => {
  const { isLogin } = useAccess();
  console.log('===========', isLogin);

  return (
    <Access accessible={isLogin} fallback={<Redirect to={`/user/login?redirect=${location.pathname}`} />}>
      {props.children}
    </Access>
  );
};
