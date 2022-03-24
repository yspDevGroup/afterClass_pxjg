import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from '../index.module.less';
import { history } from 'umi';
import { LeftOutlined } from '@ant-design/icons';
import { JYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';

const ArticleDetails = (props: any) => {
  const { state } = props.history.location;
  const [nrInfo, setNrInfo] = useState<any>();

  console.log(state, 'state');
  useEffect(() => {
    getData();
  }, [state.id]);

  const getData = async () => {
    const result = await JYJGTZGG({ id: state.id });
    console.log(result, 'result-----');
    setNrInfo(result?.data?.NR);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.goBack();
        }}
        style={{
          marginBottom: '24px'
        }}
      >
        <LeftOutlined />
        返回上一页
      </Button>
      <div className={styles.ArticleDetails}>
        <h1>{state.BT}</h1>
        <p className={styles.RQ}>时间：{state.RQ}</p>
        <div dangerouslySetInnerHTML={{ __html: nrInfo }} />
        <p className={styles.LY}>来源：{state?.JYJGSJ?.BMMC}</p>
      </div>
    </>
  );
};
ArticleDetails.wrappers = ['@/wrappers/auth'];
export default ArticleDetails;
