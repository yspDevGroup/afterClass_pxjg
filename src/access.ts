/*
 * @description: 权限控制
 * @author: zpl
 * @Date: 2021-08-09 10:45:22
 * @LastEditTime: 2021-08-24 17:53:56
 * @LastEditors: Sissle Lynn
 */
export default function access(initialState: InitialState): any {
  // 此处取值不会触发属性刷新
  const { currentUser } = initialState || {};

  return {
    isLogin: !!currentUser
  };
}
