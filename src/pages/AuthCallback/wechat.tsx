/*
 * @description: 微信认证回调，本页面接收code后，通知后台获取登录信息
 * @author: zpl
 * @Date: 2021-09-04 09:00:38
 * @LastEditTime: 2022-03-24 17:02:39
 * @LastEditors: zpl
 */
import React, { useEffect } from 'react';
import { message } from 'antd';
import { useModel, history } from 'umi';
import LoadingPage from '@/components/Loading';
import { getPageQuery, removeOAuthToken, saveOAuthToken } from '@/utils';
import { createWechatToken } from '@/services/after-class-pxjg/wechat';

const WechatAuth = () => {
  const { loading, refresh } = useModel('@@initialState');

  const goto = async () => {
    // 通知后台产生token
    const query = getPageQuery();
    const params: Record<string, string> = {
      ...query,
      plat: 'agency'
    };
    params.suiteID = params.SuiteID || params.suiteID || '';
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

  useEffect(() => {
    localStorage.setItem('authType', 'wechat');
    goto();
  }, []);

  return <LoadingPage />;
};

export default WechatAuth;
