/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-17 19:55:27
 * @LastEditTime: 2021-09-01 15:56:48
 * @LastEditors: Sissle Lynn
 */
import { Column } from '@ant-design/charts';
import noData from '@/assets/noData.png';

import styles from './index.less';
import { chartConfig } from './utils';
import { Empty } from 'antd';



const ColumnChart = (props: { data?: any, color?: string, noDataImg?: any, noDataText?: string }) => {
  const { data, color, noDataImg = noData, noDataText = '暂无信息' } = props;
  chartConfig.data = data;
  chartConfig.columnStyle = {
    fill: color || ' #6395f9'
  };

  return (
    <div className={styles.chartWrapper}>
      {data?.length ? <Column {...chartConfig} /> : <Empty
        image={noDataImg}
        imageStyle={{
          height: 80,
        }}
        description={noDataText} />}
    </div>
  );
};

export default ColumnChart;
