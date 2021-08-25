/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 20:21:44
 * @LastEditTime: 2021-08-25 12:11:02
 * @LastEditors: Sissle Lynn
 */
import React, { useRef } from 'react';
import { Tabs } from 'antd';

import styles from './index.less';
import CustomForm from '@/components/CustomForm';
import { basicForm } from './FormItems';

const { TabPane } = Tabs;
const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
const SchoolInfo = (props: any) => {
  const { state } = props.history.location;
  console.log(state);
  return (
    <Tabs defaultActiveKey="basicalInfo" className={styles.schoolWrapper}>
      <TabPane tab="基本信息" key="basicalInfo">
        <div className={styles.schoolInfoBody}>
          {/* 学校基本信息标题 */}
          <div className={styles.schoolInfoTitle}>
            <div className={styles.schoolInfoLogo}>
              <img src={state?.XH} alt='logo' />
            </div>
            <div className={styles.schoolInfoTitleHeader} >
              <p>{state?.XXMC}</p>
            </div>
          </div>
          <div className={styles.schoolInfoBasic}>
            <CustomForm
              values={state}
              formItems={basicForm}
              formLayout={formItemLayout}
              hideBtn={true}
              formDisabled={true}
            />
          </div>
        </div>
      </TabPane>
      <TabPane tab="课程分班信息" key="courseInfo">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
};

export default SchoolInfo;
