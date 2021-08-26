export type classType = {
  id?: string;
  BMJSSJ?: string;
  BMKSSJ?: string;
  JKRQ?: string;
  KKRQ?: string;
  KCMC?: string;
  KHKCLX?: kcshj;
  KCTP?: string;
  KCZT?: string;
  BJS?: number;
  title?: string;
  KHBJSJs?: {
    id?: string;
    BJMC?: string;
    BJMS?: string;
    BJZT?: string;
    ZJS?: string;
    FJS?: string;
    BJRS?: number;
    KSS?: number;
    FY?: number;
    KKRQ?: string;
    JKRQ?: string;
    KBYS?: string;
  }[];
  XNXQ?: {
    XN?: string;
    XQ?: string;
  },
  KBYS?: string;
};
type kcshj = { id?: string; KCLX?: string };

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
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
} & Record<string, any>;
