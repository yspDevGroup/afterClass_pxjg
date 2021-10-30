/*
 * @Author: your name
 * @Date: 2021-10-25 15:42:48
 * @LastEditTime: 2021-10-30 18:41:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \afterClass_pxjg\src\components\RightContent\AvatarDropdown.tsx
 */
import React, { useEffect, useRef, useState } from 'react';
import { message, Spin } from 'antd';
import { useAccess, useModel } from 'umi';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { initWXAgentConfig, initWXConfig, showUserName } from '@/wx';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { isAdmin } = useAccess();
  const { initialState } = useModel('@@initialState');
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
  return (
    <>
      <span className={`${styles.action}`}>
        {jgData ? (
          <span style={{ paddingRight: '40px' }}>
            {jgData?.QYTB && jgData?.QYTB.indexOf('http') > -1 ? (
              <img style={{ width: '40px', height: '40px', borderRadius: '40px' }} src={jgData?.QYTB} />
            ) : (
              ''
            )}{' '}
            {jgData?.QYMC}
          </span>
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
