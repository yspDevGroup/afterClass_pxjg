import React, { useEffect, useRef, useState } from 'react';
import { message, Spin } from 'antd';
import { useAccess, useModel } from 'umi';
import styles from './index.less';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { initWXAgentConfig, initWXConfig, showUserName } from '@/wx';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { isAdmin } = useAccess();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [jgData, setJgData] = useState<any>();
  const userRef = useRef(null);
  useEffect(() => {
    async function fetchData(jgId: string) {
      const res = await KHJYJG({
        id: jgId
      })
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
        showUserName(userRef?.current, currentUser?.userId);
        // 注意: 只有 agentConfig 成功回调后，WWOpenData 才会注入到 window 对象上面
        WWOpenData.bindAll(document.querySelectorAll('ww-open-data'));
      } else {
        console.warn('微信登录过期，请重新授权');
        message.warn('微信登录过期，请重新授权');
      }
    })();
  }, [currentUser]);
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
      {jgData ? <span style={{paddingRight:'40px'}}>
      {jgData?.QYTB && jgData?.QYTB.indexOf('http')>-1 ? <img style={{width:'40px',height:'40px', borderRadius: '40px'}} src={jgData?.QYTB} />:''} {jgData?.QYMC}
        </span> : ''}
        <span className={`${styles.name} anticon`} ref={userRef}>
          {currentUser?.username}
          {isAdmin ? '' : '老师'}
        </span>
      </span>
    </>
  );
};

export default AvatarDropdown;
