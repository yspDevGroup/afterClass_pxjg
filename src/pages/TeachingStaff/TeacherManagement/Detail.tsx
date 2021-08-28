/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 11:13:07
 * @LastEditTime: 2021-08-28 14:52:31
 * @LastEditors: Sissle Lynn
 */
import React, { useState } from 'react';
import { Button, FormInstance } from 'antd';
import TeacherInfo from './components/TeacherInfo';

import styles from './index.less';

const Detail = (props: any) => {
  const { state } = props.history.location;
  // 模态框的新增或编辑form定义
  const [form, setForm] = useState<FormInstance<any>>();
  const handleSubmit = async () => {
    try {
      const values = await form?.validateFields();
      const { id, ...rest } = values;

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <div>
      <TeacherInfo
        values={state.data}
        setForm={setForm}
      />
      <div className={styles.btnWrapper}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          保存
        </Button>
        <Button htmlType="button" onClick={() => history.go(-1)}>
          取消
        </Button>
      </div>
    </div>
  );
};

export default Detail;
