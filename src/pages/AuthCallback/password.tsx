/*
 * @description: OAuth认证回调页面，password模式，本页面会先写入本地token缓存并触发身份信息获取，然后跳转向权限对应的页面
 * @author: zpl
 * @Date: 2021-07-14 16:54:06
 * @LastEditTime: 2022-05-18 14:55:52
 * @LastEditors: Wu Zhan
 */
import React, { FC, useEffect } from 'react';
import { useParams, history, useModel } from 'umi';
import LoadingPage from '@/components/Loading';
import { getLoginPath, getQueryString, gotoLink, removeOAuthToken, saveOAuthToken } from '@/utils';
import { login } from '@/services/after-class-pxjg/auth';
import { message } from 'antd';

const AuthCallback: FC = () => {
  const { loading, refresh, initialState } = useModel('@@initialState');
  const ysp_access_token = getQueryString('ysp_access_token');
  const ysp_expires_in = getQueryString('ysp_expires_in');
  const ysp_refresh_token = getQueryString('ysp_refresh_token');
  const ysp_token_type = getQueryString('ysp_token_type');
  const goto = async () => {
    // 通知后台产生token
    const tokenRes = await login({
      authType: 'sso',
      plat: 'agency',
      access_token: ysp_access_token!,
      expires_in: parseInt(ysp_expires_in || '0', 10),
      refresh_token: ysp_refresh_token || '',
      token_type: ysp_token_type || undefined,
      appCode: ENV_clientId
    });
    if (tokenRes.status === 'ok') {
      saveOAuthToken({
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
    localStorage.setItem('authType', 'password');
    if (ysp_access_token) {
      goto();
    } else {
      removeOAuthToken();
      const url = getLoginPath(initialState?.buildOptions);
      gotoLink(url);
    }
  }, []);

  return <LoadingPage />;
};

export default AuthCallback;
