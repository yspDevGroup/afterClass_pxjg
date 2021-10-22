/*
 * @description: 首页顶部统计数据
 * @author: Sissle Lynn
 * @Date: 2021-09-01 10:53:07
 * @LastEditTime: 2021-10-22 11:29:48
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { Col, Row } from 'antd';
import { bgColor, topNum } from './utils';

import styles from './index.less';
import { Link } from 'umi';

const Topbar = (props: { data: any }) => {
  const { data } = props;
  return (
    <Row gutter={[24, 24]} className={styles.topHeader}>
      {topNum.map((item, index) => {
        return (
          <Col span={4} key={item.title}>
            <div
              className={styles.headerItem}
              style={{ background: `linear-gradient(180deg, ${bgColor[index].begin} 0%, ${bgColor[index].end} 100%)` }}
            >
              {item.link ? (
                <Link to={item.link}>
                  <h3>{data?.[item.type] || 0}</h3>
                </Link>
              ) : (
                <h3>{data?.[item.type] || 0}</h3>
              )}
              <p title={item.title}>{item.title}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
export default Topbar;
