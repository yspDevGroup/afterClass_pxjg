/* eslint-disable react/no-unstable-nested-components */
/*
 * @description: 通用布局
 * @author: zpl
 * @Date: 2021-08-16 17:31:56
 * @LastEditTime: 2021-12-21 12:22:51
 * @LastEditors: zpl
 */
import React, { FC, useEffect, useState } from 'react';
import { IRouteComponentProps, Link, useAccess, history, useModel } from 'umi';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import Footer from '@/components/Footer';

import customMenu from './cusMenu';
import headerTop from '@/assets/headerTop.png';
import headerTopSmall from '@/assets/headerTopSmall.png';
import styles from './index.less';
import { BreadcrumbProps, PageHeaderProps } from 'antd';
import RightContent from '@/components/RightContent';
import { Route } from '@ant-design/pro-layout/lib/typings';
import Version from '@/components/Version';

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
  const { initialState } = useModel('@@initialState');
  const { isLogin, auth } = useAccess();
  const path = location.pathname.toLowerCase();
  const [hiddenHeader, setHiddenHeader] = useState<boolean>(true);
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const isLoginPage = path.startsWith('/user/login');
    const idGraphic = path.startsWith('/graphic');
    setHiddenHeader(isLoginPage || idGraphic);
  }, [location.pathname]);

  if (location.pathname.indexOf('mobile') !== -1) {
    return <div>{children}</div>;
  }

  return (
    <div
      className={styles.bodyLayout}
      style={{
        height: '100vh'
      }}
    >
      {!isLogin || hiddenHeader || auth === '其他' ? (
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
            if (props?.collapsed) {
              return (
                <div className={styles.headerLogoSmall}>
                  <Link to="/">
                    <img src={headerTopSmall} />
                  </Link>
                  <span>
                    机构
                    <br />端
                  </span>
                </div>
              );
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
          links={[
            <Version
              key="version"
              style={{ color: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', fontSize: '10px' }}
            />
          ]}
          footerRender={() => <Footer copyRight={initialState?.buildOptions.ENV_copyRight} />}
        >
          <PageContainer
            style={{ minWidth: '990px' }}
            className={`${styles.customPageHeader}`}
            header={{
              title: '',
              breadcrumbRender: (props, defaultDom) => {
                const { breadcrumb, currentMenu } = props as PageHeaderProps & { currentMenu: any };
                if ((breadcrumb as BreadcrumbProps).routes !== undefined && currentMenu.name !== '首页') {
                  return (
                    <div className="ant-breadcrumb">
                      {(breadcrumb as BreadcrumbProps).routes?.map((item, index) => {
                        return (
                          <span className="ant-breadcrumb-link" key={item.path}>
                            {item.breadcrumbName}
                            {index < (breadcrumb as BreadcrumbProps).routes!.length - 1 ? (
                              <span style={{ padding: '0 10px' }}>/</span>
                            ) : (
                              ''
                            )}
                          </span>
                        );
                      })}
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
