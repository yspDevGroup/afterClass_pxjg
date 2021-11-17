/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 19:59:45
 * @LastEditTime: 2021-10-22 11:28:31
 * @LastEditors: Sissle Lynn
 */
export const bgColor = [
  {
    begin: '#FFA178',
    end: '#FF6756'
  },
  {
    begin: '#36D1DC',
    end: '#85ABFF'
  },
  {
    begin: '#FFE466',
    end: '#FF9B1E'
  },
  {
    begin: '#6FEE7C',
    end: '#4DC6B7'
  },
  {
    begin: '#86A8E7',
    end: '#7F7FD5'
  },
  {
    begin: '#4BF3D5',
    end: '#1CC6C6'
  }
];
export const topNum = [
  {
    title: '服务学校数',
    type: 'xx_count'
  },
  {
    title: '准入课程数',
    type: 'zrkc_count'
  },
  {
    title: '服务班级数',
    type: 'bj_count'
  },
  {
    title: '参与教师数',
    type: 'js_count'
  },
  {
    title: '参与学生数',
    type: 'xs_count'
  },
  {
    title: '待处理申请数',
    type: 'dcl_count',
    link: '/businessManagement/courseManagement'
  }
];
export const chartConfig: any = {
  appendPadding: 20,
  data: [],
  xField: 'type',
  yField: 'number',
  xAxis: {
    label: {
      autoHide: false,
      autoRotate: false
    }
  },
  yAxis: {
    minInterval: 1,
    splitNumber: 1
  },
  columnStyle: {},
  maxColumnWidth: 30,
  meta: {
    type: { alias: '课程名称' },
    number: { alias: '总数' }
  }
};
