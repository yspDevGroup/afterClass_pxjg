import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Pie, Bar } from '@ant-design/charts';

import { getTerm, pieConfig, barConfig, courseBarConfig} from '../utils';
import { homePage } from '@/services/after-class-pxjg/khjyjg';

import noData from '@/assets/noData.png';

import styles from '../index.less';
import ModuleTitle from '../components/ModuleTitle';
import NumberCollect from '../components/NumberCollect';
import { Empty } from 'antd';



const course = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [currentData, setCurrentData] = useState<any>();

  const getData = async (res: any) => {

    const defaultData: any = {
      courseCollect: [],
      courseNum: [],
      proportionNum: []
    };
    const xnRes = getTerm();
    const resProportion = await homePage({
      KHJYJGId: currentUser?.jgId,
      XN: xnRes.XN,
      XQ: xnRes.XQ
    });
    if (resProportion.status === 'ok') {
      const { data } = resProportion;
      if (data) {
        console.log('data: ', data);
        data.lxs?.length && data.lxs.forEach((item: { KCTAG: any; kc_count: any; }) => {
          if (item.kc_count !== 0) {
            defaultData.courseCollect.push({
              type: item.KCTAG,
              value: item.kc_count
            })
          }
        });
        pieConfig.data = defaultData.courseCollect;

        data.xxbm?.length && data.xxbm.forEach((item: { kc_count: any; XXMC: any; bj_count: any; }) => {
          if (item.kc_count !== 0) {
            defaultData.courseNum.push({
              label: item.XXMC,
              type: '课程数',
              value: item.kc_count,
            },)
          }
          if (item.bj_count !== 0) {
            defaultData.proportionNum.push({
              label: item.XXMC,
              type: '班级数',
              value: item.bj_count,
            },)
          }
        });
        courseBarConfig.data = defaultData.proportionNum;
        barConfig.data = defaultData.courseNum;
      }
    };

    setCurrentData(defaultData);
  };

  useEffect(() => {
    const res = getTerm();
    getData(res);
  }, []);

  return (
  <div className={styles.course}>
    <div className={styles.container} style={{height: '282px'}}>
      <ModuleTitle data='课程类型分布'/>
      <div className={styles.chartsContainer}>
      {
          (pieConfig.data && pieConfig.data?.length!==0) ? <Pie {...pieConfig} /> : <Empty
          image={noData}
          imageStyle={{
            minHeight: 150
          }}
          style={{minHeight: '282px'}}
          description={'暂无课程类型信息'} />
        }
      </div>
    </div>
    <div className={styles.container} style={{height: '355px'}}>
      <ModuleTitle data='各校开设班级情况'/>
      <div className={styles.chartsContainer}>
      {
          (courseBarConfig.data && courseBarConfig.data?.length!==0) ? <Bar {...courseBarConfig} /> : <Empty
          image={noData}
          imageStyle={{
            minHeight: 200
          }}
          style={{minHeight: 355}}
          description={'暂无课程对比信息'} />
        }
      </div>
    </div>
    <div className={styles.container} style={{height: '413px'}}>
      <ModuleTitle data='各校合作课程情况' showRight={false}/>
      <div className={styles.chartsContainer}>
        {
          (barConfig.data && barConfig.data?.length!==0) ? <Bar {...barConfig} /> : <Empty
          image={noData}
          imageStyle={{
            minHeight: 230
          }}
          style={{minHeight: 355}}
          description={'暂无课程数信息'} />
        }
      </div>
    </div>
  </div>)
}

export default course;
