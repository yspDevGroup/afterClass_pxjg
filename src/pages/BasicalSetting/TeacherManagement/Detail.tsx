/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 11:13:07
 * @LastEditTime: 2021-09-03 11:32:24
 * @LastEditors: Sissle Lynn
 */
import React, { useState } from 'react';
import { Button, FormInstance } from 'antd';
import { LeftOutlined, } from '@ant-design/icons';
import TeacherInfo from './components/TeacherInfo';

import styles from './index.less';

const Detail = (props: any) => {
  const { state } = props.history.location;
  // 模态框的新增或编辑form定义
  const [form, setForm] = useState<FormInstance<any>>();
  const handleSubmit = () => {
    form?.submit();
  };
  return (
    <div className={styles.contentWrapper}>
      {state.type === 'detail' ? <Button
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
      </Button> : ''}
      <TeacherInfo
        values={state.data}
        setForm={setForm}
        readonly={state.type === 'detail'}
      />
      {state.type !== 'detail' ? <div className={styles.btnWrapper}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          保存
        </Button>
        <Button htmlType="button" onClick={() => history.go(-1)}>
          取消
        </Button>
      </div> : ''}
    </div>
  );
};

Detail.wrappers = ['@/wrappers/auth'];

export default Detail;
