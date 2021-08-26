// @ts-ignore
/* eslint-disable */

declare namespace API {
  type LoginParams = {
    /** 登录名 */
    username: string;
    /** 密码 */
    password: string;
    /** 自动登录 */
    autoLogin: boolean;
    type: 'account' | 'mobile';
  };

  type LoginResult = {
    currentAuthority: string[];
    token: string;
    type: 'account' | 'mobile' | 'github';
  };

  type BJSJ = {
    id: string;
    /** 班号 */
    BH: number;
    /** 班级 */
    BJ: string;
    /** 建班年月 */
    JBNY?: string | any;
    /** 班主任工号 */
    BZRGH?: string;
    /** 班长学号 */
    BZXH?: string;
    /** 班级荣誉称号 */
    BJRYCH?: string;
    /** 学制 */
    XZ?: string;
    /** 班级类型码 */
    BJLXM?: string;
    /** 文理类型 */
    WLLX?: string;
    /** 毕业日期 */
    BYRQ?: string | any;
    /** 是否少数民族双语教学班 */
    SFSSMZSYJXB?: string;
    /** 双语教学模式码 */
    SYJXMSM?: string;
    /** 上课地点 */
    SKDD?: string;
    /** 班级简称 */
    BJJC?: string;
    NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
    BZR?: { id?: string; GH?: string; XM?: string };
    FBZR?: { id?: string; GH?: string; XM?: string };
  };

  type CreateBJSJ = {
    /** 班号 */
    BH: number;
    /** 班级 */
    BJ: string;
    /** 建班年月 */
    JBNY?: string | any;
    /** 班主任工号 */
    BZRGH?: string;
    /** 班长学号 */
    BZXH?: string;
    /** 班级荣誉称号 */
    BJRYCH?: string;
    /** 学制 */
    XZ?: string;
    /** 班级类型码 */
    BJLXM?: string;
    /** 文理类型 */
    WLLX?: string;
    /** 毕业日期 */
    BYRQ?: string | any;
    /** 是否少数民族双语教学班 */
    SFSSMZSYJXB?: string;
    /** 双语教学模式码 */
    SYJXMSM?: string;
    /** 上课地点 */
    SKDD?: string;
    /** 班级简称 */
    BJJC?: string;
    NJSJId: string;
    BZRId?: string;
    FBZRId?: string;
  };

  type UpdateBJSJ = {
    /** 班号 */
    BH?: number;
    /** 班级 */
    BJ?: string;
    /** 建班年月 */
    JBNY?: string;
    /** 班主任工号 */
    BZRGH?: string;
    /** 班长学号 */
    BZXH?: string;
    /** 班级荣誉称号 */
    BJRYCH?: string;
    /** 学制 */
    XZ?: string;
    /** 班级类型码 */
    BJLXM?: string;
    /** 文理类型 */
    WLLX?: string;
    /** 毕业日期 */
    BYRQ?: string;
    /** 是否少数民族双语教学班 */
    SFSSMZSYJXB?: string;
    /** 双语教学模式码 */
    SYJXMSM?: string;
    /** 上课地点 */
    SKDD?: string;
    /** 班级简称 */
    BJJC?: string;
    NJSJId?: string;
    BZRId?: string;
    FBZRId?: string;
  };

  type FJSJ = {
    id: string;
    /** 房间编号 */
    FJBH?: string;
    /** 房间名称 */
    FJMC?: string;
    /** 房间楼层 */
    FJLC?: string;
    /** 房间建筑面积 */
    FJJZMJ?: number;
    /** 房间使用面积 */
    FJSYMJ?: number;
    /** 房间可容纳人数 */
    FJRS?: number;
    /** 教学楼 */
    JXL?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 校区ID */
    XQ?: string;
    /** 校区名称 */
    XQName?: string;
    XXJBSJ?: {
      id?: string;
      XXDM?: string;
      XXMC?: string;
      XXYWMC?: string;
      XXDZ?: string;
      XXYZBM?: string;
      XZQHM?: string;
    };
    FJLX?: { id?: string; FJLX?: string };
  };

  type CreateFJSJ = {
    /** 房间编号 */
    FJBH?: string;
    /** 房间名称 */
    FJMC?: string;
    /** 房间楼层 */
    FJLC?: string;
    /** 房间建筑面积 */
    FJJZMJ?: number;
    /** 房间使用面积 */
    FJSYMJ?: number;
    /** 房间可容纳人数 */
    FJRS?: number;
    /** 教学楼 */
    JXL?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 校区ID */
    XQ?: string;
    /** 校区名称 */
    XQName?: string;
    /** 房间类型ID */
    FJLXId?: string;
  };

  type UpdateFJSJ = {
    /** 房间编号 */
    FJBH?: string;
    /** 房间名称 */
    FJMC?: string;
    /** 房间楼层 */
    FJLC?: string;
    /** 房间建筑面积 */
    FJJZMJ?: number;
    /** 房间使用面积 */
    FJSYMJ?: number;
    /** 房间可容纳人数 */
    FJRS?: number;
    /** 教学楼 */
    JXL?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 校区ID */
    XQ?: string;
    /** 校区名称 */
    XQName?: string;
    /** 房间类型ID */
    FJLXId?: string;
  };

  type FJLX = {
    id: string;
    /** 房间类型 */
    FJLX: string;
  };

  type CreateFJLX = {
    /** 房间类型 */
    FJLX: string;
  };

  type UpdateFJLX = {
    /** 房间类型 */
    FJLX?: string;
  };

  type JCSJ = {
    id: string;
    /** 教材编码 */
    JCBM: string;
    /** 教材名称 */
    JCMC: string;
    /** ISBN */
    ISBN?: string;
    /** 作者 */
    ZZ: string;
    /** 版别 */
    BB: string;
    /** 印次 */
    YC?: string;
    /** 定价 */
    DJ: number;
    /** 出版社 */
    CBS: string;
    /** 发行编号 */
    FXBH?: string;
    /** 出版日期 */
    CBRQ?: string | any;
    /** 装订 */
    ZD?: string;
    /** 开本 */
    KB?: string;
    /** 字数 */
    ZS?: number;
    /** 页数 */
    YS?: number;
    /** 内容简介 */
    NRJJ?: string;
  };

  type CreateJCSJ = {
    /** 教材编码 */
    JCBM: string;
    /** 教材名称 */
    JCMC: string;
    /** ISBN */
    ISBN?: string;
    /** 作者 */
    ZZ: string;
    /** 版别 */
    BB: string;
    /** 印次 */
    YC?: string;
    /** 定价 */
    DJ: number;
    /** 出版社 */
    CBS: string;
    /** 发行编号 */
    FXBH?: string;
    /** 出版日期 */
    CBRQ?: string | any;
    /** 装订 */
    ZD?: string;
    /** 开本 */
    KB?: string;
    /** 字数 */
    ZS?: number;
    /** 页数 */
    YS?: number;
    /** 内容简介 */
    NRJJ?: string;
  };

  type UpdateJCSJ = {
    /** 教材编码 */
    JCBM?: string;
    /** 教材名称 */
    JCMC?: string;
    /** ISBN */
    ISBN?: string;
    /** 作者 */
    ZZ?: string;
    /** 版别 */
    BB?: string;
    /** 印次 */
    YC?: string;
    /** 定价 */
    DJ?: number;
    /** 出版社 */
    CBS?: string;
    /** 发行编号 */
    FXBH?: string;
    /** 出版日期 */
    CBRQ?: string | any;
    /** 装订 */
    ZD?: string;
    /** 开本 */
    KB?: string;
    /** 字数 */
    ZS?: number;
    /** 页数 */
    YS?: number;
    /** 内容简介 */
    NRJJ?: string;
  };

  type JCXX = {
    id: string;
    /** 名称 */
    MC: string;
    /** 英文名称 */
    YWMC?: string;
    /** 时长 */
    SC: number;
    /** 说明 */
    SM?: string;
  };

  type CreateJCXX = {
    /** 名称 */
    MC: string;
    /** 英文名称 */
    YWMC?: string;
    /** 时长 */
    SC: number;
    /** 说明 */
    SM?: string;
  };

  type UpdateJCXX = {
    /** 名称 */
    MC?: string;
    /** 英文名称 */
    YWMC?: string;
    /** 时长 */
    SC?: number;
    /** 说明 */
    SM?: string;
  };

  type JXJHSJ = {
    id: string;
    /** 课程号 */
    KCH: string;
    /** 授课年级 */
    SKNJ: string;
    /** 上课学年 */
    SKXN: string;
    /** 上课学期码 */
    SKXQM: string;
    /** 考试方式码 */
    KSFSM?: string;
    KCSJId: string;
  };

  type CreateJXJHSJ = {
    /** 课程号 */
    KCH: string;
    /** 授课年级 */
    SKNJ: string;
    /** 上课学年 */
    SKXN: string;
    /** 上课学期码 */
    SKXQM: string;
    /** 考试方式码 */
    KSFSM?: string;
    KCSJId: string;
  };

  type UpdateJXJHSJ = {
    /** 课程号 */
    KCH?: string;
    /** 授课年级 */
    SKNJ?: string;
    /** 上课学年 */
    SKXN?: string;
    /** 上课学期码 */
    SKXQM?: string;
    /** 考试方式码 */
    KSFSM?: string;
    KCSJId?: string;
  };

  type JYJGSJ = {
    id: string;
    /** 部门编码 */
    BMBM?: string;
    /** 部门名称 */
    BMMC?: string;
    /** 上级部编码 */
    SJBMBM?: string;
    /** 部门级别,0省教育厅/1地级市/2县区 */
    BMJB?: number;
    /** 行政区划 */
    XZQH?: string;
    /** 机构类型,0教育管理机构/1学前教育机构/2中小学/3中职教育机构/4高等教育机构/5高职教育机构剖 */
    JGLX?: number;
    /** 部门IP范围 */
    BMIPFW?: string;
    /** 备注 */
    BZ?: string;
    /** 状态 */
    ZT?: number;
  };

  type CreateJYJGSJ = {
    /** 部门编码 */
    BMBM?: string;
    /** 部门名称 */
    BMMC?: string;
    /** 上级部编码 */
    SJBMBM?: string;
    /** 部门级别,0省教育厅/1地级市/2县区 */
    BMJB?: number;
    /** 行政区划 */
    XZQH?: string;
    /** 机构类型,0教育管理机构/1学前教育机构/2中小学/3中职教育机构/4高等教育机构/5高职教育机构剖 */
    JGLX?: number;
    /** 部门IP范围 */
    BMIPFW?: string;
    /** 备注 */
    BZ?: string;
    /** 状态 */
    ZT?: number;
  };

  type UpdateJYJGSJ = {
    /** 部门编码 */
    BMBM?: string;
    /** 部门名称 */
    BMMC?: string;
    /** 上级部编码 */
    SJBMBM?: string;
    /** 部门级别,0省教育厅/1地级市/2县区 */
    BMJB?: number;
    /** 行政区划 */
    XZQH?: string;
    /** 机构类型,0教育管理机构/1学前教育机构/2中小学/3中职教育机构/4高等教育机构/5高职教育机构剖 */
    JGLX?: number;
    /** 部门IP范围 */
    BMIPFW?: string;
    /** 备注 */
    BZ?: string;
    /** 状态 */
    ZT?: number;
  };

  type JZGCFSJ = {
    id: string;
    /** 名称 */
    MC: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 惩罚原因 */
    CFYY?: string;
    /** 来源 */
    LY?: string;
  };

  type CreateJZGCFSJ = {
    /** 名称 */
    MC: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 惩罚原因 */
    CFYY?: string;
    /** 来源 */
    LY?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGCFSJ = {
    /** 名称 */
    MC?: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 惩罚原因 */
    CFYY?: string;
    /** 来源 */
    LY?: string;
  };

  type JZGGZJL = {
    id: string;
    GZQSRQ: string;
    GZZZRQ?: string | any;
    GZDW?: string;
    GZNR?: string;
    CRDZZW?: string;
    CRZYJSZWM?: string;
    GZZMR?: string;
    GZJLBZ?: string;
  };

  type CreateJZGGZJL = {
    GZQSRQ: string;
    GZZZRQ?: string | any;
    GZDW?: string;
    GZNR?: string;
    CRDZZW?: string;
    CRZYJSZWM?: string;
    GZZMR?: string;
    GZJLBZ?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGGZJL = {
    GZQSRQ?: string;
    GZZZRQ?: string | any;
    GZDW?: string;
    GZNR?: string;
    CRDZZW?: string;
    CRZYJSZWM?: string;
    GZZMR?: string;
    GZJLBZ?: string;
    QJDM?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type JZGJTCY = {
    id: string;
    GXM: string;
    CYXM: string;
    XBM?: string;
    CYGZDW?: string;
    ZYM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    ZZMMM?: string;
    CYLXDH: string;
    HYZKM?: string;
    QJDM?: string;
  };

  type CreateJZGJTCY = {
    GXM: string;
    CYXM: string;
    XBM?: string;
    CYGZDW?: string;
    ZYM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    ZZMMM?: string;
    CYLXDH: string;
    HYZKM?: string;
    QJDM?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGJTCY = {
    GXM?: string;
    CYXM?: string;
    XBM?: string;
    CYGZDW?: string;
    ZYM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    ZZMMM?: string;
    CYLXDH?: string;
    HYZKM?: string;
    QJDM?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type JZGKTYJ = {
    id: string;
    /** 名称 */
    MC: string;
    /** 立项日期 */
    LXRQ: string;
    /** 结题日期 */
    JTRQ?: string | any;
    /** 课题编号 */
    KTBH?: string;
    /** 立项单位 */
    LXDW?: string;
    /** 承担任务 */
    CDRW?: string;
    /** 参与成员 */
    CY?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
  };

  type CreateJZGKTYJ = {
    /** 名称 */
    MC: string;
    /** 立项日期 */
    LXRQ: string;
    /** 结题日期 */
    JTRQ?: string | any;
    /** 课题编号 */
    KTBH?: string;
    /** 立项单位 */
    LXDW?: string;
    /** 承担任务 */
    CDRW?: string;
    /** 参与成员 */
    CY?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGKTYJ = {
    /** 名称 */
    MC?: string;
    /** 立项日期 */
    LXRQ?: string;
    /** 结题日期 */
    JTRQ?: string;
    /** 课题编号 */
    KTBH?: string;
    /** 立项单位 */
    LXDW?: string;
    /** 承担任务 */
    CDRW?: string;
    /** 参与成员 */
    CY?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
  };

  type JZGLWSJ = {
    id: string;
    /** 名称 */
    MC: string;
    /** 编号 */
    BH?: string;
    /** 日期 */
    RQ?: string | any;
    /** 出版号 */
    CBH?: string;
    /** 刊物 */
    KW?: string;
    /** 刊物级别 */
    KWJB?: string;
    /** 期数 */
    QS?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
  };

  type CreateJZGLWSJ = {
    /** 名称 */
    MC: string;
    /** 编号 */
    BH?: string;
    /** 日期 */
    RQ?: string | any;
    /** 出版号 */
    CBH?: string;
    /** 刊物 */
    KW?: string;
    /** 刊物级别 */
    KWJB?: string;
    /** 期数 */
    QS?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGLWSJ = {
    /** 名称 */
    MC?: string;
    /** 编号 */
    BH?: string;
    /** 日期 */
    RQ?: string | any;
    /** 出版号 */
    CBH?: string;
    /** 刊物 */
    KW?: string;
    /** 刊物级别 */
    KWJB?: string;
    /** 期数 */
    QS?: string;
    /** 内容 */
    NR?: string;
    /** 来源 */
    LY?: string;
  };

  type JZGRYSJ = {
    id: string;
    /** 级别 */
    JB?: string;
    /** 类型 */
    LX: string;
    /** 名称 */
    MC: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 获奖原因 */
    HJYY?: string;
    /** 来源 */
    LY?: string;
    /** 比赛名称 */
    BSMC?: string;
    /** 奖项 */
    JX?: string;
    /** 内容 */
    NR?: string;
  };

  type CreateJZGRYSJ = {
    /** 级别 */
    JB?: string;
    /** 类型 */
    LX: string;
    /** 名称 */
    MC: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 获奖原因 */
    HJYY?: string;
    /** 来源 */
    LY?: string;
    /** 比赛名称 */
    BSMC?: string;
    /** 奖项 */
    JX?: string;
    /** 内容 */
    NR?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGRYSJ = {
    /** 级别 */
    JB?: string;
    /** 类型 */
    LX?: string;
    /** 名称 */
    MC?: string;
    /** 日期 */
    RQ?: string | any;
    /** 组织机构 */
    ZZJG?: string;
    /** 获奖原因 */
    HJYY?: string;
    /** 来源 */
    LY?: string;
    /** 比赛名称 */
    BSMC?: string;
    /** 奖项 */
    JX?: string;
    /** 内容 */
    NR?: string;
  };

  type JZGJBSJ = {
    id: string;
    /** 工号 */
    GH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍 / 地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 机构号 */
    JGH?: string;
    /** 家庭住址 */
    JTZZ?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 学历码 */
    XLM?: string;
    /** 参加工作年月 */
    GZNY?: string | any;
    /** 来校年月 */
    LXNY?: string | any;
    /** 从教年月 */
    CJNY?: string | any;
    /** 编制类别码 */
    BZLBM?: string;
    /** 档案编号 */
    DABH?: string;
    /** 档案文本 */
    DAWB?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 特长 */
    TC?: string;
    /** 岗位职业码 */
    GWZYM?: string;
    /** 主要任课学段 */
    ZYRKXD?: string;
    /** 职称 */
    ZC?: string;
    /** 职务 */
    ZW?: string;
    XNJGSJs?: { id?: string; LSJGH?: string; LSJGMC?: string; JGMC?: string; JGJC?: string }[];
  };

  type CreateJZGJBSJ = {
    /** 工号 */
    GH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍 / 地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 机构号 */
    JGH?: string;
    /** 家庭住址 */
    JTZZ?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 学历码 */
    XLM?: string;
    /** 参加工作年月 */
    GZNY?: string | any;
    /** 来校年月 */
    LXNY?: string | any;
    /** 从教年月 */
    CJNY?: string | any;
    /** 编制类别码 */
    BZLBM?: string;
    /** 档案编号 */
    DABH?: string;
    /** 档案文本 */
    DAWB?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 特长 */
    TC?: string;
    /** 岗位职业码 */
    GWZYM?: string;
    /** 主要任课学段 */
    ZYRKXD?: string;
    /** 职称 */
    ZC?: string;
    /** 职务 */
    ZW?: string;
    XNJGSJIds?: string[] | any;
  };

  type UpdateJZGJBSJ = {
    /** 工号 */
    GH?: string;
    /** 姓名 */
    XM?: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍 / 地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string;
    /** 机构号 */
    JGH?: string;
    /** 家庭住址 */
    JTZZ?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 学历码 */
    XLM?: string;
    /** 参加工作年月 */
    GZNY?: string;
    /** 来校年月 */
    LXNY?: string;
    /** 从教年月 */
    CJNY?: string;
    /** 编制类别码 */
    BZLBM?: string;
    /** 档案编号 */
    DABH?: string;
    /** 档案文本 */
    DAWB?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 特长 */
    TC?: string;
    /** 岗位职业码 */
    GWZYM?: string;
    /** 主要任课学段 */
    ZYRKXD?: string;
    /** 职称 */
    ZC?: string;
    /** 职务 */
    ZW?: string;
    XNJGSJIds?: string[] | any;
  };

  type PortraitJZG = {
    id: string;
    /** 工号 */
    GH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍 / 地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 机构号 */
    JGH?: string;
    /** 家庭住址 */
    JTZZ?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 学历码 */
    XLM?: string;
    /** 参加工作年月 */
    GZNY?: string | any;
    /** 来校年月 */
    LXNY?: string | any;
    /** 从教年月 */
    CJNY?: string | any;
    /** 编制类别码 */
    BZLBM?: string;
    /** 档案编号 */
    DABH?: string;
    /** 档案文本 */
    DAWB?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 特长 */
    TC?: string;
    /** 岗位职业码 */
    GWZYM?: string;
    /** 主要任课学段 */
    ZYRKXD?: string;
    /** 职称 */
    ZC?: string;
    /** 职务 */
    ZW?: string;
    XNJGSJs?: { id?: string; LSJGH?: string; LSJGMC?: string; JGMC?: string; JGJC?: string }[];
    JZGCFSJs?: {
      id?: string;
      MC?: string;
      RQ?: string | any;
      ZZJG?: string;
      CFYY?: string;
      LY?: string;
    }[];
    JZGGZJLs?: {
      id?: string;
      GZQSRQ?: string | any;
      GZZZRQ?: string | any;
      GZDW?: string;
      GZNR?: string;
      CRDZZW?: string;
      CRZYJSZWM?: string;
      GZZMR?: string;
      GZJLBZ?: string;
    }[];
    JZGKTYJs?: {
      id?: string;
      MC?: string;
      LXRQ?: string | any;
      JTRQ?: string | any;
      KTBH?: string;
      LXDW?: string;
      CDRW?: string;
      CY?: string;
      NR?: string;
      LY?: string;
    }[];
    JZGLWSJs?: {
      id?: string;
      MC?: string;
      BH?: string;
      RQ?: string | any;
      CBH?: string;
      KW?: string;
      KWJB?: string;
      QS?: string;
      NR?: string;
      LY?: string;
    }[];
    JZGRYSJs?: {
      id?: string;
      JB?: string;
      LX?: string;
      MC?: string;
      RQ?: string | any;
      ZZJG?: string;
      HJYY?: string;
      LY?: string;
      BSMC?: string;
      JX?: string;
      NR?: string;
    }[];
    JZGXXJLs?: {
      id?: string;
      XXQSRQ?: string | any;
      XXZZRQ?: string | any;
      XXDW?: string;
      XXNR?: string;
      SXZYMC?: string;
      SHXWM?: string;
      XXZMR?: string;
      XXJLBZ?: string;
    }[];
  };

  type JZGXXJL = {
    id: string;
    /** 学习起始日期 */
    XXQSRQ: string;
    /** 学习终止日期 */
    XXZZRQ: string;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
  };

  type CreateJZGXXJL = {
    /** 学习起始日期 */
    XXQSRQ: string;
    /** 学习终止日期 */
    XXZZRQ: string;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type UpdateJZGXXJL = {
    /** 学习起始日期 */
    XXQSRQ?: string;
    /** 学习终止日期 */
    XXZZRQ?: string;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
    /** 教师ID */
    JZGJBSJId?: string;
  };

  type KCSJ = {
    id: string;
    /** 课程名称 */
    KCMC: string;
    /** 课程码 */
    KCM?: string;
    /** 课程等级码 */
    KCDJM?: string;
    /** 课程别名 */
    KCBM?: string;
    /** 课程简介 */
    KCJJ?: string;
    /** 课程要求 */
    KCYQ?: string;
    /** 总学时 */
    ZXS?: number;
    /** 周学时 */
    ZHXS?: number;
    /** 自学学时 */
    ZXXS?: number;
    /** 授课方式码 */
    SKFSM?: string;
    /** 教材编码 */
    JCBM?: string;
    /** 参考书目 */
    CKSM?: string;
    NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
    XKSJ?: { id?: string; XKMC?: string; XD?: string };
  };

  type CreateKCSJ = {
    /** 课程号 */
    KCH?: string;
    /** 课程名称 */
    KCMC: string;
    /** 课程码 */
    KCM?: string;
    /** 课程等级码 */
    KCDJM?: string;
    /** 课程别名 */
    KCBM?: string;
    /** 课程简介 */
    KCJJ?: string;
    /** 课程要求 */
    KCYQ?: string;
    /** 总学时 */
    ZXS?: number;
    /** 周学时 */
    ZHXS?: number;
    /** 自学学时 */
    ZXXS?: number;
    /** 授课方式码 */
    SKFSM?: string;
    /** 教材编码 */
    JCBM?: string;
    /** 参考书目 */
    CKSM?: string;
    NJSJId: string;
    XKSJId?: string;
  };

  type UpdateKCSJ = {
    /** 课程号 */
    KCH?: string;
    /** 课程名称 */
    KCMC?: string;
    /** 课程码 */
    KCM?: string;
    /** 课程等级码 */
    KCDJM?: string;
    /** 课程别名 */
    KCBM?: string;
    /** 课程简介 */
    KCJJ?: string;
    /** 课程要求 */
    KCYQ?: string;
    /** 总学时 */
    ZXS?: number;
    /** 周学时 */
    ZHXS?: number;
    /** 自学学时 */
    ZXXS?: number;
    /** 授课方式码 */
    SKFSM?: string;
    /** 教材编码 */
    JCBM?: string;
    /** 参考书目 */
    CKSM?: string;
  };

  type KHBJSJ = {
    id: string;
    /** 班级名称 */
    BJMC: string;
    /** 班级描述 */
    BJMS?: string;
    /** 班级状态 */
    BJZT: '待发布' | '已发布' | '已下架' | '已结课';
    /** 主教ID */
    ZJS?: string;
    /** 副教ID */
    FJS?: string;
    /** 班级人数 */
    BJRS?: number;
    /** 课时数 */
    KSS?: number;
    /** 费用 */
    FY?: number;
    /** 开课日期 */
    KKRQ?: string | any;
    /** 结课日期 */
    JKRQ?: string | any;
    /** 报名开始时间 */
    BMKSSJ?: string;
    /** 报名结束时间 */
    BMJSSJ?: string;
    /** 课程图片 */
    KCTP?: string;
    /** 年级ID */
    NJS?: string;
    /** 校区ID */
    XQ?: string;
    /** 年级名称 */
    NJSName?: string;
    /** 校区名称 */
    XQName?: string;
    /** 主教名称 */
    ZJSName?: string;
    /** 副教名称 */
    FJSName?: string;
    /** 课后课程ID */
    KHKCSJId?: string;
    KHKCSJ?: {
      id?: string;
      KCMC?: string;
      KCLX?: string;
      KCTP?: string;
      KCZT?: '待发布' | '已发布' | '已下架' | '已结课';
      KCMS?: string;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      XNXQId?: string;
      KHKCLX?: { id?: string; KCLX?: string; KBYS?: string };
    };
    KHPKSJs?: { id?: string; WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6' }[];
    KHXSBJs?: { id?: string; createdAt?: string; XSId?: string; XSXM?: string }[];
  };

  type CreateKHBJSJ = {
    /** 班级名称 */
    BJMC: string;
    /** 班级描述 */
    BJMS?: string;
    /** 班级状态 */
    BJZT: '待发布' | '已发布' | '已下架' | '已结课';
    /** 班级人数 */
    BJRS?: number;
    /** 课时数 */
    KSS?: number;
    /** 费用 */
    FY?: number;
    /** 开课日期 */
    KKRQ?: string | any;
    /** 结课日期 */
    JKRQ?: string | any;
    /** 报名开始时间 */
    BMKSSJ?: string;
    /** 报名结束时间 */
    BMJSSJ?: string;
    /** 课程图片 */
    KCTP?: string;
    /** 课后课程ID */
    KHKCSJId: string;
    /** 校区ID */
    XQSJId: string;
    KHKCJMs?: { FYJM?: string; JMDX?: string; JFBL?: number; ZJFY?: number }[];
    KHKCJCs?: { JCMC?: string; JCFY?: string }[];
    KHBJJSs?: { JSLX?: string; KHJSSJId?: string }[];
  };

  type UpdateKHBJSJ = {
    /** 班级名称 */
    BJMC?: string;
    /** 班级描述 */
    BJMS?: string;
    /** 班级状态 */
    BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
    /** 主教 */
    ZJS?: string;
    /** 副教 */
    FJS?: string;
    /** 班级人数 */
    BJRS?: number;
    /** 课时数 */
    KSS?: number;
    /** 费用 */
    FY?: number;
    /** 开课日期 */
    KKRQ?: string | any;
    /** 结课日期 */
    JKRQ?: string | any;
    /** 报名开始时间 */
    BMKSSJ?: string;
    /** 报名结束时间 */
    BMJSSJ?: string;
    /** 课程图片 */
    KCTP?: string;
    /** 年级ID */
    NJS?: string;
    /** 校区ID */
    XQ?: string;
    /** 年级名称 */
    NJSName?: string;
    /** 校区名称 */
    XQName?: string;
    /** 主教名称 */
    ZJSName?: string;
    /** 副教名称 */
    FJSName?: string;
    /** 课后课程ID */
    KHKCSJId?: string;
  };

  type KHJGRZSQ = {
    id: string;
    /** 申请状态 */
    ZT: string;
    /** 备注信息 */
    BZ?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 申请人 */
    SQR?: string;
    /** 申请人ID */
    SQRId?: string;
    /** 审批人 */
    SPR?: string;
    /** 审批人ID */
    SPRId?: string;
    /** 同意入驻时间 */
    RZSJ?: string;
    /** 创建日期 */
    createdAt?: string;
    /** 修改日期 */
    updatedAt?: string;
  };

  type CreateKHJGRZSQ = {
    /** 申请状态 */
    ZT?: string;
    /** 备注信息 */
    BZ?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 申请状人 */
    SQR?: string;
    /** 申请人ID */
    SQRId?: string;
    /** 审批人 */
    SPR?: string;
    /** 审批人ID */
    SPRId?: string;
    /** 课后服务机构ID */
    KHJYJGId?: string;
    /** 教育局ID */
    JYJGSJId?: string;
  };

  type UpdateKHJGRZSQ = {
    /** 申请状态 */
    ZT?: string;
    /** 备注信息 */
    BZ?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 申请状人 */
    SQR?: string;
    /** 申请人ID */
    SQRId?: string;
    /** 审批人 */
    SPR?: string;
    /** 审批人ID */
    SPRId?: string;
    /** 课后服务机构ID */
    KHJYJGId?: string;
    /** 教育局ID */
    JYJGSJId?: string;
    /** 同意入驻时间 */
    RZSJ?: string;
  };

  type KHJSPJ = {
    id: string;
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type CreateKHJSPJ = {
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type UpdateKHJSPJ = {
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type KHJSSJ = {
    id: string;
    /** 工号 */
    GH?: string;
    /** 姓名 */
    XM: string;
    /** 性别 */
    XB?: string;
    /** 联系电话 */
    LXDH: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 电子信箱 */
    DZXX?: string;
    /** 身份证件类型 */
    SFZJLX?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 备注信息 */
    BZ?: string;
  };

  type CreateKHJSSJ = {
    /** 工号 */
    GH?: string;
    /** 姓名 */
    XM: string;
    /** 性别 */
    XB?: string;
    /** 联系电话 */
    LXDH: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 电子信箱 */
    DZXX?: string;
    /** 身份证件类型 */
    SFZJLX?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 备注信息 */
    BZ?: string;
    XXJBSJId?: string;
    KHJYJGId?: string;
  };

  type UpdateKHJSSJ = {
    /** 工号 */
    GH?: string;
    /** 姓名 */
    XM?: string;
    /** 性别 */
    XB?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 电子信箱 */
    DZXX?: string;
    /** 身份证件类型 */
    SFZJLX?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 备注信息 */
    BZ?: string;
  };

  type KHJYJG = {
    id: string;
    /** 企业名称 */
    QYMC?: string;
    /** 企业LOGO */
    QYTB?: string;
    /** 组织机构代码 */
    ZZJGDM?: string;
    /** 法人代表姓名 */
    FRDBXM?: string;
    /** 法人代表身份证号 */
    FRDBSFZH?: string;
    /** 企业机构地址 */
    QYJGDZ?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 联系人姓名 */
    LXRXM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 机构服务范围 */
    JGFWFW?: string;
    /** 营业执照 */
    YYZZ?: string;
    /** 办学许可证 */
    BXXKZ?: string;
    /** 机构简介 */
    JGJJ?: string;
    /** 机构入驻状态 */
    ZT?: number;
  };

  type CreateKHJYJG = {
    /** 企业名称 */
    QYMC?: string;
    /** 企业LOGO */
    QYTB?: string;
    /** 组织机构代码 */
    ZZJGDM: string;
    /** 法人代表姓名 */
    FRDBXM?: string;
    /** 法人代表身份证号 */
    FRDBSFZH?: string;
    /** 企业机构地址 */
    QYJGDZ?: string;
    /** 行政区划码 */
    XZQHM: string;
    /** 联系人姓名 */
    LXRXM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 机构服务范围 */
    JGFWFW?: string;
    /** 营业执照 */
    YYZZ?: string;
    /** 办学许可证 */
    BXXKZ?: string;
    /** 机构简介 */
    JGJJ?: string;
    /** 机构入驻状态 */
    ZT?: number;
  };

  type UpdateKHJYJG = {
    /** 企业名称 */
    QYMC?: string;
    /** 企业LOGO */
    QYTB?: string;
    /** 组织机构代码 */
    ZZJGDM?: string;
    /** 法人代表姓名 */
    FRDBXM?: string;
    /** 法人代表身份证号 */
    FRDBSFZH?: string;
    /** 企业机构地址 */
    QYJGDZ?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 联系人姓名 */
    LXRXM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 机构服务范围 */
    JGFWFW?: string;
    /** 营业执照 */
    YYZZ?: string;
    /** 办学许可证 */
    BXXKZ?: string;
    /** 机构简介 */
    JGJJ?: string;
    /** 机构入驻状态 */
    ZT?: number;
  };

  type KHKCLX = {
    id: string;
    /** 课后课程类型 */
    KCLX: string;
  };

  type CreateKHKCLX = {
    /** 课后课程类型 */
    KCLX: string;
  };

  type UpdateKHKCLX = {
    /** 课后课程类型 */
    KCLX?: string;
  };

  type KHKCSJ = {
    id: string;
    /** 课程名称 */
    KCMC: string;
    /** 课程图片 */
    KCTP?: string;
    /** 课程状态 */
    KCZT: string;
    /** 课程描述 */
    KCMS?: string;
    /** 课程所属机构类型,校内课程/机构课程 */
    SSJGLX?: string;
    /** 课表颜色 */
    KBYS?: string;
    KHKCLX?: { id?: string; KCLX?: string };
    KHBJSJs?: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      FY?: number;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      KCTP?: string;
      KBYS?: string;
      NJS?: string;
      XQ?: string;
      NJSName?: string;
      XQName?: string;
      ZJSName?: string;
      FJSName?: string;
    }[];
  };

  type CreateKHKCSJ = {
    /** 课程名称 */
    KCMC: string;
    /** 课程图片 */
    KCTP: string;
    /** 课程状态 */
    KCZT: string;
    /** 课程描述 */
    KCMS?: string;
    /** 课程适用年级 */
    njIds?: string[];
    /** 课程授课教师 */
    jsIds?: string[];
    /** 课程所属机构类型,校内课程/机构课程 */
    SSJGLX?: string;
    /** 课表颜色 */
    KBYS?: string;
    /** 学校ID */
    XXJBSJId?: string;
    /** 课后教育机构ID */
    KHJYJGId?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
  };

  type UpdateKHKCSJ = {
    /** 课程名称 */
    KCMC?: string;
    /** 课程图片 */
    KCTP?: string;
    /** 课程状态 */
    KCZT?: string;
    /** 课程描述 */
    KCMS?: string;
    /** 课表颜色 */
    KBYS?: string;
    /** 课程类型ID */
    KHKCLXId?: string;
  };

  type KHKCSQ = {
    id: string;
    /** 申请状态 */
    ZT: string;
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
    /** 同意入驻时间 */
    RZSJ?: string;
    /** 创建日期 */
    createdAt?: string;
    /** 修改日期 */
    updatedAt?: string;
  };

  type CreateKHKCSQ = {
    /** 申请状态 */
    ZT?: string;
    /** 课后课程ID */
    KHKCSJId?: string;
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
    /** 机构ID */
    KHJYJGId: string;
    /** 学校ID */
    XXJBSJId: string;
  };

  type UpdateKHKCSQ = {
    /** 申请状态 */
    ZT: string;
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
    /** 同意入驻时间 */
    RZSJ?: string;
  };

  type KHXSCQ = {
    id?: string;
    /** 出勤状态 */
    CQZT?: '出勤' | '请假' | '缺席';
    /** 出勤日期 */
    CQRQ?: string | any;
    /** 学生Id */
    XSId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 排课ID */
    KHPKSJId?: string;
    KHBJSJ?: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      FY?: number;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      KCTP?: string;
      NJS?: string;
      XQ?: string;
      NJSName?: string;
      XQName?: string;
      ZJSName?: string;
      FJSName?: string;
    };
  };

  type CreateKHXSCQ = {
    /** 出勤状态 */
    CQZT?: '出勤' | '请假' | '缺席';
    /** 出勤日期 */
    CQRQ?: string | any;
    /** 学生Id */
    XSId?: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 班级ID */
    KHBJSJId?: string;
    /** 排课ID */
    KHPKSJId?: string;
  };

  type UpdateKHXSCQ = {
    /** 出勤状态 */
    CQZT?: '出勤' | '请假' | '缺席';
    /** 出勤日期 */
    CQRQ?: string | any;
  };

  type KHPKSJ = {
    id: string;
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    KHBJSJ?: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      KCTP?: string;
      NJS?: string;
      XQ?: string;
      NJSName?: string;
      XQName?: string;
      ZJSName?: string;
      FJSName?: string;
      KHKCSJ?: {
        id?: string;
        KCMC?: string;
        KCTP?: string;
        KCZT?: '待发布' | '已发布' | '已下架' | '已结课';
        KCMS?: string;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
      };
    };
    XXSJPZ?: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      KJS?: string;
      TITLE?: string;
      BZXX?: string;
      TYPE?: 0 | 1 | 2;
    };
    FJSJ?: {
      id?: string;
      FJBH?: string;
      FJMC?: string;
      FJLC?: string;
      FJJZMJ?: number;
      FJSYMJ?: number;
      FJRS?: number;
      FJLX?: string;
      XQ?: string;
      XQName?: string;
    };
  };

  type CreateKHPKSJ = {
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    /** 学校时间配置ID */
    XXSJPZId?: string;
    /** 课后班级ID */
    KHBJSJId?: string;
    /** 房间ID */
    FJSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  };

  type UpdateKHPKSJ = {
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    /** 学校时间配置ID */
    XXSJPZId?: string;
    /** 课后班级ID */
    KHBJSJId?: string;
    /** 房间ID */
    FJSJId?: string;
    /** 学校ID */
    XNXQId?: string;
  };

  type KHXSDD = {
    id?: string;
    /** 订单编号 */
    DDBH?: string;
    /** 下单时间 */
    XDSJ?: string;
    /** 支付方式 */
    ZFFS?: '线上支付' | '线下支付';
    /** 支付时间 */
    ZFSJ?: string;
    /** 电子发票 */
    DZFP?: string;
    /** 订单状态 */
    DDZT?: '待付款' | '已付款' | '已过期' | '待退款' | '已退款';
    /** 订单费用 */
    DDFY?: number;
    /** 退款时间 */
    TKSJ?: string;
    /** 学生Id */
    XSId?: string;
    /** 学生姓名 */
    XSXM?: string;
    KHBJSJ?: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      FY?: number;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      KCTP?: string;
      NJS?: string;
      XQ?: string;
      NJSName?: string;
      XQName?: string;
      ZJSName?: string;
      FJSName?: string;
      KHKCSJ?: {
        id?: string;
        KCMC?: string;
        KCLX?: string;
        KCTP?: string;
        KCZT?: '待发布' | '已发布' | '已下架' | '已结课';
        KCMS?: string;
        KKRQ?: string | any;
        JKRQ?: string | any;
        BMKSSJ?: string;
        BMJSSJ?: string;
        XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
      };
    };
  };

  type CreateKHXSDD = {
    /** 下单时间 */
    XDSJ?: string;
    /** 支付方式 */
    ZFFS: '线上支付' | '线下支付';
    /** 电子发票 */
    DZFP?: string;
    /** 订单状态 */
    DDZT: '待付款' | '已付款' | '已过期' | '待退款' | '已退款';
    /** 订单费用 */
    DDFY: number;
    /** 学生Id */
    XSId: string;
    /** 学生姓名 */
    XSXM?: string;
    /** 班级ID */
    KHBJSJId: string;
  };

  type UpdateKHXSDD = {
    /** 下单时间 */
    XDSJ?: string;
    /** 支付方式 */
    ZFFS?: '线上支付' | '线下支付';
    /** 支付时间 */
    ZFSJ?: string;
    /** 电子发票 */
    DZFP?: string;
    /** 订单状态 */
    DDZT?: '待付款' | '已付款' | '已过期' | '待退款' | '已退款';
    /** 订单费用 */
    DDFY?: number;
  };

  type KHXSPJ = {
    id: string;
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type CreateKHXSPJ = {
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type UpdateKHXSPJ = {
    /** 评价日期 */
    PJRQ?: string | any;
    /** 评价类型 */
    PJLX?: '节次评价' | '总评价';
    /** 评价分数 */
    PJFS?: string;
    /** 评语 */
    PY?: string;
    /** 教师ID */
    JSId?: string;
    /** 学生ID */
    XSId?: string;
    /** 班级ID */
    KHBJSJId?: string;
  };

  type KHXSQJ = {
    /** 请假开始时间 */
    KSSJ?: string | any;
    /** 请假结束时间 */
    JSSJ?: string | any;
    /** 请假时长 */
    QJSC?: number;
    /** 请假原因 */
    QJYY?: string;
    /** 请假状态 */
    QJZT?: '已确认' | '待确认' | '已过期';
    /** 请假类型 */
    QJLX?: '按课时请假' | '按时间请假';
    /** 学生Id */
    XSId?: string;
    KHBJSJs?: {
      id?: string;
      BJMC?: string;
      BJMS?: string;
      BJZT?: '待发布' | '已发布' | '已下架' | '已结课';
      ZJS?: string;
      FJS?: string;
      BJRS?: number;
      KSS?: number;
      FY?: number;
      KKRQ?: string | any;
      JKRQ?: string | any;
      BMKSSJ?: string;
      BMJSSJ?: string;
      KCTP?: string;
      NJS?: string;
      XQ?: string;
      NJSName?: string;
      XQName?: string;
      ZJSName?: string;
      FJSName?: string;
    }[];
  };

  type CreateKHXSQJ = {
    /** 请假开始时间 */
    KSSJ: string | any;
    /** 请假结束时间 */
    JSSJ: string | any;
    /** 请假时长 */
    QJSC?: number;
    /** 请假原因 */
    QJYY: string;
    /** 请假状态 */
    QJZT: '已确认' | '待确认' | '已过期';
    /** 请假类型 */
    QJLX: '按课时请假' | '按时间请假';
    /** 学生Id */
    XSId?: string;
    /** 班级ID */
    bjIds?: { KHBJSJId?: string; QJRQ?: string }[];
  };

  type UpdateKHXSQJ = {
    /** 请假开始时间 */
    KSSJ?: string | any;
    /** 请假结束时间 */
    JSSJ?: string | any;
    /** 请假时长 */
    QJSC?: number;
    /** 请假原因 */
    QJYY?: string;
    /** 请假状态 */
    QJZT?: '已确认' | '待确认' | '已过期';
    /** 请假类型 */
    QJLX?: '按课时请假' | '按时间请假';
  };

  type NJSJ = {
    id: string;
    /** 年级 */
    NJ: number;
    /** 年级名称 */
    NJMC: string;
    /** 所属学段 */
    XD?: string;
    /** 年级简称 */
    NJJC?: string;
    /** 是否毕业年级 */
    SFBY?: number;
    NJZR?: { id?: string; GH?: string; XM?: string };
    FNJZR?: { id?: string; GH?: string; XM?: string };
    BJSJs?: { id?: string; BH?: number; BJ?: string }[];
  };

  type CreateNJSJ = {
    /** 年级 */
    NJ: number;
    /** 年级名称 */
    NJMC: string;
    /** 所属学段 */
    XD?: string;
    /** 年级简称 */
    NJJC?: string;
    /** 是否毕业年级 */
    SFBY?: number;
    NJZRId?: string;
    FNJZRId?: string;
    XQSJId?: string;
  };

  type UpdateNJSJ = {
    /** 年级 */
    NJ?: number;
    /** 年级名称 */
    NJMC?: string;
    /** 所属学段 */
    XD?: string;
    /** 年级简称 */
    NJJC?: string;
    /** 是否毕业年级 */
    SFBY?: number;
    BZRId?: string;
    FBZRId?: string;
  };

  type PKSJ = {
    id: string;
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    BJSJ?: {
      id?: string;
      BH?: number;
      BJ?: string;
      SKDD?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
    };
    XXSJPZ?: {
      id?: string;
      KSSJ?: string;
      JSSJ?: string;
      KJS?: string;
      TITLE?: string;
      BZXX?: string;
      TYPE?: 0 | 1 | 2;
    };
    KCSJ?: { id?: string; KCMC?: string; KCBM?: string };
  };

  type CreatePKSJ = {
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    /** 学校时间配置ID */
    XXSJPZId?: string;
    /** 班级ID */
    BJSJId?: string;
    /** 课程ID */
    KCSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  };

  type UpdatePKSJ = {
    /** 上课日期(周几) */
    WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
    /** 学校时间配置ID */
    XXSJPZId?: string;
    /** 班级ID */
    BJSJId?: string;
    /** 课程ID */
    KCSJId?: string;
    /** 学年学期ID */
    XNXQId?: string;
  };

  type Schedule = {
    id?: string;
    /** 年级 */
    NJ?: number;
    /** 年级名称 */
    NJMC?: string;
    /** 所属学段 */
    XD?: string;
    BJSJs?: {
      id?: string;
      BH?: number;
      BJ?: string;
      SKDD?: string;
      PKSJs?: {
        id?: string;
        WEEKDAY?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
        XXSJPZ?: {
          id?: string;
          KSSJ?: string;
          JSSJ?: string;
          KJS?: string;
          TITLE?: string;
          BZXX?: string;
          TYPE?: 0 | 1 | 2;
        };
        KCSJ?: { id?: string; KCMC?: string; KCBM?: string; XKSJ?: { id?: string; XKMC?: string } };
      }[];
    }[];
  };

  type CurrentUser = {
    id?: string;
    jgId?: string;
    /** 学校代码 */
    XXDM?: string;
    /** 登录名，学号或工号 */
    loginName?: string;
    /** 姓名 */
    username: string;
    /** 头像 */
    avatar?: string;
    /** 身份ID */
    identityId?: string;
    /** 部门ID */
    departmentId?: string;
    /** 状态，0无效1有效，其他可由业务自行定义 */
    status?: number;
    userType?: string;
    auth?: '老师' | '家长' | '管理员' | { authType?: string; appName?: string }[];
    adminAuth?: string[];
    /** 微信用户ID，智慧校园 学生或老师ID */
    userId?: string;
    /** 微信用户ID(教师) */
    UserId?: string;
    /** 微信用户企业ID */
    CorpId?: string;
    subscriber_info?: {
      remark?: string;
      children?: { njId?: string; department?: string[]; student_userid?: string; name?: string }[];
    };
    roles?: {
      id?: string;
      name?: string;
      describe?: string;
      roleType?: string;
      orderIndex?: number;
      rules?: {
        id?: string;
        permission?: { id?: string; describe?: string; permission?: string };
        subApp?: {
          id?: string;
          describe?: string;
          icon?: string;
          isEnabled?: boolean;
          isShow?: string;
          name?: string;
          orderIndex?: string;
          path?: string;
          subAppGroupId?: string;
          target?: string;
        };
      }[];
    }[];
  };

  type CreateUser = {
    /** 学校代码 */
    XXDM: string;
    /** 登录名，学号或工号 */
    loginName: string;
    /** 密码 */
    password: string;
    /** 姓名 */
    username: string;
    /** 头像 */
    avatar?: string;
    /** 身份ID */
    identityId?: string;
    /** 部门ID */
    departmentId?: string;
    /** 状态，0无效1有效，其他可由业务自行定义 */
    status: number;
    UserTypeId: string;
    UserType?: { id?: string; name?: string };
  };

  type XKSJ = {
    id: string;
    /** 学科名称 */
    XKMC: string;
    /** 所属学段 */
    XD?: string;
  };

  type CreateXKSJ = {
    /** 学科名称 */
    XKMC: string;
    /** 所属学段 */
    XD?: string;
    XQSJId?: string;
  };

  type UpdateXKSJ = {
    /** 学科名称 */
    XKMC: string;
    /** 所属学段 */
    XD?: string;
  };

  type XL = {
    id: string;
    /** 标题 */
    BT?: string;
    /** 开始日期 */
    KSRQ?: string;
    /** 结束日期 */
    JSRQ?: string;
    XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string; JSRQ?: string };
  };

  type CreateXL = {
    /** 标题 */
    BT?: string;
    /** 开始日期 */
    KSRQ?: string;
    /** 结束日期 */
    JSRQ?: string;
    XNXQId: string;
  };

  type UpdateXL = {
    /** 标题 */
    BT?: string;
    /** 开始日期 */
    KSRQ?: string;
    /** 结束日期 */
    JSRQ?: string;
    XNXQId: string;
  };

  type XNJGSJ = {
    id: string;
    /** 隶属机构号 */
    LSJGH: string;
    /** 隶属机构名称 */
    LSJGMC?: string;
    /** 机构名称 */
    JGMC: string;
    /** 机构简称 */
    JGJC: string;
    FZR?: { id?: string; GH?: string; XM?: string };
    JZGJBSJs?: { id?: string; GH?: string; XM?: string; LXDH?: string; DZXX?: string }[];
  };

  type CreateXNJGSJ = {
    /** 隶属机构号 */
    LSJGH: string;
    /** 隶属机构名称 */
    LSJGMC: string;
    /** 机构名称 */
    JGMC: string;
    /** 机构简称 */
    JGJC: string;
    /** 负责人工号 */
    FZRGH?: string;
    XQSJId?: string;
  };

  type UpdateXNJGSJ = {
    /** 隶属机构号 */
    LSJGH?: string;
    /** 隶属机构名称 */
    LSJGMC?: string;
    /** 机构名称 */
    JGMC?: string;
    /** 机构简称 */
    JGJC?: string;
    /** 负责人工号 */
    FZRGH?: string;
  };

  type XNXQ = {
    id: string;
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 开始日期 */
    KSRQ: string;
    /** 结束日期 */
    JSRQ: string;
  };

  type CreateXNXQ = {
    /** 学年 */
    XN: string;
    /** 学期 */
    XQ: string;
    /** 开始日期 */
    KSRQ: string;
    /** 结束日期 */
    JSRQ: string;
  };

  type UpdateXNXQ = {
    /** 学年 */
    XN?: string;
    /** 学期 */
    XQ?: string;
    /** 开始日期 */
    KSRQ?: string;
    /** 结束日期 */
    JSRQ?: string;
  };

  type XQSJ = {
    id: string;
    /** 校区号 */
    XQH?: string;
    /** 校区名称 */
    XQMC?: string;
    /** 校区地址 */
    XQDZ?: string;
    /** 校区邮政编码 */
    XQYZBM?: string;
    /** 校区联系电话 */
    XQLXDH?: string;
    /** 校区传真电话 */
    XQCZDH?: string;
    XXJBSJ?: {
      id?: string;
      XXDM?: string;
      XXMC?: string;
      XXYWMC?: string;
      XXDZ?: string;
      XXYZBM?: string;
      XZQHM?: string;
    };
    JZGJBSJ?: { id?: string; GH?: string; XM?: string; YWXM?: string; XMPY?: string };
  };

  type CreateXQSJ = {
    /** 校区号 */
    XQH?: string;
    /** 校区名称 */
    XQMC?: string;
    /** 校区地址 */
    XQDZ?: string;
    /** 校区邮政编码 */
    XQYZBM?: string;
    /** 校区联系电话 */
    XQLXDH?: string;
    /** 校区传真电话 */
    XQCZDH?: string;
    /** 校区负责人ID */
    JZGJBSJId?: string;
  };

  type UpdateXQSJ = {
    /** 校区号 */
    XQH?: string;
    /** 校区名称 */
    XQMC?: string;
    /** 校区地址 */
    XQDZ?: string;
    /** 校区邮政编码 */
    XQYZBM?: string;
    /** 校区联系电话 */
    XQLXDH?: string;
    /** 校区传真电话 */
    XQCZDH?: string;
    /** 校区负责人ID */
    JZGJBSJId?: string;
  };

  type XSJBSJ = {
    id: string;
    /** 学号 */
    XH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍/地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 独生子女标志 */
    DSZYBZ?: string;
    /** 入学年月 */
    RXNY?: string | any;
    /** 年级 */
    NJ?: string;
    /** 班号 */
    BH?: string;
    /** 学生类别码 */
    XSLBM?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 是否流动人口 */
    SFLDRK?: string;
    /** 特长 */
    TC?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 学籍号 */
    XJH?: string;
    XQSJ?: { id?: string; XQH?: string; XQMC?: string; XQDZ?: string };
    BJSJ?: {
      id?: string;
      BH?: string;
      BJ?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
    };
  };

  type CreateXSJBSJ = {
    /** 学号 */
    XH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍/地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 独生子女标志 */
    DSZYBZ?: string;
    /** 入学年月 */
    RXNY?: string | any;
    /** 年级 */
    NJ?: string;
    /** 班号 */
    BH?: string;
    /** 学生类别码 */
    XSLBM?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 是否流动人口 */
    SFLDRK?: string;
    /** 特长 */
    TC?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 学籍号 */
    XJH?: string;
    BJSJId?: string;
    XQSJId?: string;
  };

  type UpdateXSJBSJ = {
    /** 学号 */
    XH?: string;
    /** 姓名 */
    XM?: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍/地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string;
    /** 独生子女标志 */
    DSZYBZ?: string;
    /** 入学年月 */
    RXNY?: string;
    /** 年级 */
    NJ?: string;
    /** 班号 */
    BH?: string;
    /** 学生类别码 */
    XSLBM?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 是否流动人口 */
    SFLDRK?: string;
    /** 特长 */
    TC?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 学籍号 */
    XJH?: string;
    BJSJId?: string;
  };

  type PortraitXS = {
    id: string;
    /** 学号 */
    XH: string;
    /** 姓名 */
    XM: string;
    /** 英文姓名 */
    YWXM?: string;
    /** 姓名拼音 */
    XMPY?: string;
    /** 曾用名 */
    CYM?: string;
    /** 性别码 */
    XBM?: string;
    /** 出生日期 */
    CSRQ?: string | any;
    /** 出生地码 */
    CSDM?: string;
    /** 籍贯 */
    JG?: string;
    /** 民族码 */
    MZM?: string;
    /** 国籍/地区码 */
    GJDQM?: string;
    /** 身份证件类型码 */
    SFZJLXM?: string;
    /** 身份证件号 */
    SFZJH?: string;
    /** 婚姻状况码 */
    HYZKM?: string;
    /** 港澳台侨外码 */
    GATQWM?: string;
    /** 政治面貌码 */
    ZZMMM?: string;
    /** 健康状况码 */
    JKZKM?: string;
    /** 信仰宗教码 */
    XYZJM?: string;
    /** 血型码 */
    XXM?: string;
    /** 身份证件有效期 */
    SFZJYXQ?: string | any;
    /** 独生子女标志 */
    DSZYBZ?: string;
    /** 入学年月 */
    RXNY?: string | any;
    /** 年级 */
    NJ?: string;
    /** 班号 */
    BH?: string;
    /** 学生类别码 */
    XSLBM?: string;
    /** 现住址 */
    XZZ?: string;
    /** 户口所在地 */
    HKSZD?: string;
    /** 户口性质码 */
    HKXZM?: string;
    /** 是否流动人口 */
    SFLDRK?: string;
    /** 特长 */
    TC?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 通信地址 */
    TXDZ?: string;
    /** 邮政编码 */
    YZBM?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 学籍号 */
    XJH?: string;
    XSCFSJs?: {
      id?: string;
      CFMCM?: string;
      CFYY?: string;
      CFRQ?: string | any;
      CFWH?: string;
      CFCXRQ?: string | any;
      CFCXWH?: string;
    }[];
    XSJLSJs?: {
      id?: string;
      JLMC?: string;
      JLJBM?: string;
      JLDJM?: string;
      HJLBM?: string;
      JLYY?: string;
      JLJE?: string;
      JLWH?: string;
      JLXND?: string;
      BJDW?: string;
      JLLXM?: string;
      JLFSM?: string;
      HJXM?: string;
      HJRQ?: string | any;
    }[];
    XSXXJLs?: {
      id?: string;
      XXQSRQ?: string | any;
      XXZZRQ?: string | any;
      XXDW?: string;
      XXNR?: string;
      SXZYMC?: string;
      SHXWM?: string;
      XXZMR?: string;
      XXJLBZ?: string;
    }[];
    BJSJ?: {
      id?: string;
      BH?: string;
      BJ?: string;
      NJSJ?: { id?: string; NJ?: number; NJMC?: string; XD?: string };
    };
  };

  type XSJLSJ = {
    id: string;
    JLMC?: string;
    JLJBM?: string;
    JLDJM?: string;
    HJLBM?: string;
    JLYY?: string;
    JLJE?: string;
    JLWH?: string;
    JLXND?: string;
    BJDW?: string;
    JLLXM?: string;
    JLFSM?: string;
    HJXM?: string;
    HJRQ?: string | any;
  };

  type CreateXSJLSJ = {
    JLMC?: string;
    JLJBM?: string;
    JLDJM?: string;
    HJLBM?: string;
    JLYY?: string;
    JLJE?: string;
    JLWH?: string;
    JLXND?: string;
    BJDW?: string;
    JLLXM?: string;
    JLFSM?: string;
    HJXM?: string;
    HJRQ?: string | any;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type UpdateXSJLSJ = {
    JLMC?: string;
    JLJBM?: string;
    JLDJM?: string;
    HJLBM?: string;
    JLYY?: string;
    JLJE?: string;
    JLWH?: string;
    JLXND?: string;
    BJDW?: string;
    JLLXM?: string;
    JLFSM?: string;
    HJXM?: string;
    HJRQ?: string | any;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type XSXXJL = {
    id: string;
    /** 学习起始日期 */
    XXQSRQ: string;
    /** 学习终止日期 */
    XXZZRQ?: string | any;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
  };

  type CreateXSXXJL = {
    /** 学习起始日期 */
    XXQSRQ: string;
    /** 学习终止日期 */
    XXZZRQ?: string | any;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type UpdateXSXXJL = {
    /** 学习起始日期 */
    XXQSRQ: string;
    /** 学习终止日期 */
    XXZZRQ?: string | any;
    /** 学习单位 */
    XXDW?: string;
    /** 学习内容 */
    XXNR?: string;
    /** 所学专业名称 */
    SXZYMC?: string;
    /** 所获学位码 */
    SHXWM?: string;
    /** 学习证明人 */
    XXZMR?: string;
    /** 学习简历备注 */
    XXJLBZ?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type XSJTCY = {
    id: string;
    GXM: string;
    CYXM: string;
    CSNY?: string;
    MZM?: string;
    GJDQM?: string;
    JKZKM?: string;
    CYGZDW?: string;
    CYEM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    DH: string;
    DZXX?: string;
    SFJHR?: string;
    XBM?: string;
    XLM?: string;
    LXDZ?: string;
    SJHM?: string;
  };

  type CreateXSJTCY = {
    GXM: string;
    CYXM: string;
    CSNY?: string;
    MZM?: string;
    GJDQM?: string;
    JKZKM?: string;
    CYGZDW?: string;
    CYEM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    DH: string;
    DZXX?: string;
    SFJHR?: string;
    XBM?: string;
    XLM?: string;
    LXDZ?: string;
    SJHM?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type UpdateXSJTCY = {
    GXM?: string;
    CYXM?: string;
    CSNY?: string;
    MZM?: string;
    GJDQM?: string;
    JKZKM?: string;
    CYGZDW?: string;
    CYEM?: string;
    ZYJSZWM?: string;
    ZWJBM?: string;
    DH?: string;
    DZXX?: string;
    SFJHR?: string;
    XBM?: string;
    XLM?: string;
    LXDZ?: string;
    SJHM?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type XXGG = {
    id: string;
    /** 公告标题 */
    BT?: string;
    /** 公告内容 */
    NR?: string;
    /** 公告状态 */
    ZT?: string;
    /** 公告类型 */
    LX?: string;
    /** 修改时间 */
    updatedAt?: string;
  };

  type CreateXXGG = {
    /** 公告标题 */
    BT?: string;
    /** 公告内容 */
    NR?: string;
    /** 公告状态 */
    ZT?: string;
    /** 公告类型 */
    LX?: string;
  };

  type UpdateXXGG = {
    /** 公告标题 */
    BT?: string;
    /** 公告内容 */
    NR?: string;
    /** 公告状态 */
    ZT?: string;
    /** 公告类型 */
    LX?: string;
  };

  type XXJBPZ = {
    id?: string;
    /** 年级是否自动增长 */
    NJZDZZ?: number;
    /** 年级自动增长是否完成 */
    NJZDZZSFWC?: number;
    /** 年级自动增长日期 */
    NJZDZZRQ?: string;
  };

  type CreateXXJBPZ = {
    /** 年级是否自动增长 */
    NJZDZZ?: number;
    /** 年级自动增长是否完成 */
    NJZDZZSFWC?: number;
    /** 年级自动增长日期 */
    NJZDZZRQ: string;
    /** 校区ID */
    XQSJId?: string;
  };

  type UpdateXXJBPZ = {
    /** 年级是否自动增长 */
    NJZDZZ?: number;
    /** 年级自动增长是否完成 */
    NJZDZZSFWC?: number;
    /** 年级自动增长日期 */
    NJZDZZRQ?: string;
    /** 校区ID */
    XQSJId?: string;
  };

  type XXPZ = {
    /** 键 */
    KEY?: 'BMKSSJ' | 'BMJSSJ' | 'KKRQ' | 'JKRQ' | 'TITLE';
    /** 值 */
    VALUE?: string;
    /** 备注信息 */
    REMARK?: string;
    XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
  };

  type CreateXXPZ = {
    /** 键 */
    KEY: 'BMKSSJ' | 'BMJSSJ' | 'KKRQ' | 'JKRQ' | 'TITLE';
    /** 值 */
    VALUE: string;
    /** 备注信息 */
    REMARK?: string;
    /** 学年 */
    xn?: string;
    /** 学期 */
    xq?: string;
  };

  type UpdateXXPZ = {
    /** 键 */
    KEY: 'BMKSSJ' | 'BMJSSJ' | 'KKRQ' | 'JKRQ' | 'TITLE';
    /** 值 */
    VALUE: string;
    /** 备注信息 */
    REMARK?: string;
  };

  type XSCFSJ = {
    id: string;
    CFMCM?: string;
    CFYY?: string;
    CFRQ?: string | any;
    CFWH?: string;
    CFCXRQ?: string | any;
    CFCXWH?: string;
  };

  type CreateXSCFSJ = {
    CFMCM: string;
    CFYY: string;
    CFRQ: string | any;
    CFWH?: string;
    CFCXRQ?: string | any;
    CFCXWH?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type UpdateXSCFSJ = {
    CFMCM?: string;
    CFYY?: string;
    CFRQ?: string | any;
    CFWH?: string;
    CFCXRQ?: string;
    CFCXWH?: string;
    /** 学生ID */
    XSJBSJId?: string;
  };

  type XXJBSJ = {
    id: string;
    /** 学校代码 */
    XXDM: string;
    /** 校徽 */
    XH?: string;
    /** 学校荣誉 */
    XXRY?: string;
    /** 学校名称 */
    XXMC: string;
    /** 学校英文名称 */
    XXYWMC?: string;
    /** 学校地址 */
    XXDZ?: string;
    /** 学校邮政编码 */
    XXYZBM?: string;
    /** 行政区划码 */
    XZQHM: string;
    /** 建校年月 */
    JXNY?: string | any;
    /** 校庆日 */
    XQR?: string;
    /** 学校办学类型码 */
    XXBXLXM?: string;
    /** 学校主管部门码 */
    XXZGBMM?: string;
    /** 法定代表人号 */
    FDDBRH?: string;
    /** 法人证书号 */
    FRZSH?: string;
    /** 校长工号 */
    XZGH?: string;
    /** 校长姓名 */
    XZXM?: string;
    /** 党委负责人号 */
    DWFZRH?: string;
    /** 组织机构码 */
    ZZJGM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 联系人 */
    LXR?: string;
    /** 传真电话 */
    CZDH?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 历史沿革 */
    LSYG?: string;
    /** 学校办别码 */
    XXBBM?: string;
    /** 所属主管单位码 */
    SSZGDWM?: string;
    /** 所在地城乡类型码 */
    SZDCXLXM?: string;
    /** 所在地经济属性码 */
    SZDJJSXM?: string;
    /** 所在地民族属性 */
    SZDMZSX?: string;
    /** 小学学制 */
    XXXZ?: number;
    /** 小学入学年龄 */
    XXRXNL?: number;
    /** 初中学制 */
    CZXZ?: number;
    /** 初中入学年龄 */
    CZRXNL?: number;
    /** 高中学制 */
    GZXZ?: number;
    /** 主教学语言码 */
    ZJXYYM?: string;
    /** 辅教学语言码 */
    FJXYYM?: string;
    /** 招生半径 */
    ZSBJ?: string;
    /** 包含学段 */
    XD?: string;
  };

  type CreateXXJBSJ = {
    /** 学校代码 */
    XXDM: string;
    /** 校徽 */
    XH?: string;
    /** 学校荣誉 */
    XXRY?: string;
    /** 学校名称 */
    XXMC: string;
    /** 学校英文名称 */
    XXYWMC?: string;
    /** 学校地址 */
    XXDZ?: string;
    /** 学校邮政编码 */
    XXYZBM?: string;
    /** 行政区划码 */
    XZQHM: string;
    /** 建校年月 */
    JXNY?: string | any;
    /** 校庆日 */
    XQR?: string;
    /** 学校办学类型码 */
    XXBXLXM?: string;
    /** 学校主管部门码 */
    XXZGBMM?: string;
    /** 法定代表人号 */
    FDDBRH?: string;
    /** 法人证书号 */
    FRZSH?: string;
    /** 校长工号 */
    XZGH?: string;
    /** 校长姓名 */
    XZXM?: string;
    /** 党委负责人号 */
    DWFZRH?: string;
    /** 组织机构码 */
    ZZJGM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 联系人 */
    LXR?: string;
    /** 传真电话 */
    CZDH?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 历史沿革 */
    LSYG?: string;
    /** 学校办别码 */
    XXBBM?: string;
    /** 所属主管单位码 */
    SSZGDWM?: string;
    /** 所在地城乡类型码 */
    SZDCXLXM?: string;
    /** 所在地经济属性码 */
    SZDJJSXM?: string;
    /** 所在地民族属性 */
    SZDMZSX?: string;
    /** 小学学制 */
    XXXZ?: number;
    /** 小学入学年龄 */
    XXRXNL?: number;
    /** 初中学制 */
    CZXZ?: number;
    /** 初中入学年龄 */
    CZRXNL?: number;
    /** 高中学制 */
    GZXZ?: number;
    /** 主教学语言码 */
    ZJXYYM?: string;
    /** 辅教学语言码 */
    FJXYYM?: string;
    /** 招生半径 */
    ZSBJ?: string;
    /** 包含学段 */
    XD?: string;
  };

  type UpdateXXJBSJ = {
    /** 校徽 */
    XH?: string;
    /** 学校荣誉 */
    XXRY?: string;
    /** 学校名称 */
    XXMC?: string;
    /** 学校英文名称 */
    XXYWMC?: string;
    /** 学校地址 */
    XXDZ?: string;
    /** 学校邮政编码 */
    XXYZBM?: string;
    /** 行政区划码 */
    XZQHM?: string;
    /** 建校年月 */
    JXNY?: string;
    /** 校庆日 */
    XQR?: string;
    /** 学校办学类型码 */
    XXBXLXM?: string;
    /** 学校主管部门码 */
    XXZGBMM?: string;
    /** 法定代表人号 */
    FDDBRH?: string;
    /** 法人证书号 */
    FRZSH?: string;
    /** 校长工号 */
    XZGH?: string;
    /** 校长姓名 */
    XZXM?: string;
    /** 党委负责人号 */
    DWFZRH?: string;
    /** 组织机构码 */
    ZZJGM?: string;
    /** 联系电话 */
    LXDH?: string;
    /** 联系人 */
    LXR?: string;
    /** 传真电话 */
    CZDH?: string;
    /** 电子信箱 */
    DZXX?: string;
    /** 主页地址 */
    ZYDZ?: string;
    /** 历史沿革 */
    LSYG?: string;
    /** 学校办别码 */
    XXBBM?: string;
    /** 所属主管单位码 */
    SSZGDWM?: string;
    /** 所在地城乡类型码 */
    SZDCXLXM?: string;
    /** 所在地经济属性码 */
    SZDJJSXM?: string;
    /** 所在地民族属性 */
    SZDMZSX?: string;
    /** 小学学制 */
    XXXZ?: number;
    /** 小学入学年龄 */
    XXRXNL?: number;
    /** 初中学制 */
    CZXZ?: number;
    /** 初中入学年龄 */
    CZRXNL?: number;
    /** 高中学制 */
    GZXZ?: number;
    /** 主教学语言码 */
    ZJXYYM?: string;
    /** 辅教学语言码 */
    FJXYYM?: string;
    /** 招生半径 */
    ZSBJ?: string;
    /** 包含学段 */
    XD?: string;
  };

  type XXSJPZ = {
    id: string;
    /** 开始时间 */
    KSSJ?: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 课节数 */
    KJS?: string;
    /** 标题/名称 */
    TITLE?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 类型，0:时段维护，1:报名开始/结束时间，2:开课/结课日期 */
    TYPE?: '0' | '1' | '2';
    XXJBSJ?: {
      id?: string;
      XXDM?: string;
      XXMC?: string;
      XXYWMC?: string;
      XXDZ?: string;
      XXYZBM?: string;
      XZQHM?: string;
    };
    XNXQ?: { id?: string; XN?: string; XQ?: string; KSRQ?: string | any; JSRQ?: string | any };
  };

  type CreateXXSJPZ = {
    /** 开始时间 */
    KSSJ?: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 课节数 */
    KJS?: string;
    /** 标题/名称 */
    TITLE?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 类型，0:时段维护，1:报名开始/结束时间，2:开课/结课日期 */
    TYPE: '0' | '1' | '2';
    /** 学年 */
    xn: string;
    /** 学期 */
    xq: string;
  };

  type UpdateXXSJPZ = {
    /** 开始时间 */
    KSSJ?: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 课节数 */
    KJS?: string;
    /** 标题/名称 */
    TITLE?: string;
    /** 备注信息 */
    BZXX?: string;
    /** 类型，0:时段维护，1:报名开始/结束时间，2:开课/结课日期 */
    TYPE?: '0' | '1' | '2';
    /** 学年 */
    xn?: string;
    /** 学期 */
    xq?: string;
  };

  type XXTZGG = {
    id: string;
    /** 标题 */
    BT?: string;
    /** 副标题 */
    FBT?: string;
    /** 关键词 */
    GJC?: string;
    /** 状态 */
    ZT?: string;
    /** 类型 */
    LX?: string;
    /** 编号 */
    BH?: number;
    /** 摘要 */
    ZY?: string;
    /** 图片 */
    TP?: string;
    /** 作者 */
    ZZ?: string;
    /** 日期 */
    RQ?: string;
    /** 来源 */
    LY?: string;
    /** 是否头条，0:不是，1:是 */
    SFTT?: number;
    /** 是否推荐，0:不是，1:是 */
    SFTJ?: number;
    /** 内容 */
    NR?: string;
  };

  type CreateXXTZGG = {
    /** 标题 */
    BT?: string;
    /** 副标题 */
    FBT?: string;
    /** 关键词 */
    GJC?: string;
    /** 状态 */
    ZT?: string;
    /** 类型 */
    LX?: string;
    /** 编号 */
    BH?: number;
    /** 摘要 */
    ZY?: string;
    /** 图片 */
    TP?: string;
    /** 作者 */
    ZZ?: string;
    /** 日期 */
    RQ?: string;
    /** 来源 */
    LY?: string;
    /** 是否头条，0:不是，1:是 */
    SFTT?: number;
    /** 是否推荐，0:不是，1:是 */
    SFTJ?: number;
    /** 内容 */
    NR?: string;
  };

  type UpdateXXTZGG = {
    /** 标题 */
    BT?: string;
    /** 副标题 */
    FBT?: string;
    /** 关键词 */
    GJC?: string;
    /** 状态 */
    ZT?: string;
    /** 类型 */
    LX?: string;
    /** 编号 */
    BH?: number;
    /** 摘要 */
    ZY?: string;
    /** 图片 */
    TP?: string;
    /** 作者 */
    ZZ?: string;
    /** 日期 */
    RQ?: string;
    /** 来源 */
    LY?: string;
    /** 是否头条，0:不是，1:是 */
    SFTT?: number;
    /** 是否推荐，0:不是，1:是 */
    SFTJ?: number;
    /** 内容 */
    NR?: string;
  };

  type ZXFA = {
    id: string;
    /** 方案名称 */
    FAMC: string;
    /** 开始日期 */
    KSRQ: string | any;
    /** 结束日期 */
    JSRQ: string | any;
    /** 起始时间 */
    QSSJ: string;
    /** 说明 */
    SM?: string;
    /** 是否启用 */
    SFQY: number;
    ZXSJs?: {
      id?: string;
      MC?: string;
      SD?: string;
      SX?: string;
      KSSJ?: string;
      JSSJ?: string;
      SYXQ?: string;
      SC?: number;
      BH?: number;
    }[];
  };

  type CreateZXFA = {
    /** 方案名称 */
    FAMC: string;
    /** 开始日期 */
    KSRQ: string | any;
    /** 结束日期 */
    JSRQ: string | any;
    /** 起始时间 */
    QSSJ: string;
    /** 说明 */
    SM?: string;
    XQSJId?: string;
  };

  type UpdateZXFA = {
    /** 方案名称 */
    FAMC?: string;
    /** 开始日期 */
    KSRQ?: string | any;
    /** 结束日期 */
    JSRQ?: string | any;
    /** 起始时间 */
    QSSJ?: string;
    /** 说明 */
    SM?: string;
    /** 是否启用 */
    SFQY?: number;
  };

  type ZXSJ = {
    id: string;
    /** 名称 */
    MC: string;
    /** 上课时段 */
    SD?: string;
    /** 上课属性 */
    SX?: string;
    /** 开始时间 */
    KSSJ: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 适用星期 */
    SYXQ?: string;
    /** 时长 */
    SC: number;
  };

  type CreateZXSJ = {
    /** 名称 */
    MC: string;
    /** 上课时段 */
    SD?: string;
    /** 上课属性 */
    SX?: string;
    /** 开始时间 */
    KSSJ: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 适用星期 */
    SYXQ?: string;
    /** 时长 */
    SC: number;
    ZXFAId: string;
  };

  type UpdateZXSJ = {
    /** 名称 */
    MC?: string;
    /** 上课时段 */
    SD?: string;
    /** 上课属性 */
    SX?: string;
    /** 开始时间 */
    KSSJ?: string;
    /** 结束时间 */
    JSSJ?: string;
    /** 适用星期 */
    SYXQ?: string;
    /** 时长 */
    SC?: number;
    ZXFAId?: string;
  };
}
