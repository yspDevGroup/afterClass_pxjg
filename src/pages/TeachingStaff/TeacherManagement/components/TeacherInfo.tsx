/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:24:39
 * @LastEditTime: 2021-08-28 14:52:29
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import CustomForm from '@/components/CustomForm';
import { basicForm } from './FormItems';
import defaultImg from '@/assets/vector.png';

import styles from './components.less';
import { FormInstance } from 'antd';

const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
type PropsType = {
  values: any;
  setForm: React.Dispatch<React.SetStateAction<FormInstance<any> | undefined>>;
};
const SchoolInfo = (props: PropsType) => {
  const { values,setForm } = props;
  return (
    <div className={styles.teacherWrapper}>
      <div className={styles.teacherInfoBody}>
        <CustomForm
          // values={values}
          setForm={setForm}
          formItems={basicForm}
          formLayout={formItemLayout}
          hideBtn={true}
        />
      </div>
    </div>
  );
};

export default SchoolInfo;
