/*
 * @description:
 * @author: zpl
 * @Date: 2020-07-30 10:21:18
 * @LastEditTime: 2022-03-24 17:45:29
 * @LastEditors: Wu Zhan
 */
import type { UploadListType } from 'antd/es/upload/interface';
import type { FormItemProps } from 'antd/lib/form/FormItem.d';
import type { RowProps } from 'antd/lib/grid/row';
import type { IconType } from 'antd/lib/notification';
import type { SwitchChangeEventHandler } from 'antd/lib/switch';
import type { DataNode } from 'antd/lib/tree';
import { ReactNode } from 'react';

export type FormButtonProps = {
  disabled?: boolean;
  onClick?: (event: any) => void;
  ghost?: boolean;
  block?: boolean;
  // eslint-disable-next-line no-undef
  text: string | (() => JSX.Element);
} & FormItemProps;

export type FormInputProps = {
  suffix?: string | ReactNode;
  addonAfter?: string;
  disabled?: boolean;
  placeholder?: string;
  prefix?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

export type FormInputNumberProps = {
  disabled?: boolean;
  percent?: boolean;
  min?: number;
  max?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formatter?: (value: any | undefined) => any;
} & FormItemProps;

export type FormPasswordProps = {
  suffix?: string | ReactNode;
  disabled?: boolean;
  placeholder?: string;
  prefix?: string | undefined;
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
  desc?: string;
  colNum?: number;
  items: {
    value: string | number;
    text: string;
  }[];
  defaultValue?: [];
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
  placeholder?: string;
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
export type UploadImageProp = {
  /**
   * ??????????????????-????????????
   */
  imageurl?: string;
  imgWidth?: number;
  imgHeight?: number;
  /**
   * ??????????????????-????????????
   */
  upurl?: string;
  /**
   * ??????????????????-??????????????????????????????
   */
  imagename?: string;
  /**
   * ??????????????????-???????????????????????????
   */
  handleImageChange?: (value?: any) => void;
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
    | 'button'
    | 'uploadImage';
  /**
   * ?????????group???????????????????????????????????????
   *
   * @type {FormItemType[]}
   * @memberof FormItemType
   */
  groupItems?: FormItemType[];
  /**
   * ??????????????????
   */
  cls?: string;
  /**
   * ?????????group???????????????????????????????????????????????????????????????
   *
   * @type {(number | string)}
   * @memberof FormItemType
   */
  span?: number | string;

  /**
   * ?????????group???????????????????????????????????????????????????????????????
   *
   * @type {(number | 'none' | 'auto' | string)}
   * @memberof FormItemType
   */
  flex?: number | 'none' | 'auto' | string;

  /**
   * ????????????????????????
   */
  push?: number;

  /**
   * pdf??????????????????
   */
  url?: string;

  /**
   * pdf??????????????????
   */
  text?: string;
  /**
   * Checkbox
   */
  options?: {}[];
  /**
   * ????????????????????????
   */
  data?: {};
  handleCate?: (data: any) => void;
  handleLevel?: (data: any) => void;
} & RowProps &
  UploadImageProp;
