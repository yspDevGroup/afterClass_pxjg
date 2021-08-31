/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:26:59
 * @LastEditTime: 2021-08-31 10:54:29
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import CourseInfo from '../components/CourseInfo';
import SchoolInfo from '../components/SchoolInfo';

const Detail = (props: any) => {
  const { state } = props.history.location;
  return (
    <div>
      {state?.type === 'school' ? <SchoolInfo values={state.data} /> : ''}
      {state?.type === 'course' ? <CourseInfo values={state.data} /> : ''}
    </div>
  );
};

Detail.wrappers = ['@/wrappers/auth'];

export default Detail;
