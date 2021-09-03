import React, { useState } from 'react';
import Register from '@/components/IndexComp/register';
import IndexComp from '@/components/IndexComp';
import { useModel } from 'umi';


const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  if (currentUser?.jgId) {
    return <IndexComp />
  }
  return (
    <Register />
  );
};
Index.title = '主页';
Index.access = '管理员';
Index.wrappers = ['@/wrappers/auth'];

export default Index;
