import React from 'react';
import MechanismCourse from './MechanismCourse/index';
import styles from './index.less';
/**
 * 课程管理
 * MechanismCourse 机构端
 * BureauEducationCourse 教育局端
 * SchoolCourse 学校端
 * @returns
 */
const CourseManagement = () => {
  return (
    <div className={styles.content}>
      <MechanismCourse />
    </div>
  );
};

CourseManagement.wrappers = ['@/wrappers/auth'];

export default CourseManagement;
