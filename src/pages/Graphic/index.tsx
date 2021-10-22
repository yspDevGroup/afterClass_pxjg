import { useModel } from 'umi';
import { Row, Col } from 'antd';
import NumberCollect from './component/NumberCollect';
import { getTerm, mock, textColor1, textColor2 } from './component/utils';
import PieChart from './component/PieChart';
import List from './component/List';
import ColumnChart from './component/ColumnChart';
import BarChart from './component/BarChart';
import { useEffect, useState } from 'react';
// import { getScreenInfo } from '@/services/after-class-qxjyj/jyjgsj';

import bgImg from '@/assets/dispalyBgc.jpg';
import headerImg from '@/assets/headLine.png';
import should from '@/assets/should.png';
import real from '@/assets/real.png';
import leave from '@/assets/leave.png';

import styles from './index.less';
import { homePage } from '@/services/after-class-pxjg/khjyjg';

const ChartsPage = (props: any) => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [currentData, setCurrentData] = useState<any>();
  const getData = async (res: any) => {
    const defaultData: any = {
      serviceNum: [],
      courseCollect: [],
      checkOut: [],
      numCollect: [],
      courseCol: [],
      courseNum: [],
      enrollNum: [],
      schoolNum: [],
    };
    const result = await homePage({
      ...res,
      KHJYJGId: currentUser?.jgId
    });
    if (result?.status === 'ok') {
      const { data } = result;
      if (data) {
        defaultData.serviceNum = [{
          title: '教师总数',
          num: (data?.js_count || 0)
        },
        {
          title: '学生总数',
          num: data?.xs_count || 0
        },
        {
          title: '收款总额',
          num: (data?.bj_amount || 0)
        },
        {
          title: '退款总额',
          num: data?.tk_amount || 0
        }];
        defaultData.checkOut = [{
          icon: should,
          title: '应到人数',
          num: data.ydjs_count || 0
        }, {
          icon: real,
          title: '实到人数',
          num: data.sdjs_count || 0
        }, {
          icon: leave,
          title: '请假人数',
          num: (data.qjjs_count || 0)
        }];
        defaultData.numCollect = [{
          title: '服务学校数',
          num: data.xx_count || 0
        }, {
          title: '开设课程数',
          num: data.kskc_count || 0
        }, {
          title: '准入课程数',
          num: (data.zrkc_count || 0)
        }, {
          title: '合作课程数',
          num: data.hzkc_count || 0,
        }, {
          title: '服务班级数',
          num: data.bj_count || 0
        }];
        data.lxs?.length && data.lxs.forEach((item: { KCTAG: any; kc_count: number;}) => {
          const counts = (item.kc_count || 0);
          if (counts !== 0) {
            defaultData.courseCollect.push({
              type: item.KCTAG,
              value: counts
            })
          }
        });
        defaultData.courseCol = data.kcs?.length ? [].map.call(data.kcs, (item: any) => {
          return item.KCMC;
        }) : [];
        data.kcs?.length && data.kcs.forEach((item: any) => {
          defaultData.courseNum.push({
            type: '收款情况',
            school: item.KCMC,
            value: Number(item.dd_amount),
          });
          defaultData.courseNum.push({
            type: '退款情况',
            school: item.KCMC,
            value: Number(item.tk_amount),
          })
        });
        defaultData.enrollNum = data.xxbm?.length ? [].map.call(data.xxbm, (item: any) => {
          return {
            school: item.XXMC,
            value: item.xs_count,
          };
        }) : [];
        defaultData.schoolNum = data.xxbm?.length ? [].map.call(data.xxbm, (item: any) => {
          return item.XXMC;
        }) : [];
        defaultData.checkOutTeacher = [{
          icon: should,
          title: '应到人数',
          num: data.ydjs_count || 0
        }, {
          icon: real,
          title: '实到人数',
          num: data.sdjs_count || 0
        }, {
          icon: leave,
          title: '请假人数',
          num: (data.qjjs_count || 0)
        }];
      }
    }
    setCurrentData(defaultData);
  };
  useEffect(() => {
    const res = getTerm();
    getData(res);
    // setCurrentData(mock);
  }, []);

  return (
    <div className={styles.diaplayBox} style={{ backgroundImage: `url(${bgImg})` }}>
      {/* 头部 */}
      <div className={styles.diaplayTop} style={{ backgroundImage: `url(${headerImg})` }}>
        本学期课后服务数据大屏
      </div>
      <div className={styles.content} style={{ marginTop: '2vh', padding: '0 1vh', }}>
        <Row className={styles.bodyRow}>
          <Col span={7} className={styles.diaplay1} >
            <div>
              <span className={styles.boxfoot} />
              <header>
                课后服务情况
              </header>
              <div className={styles.container}>
                <NumberCollect data={currentData?.serviceNum} color={textColor1} />
              </div>
            </div>
            <div>
              <span className={styles.boxfoot} />
              <header>
                各类课程开设情况
              </header>
              <div className={styles.container}>
                <PieChart data={currentData?.courseCollect} />
              </div>
            </div>
            <div>
              <span className={styles.boxfoot} />
              <header>
                今日教师出勤情况
              </header>
              <div className={styles.container}>
                <NumberCollect data={currentData?.checkOut} col={3} color={textColor2} />
              </div>
            </div>
          </Col>
          <Col span={10} className={styles.diaplay2} >
            <div>
              <span className={styles.boxfoot} />
              <div className={styles.container}>
                <NumberCollect data={currentData?.numCollect} col={3} reverse={true} />
              </div>
            </div>
            <div>
              <span className={styles.boxfoot} />
              <header>
                本学期开设课程
              </header>
              <div className={styles.container}>
                <List data={currentData?.courseCol} />
              </div>
            </div>
            <div>
              <span className={styles.boxfoot} />
              <header>
                各课程收退款情况
              </header>
              <div className={styles.container}>
                <ColumnChart data={currentData?.courseNum} />
              </div>
            </div>
          </Col>
          <Col span={7} className={styles.diaplay3} >
            <div>
              <span className={styles.boxfoot} />
              <header>
                课程报名情况
              </header>
              <div className={styles.container}>
                <BarChart data={currentData?.enrollNum} />
              </div>
            </div>
            <div>
              <span className={styles.boxfoot} />
              <header>
                本学期合作学校
              </header>
              <div className={styles.container}>
                <List data={currentData?.schoolNum} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
ChartsPage.wrappers = ['@/wrappers/auth'];
export default ChartsPage
