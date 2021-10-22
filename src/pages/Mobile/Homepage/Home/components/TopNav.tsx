import { history } from 'umi';
import { Col, Row } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styles from '../index.less';

const TopNav = (props: any) => {
  const { title } = props;


  return (
    <div className={styles.mobilePageHeader}>
        <Row className={styles.topContainer}>
          <Col span={4}>
          <div onClick={() => {
          history.goBack();
        }}
        style={{
          marginBottom: '24px'
        }}
      >
        <LeftOutlined />
      </div>
          </Col>
          <Col span={16}>
            {title}
          </Col>
          <Col span={4}></Col>
        </Row>

    </div>
  )
}

export default TopNav;
