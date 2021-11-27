import { JYJGTZGG } from '@/services/after-class-pxjg/jyjgtzgg';
import { useEffect, useState } from 'react';
import TopNav from './../components/TopNav';
import { KHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';
import styles from './index.less';
import Footer from '@/components/Footer';
import { useModel } from 'umi';

const NoticeDetails = (props: any) => {
  const { allDataSource, index, infoType } = props.location.state;
  const { initialState } = useModel('@@initialState');
  const [nrInfo, setNrInfo] = useState<any>();

  useEffect(() => {
    if (allDataSource[index].KCMC) {
      return;
    }
    getData();
  }, [allDataSource[index].id]);

  const getData = async () => {
    if (infoType === 'zc') {
      const zcResult = await JYJGTZGG({ id: allDataSource[index].id });
      setNrInfo(zcResult.data.NR);
    } else {
      const tzResult = await KHJYTZGG({ id: allDataSource[index].id });
      setNrInfo(tzResult.data.NR);
    }
  };

  return (
    <div className={styles.DetailsBox}>
      <TopNav title="通告详情" state={true} />
      {allDataSource[index]?.BT ? <div className={styles.title}>{allDataSource[index]?.BT}</div> : ''}
      {allDataSource[index]?.RQ ? <div className={styles.time}>发布时间：{allDataSource[index]?.RQ}</div> : ''}
      {allDataSource[index].createdAt || allDataSource[index].createdAt ? <div className={styles.line} /> : ''}
      <>
        <div dangerouslySetInnerHTML={{ __html: nrInfo }} className={styles.contents} />
        <div className={styles.xb}>
          <Footer copyRight={initialState?.buildOptions.ENV_copyRight} />
        </div>
      </>
    </div>
  );
};

export default NoticeDetails;
