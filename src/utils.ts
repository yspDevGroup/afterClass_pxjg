/*
 * @description: 工具类
 * @author: zpl
 * @Date: 2021-08-09 10:36:53
 * @LastEditTime: 2021-08-24 12:01:31
 * @LastEditors: zpl
 */
import { history } from 'umi';

/**
 * 根据路径search拼接参数获取参数对应的值
 *
 * @export
 * @returns
 */
export const getQueryString = (name: string) => {
  const regs = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = decodeURI(window.location.search.substr(1)).match(regs);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * 判断运行环境
 *
 * @return {*}
 */
export const envjudge = (): PlatType => {
  const isMobile = window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  ); // 是否手机端
  const isWx = /micromessenger/i.test(navigator.userAgent); // 是否微信
  const isComWx = /wxwork/i.test(navigator.userAgent); // 是否企业微信
  if (isMobile) {
    if (isComWx) {
      return 'com-wx-mobile'; // 手机端企业微信
    }
    if (isWx) {
      return 'wx-mobile'; // 手机端微信
    }
    return 'mobile'; // 手机
  }
  if (isComWx) {
    return 'com-wx-pc'; // PC端企业微信
  }
  if (isWx) {
    return 'wx-pc'; // PC端微信
  }
  return 'pc'; // PC
};

/**
 * 跳转到指定URL连接
 *
 * @param {string} url
 */
export const gotoLink = (url: string) => {
  if (url.startsWith('http')) {
    // 外部连接
    window.location.href = url;
  } else {
    // 本系统内跳转
    history.push(url);
  }
};

/**
 * base64编码
 *
 * @param {string} str
 * @return {*}
 */
export const base64Encode = (str: string): string => {
  const buff = Buffer.from(str, 'utf-8');
  const base64 = buff.toString('base64');
  return base64;
};

/**
 * base64解码
 *
 * @param {string} str
 * @return {*}
 */
export const base64Decode = (str: string): string => {
  const buff = new Buffer(str, 'base64');
  const s = buff.toString();
  return s;
};

/**
 * 从缓存中取出oAuth token
 *
 * @return {*}
 */
export const getOauthToken = () => {
  return {
    ysp_access_token: localStorage.getItem('ysp_access_token'),
    ysp_expires_in: localStorage.getItem('ysp_expires_in'),
    ysp_refresh_token: localStorage.getItem('ysp_refresh_token'),
    ysp_token_type: localStorage.getItem('ysp_token_type')
  };
};

/**
 * 客户端保存oAuth token
 *
 * @param {TokenInfo} token
 */
export const saveOAuthToken = (token: TokenInfo) => {
  localStorage.setItem('ysp_access_token', token.access_token);
  localStorage.setItem('ysp_expires_in', `${token.expires_in || 0}`);
  localStorage.setItem('ysp_refresh_token', token.refresh_token || '');
  localStorage.setItem('ysp_token_type', token.token_type || 'Bearer');
};

/**
 * 客户端清除oAuth token
 *
 */
export const removeOAuthToken = () => {
  localStorage.removeItem('ysp_access_token');
  localStorage.removeItem('ysp_expires_in');
  localStorage.removeItem('ysp_refresh_token');
  localStorage.removeItem('ysp_token_type');
};

/**
 * 组装请求头部token信息
 *
 * @return {*}  {string}
 */
export const getAuthorization = (): string => {
  const tokenType = localStorage.getItem('ysp_token_type') || 'Bearer';
  const accessToken = localStorage.getItem('ysp_access_token');
  if (tokenType && accessToken) {
    return `${tokenType} ${accessToken}`;
  }
  return '';
};

/**
 * 封装获取 cookie 的方法
 *
 * @param {string} name
 * @return {*}
 */
export const getCookie = (name: string): string => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  }
  return '';
};

// 获取当前页面大小的方法
export const getWidHei = () => {
  let width;
  let height;
  if (window.innerWidth) {
    width = window.innerWidth;
    height = window.innerHeight;
  } else if (document.compatMode === 'BackCompat') {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
  } else {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }
  return {
    width,
    height
  };
};
