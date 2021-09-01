import React from 'react';
import styles from './index.less';

const ArticleDetails = (props: any) => {
  const { state } = props.history.location;
  console.log(state, '+++++++++++');
  return (
    <div className={styles.ArticleDetails}>
      <h1>{state.BT}</h1>
      <p>时间：{state.RQ}</p>
      <div dangerouslySetInnerHTML={{ __html: state.NR }} />
      <p className={styles.LY}>来源：{state.LY}</p>
    </div>
  );
};
ArticleDetails.wrappers = ['@/wrappers/auth'];
export default ArticleDetails;
