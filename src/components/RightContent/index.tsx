import React from 'react';
import { Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  // const isIndexPage = location.pathname.toLowerCase() === '/';

  return (
    <Space className={styles.right}>
      {/* <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined style={{color:isIndexPage ? '#14B0FF' : '#fff'}} />
      </span> */}
      <span>
        <SmileOutlined style={{
          paddingRight:'16px',
          color:'#14B0FF'
        }} />
        您好，欢迎进入智慧校园！
      </span>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
