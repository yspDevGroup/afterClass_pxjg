/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-07 08:30:40
 * @LastEditTime: 2021-09-07 10:42:02
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Avatar, Row, } from 'antd';
import stuImg from '@/assets/stu.png';

import styles from '../components/components.less';

const { Meta } = Card;
const StudentList = (props: any) => {
  const { state } = props.history.location;
  const { xxmc, kcmc, bjmc, xssj, } = state;
  const [stuList, setStuList] = useState<any>();
  useEffect(() => {
    if (xssj) {
      setStuList(xssj)
    }
  }, [xssj])

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          history.go(-1);
        }}
        style={{
          marginBottom: '24px'
        }}
      >
        <LeftOutlined />
        返回上一页
      </Button>
      <div>
        <div className={styles.courseWrapper}>
          <div className={styles.searchWrapper}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {xxmc}
              <span style={{ margin: '0 8px' }}>/</span>
              {kcmc}
              <span style={{ margin: '0 8px' }}>/</span>
              {bjmc}
            </span>
          </div>
          <div style={{ padding: '0 24px 24px' }}>
            <Row gutter={[24, 24]}>
              {stuList?.map((item: any) => {
                return <Col span={6}>
                  <Card style={{display:'flex'}}>
                    <Meta
                      avatar={
                        <Avatar src={stuImg} />
                      }
                      style={{
                        display:'flex',
                        alignItems:'center'
                      }}
                      title={item.XSXM}
                      description={`学号：${item.XSId}`}
                    />
                  </Card>
                </Col>
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentList.wrappers = ['@/wrappers/auth'];

export default StudentList;
