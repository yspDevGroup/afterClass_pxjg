/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-28 12:02:56
 * @LastEditTime: 2021-10-21 10:32:05
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { Col, Row } from 'antd';

import styles from '../index.less';

const NumberCollect = (props: { data: any, col?: number, color?: string[], reverse?: boolean }) => {
  const { data, col = 2, color, reverse = false } = props;
  return (
    <Row className={styles.serviceNum}>
      {data?.map((item: any, index: number) => {
        return <Col span={24 / col} key={item.title} style={{ marginTop: (index >= col ? '1vh' : 0) }}>
          <div className={styles.headerItem} style={{
            textAlign: (col === 3 ? 'center' : 'left'),
            height: (item.icon ? '16vh' : (reverse ? '10vh' : '7vh'))
          }}>
            {item.icon ? <img src={item.icon} style={{ marginTop: '1vh', marginBottom: '1vh' }} /> : ''}
            {reverse ? <>
              <p style={{ color: color?.[index] || '#FFA729' }}>{item.num}</p>
              <h3>{item.title}</h3>
            </> : <>
              <h3>{item.title}</h3>
              <p style={{ color: color?.[index] || '#FFA729' }}>{item.num}</p>
            </>}
          </div>
        </Col>
      })}
    </Row>
  );
};
export default NumberCollect;
