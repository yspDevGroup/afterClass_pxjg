/*
 * @description:
 * @author: zpl
 * @Date: 2021-08-16 17:34:28
 * @LastEditTime: 2021-08-23 11:03:44
 * @LastEditors: Sissle Lynn
 */
import React, { FC } from 'react';
import { Col, Row } from 'antd';

import styles from './index.module.less';

const CommonHeader: FC<CommonHeaderProps> = ({
  primaryColor,
  width = '100%',
  leftWidth = '180px',
  rightWidth = '310px',
  height,
  fixed,
  leftRender,
  rightRender,
  children
}) => {
  return (
    <div
      className={`${styles.headerCon} ${fixed ? styles.fixed : ''}`}
      style={{
        height,
        backgroundColor: primaryColor
      }}
    >
      <Row className={styles.center} style={{ width }}>
        <Col flex={leftWidth}>{leftRender()}</Col>
        <Col flex="auto">{children}</Col>
        <Col flex={rightWidth}>{rightRender()}</Col>
      </Row>
    </div>
  );
};

export default CommonHeader;
