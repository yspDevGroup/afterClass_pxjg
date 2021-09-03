/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 11:07:27
 * @LastEditTime: 2021-09-03 18:58:23
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { Empty } from 'antd';
import noData from '@/assets/noData.png';

import styles from './index.less';
import moment from 'moment';
import { Link } from 'umi';

const List = (props: { type: string, data?: any, noDataImg?: any, noDataText?: string }) => {
  const { type, data, noDataImg = noData, noDataText = '暂无信息' } = props;
  return (
    <div className={styles.annceList}>
      {data?.length ? <ul>
        {data.map((item: { BT?: string, RQ?: string }) => {
          return <li key={item.BT}>
            <Link
              key="ck"
              to={{
                pathname: `/announcements/${type}/articleDetails`,
                state: item
              }}
            >
              <span>{item.BT}</span>
              <span>{item.RQ}</span>
            </Link>
          </li>
        })}
      </ul> : <Empty
        image={noDataImg}
        imageStyle={{
          height: 80,
        }}
        description={noDataText} />}
    </div>
  );
};
export default List;
