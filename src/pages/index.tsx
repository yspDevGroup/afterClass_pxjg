import React from 'react';
import { Access, useAccess, history } from 'umi';
import { Button, Carousel } from 'antd';
import img from '../assets/Company.png';

import styles from './index.less';

const Index = () => {
  const toRZ = () => {
    history.push('/infoMaintenance');
  };
  return (
    <div className={styles.Index}>
      <p className={styles.hello}>你好，欢迎使用课后服务平台</p>
      <img src={img} alt="" />
      <p className={styles.apply}>使用前，请先完善本机构相关基本信息后，提交入驻申请。</p>
      <Button type="primary" onClick={toRZ}>
        完善基本信息
      </Button>
    </div>
  );
};
Index.title = '主页';
Index.access = '管理员';
Index.wrappers = ['@/wrappers/auth'];

export default Index;
