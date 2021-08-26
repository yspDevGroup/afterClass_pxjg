/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:26:59
 * @LastEditTime: 2021-08-26 19:53:32
 * @LastEditors: Sissle Lynn
 */
import { getQueryString } from '@/utils';
import React, { useEffect, useRef } from 'react';
import SchoolInfo from '../components/SchoolInfo';

const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
const Detail = (props: any) => {
  const { state } = props.history.location;
  return (
    <div>
      {state?.type === 'school' ? <SchoolInfo values={state.data} /> : ''}

      {/* <TabPane tab="课程信息" key="courseInfo">
        {state?.KCXX?.length ? <div className={styles.courseIntro}>
          <ul>
            {state?.KCXX.map((item: any) => {
              return <li key={item.id} className={styles.courseItem}>
                <div>
                  <img src={item.KCTP} alt="课程封面" />
                  <p>{item.KCMC}</p>
                </div>
                <div>
                  {item.KHBJSJs?.length ? <ul>
                    {item.KHBJSJs.map((val: any)=>{
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
      </TabPane> */}
    </div>
  );
};

export default Detail;
