/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 11:13:07
 * @LastEditTime: 2021-08-31 10:54:11
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
  const handleSubmit =  () => {
    form?.submit();
  };
  return (
    <div className={styles.contentWrapper}>
      <TeacherInfo
        values={state.data}
        setForm={setForm}
        readonly = {state.type ==='detail'}
      />
     {state.type!=='detail' ?<div className={styles.btnWrapper}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          保存
        </Button>
        <Button htmlType="button" onClick={() => history.go(-1)}>
          取消
        </Button>
      </div>:<div className={styles.btnWrapper}>
        <Button type="primary" htmlType="button" onClick={() => history.go(-1)}>
          返回上一页
        </Button>
      </div>}
    </div>
  );
};

Detail.wrappers = ['@/wrappers/auth'];

export default Detail;
