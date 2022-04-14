/*
 * @description:
 * @author: Wu Zhan
 * @Date: 2022-04-12 15:36:27
 * @LastEditTime: 2022-04-13 18:49:00
 * @LastEditors: Wu Zhan
 */
import { Modal } from 'antd';
import React from 'react';
type propttype = {
  text: string;
  link?: string;
  open: boolean;
  colse: () => void;
  event?: () => void;
  type?: boolean;
  closeType?: boolean;
};
export const JSInforMation = (currentUser: UserInfo | null | undefined) => {
  if (!currentUser?.JSId) {
    Modal.info({
      title: '审批需要绑定教师 请前往认证平台',
      width: '450px',
      okText: '去设置',
      maskClosable: true,
      onOk: () => {
        window.open('http://platform.test.xianyunshipei.com/oauth2/Password');
      }
    });
    return false;
  } else {
    return true;
  }
};
