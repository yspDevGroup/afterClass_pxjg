/*
 * @description: 企业微信通讯录展示组件
 * @author: zpl
 * @Date: 2021-09-17 14:41:57
 * @LastEditTime: 2021-10-30 14:52:01
 * @LastEditors: Please set LastEditors
 */
import React, { useRef, useLayoutEffect, useState } from 'react';
import type { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';

type PropsType = {
  type: 'userName' | 'departmentName';
  openid: string;
  style?: CSSProperties;
  XM?: string;
};
export default function WWOpenDataCom({ type, openid, style = {}, XM = '未知' }: PropsType) {
  const ref = useRef(null);
  const [showWechat, setShowWechat] = useState(true);
  useLayoutEffect(() => {
    if (openid && typeof WWOpenData !== 'undefined' && WWOpenData.bind) {
      WWOpenData.bind(ref.current);
    } else {
      setShowWechat(false);
    }
  }, [openid]);
  if (showWechat) {
    return <ww-open-data style={{ color: '#333', ...style }} ref={ref} type={type} openid={openid} />;
  }
  return (
    <span
      style={{
        color: '#333',
        display: 'inline-block',
        maxWidth: '5em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      {openid}
    </span>
  );
  // return <ww-open-data ref={ref} type={type} openid={openid} />;
}
