/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { ReactText } from 'react';

// 渲染表单行
export interface TableListItem {
  ZT: any;
  key: number;
  id: string;
  LX?: number;
  /**
   * 标题
   *
   * @type {string}
   * @memberof TableListItem
   */
  BT: string;

  /**
   * 文章类型
   *
   * @type {string}
   * @memberof TableListItem
   */
  /**
   * 副标题
   *
   * @type {string}
   * @memberof TableListItem
   */
  FBT: string;
  /**
   * 关键词
   *
   * @type {string}
   * @memberof TableListItem
   */
  GJC: string;
  /**
   * 摘要
   *
   * @type {string}
   * @memberof TableListItem
   */
  ZY: string;
  /**
   * 标题图片
   *
   * @type {string}
   * @memberof TableListItem
   */
  TP: string;
  /**
   * 作者
   *
   * @type {string}
   * @memberof TableListItem
   */
  ZZ: string;
  /**
   * 来源
   *
   * @type {string}
   * @memberof TableListItem
   */
  LY: string;
  /**
   * 发布时间
   *
   * @type {string}
   * @memberof TableListItem
   */
  RQ: string;
  /**
   * 头条
   *
   * @type {boolean}
   * @memberof TableListItem
   */
  SFTT: number;
  /**
   * 推荐
   *
   * @type {boolean}
   * @memberof TableListItem
   */
  SFTJ: number;
  /**
   * 排序值
   *
   * @type {number}
   * @memberof TableListItem
   */
  BH: number;
  /**
   * 允许评论
   *
   * @type {boolean}
   * @memberof TableListItem
   */
  canComment: boolean;
  /**
   * 评论开始时间
   *
   * @type {string}
   * @memberof TableListItem
   */
  commentStartTime: string;
  /**
   * 评论结束时间
   *
   * @type {string}
   * @memberof TableListItem
   */
  commentEndTime: string;
  /**
   * 文章内容
   *
   * @type {string}
   * @memberof TableListItem
   */
  NR?: string;
  /**
   * 图片地址
   *
   * @type {string}
   * @memberof TableListItem
   */
  mainPic: string;
  /**
   * 视频地址
   *
   * @type {string}
   * @memberof TableListItem
   */
  mainVideo: string;
  /**
   * 链接
   *
   * @type {string}
   * @memberof TableListItem
   */
  mainUrl: string;
  /**
   * 审核状态
   *
   * @type {string}
   * @memberof TableListItem
   */
  approvalStatus: string;
  /**
   * 发布状态
   *
   * @type {string}
   * @memberof TableListItem
   */
  pubStatus: string;

  /**
   * 创建时间
   *
   * @type {string}
   * @memberof TableListItem
   */
  createTime: string;
}

// 翻页信息
export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

// 表结构定义
export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

/**
 * 查询参数
 *
 * @export
 * @interface TableListParams
 */
export interface TableListParams {
  BT?: string;
  ZT?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  current?: number;
  filter?: Record<string, ReactText[] | null>;
  sorter?: Record<string, any>;
  channelId?: string;
}
/**
 * 查询参数
 *
 * @export
 * @interface TableListParamsss
 */
export interface TableListParamsss {
  BT?: string;
  ZT?: string[];
  page?: number;
  pageSize?: number;
}

/**
 * 编辑文章参数
 *
 * @export
 * @interface UpsertParams
 */
export interface UpsertParams {
  title: string;
  subtitle?: string;
  keyWord?: string;
  Channels: number[];
  contentType: string;
  orderIndex: number;
  summary?: string;
  thumbnail?: string;
  auth?: '';
  conDate: string;
  source: string;
  isHead: boolean;
  isRecom: boolean;
  mainCon: string;
  ArticleExtensions?: {
    id?: string;
    title: string;
    info: string;
    remark: string;
  }[];
}

/**
 * 富文本组件上传文件信息
 *
 * @interface BraftUploadFile
 */
export interface BraftUploadFile {
  file: File;
  progress: (progress: number) => void;
  libraryId: string;
  success: (res: {
    url: string;
    meta: {
      id: string;
      title: string;
      alt: string;
      loop: boolean;
      autoPlay: boolean;
      controls: boolean;
      poster: string;
    };
  }) => void;
  error: (err: { msg: string }) => void;
}

export const defImg =
  'data:image/png;base64,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';
