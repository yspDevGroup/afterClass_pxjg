/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-17 19:55:27
 * @LastEditTime: 2021-10-15 15:29:57
 * @LastEditors: Sissle Lynn
 */
import { Bar } from '@ant-design/charts';
import noData from '@/assets/noData.png';

import styles from '../index.less';
import { barConfig } from './utils';
import { Empty } from 'antd';

const BarChart = (props: { data?: any, color?: string, noDataImg?: any, noDataText?: string }) => {
  const { data, color, noDataImg = noData, noDataText = '暂无信息' } = props;
  barConfig.data = data;
  if(data?.length > 14){
    barConfig.scrollbar = {
      type: 'vertical',
      style: {
        trackColor: '#fff',
      },
    };
  }
  return (
    <div className={styles.chartContainerMore}>
      {data?.length ? <Bar {...barConfig} /> : <Empty
        image={noDataImg}
        imageStyle={{
          height: 80,
        }}
        description={noDataText} />}
    </div>
  );
};

export default BarChart;
