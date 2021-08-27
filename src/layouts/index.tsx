/* eslint-disable react/no-unstable-nested-components */
/*
 * @description: 通用布局
 * @author: zpl
 * @Date: 2021-08-16 17:31:56
 * @LastEditTime: 2021-08-27 14:10:30
 * @LastEditors: Sissle Lynn
 */
import React, { FC, useEffect, useState } from 'react';
import { IRouteComponentProps, Link, useAccess, useModel, history } from 'umi';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import Footer from '@/components/Footer';

import customMenu from './cusMenu';
import headerTop from '@/assets/headerTop.png';
import styles from './index.less';
import { BreadcrumbProps, PageHeaderProps } from 'antd';
import RightContent from '@/components/RightContent';

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
  const { initialState } = useModel('@@initialState');
  const path = location.pathname.toLowerCase();
  const isLoginPage = path.startsWith('/user/login') || path.startsWith('/oauth2/authorize');
  const [hiddenHeader, setHiddenHeader] = useState(isLoginPage || !isLogin);
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const isLoginPage = path.startsWith('/user/login') || path.startsWith('/oauth2/authorize');
    setHiddenHeader(isLoginPage);
  }, [location.pathname]);

  return (
    <div
      className={styles.bodyLayout}
      style={{
        height: '100vh'
      }}
    >
      {hiddenHeader ? (
        <div>{children}</div>
      ) : (
        <ProLayout
          layout="side"
          headerRender={false}
          collapsedButtonRender={false}
          rightContentRender={false}
          disableContentMargin={false}
          pageTitleRender={() => {
            return `${ENV_subTitle}`;
          }}
          location={{
            pathname: path
          }}
          menuHeaderRender={() => {
            return (
              <Link to="/">
                <img src={headerTop} />
              </Link>
            );
          }}
          menu={{
            request: async () => {
              return customMenu;
            }
          }}
          menuItemRender={(item: MenuDataItem & { isUrl: boolean; onClick: () => void }, dom: React.ReactNode) =>
            menuRender(item, dom)
          }
          onMenuHeaderClick={(e) => console.log(e)}
          onPageChange={() => {
            // 如果没有登录或第一次进入首页，重定向到 login
            if (!initialState?.currentUser) {
              history.push('/user/login');
            }
          }}
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
                          <Link to={currentMenu.path || '/'}>{currentMenu.name}</Link>
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
