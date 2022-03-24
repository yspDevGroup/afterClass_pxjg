import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Menu, message, Spin } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { LogoutOutlined } from '@ant-design/icons';
import { useAccess, useModel, history } from 'umi';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { initWXAgentConfig, initWXConfig, showUserName } from '@/wx';
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
  const [wechatReded, setWechatReded] = useState(false);
  const [wechatInfo, setWechatInfo] = useState({
    openId: ''
  });
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
  useEffect(() => {
    (async () => {
      if (/MicroMessenger/i.test(navigator.userAgent)) {
        await initWXConfig(['checkJsApi']);
      }
      if (await initWXAgentConfig(['checkJsApi'])) {
        setWechatReded(true);
      } else {
        console.warn('微信登录过期，请重新授权');
        message.warn('微信登录过期，请重新授权');
      }
    })();
  }, [currentUser]);

  useEffect(() => {
    wechatReded &&
      setWechatInfo({
        openId: currentUser?.UserId || ''
      });
  }, [wechatReded]);

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
        {jgData ? (
          <HeaderDropdown overlay={menuHeaderDropdown}>
            <span className={`${styles.action} ${styles.account}`}>
              <span style={{ paddingRight: '40px' }}>
                {jgData?.QYTB && jgData?.QYTB.indexOf('http') > -1 ? (
                  <img style={{ width: '40px', height: '40px', borderRadius: '40px' }} src={jgData?.QYTB} />
                ) : (
                  ''
                )}{' '}
                {jgData?.QYMC}
              </span>
            </span>
          </HeaderDropdown>
        ) : (
          ''
        )}
        <span className={`${styles.name} anticon`} ref={userRef}>
          <WWOpenDataCom type="userName" openid={wechatInfo.openId} />
          {/* {currentUser?.username} */}
          {isAdmin ? '' : '老师'}
        </span>
      </span>
    </>
  );
};

export default AvatarDropdown;
