/*
 * @description: 接口数据类型定义
 * @author: zpl
 * @Date: 2021-08-24 11:50:43
 * @LastEditTime: 2021-08-24 11:50:43
 * @LastEditors: zpl
 */
declare namespace API {
  type LoginParams = {
    /** 登录名 */
    username: string;
    /** 密码 */
    password: string;
    /** 自动登录 */
    autoLogin: boolean;
    type: 'account' | 'mobile';
  };

  type LoginResult = {
    currentAuthority: string[];
    token: string;
    type: 'account' | 'mobile' | 'github';
  };
}
