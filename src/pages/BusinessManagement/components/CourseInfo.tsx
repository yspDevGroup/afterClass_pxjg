/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 19:54:41
 * @LastEditTime: 2021-09-03 11:28:50
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { Input, Empty, Row, Col, message, Tag, Select, Button } from 'antd';
import { UpOutlined, LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import { copCourseStatus, colorTagDisk } from '@/constant';

import styles from './components.less';
import noCourse from '@/assets/noCourse.png';
import noClass from '@/assets/noClass.png';
import { getAllCourses, getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { getCurrentXQ } from '@/utils';

const { Search } = Input;
const { Option } = Select;
const CourseItemDom = (props: { course: any, type: string, ind: number }) => {
  const { course, type, ind } = props;
  const ZT = course?.KHKCSQs?.[0]?.ZT;
  const [curIndex, setCurIndex] = useState<number | undefined>(0);
  let bgColor = '#58D14E';
  if (ZT === 1) {
    bgColor = '#FF9900';
  } else if (ZT === 2) {
    bgColor = '#e91e63';
  }
  const handleCollapse = (ind: number) => {
    if (ind === curIndex) {
      setCurIndex(undefined);
    } else {
      setCurIndex(ind);
    }
  };
  return <div className={styles.courseItem}>
    <div>
      <h3>
        {course.KCMC}
        <span className={styles.extraInfo}>
          <span style={{ backgroundColor: bgColor }}>{copCourseStatus[ZT]}</span>
          <span>
            适用年级：
            {course.NJSJs?.map((item: any, index: number) => {
              return <span key={item.id}>
                {index > 4 ? '' : index === 4 ?
                  <Tag key='more' color="#EFEFEF" style={{ color: '#333' }}>...</Tag> :
                  <Tag color="#EFEFEF" style={{ color: '#333' }}>{item.NJMC}</Tag>}
              </span>
            })}
          </span>
          {type === 'list' ? <span onClick={() => handleCollapse(ind)}>课程班详情 {ind === curIndex ? <UpOutlined /> : <DownOutlined />}</span> : ''}
        </span>
      </h3>
    </div>
    {course?.KHBJSJs?.length && ind === curIndex ? <Row gutter={[24, 24]}>
      {course.KHBJSJs.map((item: any, index: number) => {
        const colorInd = Math.ceil(index / 6) < 2 ? index : Math.ceil(Math.ceil(index / 6) * 6 - index);
        return <Col key={item.id} span={6}>
          <div className={styles.classItem}>
            <p style={{ backgroundColor: colorTagDisk[colorInd], fontWeight: 'bold' }}>
              {item.BJMC}
              <span>{item.XNXQ.XN} &nbsp; {item.XNXQ.XQ}</span>
            </p>
            <p>任课老师：{item.KHBJJs?.map((val: any) => {
              return <Link key={val.id} to={{
                pathname: '/basicalSetting/teacherManagement/detail',
                state: {
                  type: 'detail',
                  data: course
                }
              }}>{item.KHJSSJ?.XM}</Link>
            })}</p>
            <p>上课时间：{item.KKRQ}—{item.JKRQ}</p>
            <p>上课地点：{item.XQSJ?.XQMC}</p>
            <p>学生总数：{item.KHXSBJs?.length}人 <Link style={{ marginLeft: '16px' }} to='/studentlist'>学生列表<RightOutlined /></Link></p>
          </div>
        </Col>
      })}
    </Row> : (ind === curIndex ? <Empty
      image={noClass}
      imageStyle={{
        height: 80,
      }}
      description='暂无班级信息' /> : '')}
  </div>;
}
const CourseInfo = (props: { values: any }) => {
  const { type, xxid, jgid } = props.values;
  const [courseList, setCourseList] = useState<any>();
  const [term, setTerm] = useState<string>();
  const [termList, setTermList] = useState<any>();
  const getCourseList = async (xxdm: string, jgdm: string, xnxq?: string) => {
    const res = await getAllCourses({
      KHJYJGId: jgdm,
      XXJBSJId: xxdm,
      XNXQId: xnxq || ''
    });
    if (res?.status === 'ok') {
      setCourseList(res.data);
    } else {
      message.error(res.message);
    }
  };
  const getXNXQ = async (xxdm: string, jgdm: string) => {
    const res = await getAllSemester({
      KHJYJGId: jgdm,
      XXJBSJId: xxdm,
    });
    if (res?.status === 'ok') {
      const { data = [] } = res;
      const currentXQ = getCurrentXQ(data);
      const term = [].map.call(data, (item: any) => {
        return {
          value: item.id,
          text: `${item.XN} ${item.XQ}`
        };
      });
      term.push({
        value: '',
        text: '全部'
      });
      setTermList(term);
      setTerm(currentXQ?.id || data[0].id);
      getCourseList(xxid, jgid, currentXQ?.id || data[0].id);
    } else {
      message.error(res.message);
    }
  };
  useEffect(() => {
    getXNXQ(xxid, jgid);
  }, [])
  const onSearch = (value: any) => {
    const rest = courseList.filter((item: any) => {
      return item.KCMC.indexOf(value) > -1;
    });
    setCourseList(rest);
  };
  return (
    <div className={styles.courseWrapper}>
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
      {type === 'list' && courseList ? <div className={styles.searchWrapper}>
        <Search placeholder="课程名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <span style={{ marginLeft: '24px' }}>
          所属学年学期：
          <Select
            defaultValue={term}
            style={{ width: 200 }}
            onChange={(value: string) => getCourseList(xxid, jgid, value)}
          >
            {termList?.map((item: any) => {
              return <Option key={item.value} value={item.value}>{item.text}</Option>;
            })}
          </Select>
        </span>
      </div> : ''
      }
      {
        courseList?.length ? <div className={styles.courseIntro}>
          {courseList.map((val: any, index: number) => {
            return <CourseItemDom course={val} type={type} ind={index} key={val.id} />
          })}
        </div > : <Empty
          image={noCourse}
          imageStyle={{
            height: 80,
          }}
          description='暂无课程信息' />
      }
    </div >
  );
};

export default CourseInfo;
