import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useAccess, useModel } from 'umi';
import styles from './index.less';
import { KHJYJG } from '@/services/after-class-pxjg/khjyjg';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { isAdmin } = useAccess();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [jgData, setJgData] = useState<any>();
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
      {jgData?.QYTB && jgData?.QYTB.indexOf('http')>-1 ? <img style={{width:'40px',height:'40px'}} src={jgData?.QYTB} />:''} {jgData?.QYMC}
        </span> : ''}
        <span className={`${styles.name} anticon`}>
          {currentUser?.username}
          {isAdmin ? '' : '老师'}
        </span>
      </span>
    </>
  );
};

export default AvatarDropdown;
