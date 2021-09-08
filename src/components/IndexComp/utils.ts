/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 19:59:45
 * @LastEditTime: 2021-09-08 17:33:47
 * @LastEditors: Sissle Lynn
 */
export const bgColor = [
  {
    begin: '#FFA178',
    end: '#FF6756',
  },
  {
    begin: '#36D1DC',
    end: '#85ABFF',
  },
  {
    begin: '#FFE466',
    end: '#FF9B1E',
  },
  {
    begin: '#6FEE7C',
    end: '#4DC6B7',
  },
  {
    begin: '#86A8E7',
    end: '#7F7FD5',
  },
  {
    begin: '#4BF3D5',
    end: '#1CC6C6',
  },
];
export const topNum = [
  {
    title: '服务学校数',
    type: 'xxNum'
  },
  {
    title: '备案课程数',
    type: 'kcNum',
  },
  {
    title: '服务班级数',
    type: 'bjNum'
  },
  {
    title: '机构教师数',
    type: 'jsNum'
  },
  {
    title: '参加学生数',
    type: 'xsNum'
  },
  {
    title: '待处理申请数',
    type: 'amount'
  }
];
export const chartConfig: any = {
  data: [],
  xField: 'type',
  yField: 'number',
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false
    }
  },
  yAxis: { minInterval: 1 },
  columnStyle: {},
  maxColumnWidth: 30,
  meta: {
    type: { alias: '课程名称' },
    number: { alias: '总数' }
  }
};
