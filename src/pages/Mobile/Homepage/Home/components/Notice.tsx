import { useEffect, useState } from 'react';
import noData from '@/assets/noCourse.png';
import styles from '../index.less';
import { Link, useModel } from 'umi';
import { Button, Col, Empty, Row, Tabs } from 'antd';
import ListComp from './ListComponent';
import { JYJGSJ } from '@/services/after-class-pxjg/jyjgsj';
import { getJYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';
import ArrowDownOutlined from '@ant-design/icons/lib/icons/ArrowDownOutlined';
import { getKHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';

const { TabPane } = Tabs;
const Notice = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { jgId } = currentUser!;
  const [dataTZGG, setTZGGData] = useState<any>();
  const [dataZCGG, setZCGGData] = useState<any>();
  const [tabSelect, setTabSelect] = useState<any>('policy');
  const [loadings, setLoadings] = useState<Array<any>>([]);
  const [allTZDataSource, setAllTZDataSource] = useState<any>();
  const [allZCDataSource, setAllZCDataSource] = useState<any>();

  const handalTabClick = (key: string) => {
    setTabSelect(key);
  }

  const enterLoading = (index: number) => {
    const newLoadings = [...loadings];
    newLoadings[index] = true;
    setLoadings(newLoadings);
    setTimeout(() => {
      const newLoadings = [...loadings];
      newLoadings[index] = false;
      setLoadings(newLoadings);
    }, 3000);
  };

  useEffect(() => {
    async function fetchData() {
      //通知公告
      const resgetXXTZGG = await getKHJYTZGG({
        KHJYJGId: currentUser?.jgId,
        BT: '',
        ZT: ['已发布'],
        LX: 0,
        page: 0,
        pageSize: 0
      });
      if (resgetXXTZGG.status === 'ok') {
        let newData = {
          type: 'azeList',
          cls: 'azeList',
          list: resgetXXTZGG.data?.rows?.slice(0, 3) || [],
          noDataText: '暂无待办',
          noDataImg: noData,
        };
        setZCGGData(newData);
        newData.list = resgetXXTZGG.data?.rows || [];
        setAllZCDataSource(newData)
      }

      //政策公告
      const resgetXXZCGG = await getJYJGTZGG({
        BT: '',
        LX: 1,
        ZT: ['已发布'],
        page: 0,
        pageSize: 0
      });
      if (resgetXXZCGG.status === 'ok') {
        let newData = {
          type: 'azeList',
          cls: 'azeList',
          list: resgetXXZCGG.data?.rows?.slice(0, 3) || [],
          noDataText: '暂无待办',
          noDataImg: noData,
        };
        setTZGGData(newData);
        newData.list = resgetXXZCGG.data?.rows || [];
        setAllTZDataSource(newData);
      }
    }

    fetchData();
  }, [tabSelect]);

  return (
    <div className={styles.notice}>
      <Tabs
        centered={true}
        onTabClick={handalTabClick}
      >
        <TabPane tab="政策公告" key="policy">
          {
            dataTZGG ?  <>
              <ListComp listData={dataTZGG} infoType='zc'/>
              <Link to={{ pathname: '/mobile/homepage/home/allNotice', state: { allDataSource: allTZDataSource , type: 'zc'} }}>
                <Col span={12} offset={8}><Button type="primary" onClick={() => enterLoading(1)} className={styles.moreBtn} loading={loadings[1]} ghost={true} icon={<ArrowDownOutlined />}>查看更多</Button></Col>
              </Link>
            </> : <Empty
            image={noData}
            imageStyle={{
              minHeight: 135
            }}
            style={{ minHeight: 200,background: '#fff',borderRadius: '8px' }}
            description={'暂无公告'} />
          }

        </TabPane>
        <TabPane tab="内部通知" key="notify">
          {
            (dataZCGG?.list && dataZCGG?.list.length) ? <>
              <ListComp listData={dataZCGG} infoType='tz'/>
              <Link to={{ pathname: '/mobile/homepage/home/allNotice', state: { allDataSource: allZCDataSource , type: 'tz' } }}>
                <Col span={12} offset={8}><Button type="primary" onClick={() => enterLoading(2)} className={styles.moreBtn} loading={loadings[2]} ghost={true} icon={<ArrowDownOutlined />}>查看更多</Button></Col>
              </Link>
            </> : <Empty
              image={noData}
              imageStyle={{
                minHeight: 135
              }}
              style={{ minHeight: 200,background: '#fff',borderRadius: '8px' }}
              description={'暂无公告'} />
          }

        </TabPane>
      </Tabs>
    </div>
  );
};

export default Notice;
