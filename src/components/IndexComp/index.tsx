/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 08:49:11
 * @LastEditTime: 2021-09-09 10:03:30
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useModel } from 'umi';
import { RightOutlined } from '@ant-design/icons';
import Topbar from './Topbar';
import List from './List';
import ColumnChart from './ColumnChart';
import { getKHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';
import { homePage, KHJYJG } from '@/services/after-class-pxjg/khjyjg';
import noAnnoce from '@/assets/noAnnoce.png';
import noCourse from '@/assets/noCourse.png';

import styles from './index.less';
import { getKHKCSQ } from '@/services/after-class-pxjg/khkcsq';
import { getJYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';


const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [homeData, setHomeData] = useState<any>();
  const [annoceData, setAnnoceData] = useState<any>();
  const [applyData, setApplyData] = useState<any>();
  const [xxbmData, setXxbmData] = useState<any>([]);
  const [kcbmData, setKcbmData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await homePage({
        KHJYJGId: currentUser?.jgId
      });
      if (res.status === 'ok') {
        const { xxbm, kcbm, ...rest } = res.data;
        // 配置头部统计栏目数据
        setHomeData({ ...rest });
        // 配置底部课程开设班级数量数据
        if (kcbm?.length) {
          const newKcbm = [].map.call(kcbm, (item: any) => {
            return {
              type: item.KCMC,
              number: item.count
            }
          });
          setKcbmData(newKcbm);
        }
        // 配置底部各校合作课程数量数据
        if (xxbm?.length) {
          const newXxbm = [].map.call(xxbm, (item: any) => {
            return {
              type: item.XXMC,
              number: item.count
            }
          });
          setXxbmData(newXxbm);
        }
      };
      // 配置通知公告数据
      const result = await getKHJYTZGG({
        BT: '',
        ZT: ['已发布'],
        LX: 0,
        page: 1,
        pageSize: 3
      });
      if (result.status === 'ok') {
        setAnnoceData(result.data?.rows);
      }
      // 配置政策公告数据
      const resgetXXTZGG = await getJYJGTZGG({
        BT: '',
        LX: 1,
        ZT: ['已发布'],
        XZQHM: currentUser?.XZQHM,
        page: 1,
        pageSize: 3
      });
      if (resgetXXTZGG.status === 'ok') {
        setApplyData(resgetXXTZGG.data?.rows);
      }
      // 配置待确认课程申请数据
      // const response = await getKHKCSQ({
      //   JGId: currentUser?.jgId,
      //   ZT: [0],
      //   page: 1,
      //   pageSize: 3
      // });
      // if (response.status === 'ok') {
      //   setApplyData(response.data?.rows);
      // }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Topbar data={homeData} />
      <Row className={`${styles.listWrapper} ${styles.rowWrapper}`}>
        <Col span={12}>
          <Card title="内部通知" bordered={false} extra={<a href="/announcements/notice">更多<RightOutlined style={{ fontSize: '12px' }} /></a>}>
            <List type='notice' data={annoceData} noDataImg={noAnnoce} noDataText="暂无通知" />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="政策公告" bordered={false} extra={<a href="/announcements/policy">更多<RightOutlined style={{ fontSize: '12px' }} /></a>}>
            <List type='policy' data={applyData} noDataImg={noCourse} noDataText="暂无信息" />
          </Card>
        </Col>
      </Row>
      <Row className={`${styles.chartWrapper} ${styles.rowWrapper}`}>
        <Col span={12}>
          <Card title="各课程开设班级情况" bordered={false}>
            <ColumnChart data={kcbmData} color='#18DCAB' />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="各校合作课程情况" bordered={false}>
            <ColumnChart data={xxbmData} color='#6186EE' />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Index;
