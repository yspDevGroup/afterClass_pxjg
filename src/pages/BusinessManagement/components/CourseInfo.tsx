/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 19:54:41
 * @LastEditTime: 2021-11-19 16:54:31
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { Empty, Row, Col, message, Tag, Select, Button, Divider } from 'antd';
import { UpOutlined, LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import { colorTagDisk, courseStatus } from '@/constant';

import styles from './components.less';
import noCourse from '@/assets/noCourse.png';
import noClass from '@/assets/noClass.png';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import { getCurrentXQ } from '@/utils';
import { getKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
import moment from 'moment';
import WWOpenDataCom from '@/components/WWOpenDataCom';

const { Option } = Select;
const CourseItemDom = (props: { school: string; course: any; type: string; ind: number }) => {
  const { school, course, type, ind } = props;
  const ZT = course?.KCZT;
  const [curIndex, setCurIndex] = useState<number | undefined>(0);
  const [classList, setClassList] = useState<any>();
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
  useEffect(() => {
    if (course?.KHBJSJs?.length) {
      const list = course?.KHBJSJs?.filter((item: { BJZT: string; }) => item.BJZT === '已开班');
      setClassList(list);
    }
  }, [course]);
  return (
    <div className={styles.courseItem}>
      <div>
        <h3>
          {course.KCMC}
          <span className={styles.extraInfo}>
            <span style={{ backgroundColor: bgColor }}>{courseStatus[ZT]}</span>
            <div className={styles.synj}>
              适用年级：
              {course.NJSJs?.map((item: any) => {
                return (
                  <span key={item.id}>
                    <Tag color="#EFEFEF" style={{ color: '#333' }}>
                      {item.NJMC}
                    </Tag>
                  </span>
                );
              })}
            </div>
            {type === 'list' ? (
              <span onClick={() => handleCollapse(ind)}>
                课程班详情 {ind === curIndex ? <UpOutlined /> : <DownOutlined />}
              </span>
            ) : (
              ''
            )}
          </span>
        </h3>
      </div>
      {classList?.length && ind === curIndex ? (
        <Row gutter={[24, 24]}>
          {classList.map((item: any, index: number) => {
            const colorInd = Math.ceil(index / 6) < 2 ? index : Math.ceil(Math.ceil(index / 6) * 6 - index);
            return (
              <Col key={item.id} span={6}>
                <div className={styles.classItem}>
                  <p style={{ backgroundColor: colorTagDisk[colorInd], fontWeight: 'bold' }}>
                    {item.BJMC}
                    <span>
                      {item.XNXQ.XN} &nbsp; {item.XNXQ.XQ}
                    </span>
                  </p>
                  <p>
                    任课教师：
                    {item.KHBJJs?.map((val: any, index: number) => {
                      const showWXName = val.JZGJBSJ?.XM === '未知' && val.JZGJBSJ?.WechatUserId;
                      return (
                        <Link
                          key={val.id}
                          to={{
                            pathname: '/basicalSetting/teacherManagement/detail',
                            state: {
                              type: 'detail',
                              data: val.JZGJBSJ
                            }
                          }}
                        >
                          {showWXName ? (
                            <WWOpenDataCom type="userName" openid={val.JZGJBSJ?.WechatUserId} />
                          ) : (
                            val.JZGJBSJ?.XM
                          )}
                          {index < item.KHBJJs.length - 1 ? <Divider type="vertical" /> : ''}
                        </Link>
                      );
                    })}
                  </p>
                  <p>
                    上课时段：{moment(item?.KKRQ).format('YYYY.MM.DD')}~{moment(item?.JKRQ).format('YYYY.MM.DD')}
                  </p>
                  <p>
                    上课时间：
                    {item.KHPKSJs.map((val: { XXSJPZ: any; WEEKDAY: number }) => {
                      const weeks = `每周${'日一二三四五六'.charAt(val.WEEKDAY)}`;
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <span>
                          {weeks}
                          {val.XXSJPZ.KSSJ.substring(0, 5)}-{val.XXSJPZ.JSSJ.substring(0, 5)}
                        </span>
                      );
                    })}
                  </p>
                  <p>
                    上课地点：{item.XQSJ?.XQMC}
                    <Divider type="vertical" />
                    {item.KHPKSJs.map((val: { FJSJ: any }) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <span>{val.FJSJ.FJMC}</span>
                      );
                    })}
                  </p>
                  <p>
                    总课时：{item?.KSS}节<span style={{ marginLeft: '16px' }}>费用：{item?.FY}元</span>
                  </p>
                  <p>
                    报名时段：{moment(item?.BMKSSJ).format('YYYY.MM.DD')}~{moment(item?.BMJSSJ).format('YYYY.MM.DD')}
                  </p>
                  <p>
                    学生总数：{item.KHXSBJs?.length || 0}人{' '}
                    <Link
                      style={{ marginLeft: '16px' }}
                      to={{
                        pathname: '/businessManagement/schoolManagement/studentList',
                        state: {
                          xxmc: school,
                          kcmc: course.KCMC,
                          bjmc: item.BJMC,
                          xssj: item.KHXSBJs,
                          bjId: item.id
                        }
                      }}
                    >
                      学生列表
                      <RightOutlined />
                    </Link>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : ind === curIndex ? (
        <Empty
          image={noClass}
          imageStyle={{
            height: 80
          }}
          description="暂无已开班信息"
        />
      ) : (
        ''
      )}
    </div>
  );
};
const CourseInfo = (props: { values: any }) => {
  const { type, xxid, jgid, kcid, xxmc } = props.values;
  const [courseList, setCourseList] = useState<any>();
  const [term, setTerm] = useState<string>();
  const [termList, setTermList] = useState<any>();
  const getCourseList = async (xxdm: string, kcdm: string, xnxq?: string) => {
    const res = await getKHKCSJ({
      kcId: kcdm,
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
      XXJBSJId: xxdm
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
      getCourseList(xxid, kcid, currentXQ?.id || data[0].id);
    } else {
      message.error(res.message);
    }
  };
  useEffect(() => {
    getXNXQ(xxid, jgid);
  }, []);
  const onSearch = (value: any) => {
    const rest = courseList.filter((item: any) => {
      return item.KCMC.indexOf(value) > -1;
    });
    setCourseList(rest);
  };
  return (
    <>
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
      <div className={styles.courseWrapper}>
        <div className={styles.searchWrapper}>
          {/* <Search placeholder="课程名称" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{xxmc}</span>
          <span style={{ marginLeft: '48px' }}>
            所属学年学期：
            <Select
              value={term}
              style={{ width: 200 }}
              onChange={(value: string) => {
                setTerm(value);
                getCourseList(xxid, kcid, value);
              }}
            >
              {termList?.map((item: any) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.text}
                  </Option>
                );
              })}
            </Select>
          </span>
        </div>
        {courseList ? (
          <div className={styles.courseIntro}>
            <CourseItemDom school={xxmc} course={courseList} type={type} ind={0} key={courseList.id} />
          </div>
        ) : (
          <Empty
            image={noCourse}
            imageStyle={{
              height: 80
            }}
            description="暂无课程信息"
          />
        )}
      </div>
    </>
  );
};

export default CourseInfo;
