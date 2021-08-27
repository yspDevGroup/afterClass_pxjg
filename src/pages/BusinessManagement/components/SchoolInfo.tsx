/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:24:39
 * @LastEditTime: 2021-08-27 09:41:32
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import CustomForm from '@/components/CustomForm';
import { basicForm } from '../components/FormItems';
import defaultImg from '@/assets/vector.png';

import styles from './components.less';

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
    </div>
  );
};

export default SchoolInfo;
