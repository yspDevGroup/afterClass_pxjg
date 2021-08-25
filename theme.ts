/*
 * @description: 表态配置主题
 * @author: zpl
 * @Date: 2021-08-09 14:38:53
 * @LastEditTime: 2021-08-25 14:20:09
 * @LastEditors: Sissle Lynn
 */
const mainFontSize = 14;
const paddingSize = 16;
const mainColor = 'rgba(72, 132, 255, 1)';
const menuColor='rgba(36, 54, 81, 1)';

export default {
  '@primary-color': mainColor, // 全局主色
  '@second-color': menuColor, // 二级菜单色
  '@switch-color':  mainColor,
  '@link-color': mainColor, // link 链接颜色
  '@success-color': 'rgba(82, 196, 26, 1)', // 成功色
  '@warning-color': 'rgba(255, 178, 24, 1)', // 警告色
  '@error-color': 'rgba(234, 17, 28, 1)', // 错误色
  '@font-size-base': `${mainFontSize}px`, // 主字号
  '@font-size-lg': `${mainFontSize + 2}px`, // 大字号
  '@font-size-sm': `${mainFontSize - 2}px`, // 小字号
  // '@line-height-base': '28px', // 默认行高
  '@heading-color': '#222222', // 标题色
  '@text-color': 'rgba(51, 51, 51, 1)', // 主文本色
  '@text-color-secondary': 'rgba(102, 102, 102, 1)', // 二级文本色
  '@normal-color': 'rgba(153, 153, 153, 1)', // 提示文本颜色
  '@disabled-color': 'rgba(187, 187, 187, 1)', // 禁用、失效色
  '@divider-color': 'rgba(238, 238, 238, 1)', // 分割线
  '@border-radius-base': '4px', // 组件/浮层圆角
  '@padding-lg': `${paddingSize + 8}px`,
  '@padding-md': `${paddingSize}px`,
  '@padding-sm': `${paddingSize - 8}px`,

  // Buttons
  '@btn-primary-color': '#fff',
  '@btn-primary-bg': '#4884ff',
  '@btn-default-border': 'rgba(160, 160, 160, 1)', // btn边框色
  '@btn-default-color': 'rgba(153, 153, 153, 1)', // 正常按钮颜色

  // Border color
  '@border-color-base': '#d2d2d2', // 边框色
  '@border-color-split': '#dde2e8', // 拆分组件内部的边框

  // hover color
  '@item-hover-bg': 'rgba(36, 54, 81, 0.3)', // 内容hover颜色
  '@input-hover-border-color': '#3E88F8', // input hover状态描边

  // Layout
  '@layout-body-background': 'rgba(251, 251, 251, 1)',
  '@layout-header-background': 'rgba(251, 251, 251, 1)'
};
