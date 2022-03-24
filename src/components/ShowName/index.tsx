/*
 * @description: 显示用户名部门名称控件，自动判断各种情况
 * @author: zpl
 * @Date: 2021-12-10 09:48:42
 * @LastEditTime: 2021-12-10 12:04:20
 * @LastEditors: zpl
 */
import type { CSSProperties } from 'react';
import { useModel } from 'umi';
import WWOpenDataCom from './WWOpenDataCom';

type Props = {
  type: 'userName' | 'departmentName';
  openid?: string;
  style?: CSSProperties;
  XM?: string;
};

/**
 * 微信场景显示名称
 *
 * @param {Props} {type, openid, style, XM}
 * @return {*}
 */
const ShowWechatName = ({ type, openid, style, XM }: Props) => {
  if (!openid || XM !== '未知') {
    return <>{XM}</>;
  }
  return <WWOpenDataCom type={type} openid={openid} style={style} />;
};

const ShowName = (props: Props) => {
  const { initialState } = useModel('@@initialState');
  const { buildOptions } = initialState || {};
  switch (buildOptions?.authType) {
    case 'wechat':
      return <ShowWechatName {...props} />;

    case 'password':
    default:
      return <>{props.XM || props.openid}</>;
  }
};

export default ShowName;
