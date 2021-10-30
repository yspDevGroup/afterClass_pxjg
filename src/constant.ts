/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-04 17:10:53
 * @LastEditTime: 2021-10-14 09:00:40
 * @LastEditors: zpl
 */

import { TablePaginationConfig } from "antd";
import { SortOrder } from "antd/lib/table/interface";
import { ReactText } from "react";

export const defUserImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEXd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTk5unl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8Fdw+DAAACEklEQVRo3u3bbXKCMBCA4c021IogVgEpFol4/zv2X2c6Qj53Q2vzXuAZQYFdRnhbKVgRvq9QghOc4AQnOMEJTrBH/XEnEeXu2MeEx8MLfPdyGCPBai/gR2KvYsBnhIfwzA9XMFvFDS+4rrIzXMNiNSc84jKMIyNcgKaCD56EDhYTG9yBto4NrvRwxQbnejhng6UellzwBIYmJngwwQMT/GGCP5jg1gS3TPDJBJ+Y4IMJPjwbXJng6tng1Q71at/qswk+M8G9Ce6Z4JsJvnHdFjO9m7Hdj/d6eP98z1wT6lzke8rUH2uHI+0MX3TwhXN22i67W9ahrae4eniNqZsld8M8H18ozrDXRqCcd0v2VYSa/S2jYofvxzn4GGHrM87BYwR4bnST9xjw7hHeRYHL4O+0J1wFr9f+2id+fYRfY8BqZuckVAS4Dt4nesIycO/iC7ehywBPeGmNiiMvrBaf6TPFCV81s0R25YMb/XN1wwR/bk1D2/aTAR5KsKgciOGhAMuKgRB+eMWlXdTbvP6ygqd3BKfwfaKAOwnOyS4YHnPwKh/D4BrBM6wD4OsGAtpcfeEGISjNpUwH3woIrri5w0MGBGWDK9whkISdG9wIIEo0LnALhLX2sEJKeG52XoBPQFptDee0cG4NS1pYWsOCFhbWMBD3++HVznFPKsueaDCnKMEJTnCCE5zgBP93+J/9i+8LmPKq0dXXgKwAAAAASUVORK5CYII=';


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
export const colorTagDisk = ['#7174E4', '#DF6464', '#50B4ED', '#EE854B', '#36B643',];

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
  2: '已准入'
};
