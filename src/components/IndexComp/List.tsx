/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 11:07:27
 * @LastEditTime: 2021-09-07 19:55:23
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { Empty } from 'antd';
import noData from '@/assets/noData.png';

import styles from './index.less';
import moment from 'moment';
import { Link } from 'umi';

const List = (props: { type: string; data?: any; noDataImg?: any; noDataText?: string }) => {
  const { type, data, noDataImg = noData, noDataText = '暂无信息' } = props;
  return (
    <div className={styles.annceList}>
      {data?.length ? (
        <ul>
          {data.map((item: { BT?: string; updatedAt?: string; RQ?: string; SFTT?: number }) => {
            return (
              <li key={item.BT}>
                <Link
                  key="ck"
                  to={{
                    pathname: `/announcements/${type}/articleDetails`,
                    state: item
                  }}
                >
                  {item.SFTT === 1 ? <div className={styles.Headlines}>头条</div> : <></>}
                  <span>{item.BT}</span>
                  <span>{item.updatedAt || item.RQ}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Empty
          image={noDataImg}
          imageStyle={{
            height: 80
          }}
          description={noDataText}
        />
      )}
    </div>
  );
};
export default List;
