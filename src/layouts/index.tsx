/*
 * @description: 通用布局
 * @author: zpl
 * @Date: 2021-08-16 17:31:56
 * @LastEditTime: 2021-08-22 17:42:43
 * @LastEditors: zpl
 */
import React, { FC, useEffect, useState } from 'react';
import { Access, IRouteComponentProps, Redirect, useAccess } from 'umi';
import CommonHeader from '@/components/CommonHeader';
import TopMenu from '@/components/TopMenu';

import styles from './index.module.less';
import RightContent from '@/components/RightContent';
import LeftHeader from '@/components/LeftHeader';

const CommonLayout: FC<IRouteComponentProps> = ({ children, location, route, history, match }) => {
  const { isLogin } = useAccess();
  const path = location.pathname.toLowerCase();
  const isLoginPage = path.startsWith('/user/login') || path.startsWith('/oauth2/authorize');
  const isIndexPage = path === '/';
  const isDetailPage = path.startsWith('/noticedetails');
  const [isThirdParty, setIsThirdParty] = useState(false);
  const [hiddenHeader, setHiddenHeader] = useState(isLoginPage || !isLogin || isIndexPage || isDetailPage);
  // const [showBody, setShowBody] = useState(true);

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const isLoginPage = path.startsWith('/user/login') || path.startsWith('/oauth2/authorize');
    const isIndexPage = path === '/';
    const isOtherSys = path.startsWith('/thirdpartypage');
    const isDetailPage = path.startsWith('/noticedetails');
    const isListPage = path.startsWith('/noticetable');
    setIsThirdParty(isOtherSys);
    setHiddenHeader(isLoginPage || isIndexPage || isDetailPage || isListPage);
    // setShowBody(isLoginPage);
  }, [location.pathname]);

  return (
    <div className={styles.appRoot}>
      <Access accessible={!hiddenHeader} fallback={<div></div>}>
        <CommonHeader leftRender={() => <LeftHeader />} rightRender={() => <RightContent />}>
          <TopMenu />
        </CommonHeader>
      </Access>
      <div
        className={`${styles.mainCon}${hiddenHeader ? ' ' + styles.fullScreen : ''}${
          isThirdParty ? ' ' + styles.noMargin : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
