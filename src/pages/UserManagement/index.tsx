/*
 * @description: 用户管理
 * @author: zpl
 * @Date: 2022-03-25 09:40:24
 * @LastEditTime: 2022-03-28 11:05:05
 * @LastEditors: zpl
 */
import { Card } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import UserList from './UserList';

const UserManagement = () => {
  const { initialState } = useModel('@@initialState');

  return (
    <Card bodyStyle={{ paddingTop: '0' }} bordered={false}>
      <UserList CorpID={initialState?.currentUser?.XXDM || ''} columnOptions={{ usertype: { search: false } }} />
    </Card>
  );
};

export default UserManagement;
