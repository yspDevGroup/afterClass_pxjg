export type ListItem = {
  id?: string; // udid
  title: string; // 标题
  link?: string; // 链接
  titleRight?: {
    text?: string;
    color?: string;
  }; // 标题右边显示信息
  desc?: {
    left: string[];
    right?: string | ReactDOM;
  }[]; // 摘要信息（左右分布）
  img?: string; // 缩略图地址
  introduction?: string; // 课程详情
  price?: string; // 课程价格
  enrollLink?: string; // 针对课程点名使用
  recordLink?: string; // 针对考勤记录使用
  bjid?: string;
  KHJYJG?: any;
  BT: string;
  SFTT: number;
  createdAt: string;
};
// 无图片仅左边描述列表 | 待办事项列表 | 公告列表
type ListType = 'list' | 'picList'| 'actList';
export type ListData = {
  type: ListType;
  cls?: string; // 组件自定义类名
  header?: {
    title: string;
    link?: string;
    moreText?: string;
  };
  list: ListItem[];
  noDataText?: string;
  noDataImg?: string;
  noDataIcon?: boolean;
};
