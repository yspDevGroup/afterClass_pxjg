/* eslint-disable react/no-unstable-nested-components */
/*
 * @description: 通用布局
 * @author: zpl
 * @Date: 2021-08-16 17:31:56
 * @LastEditTime: 2021-09-17 11:49:36
 * @LastEditors: zpl
 */
import React, { FC, useEffect, useState } from 'react';
import { IRouteComponentProps, Link, useAccess, history } from 'umi';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import Footer from '@/components/Footer';

import customMenu from './cusMenu';
import headerTop from '@/assets/headerTop.png';
import headerTopSmall from '@/assets/headerTopSmall.png'
import styles from './index.less';
import { BreadcrumbProps, PageHeaderProps } from 'antd';
import RightContent from '@/components/RightContent';
import { Route } from '@ant-design/pro-layout/lib/typings';

const menuRender = (
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  },
  dom: React.ReactNode
) => {
  return (
    <div
      onClick={() => {
        history.push(item.path!);
      }}
    >
      {dom}
    </div>
  );
};
const CommonLayout: FC<IRouteComponentProps> = ({ children, location, route, history, match }) => {
  const { isLogin } = useAccess();
  const path = location.pathname.toLowerCase();
  const [hiddenHeader, setHiddenHeader] = useState<boolean>(true);
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const isLoginPage = path.startsWith('/user/login');
    setHiddenHeader(isLoginPage);
  }, [location.pathname]);

  return (
    <div
      className={styles.bodyLayout}
      style={{
        height: '100vh'
      }}
    >
      {!isLogin || hiddenHeader ? (
        <div>{children}</div>
      ) : (
        <ProLayout
          {...(customMenu as unknown as Route[])}
          layout="side"
          headerRender={false}
          collapsedButtonRender={false}
          rightContentRender={false}
          disableContentMargin={false}
          pageTitleRender={() => {
            return `${ENV_title}`;
          }}
          fixSiderbar
          location={{
            pathname: path
          }}
          menuHeaderRender={(logo, title, props) => {
            if(props?.collapsed){
              return <div className={styles.headerLogoSmall}>
              <Link to="/">
                <img src={headerTopSmall} />
              </Link>
              <span>机构<br/>端</span>
            </div>
            }
            return (
              <div className={styles.headerLogo}>
                <Link to="/">
                  <img src={headerTop} />
                </Link>
                <h1>— 机构端 —</h1>
              </div>
            );
          }}
          menuItemRender={(item: MenuDataItem & { isUrl: boolean; onClick: () => void }, dom: React.ReactNode) =>
            menuRender(item, dom)
          }
          footerRender={() => <Footer />}
        >
          <PageContainer
            style={{ minWidth: '990px' }}
            className={`${styles.customPageHeader}`}
            header={{
              title: '',
              breadcrumbRender: (props, defaultDom) => {
                const { breadcrumb, currentMenu } = props as PageHeaderProps & { currentMenu: any };
                if ((breadcrumb as BreadcrumbProps)?.routes === undefined && currentMenu.name !== '首页') {
                  return (
                    <div className="ant-breadcrumb">
                      <span>
                        <span className="ant-breadcrumb-link">
                          <Link to={currentMenu?.path || '/'}>{currentMenu.name}</Link>
                        </span>
                      </span>
                    </div>
                  );
                }
                return <>{defaultDom}</>;
              },
              extra: <RightContent />
            }}
            fixedHeader
          >
            {children}
          </PageContainer>
        </ProLayout>
      )}
    </div>
  );
};

export default CommonLayout;
