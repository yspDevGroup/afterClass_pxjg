/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-09-07 08:30:40
 * @LastEditTime: 2021-10-15 18:07:16
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Avatar, Row, Empty, Tooltip } from 'antd';
import stuImg from '@/assets/stu.png';
import { getClassStudents } from '@/services/after-class-pxjg/khbjsj';
import styles from './index.less';
import WWOpenDataCom from '@/components/WWOpenDataCom';

const { Meta } = Card;

const StudentList = (props: any) => {
  const { state } = props.history.location;
  console.log(state);
  const [Datas, setDatas] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await getClassStudents({
        KHBJSJId: state.bjId,
        ZT: [0, 1],
        page: 0,
        pageSize: 0
      });
      if (res.status === 'ok') {
        setDatas(res.data);
      }
    })();
  }, []);
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
        <div className={styles.courseWrappers}>
          <div className={styles.searchWrapper}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {state.xxmc}
              <span style={{ margin: '0 8px' }}>/</span>
              {state.kcmc}
              <span style={{ margin: '0 8px' }}>/</span>
              {state.bjmc}
            </span>
          </div>
          <div style={{ padding: '0 24px 24px' }}>
            {Datas?.length ? (
              <Row gutter={[24, 24]}>
                {Datas?.map((item: any) => {
                  const showWXName = item?.XSJBSJ?.XM === '未知' && item?.XSJBSJ?.WechatUserId;
                  return (
                    <Col key={item.XSId}>
                      <Card style={{ display: 'flex' }}>
                        <Meta
                          avatar={<Avatar src={stuImg} />}
                          style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title={
                            showWXName ? (
                              <WWOpenDataCom type="userName" openid={item?.XSJBSJ?.WechatUserId} />
                            ) : (
                              item?.XSJBSJ?.XM
                            )
                          }
                        />
                        <Tooltip title={`${item?.XSJBSJ?.BJSJ?.NJSJ?.NJMC}${item?.XSJBSJ?.BJSJ?.BJ}`}>
                          <p>
                            行政班：{item?.XSJBSJ?.BJSJ?.NJSJ?.NJMC}
                            {item?.XSJBSJ?.BJSJ?.BJ}
                          </p>
                        </Tooltip>
                        <Tooltip title={item?.XSJBSJ?.XH}>
                          <p>
                            {' '}
                            <span>学</span>号：{item?.XSJBSJ?.XH}
                          </p>
                        </Tooltip>
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
