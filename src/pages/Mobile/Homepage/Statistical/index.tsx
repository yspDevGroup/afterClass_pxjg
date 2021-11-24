import { Tabs } from 'antd';
import IconFont from '@/components/CustomIcon';
import Apply from './c-pages/Apply'
import Attendance from './c-pages/Attendance'
import Course from './c-pages/Course'
import Toll from './c-pages/Toll'
import { getTerm } from './utils';

const { TabPane } = Tabs;
import styles from './index.less';
import { useEffect, useState } from 'react';

const Statistical = () => {
  const [activeKey, setActiveKey] = useState<string>('1');
  const [term, setTerm] = useState<string>();

  useEffect(() => {
    const { XN, XQ } = getTerm();
    setTerm(`${XN} ${XQ}`);
  }, [])
  return (
    <div className={styles.statisticalPage}>
      <div className={styles.topText}>
        <span>
          {term}
        </span>
        <Tabs className={styles.theTabs} destroyInactiveTabPane={true} onTabClick={(key: string) => {
              setActiveKey(key)}} type="card" centered>
          <TabPane tab={
            <div>
              <div className={styles.iconContainer}>
                <IconFont className={styles.iconStyle}
                  type={'icon-baoming'} />
              </div>
              <span className={styles.iconAfter}>报名</span>
            </div>
          } key="1">
            <Apply />
          </TabPane>
          <TabPane tab={
            <div>
              <div className={styles.iconContainer}>
                <IconFont className={styles.iconStyle}
                  type={'icon-shoufei'} />
              </div>
              <span className={styles.iconAfter}>收费</span>
            </div>
          } key="2">
            <Toll />
          </TabPane>
          <TabPane tab={
            <div>
              <div className={styles.iconContainer}>
                <IconFont className={styles.iconStyle}
                  type={'icon-kaoqin'} />
              </div>
              <span className={styles.iconAfter}>考勤</span>
            </div>
          } key="3">
            <Attendance />
          </TabPane>
          <TabPane tab={
            <div>
              <div className={styles.iconContainer}>
                <IconFont className={styles.iconStyle}
                  type={'icon-kecheng'} />
              </div>
              <span className={styles.iconAfter}>课程</span>
            </div>
          } key="4">
            <Course />
          </TabPane>
        </Tabs>
      </div>
    </div>)
}

export default Statistical;
