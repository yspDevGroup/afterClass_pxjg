/*
 * @description: 登录页
 * @author: zpl
 * @Date: 2021-07-22 08:52:55
 * @LastEditTime: 2021-08-25 08:52:26
 * @LastEditors: Sissle Lynn
 */
import { useState } from 'react';
import { history, Link, Redirect, useModel } from 'umi';
import { Button, message } from 'antd';
import CustomForm from '@/components/CustomForm';
import type { FormInstance } from 'antd/lib/form/hooks/useForm';
import type { FormItemType } from '@/components/CustomForm/interfice';
import { getOauthToken, getQueryString, gotoLink, saveOAuthToken } from '@/utils';
import logo from '@/assets/logo.png';
import styles from './index.less';
import { postAccount } from '@/services/after-class-pxjg/auth';

const formLayout: {
  labelCol: {
    span?: number | string;
    flex?: number | 'none' | 'auto' | string;
  };
  wrapperCol: {
    span?: number | string;
    flex?: number | 'none' | 'auto' | string;
  };
} = {
  labelCol: { flex: '5em' },
  wrapperCol: { flex: 'auto' }
};
const formItemList: FormItemType[] = [
  {
    key: 'username',
    type: 'input',
    name: 'username',
    rules: [{ required: true, message: '请输入用户名，默认使用教师手机号' }]
  },
  {
    key: 'password',
    type: 'password',
    name: 'password',
    placeholder: '密码',
    rules: [{ required: true, message: '请输入密码' }]
  },
  {
    key: 'autoLogin',
    type: 'checkbox',
    name: 'autoLogin',
    desc: '记住密码',
  }
];

/**
 * 组件入口
 *
 * @return {*}
 */
const LoginPage = () => {
  const { initialState, loading, refresh } = useModel('@@initialState');
  const [form, setForm] = useState<FormInstance<any>>();

  const getRedirectUrl = () => {
    const redirect = getQueryString('redirect');
    if (redirect) {
      if (redirect.startsWith('http')) {
        const myURL = new URL(redirect);
        const { ysp_access_token, ysp_expires_in, ysp_refresh_token, ysp_token_type } = getOauthToken();
        myURL.searchParams.set('ysp_access_token', ysp_access_token || '');
        myURL.searchParams.set('ysp_expires_in', ysp_expires_in || '');
        myURL.searchParams.set('ysp_refresh_token', ysp_refresh_token || '');
        myURL.searchParams.set('ysp_token_type', ysp_token_type || '');
        return myURL.href;
      }
      return redirect;
    }
    return null;
  };

  const loginHandler = async () => {
    const values = await form?.validateFields();
    const res = await postAccount({ ...values, autoLogin: false, type: 'account' });
    const { status, data } = res;
    if (status === 'ok') {
      saveOAuthToken({ access_token: data.token || '' });
      // 刷新全局属性后向首页跳转
      if (!loading) {
        refresh().then(() => {
          gotoLink(getRedirectUrl() || '/');
        });
      }
    } else {
      message.warn(res.message);
    }
  };

  if (initialState?.currentUser) {
    const redirect = getRedirectUrl() || '/schoolManagement';
    if (redirect.startsWith('http')) {
      window.location.href = redirect;
      return;
    }
    return <Redirect to={redirect} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.top}>
            <img src={logo} />
            <h3>课后服务平台</h3>
          </div>
          <div className={styles.form}>
            <CustomForm setForm={setForm} formLayout={formLayout} formItems={formItemList} hideBtn={true} />
            <Button type="primary" onClick={loginHandler}>
              登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
