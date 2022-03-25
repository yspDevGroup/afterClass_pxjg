import ExcelTable, { DataSourceType } from '@/components/ExcelTable';
import { getAgencySchedule } from '@/services/after-class-pxjg/khpksj';
import { getAllXNXQ } from '@/services/after-class-pxjg/xnxq';
import { getAllXXSJPZ } from '@/services/after-class-pxjg/xxsjpz';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { getTerm } from '../Graphic/component/utils';
import FormSelect from './compoents/FormSelect';
import styles from './index.less';
import noJF from '@/assets/noJF.png';
import { Divider } from 'antd';

const Timetable = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 学校时间配置
  const [xXSJPZData, setXXSJPZData] = useState<any>([]);
  // ExcelTable表格所需要的数据
  const [tableDataSource, setTableDataSource] = useState<DataSourceType>([]);
  const radioValue = false;
  const [bjmcValue, setBjmcValue] = useState<any>([]);
  const [XNXQ, setXNXQ] = useState<string>('');
  const [XNXQId, setXNXQId] = useState<string | undefined>('');
  const [XXJBSJId, setXXJBSJId] = useState<string | undefined>(undefined);
  // 该学校学年学期时段
  const [TimeData, setTimeData] = useState<any>();
  // 学年学期第一周的开始时间
  const [stateTime, setStateTime] = useState<Date>();
  // 学期内的周数
  const [Weeks, setWeeks] = useState<any>([]);
  // 排课数据
  const [Datas, setDatas] = useState<any>([]);
  // 教学周筛选
  const [weekNum, setWeekNum] = useState<any>();

  const columns: {
    title: string;
    dataIndex: string;
    key: string;
    align: 'center' | 'left' | 'right';
    width: number;
  }[] = [
    {
      title: '教学周',
      dataIndex: 'room',
      key: 'room',
      align: 'center',
      width: 100
    },
    {
      title: '节次',
      dataIndex: 'course',
      key: 'course',
      align: 'center',
      width: 136
    },
    {
      title: '周一',
      dataIndex: 'monday',
      key: 'monday',
      align: 'center',
      width: 136
    },
    {
      title: '周二',
      dataIndex: 'tuesday',
      key: 'tuesday',
      align: 'center',
      width: 136
    },
    {
      title: '周三',
      dataIndex: 'wednesday',
      key: 'wednesday',
      align: 'center',
      width: 136
    },
    {
      title: '周四',
      dataIndex: 'thursday',
      key: 'thursday',
      align: 'center',
      width: 136
    },
    {
      title: '周五',
      dataIndex: 'friday',
      key: 'friday',
      align: 'center',
      width: 136
    },
    {
      title: '周六',
      dataIndex: 'saturday',
      key: 'saturday',
      align: 'center',
      width: 136
    },
    {
      title: '周日',
      dataIndex: 'sunday',
      key: 'sunday',
      align: 'center',
      width: 136
    }
  ];
  // 获取系统时间配置信息
  const getSysTime = async () => {
    // 查询所有课程的时间段
    const resultTime = await getAllXXSJPZ({
      XNXQId,
      XXJBSJId,
      type: ['0']
    });
    if (resultTime.status === 'ok') {
      const timeSlot = resultTime.data;
      if (timeSlot?.length) {
        setXXSJPZData(timeSlot);
      }
    }
  };
  // ----------------------------计算时间-------------------------------
  const getTime = () => {
    // 获取开始日期所在周一的日期
    const getFirstDay = (date: any) => {
      const day = date.getDay() || 7;
      return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1 - day);
    };
    const end = new Date(moment(TimeData?.JSRQ).format('YYYY/MM/DD  23:59:59'));
    setStateTime(getFirstDay(new Date(TimeData?.KSRQ)));
    const times = end.getTime() - getFirstDay(new Date(TimeData?.KSRQ)).getTime();
    // 获取开始时间到结束时间中间有多少个自然周
    const zhoushu = Math.ceil(times / (7 * 24 * 60 * 60 * 1000));
    const arr = new Array();
    let i = 0;
    while (i < zhoushu) {
      arr.push(`第${i + 1}周`);
      // eslint-disable-next-line no-plusplus
      i++;
    }
    setWeeks(arr);
  };

  /**
   * 把接口返回的数据处理成ExcelTable组件所需要的
   * @param data  接口返回的数据
   * @param timeData  课程时间段数据
   * @param bjId 班级id
   * @returns
   */
  // eslint-disable-next-line max-params
  const processingDatas = (data: any, timeData: any, week: any, bjId: string | undefined = undefined) => {
    const tableData: any[] = [];
    const sameClassData: any[] = [];

    let Weekss: any = [];
    if (week && week !== undefined) {
      Weekss = week;
    } else {
      Weekss = Weeks;
    }
    Weekss.forEach((item: any, index: number) => {
      timeData.forEach((timeItem: any, timeKey: number) => {
        const table: any = {
          room: {
            cla: item,
            keys: index,
            teacher: '',
            jsId: '',
            FJLXId: '', // 场地类型ID
            rowspan: timeKey === 0 ? timeData?.length : 0,
            SD: `${moment(stateTime)
              .add(index * 7, 'days')
              .format('MM.DD')}-${moment(stateTime)
              .add(6 + index * 7, 'days')
              .format('MM.DD')} `
          },
          course: {
            cla: timeItem?.TITLE,
            teacher: `${timeItem?.KSSJ?.slice(0, 5)} — ${timeItem?.JSSJ?.slice(0, 5)}`,
            hjId: timeItem?.id
          },
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: []
        };
        if (data?.length) {
          data.forEach((KHItem: any) => {
            if (KHItem?.PKBZ === item) {
              if (KHItem?.XXSJPZId === timeItem?.id) {
                // eslint-disable-next-line max-nested-callbacks
                const currentTeacher = KHItem?.KHBJSJ?.KHBJJs?.find((items: any) => items?.JSLX === '主教师');
                const newObj: any = {
                  weekId: KHItem?.id, // 周
                  cla: KHItem?.KHBJSJ?.BJMC, // 班级名称
                  teacher: currentTeacher?.JZGJBSJ?.XM, // 主教师
                  teacherWechatId: currentTeacher?.JZGJBSJ?.WechatUserId, // 主教师微信用户ID
                  teacherID: currentTeacher?.JZGJBSJId, // 主教师ID
                  bjId: KHItem?.KHBJSJ?.id, // 班级ID
                  kcId: KHItem?.KHBJSJ?.KHKCSJ?.id, // 课程ID
                  njId: KHItem?.KHBJSJ?.KHKCSJ?.NJSJs?.[0]?.id, // 年级ID
                  bjzt: KHItem?.KHBJSJ?.BJZT, // 班级状态
                  xqId: KHItem?.KHBJSJ?.XQSJ?.id, // 校区ID
                  color: KHItem?.KHBJSJ?.KHKCSJ?.KBYS || 'rgba(62, 136, 248, 1)',
                  dis: bjId !== KHItem?.KHBJSJ?.id,
                  fjmc: KHItem?.FJSJ?.FJMC || KHItem?.FJSJ?.label,
                  jcmc: KHItem?.XXSJPZ?.TITLE,
                  XNXQId: KHItem?.XNXQId
                };
                if (KHItem?.WEEKDAY === '1') {
                  table?.monday.push(newObj);
                } else if (KHItem?.WEEKDAY === '2') {
                  table?.tuesday.push(newObj);
                } else if (KHItem?.WEEKDAY === '3') {
                  table?.wednesday.push(newObj);
                } else if (KHItem?.WEEKDAY === '4') {
                  table?.thursday.push(newObj);
                } else if (KHItem?.WEEKDAY === '5') {
                  table?.friday.push(newObj);
                } else if (KHItem?.WEEKDAY === '6') {
                  table?.saturday.push(newObj);
                } else if (KHItem?.WEEKDAY === '0') {
                  table?.sunday.push(newObj);
                }

                if (bjId === KHItem?.KHBJSJ?.id) {
                  sameClassData.push({
                    WEEKDAY: KHItem?.WEEKDAY, // 周
                    XXSJPZId: KHItem?.XXSJPZId, // 时间ID
                    KHBJSJId: KHItem?.KHBJSJ?.id, // 班级ID
                    FJSJId: item.id, // 教室ID
                    XNXQId: KHItem?.XNXQId // 学年学期ID
                  });
                }
              }
            }
          });
        }

        tableData.push(table);
      });
    });

    return tableData;
  };

  useEffect(() => {
    const term = getTerm();
    (async () => {
      const res = await getAgencySchedule({
        ...term,
        KHJYJGId: currentUser?.jgId || ''
      });
    })();
  }, []);

  useEffect(() => {
    if (XXJBSJId) {
      (async () => {
        const res = await getAllXNXQ({ XXJBSJId });
        if (res?.status === 'ok') {
          const XNXQData = res?.data?.find(
            (item: any) => item.XN === XNXQ.substring(0, 9) && item?.XQ === XNXQ.substring(10, 14)
          );
          if (XNXQData) {
            setXNXQId(XNXQData.id);
            setTimeData(XNXQData);
          } else {
            setXNXQId(undefined);
          }
        }
      })();
    }
  }, [XXJBSJId, XNXQ]);
  useEffect(() => {
    if (TimeData) {
      getTime();
    }
  }, [TimeData, XXJBSJId]);
  useEffect(() => {
    if (XNXQId) {
      getSysTime();
    }
  }, [XNXQId, XXJBSJId]);

  // 筛选之后 table 排课数据信息 刷新table
  useEffect(() => {
    if (xXSJPZData) {
      const tableData = processingDatas(Datas, xXSJPZData, weekNum);
      setTableDataSource(tableData);
    }
  }, [Datas, weekNum, xXSJPZData]);
  // eslint-disable-next-line max-params
  const getDataSource = async (XNXQ: string, XXJBSJId: string, KCId: string, JSId: string) => {
    const term = getTerm();
    const params: any = {
      KHJYJGId: currentUser?.jgId || '',
      XN: XNXQ.substring(0, 9) || term?.XN,
      XQ: XNXQ.substring(10, 14) || term?.XQ
    };
    setXNXQ(XNXQ);
    setXXJBSJId(XXJBSJId);
    // setKCId(KCId);
    // setJSId(JSId);
    if (XXJBSJId) {
      params.XXJBSJId = XXJBSJId;
    }
    if (KCId) {
      params.KHKCSJId = KCId;
    }
    if (JSId) {
      params.JZGJBSJId = JSId;
    }
    const res = await getAgencySchedule(params);
    if (res?.status === 'ok') {
      setDatas(res.data);
    }
  };

  /**
   * 获取Excel表格中数据的方法
   * @param value 在type="edit" 的时候使用；选中将要排课的班级的数据
   * @param record 获取点击某个单元格的所有数据
   */
  const onExcelTableClick = (value: any, record: any) => {
    // setRecordValue({ ...record, XQ: campusId });
  };

  return (
    <div className={styles.Timetable}>
      <FormSelect getDataSource={getDataSource} Weeks={Weeks} setWeekNum={setWeekNum} weekNum={weekNum} />
      <Divider />
      {XXJBSJId ? (
        <ExcelTable
          className=""
          columns={columns}
          dataSource={tableDataSource}
          onExcelTableClick={onExcelTableClick}
          radioValue={radioValue}
          bjmcValue={bjmcValue}
          xXSJPZData={xXSJPZData}
          style={{
            height: weekNum === undefined ? 'calc(100vh - 360px)' : 'auto'
          }}
        />
      ) : (
        <div className={styles.noDate}>
          <img src={noJF} alt="" /> <p>请选择学校查看课表</p>{' '}
        </div>
      )}
    </div>
  );
};

export default Timetable;
