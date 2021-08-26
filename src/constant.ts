/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-04 17:10:53
 * @LastEditTime: 2021-08-16 12:22:33
 * @LastEditors: Sissle Lynn
 */

import { TablePaginationConfig } from "antd";
import { SortOrder } from "antd/lib/table/interface";
import { ReactText } from "react";

/**
 * 查询参数
 *
 * @export
 * @interface TableListParams
 */
 export type TableListParams = {
  pageSize?: number;
  current?: number;
  search?: string;
  sorter?: Record<string, SortOrder>;
  filter?: Record<string, ReactText[] | null>;
} & Record<string, any>;

export const paginationConfig: TablePaginationConfig = {
  defaultPageSize: 10,
  defaultCurrent: 1,
  pageSizeOptions: ['10'],
  showQuickJumper: false,
  showSizeChanger: false,
  showTotal: undefined,
};
/** 定义tag色盘 */
export const colorTagDisk = ['#a4b8ff', '#ffa0a8', '#fdc4a7', '#b1a4fe', '#b83dba'];
