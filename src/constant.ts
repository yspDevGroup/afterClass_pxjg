/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-04 17:10:53
 * @LastEditTime: 2021-08-30 19:26:59
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
export const colorTagDisk = ['#FF8F51', '#53C1FF', '#F8CC34','#7E82FF','#5CE369','#FF8ED4', '#FF6F6F', ];

/** 定义学校申请状态 */
export const applyStatus = {
  0: '申请中',
  1: '已通过',
  2: '已驳回',
  3: '已结束'
};
/** 定义合作学校课程状态 */
export const copCourseStatus = {
  0: '申请中',
  1: '服务中',
  2: '已驳回',
  3: '服务结束'
};

/** 定义课程状态 */
export const courseStatus = {
  0: '待发布',
  1: '已发布',
  2: '已备案'
};
