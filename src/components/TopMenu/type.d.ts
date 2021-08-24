/*
 * @description:
 * @author: zpl
 * @Date: 2021-08-16 19:25:07
 * @LastEditTime: 2021-08-23 09:51:11
 * @LastEditors: zpl
 */
type MenuItemProps = {
  key: string;
  title: string;
  link: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  icon?: string;
};

type TopMenuProps = {};
