import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Col, ConfigProvider, DatePicker, Empty, Row, Space } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import { Bar } from '@ant-design/charts';
import moment from 'moment';

import { getTerm, tollBarConfig } from '../utils';
import { homePage, getRefund } from '@/services/after-class-pxjg/khjyjg';

import noData from '@/assets/noData.png';

import styles from '../index.less';
import ModuleTitle from '../components/ModuleTitle';
import NumberCollect from '../components/NumberCollect';


const Toll = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [startTime, setStartTime] = useState<any>(moment().subtract(30, "days").format("YYYY-MM-DD"));
  const [endTime, setEndTime] = useState<any>(moment().subtract(-1, "days").format("YYYY-MM-DD"));
  const [currentData, setCurrentData] = useState<any>([
    {
      title: '收款金额（元）',
      num: '--'
    },
    {
      title: '退款金额（元）',
      num: '--'
    }]);
  const [intervalData, setIntervalData] = useState<any>([
    {
      num: '--',
      title: '收款金额（元）'
    }, {
      num: '--',
      title: '退款金额（元）'
    }
  ]);

const handleStartTime = (date: any) => {
  setStartTime(moment(date).format('YYYY-MM-DD'));
}
const handleEndTime = async (date: any) => {
  setEndTime(moment(date).format('YYYY-MM-DD'));
}

useEffect(()=>{
    const res = getTerm();
    getData(res);
},[endTime])



  const getData = async (res: any) => {

    const defaultData: any = {
      serviceNum: [],
      numCollect: [],
      trendNum: [],
    };

    const tollRes = await homePage({
      KHJYJGId: currentUser?.jgId,
      XN: res.XN,
      XQ: res.XQ
    });

    if (tollRes.status === 'ok') {
      defaultData.serviceNum = [
        {
          title: '收款金额（元）',
          num: tollRes.data?.bj_amount || 0
        },
        {
          title: '退款金额（元）',
          num: tollRes.data?.tk_amount || 0
        }];
        tollRes.data.xxbm?.length && tollRes.data.xxbm.forEach((item: any) => {
          defaultData.trendNum.push({
            label: item.XXMC,
            type: '收款金额',
            value: parseFloat(item.dd_amount) || 0,
          })
          defaultData.trendNum.push({
            label: item.XXMC,
            type: '退款金额',
            value: parseFloat(item.tk_amount) || 0,
          })
        });
        tollBarConfig.data = defaultData.trendNum;
        setCurrentData(defaultData.serviceNum);
    }

    const totalRes = await getRefund({
      KHJYJGId: currentUser?.jgId,
      startDate: startTime,
      endDate: endTime
    });
    if(totalRes.status === 'ok'){
      setIntervalData([
        {

          num: ((totalRes.data.sk_amount || 0) + (totalRes.data?.zzfw_amount || 0)).toFixed(2),
          title: '收款金额（元）'
        }, {
          num: totalRes.data.tk_amount,
          title: '退款金额（元）'
        }
      ]);
    }

  };

  useEffect(() => {
    const res = getTerm();
    getData(res);
  }, []);

  return (
    <div className={styles.toll}>
      <div className={styles.container} style={{ height: '136px' }}>
        <ModuleTitle data='本学期收费总计' />
        <NumberCollect data={currentData} col={currentData?.length} />
      </div>
      <div className={styles.container} style={{ height: '374px' }}>
        <ModuleTitle data='各校收退款情况' />
        <div className={styles.chartsContainer}>
          {
            (tollBarConfig.data && tollBarConfig.data?.length!==0) ? <Bar {...tollBarConfig} /> : <Empty
            image={noData}
            imageStyle={{
              minHeight: 200
            }}
            style={{minHeight: 355}}
            description={'暂无收退款信息'} />
          }
        </div>
      </div>
      <div className={styles.container} style={{ height: '192px' }}>
        <ModuleTitle data='收费统计查询' showRight={false} />
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
        <Row>
          <Col span={24}>
          <NumberCollect data={intervalData} col={intervalData?.length} />
          </Col>
        </Row>
      </div>
    </div>)
}

export default Toll;

