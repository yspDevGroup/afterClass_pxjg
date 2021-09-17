/*
 * @description: 企业微信通讯录展示组件
 * @author: zpl
 * @Date: 2021-09-17 14:41:57
 * @LastEditTime: 2021-09-17 17:06:29
 * @LastEditors: zpl
 */
import React, { useRef, useLayoutEffect } from 'react';

type PropsType = {
  type: 'userName' | 'departmentName';
  openid: string;
};
export default function WWOpenDataCom({ type, openid }: PropsType) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (openid && WWOpenData?.bind) {
      WWOpenData.bind(ref.current);
    }
  }, [openid]);
  return <ww-open-data ref={ref} type={type} openid={openid} />;
}
