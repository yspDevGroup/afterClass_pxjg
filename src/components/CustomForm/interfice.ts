/*
 * @description:
 * @author: zpl
 * @Date: 2020-07-30 10:21:18
 * @LastEditTime: 2021-08-16 16:21:01
 * @LastEditors: Sissle Lynn
 */
import type { UploadListType } from 'antd/es/upload/interface';
import type { FormItemProps } from 'antd/lib/form/FormItem.d';
import type { RowProps } from 'antd/lib/grid/row';
import type { IconType } from 'antd/lib/notification';
import type { SwitchChangeEventHandler } from 'antd/lib/switch';
import type { DataNode } from 'antd/lib/tree';

export type FormButtonProps = {
  disabled?: boolean;
  onClick?: (event: any) => void;
  ghost?: boolean;
  block?: boolean;
  // eslint-disable-next-line no-undef
  text: string | (() => JSX.Element);
} & FormItemProps;

export type FormInputProps = {
  suffix?: string;
  addonAfter?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

export type FormInputNumberProps = {
  disabled?: boolean;
  percent?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

export type FormPasswordProps = {
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

export type FormSelectProps = {
  disabled?: boolean;
  placeholder?: string;
  showSearch?: boolean;
  mode?: 'multiple' | 'tags';
  items: {
    value: string | number;
    text: string;
  }[];
  onChange?: (value: string, option: any) => void;
  defaultValue?: string | number;
} & FormItemProps;

export type FormTreeSelectProps = {
  disabled?: boolean;
  placeholder?: string;
  dropdownStyle?: React.CSSProperties;
  treeData?: DataNode[];
  defaultExpandAll?: boolean;
  onChange?: (value: string, option: any) => void;
  defaultValue?: string | number;
} & FormItemProps;

export type FormCheckboxProps = {
  disabled?: boolean;
  colNum?: number;
  items: {
    value: string | number;
    text: string;
  }[];
  defaultValue?: string[] | number[];
} & FormItemProps;

export type FormRadioProps = {
  disabled?: boolean;
  items: {
    value: string | number;
    text: string;
  }[];
  defaultValue?: string | number;
} & FormItemProps;

export type FormTimeProps = {
  disabled?: boolean;
  subtype?: string;
  onChange?: (value: any, dateString: string) => void;
} & FormItemProps;

export type FormTimeRangeProps = {
  disabled?: boolean;
  onChange?: (_: any, formatString: [string, string]) => void;
} & FormItemProps;

export type FormTextAreaProps = {
  disabled?: boolean;
  placeholder?: string;
  rows: number;
  showCount: boolean;
  maxLength: number;
} & FormItemProps;

export type FormSwitchProps = {
  disabled?: boolean;
  onChange?: SwitchChangeEventHandler | undefined;
} & FormItemProps;

export type MenuProp = {
  id: string;
  name: string;
};
export type FormDropMenuProps = {
  disabled?: boolean;
  data?: {
    requestCategory: MenuProp[];
    level: MenuProp[];
    categoryIds: any[];
    levelIds: any[];
  };
  handleCate?: (data: any) => void;
  handleLevel?: (data: any) => void;
  onChange?: (_: any, formatString: [string, string]) => void;
} & FormItemProps;

export type FormCustomProps = FormInputProps;

export type FormUploadProps = {
  disabled?: boolean;
  name?: string;
  action?: string;
  listType?: UploadListType;
  icon?: React.RefAttributes<IconType>;
  normFile?: (e: any) => any;
  uploadProps?: {};
  accept?: string;
} & FormItemProps;

export type FormItemType = (
  | FormInputProps
  | FormInputNumberProps
  | FormPasswordProps
  | FormSelectProps
  | FormTreeSelectProps
  | FormRadioProps
  | FormTimeProps
  | FormTimeRangeProps
  | FormTextAreaProps
  | FormSwitchProps
  | FormCustomProps
  | FormUploadProps
  | FormButtonProps
  | FormCheckboxProps
) & {
  key?: string | number;
  type?:
  | 'input'
  | 'inputNumber'
  | 'password'
  | 'select'
  | 'treeSelect'
  | 'radio'
  | 'time'
  | 'timeRange'
  | 'dateRange'
  | 'textArea'
  | 'switch'
  | 'custom'
  | 'group'
  | 'empty'
  | 'label'
  | 'pdf'
  | 'upload'
  | 'checkbox'
  | 'dropMenu'
  | 'button';
  /**
   * 类型为group横向排列时，需要设置子数组
   *
   * @type {FormItemType[]}
   * @memberof FormItemType
   */
  groupItems?: FormItemType[];
  /**
   * 单独设置类名
   */
  cls?: string;
  /**
   * 类型为group横向排列时，可设置宽度，不设置时为平均分配
   *
   * @type {(number | string)}
   * @memberof FormItemType
   */
  span?: number | string;

  /**
   * 类型为group横向排列时，可设置宽度，不设置时为平均分配
   *
   * @type {(number | 'none' | 'auto' | string)}
   * @memberof FormItemType
   */
  flex?: number | 'none' | 'auto' | string;

  /**
   * 栅格向右移动格数
   */
  push?: number;

  /**
   * pdf、图片的路径
   */
  url?: string;

  /**
   * pdf、图片的描述
   */
  text?: string;
  /**
   * Checkbox
   */
  options?: {}[];
  /**
   * 下拉菜单数据传输
   */
  data?: {};
  handleCate?: (data: any) => void;
  handleLevel?: (data: any) => void;
} & RowProps;
