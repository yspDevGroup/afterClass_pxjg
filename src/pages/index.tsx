import React, { useState } from 'react';
import Register from '@/components/IndexComp/register';
import IndexComp from '@/components/IndexComp';


const Index = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  if (isRegistered) {
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
