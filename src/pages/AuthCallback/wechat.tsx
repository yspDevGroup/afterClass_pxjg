/*
 * @description: 微信认证回调，本页面接收code后，通知后台获取登录信息
 * @author: zpl
 * @Date: 2021-09-04 09:00:38
 * @LastEditTime: 2021-10-22 16:31:30
 * @LastEditors: zpl
 */
import React from 'react';
import { message } from 'antd';
import { useModel, history } from 'umi';
import LoadingPage from '@/components/Loading';
import { removeOAuthToken, saveOAuthToken } from '@/utils';
import { createWechatToken } from '@/services/after-class-pxjg/wechat';

const WechatAuth = () => {
  const { loading, refresh } = useModel('@@initialState');

  const goto = async () => {
    // 通知后台产生token
    const search = new URLSearchParams(location.search);
    const params = { plat: 'agency', suiteID: clientId };
    for (const p of search.entries()) {
      params[p[0]] = p[1];
    }
    const tokenRes = await createWechatToken({ params });
    if (tokenRes.status === 'ok') {
      await saveOAuthToken({
        access_token: tokenRes.data
      });
      // 刷新全局属性后向首页跳转
      if (!loading) {
        refresh().then(() => {
          history.replace('/');
        });
      }
    } else {
      message.warn('认证信息无效');
      removeOAuthToken();
      history.replace('/403');
    }
  };
  goto();

  return <LoadingPage />;
};

export default WechatAuth;
