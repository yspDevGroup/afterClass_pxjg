/*
 * @description: 权限控制
 * @author: zpl
 * @Date: 2021-08-09 10:45:22
 * @LastEditTime: 2021-08-21 18:41:53
 * @LastEditors: zpl
 */
export default function access(initialState: InitialState): AccessInfo {
  // 此处取值不会触发属性刷新
  const { currentUser } = initialState || {};

  return {
    isLogin: !!currentUser,
    isAdmin: !!currentUser?.roles?.find((r) => ['超级管理员', '管理员'].includes(r.name))
  };
}
