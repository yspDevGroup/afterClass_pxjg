/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 19:54:41
 * @LastEditTime: 2021-08-30 08:59:51
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import { Input, Empty, Row, Col, Tag } from 'antd';
import { applyStatus, colorTagDisk } from '@/constant';

import styles from './components.less';
import noImg from '@/assets/noImg.png';
import { fakeClassList } from '../mock';
import { Link } from 'umi';

const { Search } = Input;
const CourseItemDom = (props: { course: any, ZT?: number }) => {
  const { course, ZT } = props;
  let bgColor = '#58D14E';
  if (ZT === 1) {
    bgColor = '#FF9900';
  }
  return <div className={styles.courseItem}>
    <div className={ZT ? '' : styles.moreInfo}>
      {ZT ? '' : <div><img src={course.KCTP || noImg} /></div>}
      <h3>
        {course.KCMC}
        {ZT ?
          <span style={{ backgroundColor: bgColor }}>{applyStatus[ZT]}</span> :
          <div className={styles.extraDesc}>
            <p>
              授课教师： {course.KHKCJs?.map((item: any) => {
                return <Link key={item.id}  to={{
                  pathname: '/teachingStaff/teacherManagement/detail',
                  state: {
                    type: 'detail',
                    data: item.KHJSSJ
                  }
                }}>{item.KHJSSJ?.XM}</Link>
              })}
            </p>
            <p>
              适用年级： {course.NJSJs?.map((item: any) => {
                return <span key={item.id}>{item.NJMC}</span>
              })}
            </p>
            <p>
              课程简介：{course.KCMS}
            </p>
          </div>}
      </h3>
    </div>
    {/* {course?.KHBJSJs?.length ? <ul>
    {course.KHBJSJs.map((item: any) => {
      return <li key={item.id}>
        <p>{item.BJMC}</p>
        <p>课程费用：{item.FY}元</p>
        <p>上课时间：{item.KKRQ}——{item.JKRQ}</p>
      </li>
    })}
  </ul> : <Empty description='暂无班级信息' />} */}
    <Row gutter={[24, 24]}>
      {fakeClassList.map((item: any, index: number) => {
        const colorInd = Math.ceil(index / 6) < 2 ? index : Math.ceil(Math.ceil(index / 6) * 6 - index);
        return <Col key={item.id} span={6}>
          <div className={styles.classItem} style={{ borderColor: colorTagDisk[colorInd] }} >
            <p style={{ color: colorTagDisk[colorInd], fontWeight: 'bold' }}>{item.BJMC}</p>
            <p>任课老师：{item.ZJS}</p>
            <p>上课时间：{item.KKRQ}—{item.JKRQ}</p>
            <p>上课地点：{item.SKDD}</p>
            <p>课程费用：{item.FY}元</p>
          </div>
        </Col>
      })}
    </Row>
  </div>;
}
const CourseInfo = (props: { values: any }) => {
  const { values } = props;
  const onSearch = (value: any) => console.log(value);
  return (
    <div className={styles.courseWrapper}>
      {values instanceof Array ? <div className={styles.searchWrapper}>
        <Search placeholder="课程名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
      </div> : ''}
      {values instanceof Array ? (values.length ? <div className={styles.courseIntro}>
        {values.map((val: any) => {
          const { ZT, KHKCSJ } = val;
          return <CourseItemDom key={val.id} course={KHKCSJ} ZT={ZT} />
        })}
      </div > : <Empty description='暂无课程信息' />) : <div className={styles.courseIntro}>
        <CourseItemDom course={values} /></div>}


    </div >
  );
};

export default CourseInfo;
