/*
 * @description: OAuth认证回调页面，password模式，本页面会先写入本地token缓存并触发身份信息获取，然后跳转向权限对应的页面
 * @author: zpl
 * @Date: 2021-07-14 16:54:06
 * @LastEditTime: 2021-09-04 09:00:26
 * @LastEditors: zpl
 */
import React, { FC, useEffect } from 'react';
import { useParams, history, useModel } from 'umi';
import LoadingPage from '@/components/Loading';
import { getQueryString, removeOAuthToken, saveOAuthToken } from '@/utils';
import { createSSOToken } from '@/services/after-class-pxjg/sso';
import { message } from 'antd';

const AuthCallback: FC = () => {
  const { loading, refresh } = useModel('@@initialState');

  const ysp_access_token = getQueryString('ysp_access_token');
  const ysp_expires_in = getQueryString('ysp_expires_in');
  const ysp_refresh_token = getQueryString('ysp_refresh_token');
  const ysp_token_type = getQueryString('ysp_token_type');

  const goto = async () => {
    // 通知后台产生token
    const tokenRes = await createSSOToken({
      access_token: ysp_access_token!,
      expires_in: parseInt(ysp_expires_in || '0', 10),
      refresh_token: ysp_refresh_token || undefined,
      token_type: ysp_token_type || undefined
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
    if (ysp_access_token) {
      goto();
    } else {
      removeOAuthToken();
      history.replace('/403');
    }
  }, []);

  return <LoadingPage />;
};

export default AuthCallback;
