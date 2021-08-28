import React from 'react';
import MechanismCourse from './MechanismCourse/index';
import { Tabs } from 'antd';
import styles from './index.less';
import CooperationIndex from './MechanismCourse/cooperationIndex';
const { TabPane } = Tabs;
/**
 * 课程管理
 * MechanismCourse 机构端
 * BureauEducationCourse 教育局端
 * SchoolCourse 学校端
 * @returns
 */
const index = () => {
  const callback = (key: any) => {
    console.log(key);
  };
  return (
    <div className={styles.content}>
      <MechanismCourse />
      {/* <Tabs onChange={callback}>
        <TabPane tab="课程列表" key="1">
        </TabPane>
        <TabPane tab="合作课程" key="2">
          <CooperationIndex/>
        </TabPane>
      </Tabs> */}
    </div>
  );
};

export default index;
