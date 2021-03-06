/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 11:43:08
 * @LastEditTime: 2021-09-07 18:22:03
 * @LastEditors: Sissle Lynn
 */
type NJSJProps = {
  id: string;
  FNJZRId?: string;
  NJ?: number;
  NJJC?: string;
  NJMC?: string;
  NJZRId?: string;
  SFBY?: string;
  XD?: string;
  XQSJId?: string;
  createdAt?: string;
  updatedAt?: string;
};
type KHJSSJProps = {
  BZ?: string;
  CSRQ?: string;
  DZXX?: string;
  GH?: string;
  KHJYJGId?: string;
  LXDH?: string;
  SFZJH?: string;
  SFZJLX?: string;
  XB?: string;
  XM?: string;
  XXJBSJId?: string;
  createdAt?: string;
  id?: string;
}
type KHKCJsProps = {
  KHJSSJId?: string;
  KHKCSJId?: string;
  createdAt?: string;
  id?: string;
  updatedAt?: string;
  KHJSSJ?: KHJSSJProps;
};
type KHKCSJProps = {
  id?: string;
  KBYS?: string;
  KCMC?: string;
  KCMS?: string;
  KCTP?: string;
  KCZT?: number;
  KHKCLX?:any;
  KHJYJGId?: string;
  KHKCJs?: KHKCJsProps[];
  KHKCLXId?: string;
  NJSJs?: NJSJProps[];
  SSJGLX?: string;
  XXJBSJId?: string;
  createdAt?: string;
};
type XXJBSJProps = {
  CZDH?: string;
  CZRXNL?: number;
  CZXZ?: number;
  DWFZRH?: string;
  DZXX?: string;
  FDDBRH?: string;
  FJXYYM?: string;
  FRZSH?: string;
  GZXZ?: number;
  JXNY?: string;
  LXR?: string;
  LSYG?: string;
  LXDH?: string;
  SSZGDWM?: string;
  SZDCXLXM?: string;
  SZDJJSXM?: string;
  SZDMZSX?: string;
  XD?: string;
  XH?: string;
  XQR?: string;
  XXBBM?: string;
  XXBXLXM?: string;
  XXDM?: string;
  XXDZ?: string;
  XXMC?: string;
  XXRXNL?: number;
  XXRY?: string;
  XXXZ?: number;
  XXYWMC?: string;
  XXYZBM?: string;
  XXZGBMM?: string;
  XZGH?: string;
  XZQHM?: string;
  XZXM?: string;
  ZJXYYM?: string;
  ZSBJ?: string;
  ZYDZ?: string;
  ZZJGM?: string;
  createdAt?: string;
  deletedAt?: string;
  id?: string;
  updatedAt?: string;
};
export type KHKCSQSJ = {
  id?: string;
  /** 申请状态 */
  ZT?: number;
  /** 备注信息 */
  BZ?: string;
  /** 申请状人 */
  SQR?: string;
  /** 申请人ID */
  SQRId?: string;
  /** 审批人 */
  SPR?: string;
  /** 审批人ID */
  SPRId?: string;
  /** 创建日期 */
  createdAt?: string;
  /** 修改日期 */
  updatedAt?: string;
  KHJYJGId?: string;
  KHKCSJ?: KHKCSJProps,
  KHKCSJId?: string;
  XXJBSJ?: XXJBSJProps;
  XXJBSJId?: string;
};
export type KHHZXYSJ = {
  KHKCSQs?: KHKCSQSJ[];
} & XXJBSJProps;
