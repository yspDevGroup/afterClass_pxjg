/*
 * @description: 版本号显示组件
 * @author: zpl
 * @Date: 2021-11-16 08:55:11
 * @LastEditTime: 2021-12-03 09:57:36
 * @LastEditors: zpl
 */
import React from 'react';
import type { CSSProperties } from 'react';

const Version = ({ style }: { style?: CSSProperties }) => {
  return <div style={style}>版本号：V2.2.1202</div>;
};

export default Version;