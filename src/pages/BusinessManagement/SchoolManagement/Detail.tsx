/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:26:59
 * @LastEditTime: 2021-08-26 20:19:21
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

export default Detail;
