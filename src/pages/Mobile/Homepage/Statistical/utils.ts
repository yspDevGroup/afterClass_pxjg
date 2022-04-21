export const textColor1 = ['#FF715C', '#60DD95', '#4FC4E7', '#FFA729'];
export const textColor2 = ['#FFA729', '#60DD95', '#FF715C'];

export const teacherConfig: any = {
  appendPadding: 20,
  autoFit: true,
  height: 500,
  meta: {
    yuan: {
      time: { type: 'cat' }
    }
  },
  legend: {
    position: 'bottom'
  },
  xField: 'time',
  yField: 'count',
  seriesField: 'date',
  tooltip: { showMarkers: false },
  point: { shape: 'breath-point' }
};

export const studentConfig: any = {
  appendPadding: 20,
  autoFit: true,
  height: 500,
  meta: {
    yuan: {
      time: { type: 'cat' }
    }
  },
  legend: {
    position: 'bottom'
  },
  xField: 'time',
  yField: 'count',
  seriesField: 'date',
  tooltip: { showMarkers: false },
  point: { shape: 'breath-point' }
};

export const pieConfig: any = {
  appendPadding: 20,
  autoFit: false,
  height: 264,
  legend: {
    flipPage: false,
    position: 'bottom',
    itemWidth: 80
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
    strokeOpacity: 0
  },
  label: false,
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: false
  }
};
export const proportionConfig: any = {
  appendPadding: 20,
  legend: {
    flipPage: false,
    position: 'bottom',
    itemWidth: 100
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
    strokeOpacity: 0
  },
  label: false,
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  statistic: {
    title: false,
    content: false
  }
};
export const barConfig: any = {
  // scrollbar: { type: 'vertical' },
  appendPadding: 10,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  seriesField: 'type',
  barWidthRatio: 0.8,
  yAxis: {
    label: {
      style: {
        opacity: 0.6,
        fontSize: 12
      },
      formatter: function (params: string) {
        let newParamsName = ''; // 最终拼接成的字符串
        let paramsNameNumber = params.length; // 实际标签的个数
        let provideNumber = 5; // 每行能显示的字的个数
        let rowNumber = 3; // 换行的话，需要显示几行，向上取整
        /**
         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
         */
        // 条件等同于rowNumber>1
        if (paramsNameNumber > provideNumber) {
          /** 循环每一行,p表示行 */
          for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''; // 表示每一次截取的字符串
            let start = p * provideNumber; // 开始截取的位置
            let end = start + provideNumber; // 结束截取的位置
            // 此处特殊处理最后一行的索引值
            if (p === rowNumber - 1) {
              // 最后一次不换行
              tempStr = params.substring(start, paramsNameNumber);
            } else {
              // 每一次拼接字符串并换行
              tempStr = params.substring(start, end) + '\n';
            }
            newParamsName += tempStr; // 最终拼成的字符串
          }
        } else {
          // 将旧标签的值赋给新标签
          newParamsName = params;
        }
        // 将最终的字符串返回
        return newParamsName;
      }
    }
  },
  marginRatio: 0,
  legend: {
    position: 'bottom'
  },
  items: {
    min: 1
  },
  label: {
    position: 'middle',
    layout: [{ type: 'interval-adjust-position' }, { type: 'interval-hide-overlap' }, { type: 'adjust-color' }]
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
  barWidthRatio: 0.8,
  marginRatio: 0,
  legend: {
    position: 'bottom'
  },
  items: {
    min: 1
  },
  yAxis: {
    label: {
      style: {
        opacity: 0.6,
        fontSize: 12
      },
      formatter: function (params: string) {
        let newParamsName = ''; // 最终拼接成的字符串
        let paramsNameNumber = params.length; // 实际标签的个数
        let provideNumber = 5; // 每行能显示的字的个数
        let rowNumber = 3; // 换行的话，需要显示几行，向上取整
        /**
         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
         */
        // 条件等同于rowNumber>1
        if (paramsNameNumber > provideNumber) {
          /** 循环每一行,p表示行 */
          for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''; // 表示每一次截取的字符串
            let start = p * provideNumber; // 开始截取的位置
            let end = start + provideNumber; // 结束截取的位置
            // 此处特殊处理最后一行的索引值
            if (p === rowNumber - 1) {
              // 最后一次不换行
              tempStr = params.substring(start, paramsNameNumber);
            } else {
              // 每一次拼接字符串并换行
              tempStr = params.substring(start, end) + '\n';
            }
            newParamsName += tempStr; // 最终拼成的字符串
          }
        } else {
          // 将旧标签的值赋给新标签
          newParamsName = params;
        }
        // 将最终的字符串返回
        return newParamsName;
      }
    }
  },
  label: {
    position: 'middle',
    layout: [{ type: 'interval-adjust-position' }, { type: 'interval-hide-overlap' }, { type: 'adjust-color' }]
  },
  maxBarWidth: 30
};
export const tollBarConfig: any = {
  scrollbar: { type: 'vertical' },
  appendPadding: 20,
  isGroup: true,
  xField: 'value',
  yField: 'label',
  barWidthRatio: 0.8,
  seriesField: 'type',
  marginRatio: 0,
  legend: {
    position: 'bottom'
  },
  items: {
    min: 1
  },
  yAxis: {
    label: {
      style: {
        opacity: 0.6,
        fontSize: 12
      },
      formatter: function (params: string) {
        let newParamsName = ''; // 最终拼接成的字符串
        let paramsNameNumber = params.length; // 实际标签的个数
        let provideNumber = 5; // 每行能显示的字的个数
        let rowNumber = 3; // 换行的话，需要显示几行，向上取整
        /**
         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
         */
        // 条件等同于rowNumber>1
        if (paramsNameNumber > provideNumber) {
          /** 循环每一行,p表示行 */
          for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''; // 表示每一次截取的字符串
            let start = p * provideNumber; // 开始截取的位置
            let end = start + provideNumber; // 结束截取的位置
            // 此处特殊处理最后一行的索引值
            if (p === rowNumber - 1) {
              // 最后一次不换行
              tempStr = params.substring(start, paramsNameNumber);
            } else {
              // 每一次拼接字符串并换行
              tempStr = params.substring(start, end) + '\n';
            }
            newParamsName += tempStr; // 最终拼成的字符串
          }
        } else {
          // 将旧标签的值赋给新标签
          newParamsName = params;
        }
        // 将最终的字符串返回
        return newParamsName;
      }
    }
  },
  label: {
    position: 'middle',
    layout: [{ type: 'interval-adjust-position' }, { type: 'interval-hide-overlap' }, { type: 'adjust-color' }]
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
    position: 'bottom'
  },
  label: {
    position: 'middle',
    layout: [{ type: 'interval-adjust-position' }, { type: 'interval-hide-overlap' }, { type: 'adjust-color' }]
  }
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
  if (month > 1 && month < 8) {
    return {
      XN: `${year - 1}-${year}`,
      XQ: '第二学期'
    };
  }
  if (month > 7) {
    return {
      XN: `${year}-${year + 1}`,
      XQ: '第一学期'
    };
  }
  return {
    XN: `${year - 1}-${year}`,
    XQ: '第一学期'
  };
};
