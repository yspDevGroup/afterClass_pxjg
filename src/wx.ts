/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
/*
 * @description:
 * @author: zpl
 * @Date: 2021-06-09 08:57:20
 * @LastEditTime: 2021-09-09 14:16:10
 * @LastEditors: Sissle Lynn
 */

import { getQYJsSignature, getYYJsSignature } from "./services/after-class-pxjg/wechat";

/**
 * 通过config接口注入权限验证配置
 *
 * @param {*} jsApiList 需要使用的JS接口列表，凡是要调用的接口都需要传进来
 */
export const initWXConfig = async (jsApiList: string[]) => {
  const res = await getQYJsSignature({ url: window.location.href.split('#')[0] });
  if (res.status === 'ok') {
    const { appId, timestamp = 0, nonceStr, signature = '' } = res.data || {};
    const currentConf = {
      beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，企业微信的corpID
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
      jsApiList: jsApiList || ['checkJsApi'], // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
    };
    return new Promise((resolve, reject) => {
      wx.config(currentConf);
      wx.ready(resolve);
      wx.error((err: any) => {
        console.log('wx.error', err);
        reject(`注入权限验证配置失败： ${err}`);
      });
    });
  }
  return Promise.reject(`获取签名失败： ${res.message}`);
};

/**
 * 通过agentConfig注入应用的权限
 *
 * @param {string[]} jsApiList 需要使用的接口名称
 */
export const initWXAgentConfig = async (jsApiList: string[]) => {
  const res = await getYYJsSignature({ url: window.location.href.split('#')[0] });
  if (res.status === 'ok') {
    const { corpid, agentid, timestamp = 0, nonceStr, signature = '' } = res.data || {};
    const currentConf = {
      corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
      agentid, // 必填，企业微信的应用id （e.g. 1000247）
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见附录-JS-SDK使用权限签名算法
      jsApiList: jsApiList || ['selectExternalContact'], // 必填，传入需要使用的接口名称
    };
    return new Promise((resolve, reject) => {
      wx.agentConfig({
        ...currentConf,
        success: (r: any) => {
          // 回调
          console.log('wx.agentConfig success');
          resolve(r);
        },
        fail: (r: any) => {
          console.log('wx.agentConfig fail:', r);
          if (r.errMsg.indexOf('function not exist') > -1) {
            console.log('版本过低请升级');
          }
          reject(`注入应用的权限失败： ${r}`);
        },
      });
    });
  }
  return Promise.reject(`获取签名失败： ${res.message}`);
};

/**
 * 显示用户名称
 *
 * @param {(HTMLElement | null)} [container]
 * @param {string} [openid]
 * @return {*}
 */
export const showUserName = (container?: HTMLElement | null, openid?: string, multi?: boolean) => {
  if (!container || !openid) return;
  const element = document.createElement('ww-open-data');
  element.setAttribute('type', 'userName');
  element.setAttribute('openid', openid);
  if (!multi) {
    // eslint-disable-next-line no-param-reassign
    container.innerHTML = '';
  }
  container.appendChild(element);
};
