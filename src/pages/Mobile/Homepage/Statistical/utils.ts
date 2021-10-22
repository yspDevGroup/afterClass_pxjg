export const textColor1 = ['#FF715C', '#60DD95', '#4FC4E7', '#FFA729'];
export const textColor2 = ['#FFA729', '#60DD95', '#FF715C'];

export const teacherConfig: any = {
  appendPadding: 20,
  autoFit: true,
  height: 500,
  meta: {
    yuan: {
      time: { type: 'cat' },
    },
  },
  legend: {
    position: 'bottom',
  },
  xField: 'time',
  yField: 'count',
  seriesField: 'date',
  tooltip: { showMarkers: false },
  point: { shape: 'breath-point' },
};

export const studentConfig: any = {
  appendPadding: 20,
  autoFit: true,
  height: 500,
  meta: {
    yuan: {
      time: { type: 'cat' },
    },
  },
  legend: {
    position: 'bottom',
  },
  xField: 'time',
  yField: 'count',
  seriesField: 'date',
  tooltip: { showMarkers: false },
  point: { shape: 'breath-point' },
};

export const pieConfig: any = {
  appendPadding: 20,
  legend: {
    flipPage: false,
    position: 'bottom',
    itemWidth: 100,
  },
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
  label: false,
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: false,
  },
};
export const proportionConfig: any = {
  appendPadding: 20,
  legend: {
    flipPage: false,
    position: 'bottom',
    itemWidth: 100,
  },
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
  label: false,
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: false,
  },
};
export const barConfig: any = {
  scrollbar: { type: 'vertical' },
  appendPadding: 20,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  seriesField: 'type',
  marginRatio: 0,
  legend: {
    position: 'bottom',
  },
  items:{
    min: 0.000001
  },
  label: {
    position: 'middle',
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
  },
  maxBarWidth: 30
};
export const courseBarConfig: any = {
  scrollbar: { type: 'vertical' },
  appendPadding: 20,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  seriesField: 'type',
  marginRatio: 0,
  legend: {
    position: 'bottom',
  },
  items:{
    min: 0.000001
  },
  label: {
    position: 'middle',
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
  },
  maxBarWidth: 30
};
export const tollBarConfig: any = {
  scrollbar: { type: 'vertical' },
  appendPadding: 20,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  seriesField: 'type',
  marginRatio: 0,
  legend: {
    position: 'bottom',
  },
  items:{
    min: 0.000001
  },
  label: {
    position: 'middle',
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
  },
  maxBarWidth: 30
};
export const conditionConfig: any = {
  appendPadding: 20,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  seriesField: 'type',
  marginRatio: 0,
  legend: {
    position: 'bottom',
  },
  label: {
    position: 'middle',
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
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
  agentNum: []
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
