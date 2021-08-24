/*
 * @description:
 * @author: zpl
 * @Date: 2021-08-16 19:24:39
 * @LastEditTime: 2021-08-24 11:29:47
 * @LastEditors: zpl
 */
import React, { useEffect, useState } from 'react';
import { history, Link, useAccess } from 'umi';
import { Menu } from 'antd';

import type { MenuInfo } from 'rc-menu/lib/interface';

import styles from './index.module.less';

const { SubMenu } = Menu;

/**
 * 根据url信息查找应激活的菜单
 * @param menuList
 * @param pathname
 * @param state
 * @returns
 */
const getActivedMenu = (menuList: MenuItemProps[], pathname: string, state?: unknown) => {
  if (!menuList.length) return null;

  // 第三方
  if (pathname.toLowerCase().startsWith('/thirdpartypage') && state) {
    const filterList = menuList.filter((d) => d.link.toLowerCase().startsWith('http'));
    const currentMenu =
      filterList.find((d) => d.link === state) ||
      filterList.find((d) => {
        const url1 = new URL(d.link);
        const url2 = new URL(state as string);
        return url1.origin === url2.origin;
      }) ||
      menuList[0];

    console.log('===', currentMenu);
    return currentMenu;
  }

  // 内部
  const currentMenu = menuList.find((d) => d.link === pathname) || menuList[0];
  return currentMenu;
};

const TopMenu = () => {
  const { isAdmin } = useAccess();

  const [datas, setDatas] = useState<MenuItemProps[]>([
    {
      key: '1',
      title: '系统管理',
      link: '/appManagement',
      target: '_self'
    }
  ]);
  const [current, setCurrent] = useState('temp');

  const handleClick = (e: MenuInfo) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const activedMenu = getActivedMenu(datas, history.location.pathname, history.location.state);
    if (activedMenu) {
      setCurrent(activedMenu.key);
    }
  }, [history.location.pathname, history.location.state]);

  return (
    <div className={styles.customMenu}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
        {datas.map((data) => (
          <Menu.Item key={data.key}>
            <Link to={data.link} target={data.target}>
              {data.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default TopMenu;
