/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-18 15:40:52
 * @LastEditTime: 2021-08-19 14:36:58
 * @LastEditors: zpl
 */
import React from 'react';
import { history } from 'umi';
import logo from '@/assets/logo-white.png';
import styles from './index.less';

const GlobalHeaderLeft: React.FC = () => {
  return (
    <div className={styles.left} onClick={() => history.push('/')}>
      <img src={logo} alt="" />
    </div>
  );
};
export default GlobalHeaderLeft;
