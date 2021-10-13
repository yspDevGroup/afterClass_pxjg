import moment from "moment";

// const s='2021/6/23'
// alert("今天星期"+"天一二三四五六".charAt(new Date(s).getDay()))


// 遍历日期的方法
export const DateRange = (startDate: string, endDate: string) => {
  // 存放groupDate;
  const groupDate: any[] = [];
  // 截取的开始时间
  const startTime = new Date(startDate);
  // 截取的结束时间
  const endTime = new Date(endDate);
  // 利用setTime获取两个日期之间差值,差值毫秒换算成天1000*60*60*24
  const distanceDayLength = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);

  for (let i = 0; i <= distanceDayLength; i += 1) {
    const curDate = startTime.getTime() + (1000 * 60 * 60 * 24) * i;
    groupDate.push(moment(curDate).format("yyyy-MM-DD"));
  }
  return groupDate;
}

// 获取某一天是周几
export const Week = (time: any) => {
  return "0123456".charAt(new Date(time).getDay())
}
//将时分转为时间戳
const time_to_sec = (time: any) => {
  if (time !== null) {
    const hour = time.split(":")[0];
    const min = time.split(":")[1];
    return Number(hour * 3600) + Number(min * 60);
  }
  return 0;
}
// 根据type 类型，返回time2与time1 的大小，返回true 否则 返回false
export const compareTime = (time1: any, time2: any, type: string) => {
  if (time_to_sec(time2) - time_to_sec(time1) > 0) {
    return type === 'large' ? time2 : time1;
  }
  return type === 'large' ? time1 : time2;
}

export const compareNow = (day: string, time?: string) => {
  const now: any = new Date();
  const date: any = time ? new Date(`${day} ${time}`) : new Date(day);
  if (time && (now - date > 0) || ((now - date) / 1000 / 60 / 60 > 24)) {
    return false;
  }
  return true;
}
