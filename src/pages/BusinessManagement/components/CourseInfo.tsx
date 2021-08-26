/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 19:54:41
 * @LastEditTime: 2021-08-26 19:55:55
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import { Empty } from 'antd';

import styles from './schoolInfo.less';

const CourseInfo = (props: { values: any }) => {
  const { values } = props;
  return (
    <div className={styles.courseWrapper}>
      {values?.KCXX?.length ? <div className={styles.courseIntro}>
        <ul>
          {values?.KCXX.map((item: any) => {
            return <li key={item.id} className={styles.courseItem}>
              <div>
                <img src={item.KCTP} alt="课程封面" />
                <p>{item.KCMC}</p>
              </div>
              <div>
                {item.KHBJSJs?.length ? <ul>
                  {item.KHBJSJs.map((val: any) => {
                    return <li key={val.id}>
                      <p>{val.BJMC}</p>
                      <p>课程费用：{val.FY}元</p>
                      <p>上课时间：{val.KKRQ}——{val.JKRQ}</p>
                    </li>
                  })}
                </ul> : <Empty description='暂无课程信息' />}
              </div>
            </li>
          })}
        </ul>
      </div> : <Empty description='暂无课程信息' />}
    </div>
  );
};

export default CourseInfo;
