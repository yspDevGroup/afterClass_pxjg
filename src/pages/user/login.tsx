/*
 * @description: 登录页
 * @author: zpl
 * @Date: 2021-07-22 08:52:55

 * @LastEditTime: 2022-04-11 11:53:15
 * @LastEditors: Wu Zhan
 */
import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Button, message } from 'antd';
import CustomForm from './CustomForm';
import type { FormInstance } from 'antd/lib/form/hooks/useForm';
import type { FormItemType } from '@/components/CustomForm/interfice';
import { getCorpId, getOauthToken, getQueryString, gotoLink, saveOAuthToken, setAuthType, setCorpId } from '@/utils';
import logo from '@/assets/logo.png';
import styles from './index.less';
import { login } from '@/services/after-class-pxjg/auth';
import jgPng from '@/assets/jg.png';
import username from '@/assets/username.png';
import password from '@/assets/password.png';

import leftBg from '@/assets/groupletf.png';
import peopleBg from '@/assets/groupimg.png';
import rightBg from '@/assets/groupright.png';

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
const formItemList: FormItemType[] | any[] = [
  {
    key: 'CorpId',
    type: 'input',
    name: 'CorpId',
    rules: [{ required: true, message: '请输入企业编号' }],
    initialValue: getCorpId(),
    placeholder: '请输入企业编号',
    prefix: <img src={jgPng} />
  },
  {
    key: 'username',
    type: 'input',
    name: 'username',
    rules: [{ required: true, message: '请输入用户名，默认使用教师手机号' }],
    prefix: <img src={username} />
  },
  {
    key: 'password',
    type: 'password',
    name: 'password',
    placeholder: '密码',
    prefix: <img src={password} />,
    rules: [{ required: true, message: '请输入密码' }]
  }
  // {
  //   key: 'autoLogin',
  //   type: 'checkbox',
  //   desc: '记住密码'
  // }
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
    const res = await login({ ...values, authType: 'local', plat: 'teacher' });
    const { status, data } = res;
    if (status === 'ok') {
      setCorpId(values.CorpId);
      saveOAuthToken({ access_token: data || '' });
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

  // if (initialState?.currentUser) {
  //   const redirect = getRedirectUrl() || '/';
  //   if (redirect.startsWith('http')) {
  //     window.location.href = redirect;
  //     return;
  //   }
  //   return <Redirect to={redirect} />;
  // }

  useEffect(() => {
    setAuthType('local');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftBg}>
          <img src={leftBg} />
        </div>
        <div className={styles.middleBg}>
          <img src={peopleBg} />
        </div>

        <div className={styles.main}>
          <div className={styles.circular1} />
          <div className={styles.circular2} />
          <div className={styles.top}>
            <img src={logo} />
            <span>课后服务管理培训机构-管理端</span>
            {/* <span>欢迎使用课后服务平台</span> */}
          </div>
          <div className={styles.form}>
            <CustomForm setForm={setForm} formLayout={formLayout} formItems={formItemList} hideBtn={true} />
            <Button onClick={loginHandler} className={styles.but}>
              登录
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.rightBg}>
        <img src={rightBg} />
      </div>
    </div>
  );
};

export default LoginPage;
