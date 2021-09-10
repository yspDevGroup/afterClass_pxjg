/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-07 08:30:40
 * @LastEditTime: 2021-09-10 08:44:26
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Avatar, Row, Empty } from 'antd';
import stuImg from '@/assets/stu.png';

import styles from '../components/components.less';

const { Meta } = Card;
const StudentList = (props: any) => {
  const { state } = props.history.location;
  const { xxmc, kcmc, bjmc, xssj } = state;
  const [stuList, setStuList] = useState<any>();
  useEffect(() => {
    if (xssj) {
      setStuList(xssj);
    }
  }, [xssj]);

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
            {stuList?.length ? (
              <Row gutter={[24, 24]}>
                {stuList?.map((item: any) => {
                  return (
                    <Col span={4} key={item.XSId}>
                      <Card style={{ display: 'flex' }}>
                        <Meta
                          avatar={<Avatar src={stuImg} />}
                          style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title={item.XSXM}
                        />
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StudentList.wrappers = ['@/wrappers/auth'];

export default StudentList;
