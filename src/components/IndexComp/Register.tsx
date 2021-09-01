/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 08:49:11
 * @LastEditTime: 2021-09-01 19:06:05
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { history, Link } from 'umi';
import { Button } from 'antd';
import img from '@/assets/Company.png';

import styles from './index.less';
const Register = () => {
  const toRZ = () => {
    history.push('/infoMaintenance?type=false');
  };
  return (
    <div className={styles.Index}>
      <p className={styles.hello}>你好，欢迎使用课后服务平台</p>
      <img src={img} alt="" />
      <p className={styles.apply}>使用前，请先完善本机构相关基本信息后，提交入驻申请。</p>
      <Link
        to={{
          pathname: '/basicalSetting/infoMaintenance',
          state: false
        }}
      >
        <Button type="primary">
          完善基本信息
        </Button>
      </Link>
    </div>
  );
};
export default Register;
