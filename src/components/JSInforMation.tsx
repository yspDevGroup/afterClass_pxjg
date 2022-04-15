/*
 * @description:
 * @author: Wu Zhan
 * @Date: 2022-04-12 15:36:27
 * @LastEditTime: 2022-04-14 15:34:28
 * @LastEditors: Wu Zhan
 */
import { Modal } from 'antd';
import React from 'react';

export const JSInforMation = (currentUser: UserInfo | null | undefined) => {
  if (!currentUser?.JSId) {
    Modal.error({
      title: '审批需要绑定教师，请前往认证平台绑定',
      width: '450px',
      okText: '知道了',
      maskClosable: true,
      onOk: () => {}
    });
    return false;
  } else {
    return true;
  }
};
