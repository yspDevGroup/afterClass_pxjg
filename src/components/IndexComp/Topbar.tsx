/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-01 10:53:07
 * @LastEditTime: 2021-09-09 10:23:09
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { Col, Row } from 'antd';
import { bgColor, topNum } from './utils';

import styles from './index.less';

const Topbar = (props: { data: any }) => {
  const { data } = props;
  return (
    <Row gutter={[24, 24]} className={styles.topHeader}>
      {topNum.map((item, index) => {
        return <Col span={4} key={item.title}>
          <div className={styles.headerItem} style={{ background: `linear-gradient(180deg, ${bgColor[index].begin} 0%, ${bgColor[index].end} 100%)` }}>
            <h3>{data?.[item.type]||0}</h3>
            <p>{item.title}</p>
          </div>
        </Col>
      })}
    </Row>
  );
};
export default Topbar;
