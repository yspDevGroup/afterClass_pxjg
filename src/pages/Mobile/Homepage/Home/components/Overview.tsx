import { useEffect, useState } from 'react';
import styles from '../index.less';
import { useModel } from 'umi';
import { Card, Col, Row, Tabs } from 'antd';
import { topNum } from './utils';
import { homePage } from '@/services/after-class-pxjg/khjyjg';
import { getTerm } from '../../Statistical/utils';

const { TabPane } = Tabs;
const Overview = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [homeData, setHomeData] = useState<any>();
  useEffect(() => {
    const xnRes = getTerm();
    async function fetchData() {
      const res = await homePage({
        KHJYJGId: currentUser?.jgId,
        XN: xnRes.XN,
        XQ: xnRes.XQ
      });
      console.log('res: ', res);
      if (res.status === 'ok') {
        const { xxbm, xxkc, kclx, ...rest } = res.data;
        // 配置头部统计栏目数据
        setHomeData({ ...rest });
      };
    }
    fetchData();
  },[])


  const ItemCard = (props: any) => {
    const {title,count,bgImg} = props;
    return (
      <Card className={styles.card} bordered={false} bodyStyle={{paddingTop: 8.8, paddingLeft: 8.8, minHeight: '101.7px'}}>
        <p style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{title}</p>
        <p>{title.indexOf("元") !== -1 ? parseFloat(count).toFixed(2) : count}</p>
        <img className={styles.bgImg} src={bgImg} alt="" />
      </Card>
    )
  }

  return (
    <div className={styles.overview}>
      <Tabs
        centered={false}
      >
        <TabPane tab="本学期概述" key="semester">
          <Row gutter={[8, 8]}>
            {topNum.map((item)=>{
              return <Col className="gutter-row" span={8}>
                      <ItemCard title={item.title} count={homeData?.[item.type]} bgImg={item.bgImg} key={item.title}/>
                    </Col>
            })}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Overview;
