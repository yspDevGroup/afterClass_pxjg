/*
 * @description: 
 * @author: zpl
 * @Date: 2021-08-16 17:37:06
 * @LastEditTime: 2021-08-16 17:37:53
 * @LastEditors: zpl
 */
type CommonHeaderProps = {
  /** 主题配置 */
  primaryColor?: string;
  /** 版芯宽度 */
  width?: string;
  /** 左侧宽度 */
  leftWidth?: string;
  /** 右侧宽度 */
  rightWidth?: string;
  /** 左侧组件渲染方法 */
  leftRender: () => JSX.Element;
  /** 右侧组件渲染方法 */
  rightRender: () => JSX.Element;
  /** 高度 */
  height?: string;
  /**
   * 是否悬浮
   * @default false
   */
  fixed?: boolean;
};
