/*
 * @description: 权限控制
 * @author: zpl
 * @Date: 2021-08-09 10:45:22
 * @LastEditTime: 2022-04-08 18:53:14
 * @LastEditors: Wu Zhan
 */
export default function access(initialState: InitialState): AccessInfo {
  // 此处取值不会触发属性刷新
  const { currentUser } = initialState || {};
  return {
    isLogin: !!currentUser,
    auth: currentUser?.type || '其他'
  };
}
