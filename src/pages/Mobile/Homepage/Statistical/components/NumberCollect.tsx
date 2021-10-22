import { Col, Row } from 'antd';

import styles from '../index.less';

const NumberCollect = (props: { data: any, col?: number}) => {
  const { data, col = 2 } = props;
  return col <= 3 ? (
    <Row className={styles.serviceNum}>
      {data?.map((item: any, index: number) => {
        return <Col span={24 / col} key={item.title}>
          <div className={styles.headerItem}>
              <h2>{item.num}</h2>
              <p>{item.title}</p>
          </div>
        </Col>
      })}
    </Row>
  ):(
    <>
      <Row className={styles.serviceNum}>
        {data?.map((item: any, index: number) => {
          if(index > 1 ){
            return
          }
          return <Col span={24 / col} key={item.title}>
            <div className={styles.headerItem}>
                <h2>{item.num}</h2>
                <p>{item.title}</p>
            </div>
          </Col>
        })}
      </Row>
      <Row className={styles.serviceNum}>
        {data?.map((item: any, index: number) => {
          if(index < 2 ){
            return
          }
          return <Col span={24 / col} key={item.title}>
            <div className={styles.headerItem}>
                <h2>{item.num}</h2>
                <p>{item.title}</p>
            </div>
          </Col>
        })}
      </Row>
    </>
  );
};
export default NumberCollect;
