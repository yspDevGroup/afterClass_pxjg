import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Menu, message, Spin } from 'antd';
import { useAccess, useModel } from 'umi';
import styles from './index.less';
import { FileSyncOutlined, GifOutlined, LogoutOutlined } from '@ant-design/icons';
import HeaderDropdown from '../HeaderDropdown';
import { putPassword } from '@/services/user';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { isAdmin } = useAccess();
  const [modalVisit, setModalVisit] = useState(false);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const userRef = useRef(null);
  const [form] = Form.useForm();

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  );
  if (!initialState) {
    return loading;
  }
  useEffect(() => {
    if (modalVisit === false) {
      setTimeout(() => {
        form.resetFields();
      }, 50);
    }
  }, [modalVisit]);
  const onclick = () => {
    setModalVisit(true);
  };
  const submit = async (params: any) => {
    if (params.newPasswords !== params.newPassword) {
      message.error('两次输入的新密码不一致');
    }
    const data = {
      oldPassword: params.oldPassword,
      newPassword: params.newPassword
    };
    const res = await putPassword({ username: currentUser?.username }, data);

    message.success('密码修改成功');
    setModalVisit(false);
  };
  const onMenuClick = () => {};
  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="ChangePassword" onClick={onclick}>
        <FileSyncOutlined />
        修改密码
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <HeaderDropdown overlay={menuHeaderDropdown} placement="bottomRight">
        <span className={`${styles.action}`}>
          <span className={`${styles.name} anticon`}>
            {currentUser?.realName || currentUser?.username}
            {isAdmin ? '' : '老师'}
          </span>
        </span>
      </HeaderDropdown>
    </>
  );
};

export default AvatarDropdown;
