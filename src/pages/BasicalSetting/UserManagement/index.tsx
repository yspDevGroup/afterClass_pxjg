/*
 * @description: 用户管理
 * @author: zpl
 * @Date: 2022-03-25 09:40:24
 * @LastEditTime: 2022-04-01 08:55:35
 * @LastEditors: Wu Zhan
 */
import { Card } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import UserList from './UserList';

const UserManagement = () => {
  const { initialState } = useModel('@@initialState');

  return <UserList CorpID={initialState?.currentUser?.XXDM || ''} columnOptions={{ UserTypes: { search: false } }} />;
};

export default UserManagement;
