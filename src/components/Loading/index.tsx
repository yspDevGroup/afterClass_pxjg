/*
 * @description: 统一定义loading
 * @author: zpl
 * @Date: 2021-07-20 16:59:30
 * @LastEditTime: 2021-09-09 11:39:29
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import loadingImg from '@/assets/load.gif';

const Loading = () => {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.2)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <img
        src={loadingImg}
        alt="loading"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          backgroundColor: '#fff',
          borderRadius: '200px',
          padding: '14px'
        }}
      />
    </div>
  );
};

export default Loading;
