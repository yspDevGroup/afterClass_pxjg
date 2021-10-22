/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-17 19:55:27
 * @LastEditTime: 2021-10-15 17:11:27
 * @LastEditors: Sissle Lynn
 */
import { Column } from '@ant-design/charts';
import noData from '@/assets/noData.png';

import styles from '../index.less';
import { columnConfig } from './utils';
import { Empty } from 'antd';

const ColumnChart = (props: { data?: any, color?: string, noDataImg?: any, noDataText?: string }) => {
  const { data, color, noDataImg = noData, noDataText = '暂无信息' } = props;
  columnConfig.data = data;
  if(data?.length > 14){
    columnConfig.scrollbar = {
      type: 'horizontal',
      style: {
        trackColor: '#fff',
      },
    };
  }
  return (
    <div className={styles.chartContainer}>
      {data?.length ? <Column {...columnConfig} /> : <Empty
        image={noDataImg}
        imageStyle={{
          height: 80,
        }}
        description={noDataText} />}
    </div>
  );
};

export default ColumnChart;
