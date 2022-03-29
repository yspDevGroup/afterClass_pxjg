import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Menu, Spin } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { LogoutOutlined } from '@ant-design/icons';
import { useAccess, useModel, history } from 'umi';
import ShowName from '@/components/ShowName';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';
import HeaderDropdown from '../HeaderDropdown';
import { removeOAuthToken } from '@/utils';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { isAdmin } = useAccess();
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [jgData, setJgData] = useState<any>();
  const userRef = useRef(null);
  useEffect(() => {
    async function fetchData(jgId: string) {
      const res = await KHJYJG({
        id: jgId
      });
      if (res.status === 'ok') {
        setJgData(res.data);
      }
    }
    if (currentUser?.jgId) {
      fetchData(currentUser?.jgId);
    }
  }, [currentUser]);

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout' && initialState) {
        const authType = localStorage.getItem('authType') || 'local';
        localStorage.removeItem('authType');
        setInitialState({ ...initialState, currentUser: null });
        removeOAuthToken();
        history.replace(authType === 'wechat' ? '/authCallback/overDue' : '/');
        return;
      }
    },
    [initialState, setInitialState]
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  );
  if (!initialState) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <span className={`${styles.action}`}>
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <div>
            {jgData ? (
              <span className={styles.account}>
                <span style={{ paddingRight: '40px' }}>
                  {jgData?.QYTB && jgData?.QYTB.indexOf('http') > -1 ? (
                    <img style={{ width: '40px', height: '40px', borderRadius: '40px' }} src={jgData?.QYTB} />
                  ) : (
                    ''
                  )}{' '}
                  {jgData?.QYMC}
                </span>
              </span>
            ) : (
              ''
            )}
            <span className={`${styles.name} anticon`} ref={userRef}>
              <ShowName
                XM={currentUser?.realName || currentUser?.XM}
                openid={currentUser?.wechatUserId || currentUser?.username}
              />
              {isAdmin ? '' : '老师'}
            </span>
          </div>
        </HeaderDropdown>
      </span>
    </>
  );
};

export default AvatarDropdown;
