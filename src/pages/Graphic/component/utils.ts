/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 19:59:45
 * @LastEditTime: 2021-10-21 12:00:54
 * @LastEditors: Sissle Lynn
 */
import should from '@/assets/should.png';
import real from '@/assets/real.png';
import leave from '@/assets/leave.png';
export const textColor1 = ['#FF715C', '#60DD95', '#4FC4E7', '#FFA729'];
export const textColor2 = ['#FFA729', '#60DD95', '#FF715C'];

export const columnConfig: any = {
  appendPadding: 10,
  data: [],
  xField: 'school',
  yField: 'value',
  seriesField: 'type',
  isStack: true,
  color: ['#ff6e76', '#fddd60'],
  legend: {
    itemName: {
      style: {
        fill: '#fff'
      }
    }
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
      style: {
        fill: 'white',
        fontSize: 14,
      }
    }
  },
  yAxis: { minInterval: 1 },
  grid: {
    containLabel: true,
    bottom: 40
  },
  columnStyle: {},
  maxColumnWidth: 30,
  meta: {
    type: { alias: '课程名称' },
    value: { alias: '金额' },
  },
  label: {
    position: 'middle',
    style: { fill: '#fff' },
  },
};
export const pieConfig: any = {
  appendPadding: 20,
  legend: false,
  data: [],
  angleField: 'value',
  colorField: 'type',
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
  radius: 0.8,
  innerRadius: 0.6,
  pieStyle: {
    stroke: '#fff',
    lineWidth: 0,
    strokeOpacity: 0,
  },
  label: {
    type: 'spider',
    labelHeight: 28,
    content: '{name}',
    style: {
      fill: 'white',
      fontSize: 15,
    }
  },
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: false,
  },
};
export const barConfig: any = {
  yField: 'school',
  xField: 'value',
  appendPadding: 10,
  yAxis: {
    label: {
      autoRotate: false,
      style: {
        fill: 'white',
        fontSize: 14,
      }
    }
  },
  maxBarWidth: 30,
  meta: {
    school: { alias: '课程名称' },
    value: { alias: '报名人数' },
  },
};
export const defaultData: any = {
  serviceNum: [],
  courseCollect: [],
  checkOut: [],
  numCollect: [],
  schoolNum: [],
  courseNum: [],
  enrollNum: [],
  checkOutTeacher: []
};
export const getTerm = () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  if (month < 8) {
    return {
      XN: `${year - 1}-${year}`,
      XQ: '第二学期'
    }
  } else {
    return {
      XN: `${year}-${year + 1}`,
      XQ: '第一学期'
    }
  }
}
export const mock: any = {
  serviceNum: [{
    title: '教师总数',
    num: '45236'
  },
  {
    title: '学生总数',
    num: '45736'
  },
  {
    title: '收款总额',
    num: '70789'
  },
  {
    title: '退款总额',
    num: '4455'
  }],
  courseCollect: [{
    type: '艺术类',
    value: 34
  }, {
    type: '人文社科类',
    value: 54
  }, {
    type: '体育类',
    value: 23
  }, {
    type: '自然科学类',
    value: 31
  }, {
    type: '社会实践类',
    value: 13
  }, {
    type: '托管服务',
    value: 37
  }, {
    type: '其他',
    value: 12
  }],
  checkOut: [{
    icon: should,
    title: '应到人数',
    num: 2100
  }, {
    icon: real,
    title: '实到人数',
    num: 1842
  }, {
    icon: leave,
    title: '请假人数',
    num: 258
  }],
  numCollect: [{
    title: '课程总数',
    num: 21
  }, {
    title: '课程班总数',
    num: 28
  }, {
    title: '学校教师数',
    num: 123
  }, {
    title: '合作机构数',
    num: 234
  }, {
    title: '合作课程数',
    num: 45
  }, {
    title: '机构教师数',
    num: 23
  }],
  schoolNum: [
    '西安市高新区第七高级中学',
    '西安高新区第五高级中学',
    '西安高新区第四高级中学',
    '西安高新一中分校(高新区第三学校)',
    '西安市鄠邑区秦风初级中学',
    '西北大学附属中学',
    '西安高新区第一高级中学',
    '西安市高新区第二高级中学',
    '西安市高新区第三高级中学',
    '西安市高新区第六高级中学'
  ],
  courseNum: [
    {
      type: '收款情况',
      school: '西安市高新区第七高级中学',
      value: 35,
    },
    {
      type: '收款情况',
      school: '西安高新区第五高级中学',
      value: 39,
    },
    {
      type: '收款情况',
      school: '西安高新区第四高级中学',
      value: 47,
    },
    {
      type: '收款情况',
      school: '西安高新一中分校(高新区第三学校)',
      value: 42,
    },
    {
      type: '收款情况',
      school: '西安市鄠邑区秦风初级中学',
      value: 34,
    },
    {
      type: '收款情况',
      school: '西北大学附属中学',
      value: 28,
    },
    {
      type: '退款情况',
      school: '西安市高新区第七高级中学',
      value: 23,
    },
    {
      type: '退款情况',
      school: '西安高新区第五高级中学',
      value: 26,
    },
    {
      type: '退款情况',
      school: '西安高新区第四高级中学',
      value: 38,
    },
    {
      type: '退款情况',
      school: '西安高新一中分校(高新区第三学校)',
      value: 17,
    },
    {
      type: '退款情况',
      school: '西安市鄠邑区秦风初级中学',
      value: 29,
    },
    {
      type: '退款情况',
      school: '西北大学附属中学',
      value: 28,
    },
  ],
  enrollNum: [
    {
      school: '西安市高新区第七高级中学',
      value: 35,
    },
    {
      school: '西安高新区第五高级中学',
      value: 39,
    },
    {
      school: '西安高新区第四高级中学',
      value: 47,
    },
    {
      school: '西安高新一中分校(高新区第三学校)',
      value: 42,
    },
    {
      school: '西安市高新区第三高级中学',
      value: 28,
    },
    {
      school: '西安市鄠邑区秦风初级中学',
      value: 34,
    },
    {
      school: '西北大学附属中学',
      value: 28,
    },
    {
      school: '西安市高新区第七高级中学',
      value: 23,
    },
    {
      school: '西安市高新区第六高级中学',
      value: 34,
    },
    {
      school: '西安市高新区第八高级中学',
      value: 21,
    },
    {
      school: '西安市高新区第九高级中学',
      value: 23,
    },
  ],
  checkOutTeacher: [{
    icon: should,
    title: '应到人数',
    num: 2100
  }, {
    icon: real,
    title: '实到人数',
    num: 1842
  }, {
    icon: leave,
    title: '请假人数',
    num: 258
  }]
};
