/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:24:39
 * @LastEditTime: 2021-09-03 19:15:27
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import CustomForm from '@/components/CustomForm';
import { basicForm } from '../components/FormItems';
import defaultImg from '@/assets/vector.png';

import styles from './components.less';
import { Button } from 'antd';

const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
const SchoolInfo = (props: { values: any }) => {
  const { values } = props;
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
    </>
  );
};

export default SchoolInfo;
