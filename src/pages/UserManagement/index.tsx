/*
 * @description: 用户管理
 * @author: zpl
 * @Date: 2022-03-25 09:40:24
 * @LastEditTime: 2022-03-25 18:31:20
 * @LastEditors: zpl
 */
import React from 'react';
import { useModel } from 'umi';
import UserList from './UserList';

const UserManagement = () => {
  const { initialState } = useModel('@@initialState');

  return <UserList CorpID={initialState?.currentUser?.XXDM || ''} columnOptions={{ usertype: { search: false } }} />;
};

export default UserManagement;
