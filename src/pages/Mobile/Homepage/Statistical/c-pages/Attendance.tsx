import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Col, ConfigProvider, DatePicker, Empty, Row, Space } from 'antd';
import { Line } from '@ant-design/charts';
import locale from 'antd/lib/locale/zh_CN';

import { getTerm, teacherConfig, studentConfig } from '../utils';
import { homePage, getAttendanceTrend } from '@/services/after-class-pxjg/khjyjg';

import noData from '@/assets/noData.png';

import styles from '../index.less';
import ModuleTitle from '../components/ModuleTitle';
import NumberCollect from '../components/NumberCollect';
import moment from 'moment';


const attendance = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [currentData, setCurrentData] = useState<any>({checkOut: [
    {
      num: '--',
      title: '今日应出勤学生'
    },{
      num: '--',
      title: '实际出勤学生'
    },{
      num: '--',
      title: '今日应出勤教师'
    },{
      num: '--',
      title: '实际出勤教师'
    }
  ]});
  const [startTime, setStartTime] = useState<any>(moment().subtract(30, "days").format("YYYY-MM-DD"));
  const [endTime, setEndTime] = useState<any>(moment().subtract(-1, "days").format("YYYY-MM-DD"));
  const [xskqConfig, setXskqConfig] = useState<any>({...studentConfig});
  const [jskqConfig, setJskqConfig] = useState<any>({...teacherConfig});

  const { RangePicker } = DatePicker;

  const handleStartTime = (date: any) => {
    setStartTime(moment(date).format('YYYY-MM-DD'));
  }
  const handleEndTime = (date: any) => {
    setEndTime(moment(date).format('YYYY-MM-DD'));
  }

    useEffect(()=>{
      getCQData();
    },[endTime])

  const getCQData = async () => {
    const attenRes = await getAttendanceTrend({
      KHJYJGId: currentUser?.jgId,
      startDate: startTime,
      endDate: endTime
    });
    console.log('attenRes: ', attenRes);
    if(attenRes.status === 'ok'){
        let newData: { date: string; time: any; count: any; }[] = [];

        attenRes.data.jscq.forEach((item: any)=>{
          newData.push(
            { date: "实际出勤人数", time: item.CQRQ, count: parseInt(item.normal)},
            { date: "请假人数", time: item.CQRQ, count: parseInt(item.abnormal)},
          );
        })
        setJskqConfig({...jskqConfig, data: [...newData]});
        newData = [];
        attenRes.data.xscq.forEach((item: any)=>{
          newData.push(
            { date: "实际出勤人数", time: item.CQRQ, count: parseInt(item.normal)},
            { date: "请假人数", time: item.CQRQ, count: parseInt(item.abnormal)},
          );
        })
        setXskqConfig({...xskqConfig, data: [...newData]});
    }

  }

  const getData = async (res: any) => {

    const defaultData: any = {
      checkOut: [],
    };

    const attendRes = await homePage({
      KHJYJGId: currentUser?.jgId,
      XN: res.XN,
      XQ: res.XQ
    });
    if (attendRes.status === 'ok') {
      const { data } = attendRes;

      defaultData.checkOut = [{
        title: '今日应出勤学生',
        num: data.ydxs_count
      }, {
        title: '实际出勤学生',
        num: data.sdxs_count
      }, {
        title: '今日应出勤教师',
        num: data.ydjs_count
      }, {
        title: '实际出勤教师',
        num: data.sdjs_count
      }];
    }

    setCurrentData(defaultData);
  };

  useEffect(() => {
    const res = getTerm();
    getData(res);
  }, []);

  return (
  <div className={styles.attendance}>
    <div className={styles.container} style={{height: '216px'}}>
      <ModuleTitle data='考勤统计'/>
      <NumberCollect data={currentData?.checkOut} col={currentData?.checkOut.length > 3 ? 2 : currentData?.checkOut.length}/>
    </div>
    <div className={styles.container} style={{height: '756px',paddingBottom: '50px'}}>
      <ModuleTitle data='考勤趋势'/>
      <Space direction="vertical" style={{marginTop: '20px'}} size={12}>

          <Row>
            <ConfigProvider locale={locale}>
              <Col span={11}>
                <DatePicker placeholder='请选择开始日期' defaultValue={moment(moment().subtract(30, "days"), 'YYYY-MM-DD')} onChange={handleStartTime} format="YYYY-MM-DD"/>
              </Col>
              <Col span={2}>-</Col>
              <Col span={11}>
                <DatePicker placeholder='请选择结束日期' defaultValue={moment(moment().subtract(-1, "days"), 'YYYY-MM-DD')} onChange={handleEndTime} format="YYYY-MM-DD"/>
              </Col>
            </ConfigProvider>
          </Row>
      </Space>
      <div style = {{height:'48%', marginTop: '20px'}}>
        学生考勤
        <div className={styles.chartsContainer}>
          {
             (xskqConfig.data && xskqConfig.data?.length!==0) ? <Line {...xskqConfig}></Line> : <Empty
            image={noData}
            imageStyle={{
              minHeight: 160
            }}
            style={{minHeight: 355}}
            description={'暂无学生考勤信息'} />
          }
        </div>
      </div>
      <div style = {{height:'48%'}}>
        教师考勤
        <div className={styles.chartsContainer}>
          {
            (jskqConfig.data && jskqConfig.data?.length!==0)? <Line {...jskqConfig}></Line> : <Empty
            image={noData}
            imageStyle={{
              minHeight: 160
            }}
            style={{minHeight: 300}}
            description={'暂无教师考勤信息'} />
          }
        </div>
      </div>
    </div>
  </div>)
}

export default attendance;
