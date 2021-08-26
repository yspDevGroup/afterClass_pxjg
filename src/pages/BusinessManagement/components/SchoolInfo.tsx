/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:24:39
 * @LastEditTime: 2021-08-26 19:54:53
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import styles from './schoolInfo.less';
import CustomForm from '@/components/CustomForm';
import { basicForm } from '../components/FormItems';
import defaultImg from '@/assets/vector.png';

const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
const SchoolInfo = (props: { values: any }) => {
  const { values } = props;
  return (
    <div className={styles.schoolWrapper}>
      <div className={styles.schoolInfoBody}>
        {/* 学校基本信息标题 */}
        <div className={styles.schoolInfoTitle}>
          <div className={styles.schoolInfoLogo}>
            <img src={values?.XH || defaultImg} alt='logo' />
          </div>
          <div className={styles.schoolInfoTitleHeader} >
            <p>{values?.XXMC}</p>
          </div>
        </div>
        <div className={styles.schoolInfoBasic}>
          <CustomForm
            values={values}
            formItems={basicForm}
            formLayout={formItemLayout}
            hideBtn={true}
            formDisabled={true}
          />
        </div>
      </div>
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

export default SchoolInfo;
