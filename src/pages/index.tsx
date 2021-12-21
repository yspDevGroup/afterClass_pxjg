import React from 'react';
import Register from '@/components/IndexComp/Register';
import IndexComp from '@/components/IndexComp';
import { useModel, history } from 'umi';
import { envjudge } from '@/utils';

const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  if (!currentUser?.XZQHM) {
    return <Register />;
  }
  const ej = envjudge();
  if (ej === 'mobile' || ej === 'wx-mobile' || ej === 'com-wx-mobile') {
    history.replace('/mobile/homepage');
    return '';
  }
  return <IndexComp />;
};
Index.title = ENV_title;
Index.wrappers = ['@/wrappers/auth'];

export default Index;
