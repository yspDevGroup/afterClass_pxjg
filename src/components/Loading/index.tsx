/*
 * @description: 统一定义loading
 * @author: zpl
 * @Date: 2021-07-20 16:59:30
 * @LastEditTime: 2021-08-16 17:11:12
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import loadingImg from '@/assets/load.gif';

const Loading = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'rgba(255,255,255,0.2)' }}>
      <img
        src={loadingImg}
        alt="loading"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px'
        }}
      />
    </div>
  );
};

export default Loading;
