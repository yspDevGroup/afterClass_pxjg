import React from 'react';
import { Access, useAccess } from 'umi';
import { Carousel } from 'antd';

import styles from './index.less';

const Index = () => {
  return <div>index</div>;
};
Index.title = '主页';
Index.access = '管理员';
Index.wrappers = ['@/wrappers/auth'];

export default Index;
