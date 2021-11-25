/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 11:13:07
 * @LastEditTime: 2021-11-25 14:30:09
 * @LastEditors: zpl
 */
import React, { useEffect, useState } from 'react';
import { Button, FormInstance } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import TeacherInfo from './components/TeacherInfo';

import styles from './index.less';
import { getJZGJBSJ } from '@/services/after-class-pxjg/jzgjbsj';

const Detail = (props: any) => {
  const { state } = props.history.location;
  const { type, data } = state;
  const [detail, setDetail] = useState<any>();
  // 模态框的新增或编辑form定义
  const [form, setForm] = useState<FormInstance<any>>();
  const handleSubmit = () => {
    form?.submit();
  };
  useEffect(() => {
    (async () => {
      const res = await getJZGJBSJ({
        id: data?.id
      });
      if (res.status === 'ok') {
        setDetail(res.data);
      }
    })();
  }, [data]);
  return (
    <>
      {type === 'detail' ? (
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
      ) : (
        ''
      )}
      <div className={styles.contentWrapper}>
        <TeacherInfo values={detail} setForm={setForm} readonly={type === 'detail'} />
        {type !== 'detail' ? (
          <div className={styles.btnWrapper}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              保存
            </Button>
            <Button htmlType="button" onClick={() => history.go(-1)}>
              取消
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

Detail.wrappers = ['@/wrappers/auth'];

export default Detail;
