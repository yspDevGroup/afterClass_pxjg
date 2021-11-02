import { history } from 'umi';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styles from '../index.less';

const TopNav = (props: any) => {
  const { title, state } = props;

  return (
    <div className={styles.mobilePageHeader}>
      <Row className={styles.topContainer}>
        <Col span={4}>
          {state === true ? (
            <div
              onClick={() => {
                history.go(-1);
              }}
              style={{
                marginBottom: '24px'
              }}
            >
              <LeftOutlined />
            </div>
          ) : (
            <></>
          )}
        </Col>
        <Col span={16}>{title}</Col>
        <Col span={4} />
      </Row>
    </div>
  );
};

export default TopNav;
