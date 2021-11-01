import { useModel, history } from 'umi';
import { Col, Row, Image, Avatar } from 'antd';
import styles from './index.less';
import Overview from './components/Overview';
import Notice from './components/Notice';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import IconFont from '@/components/CustomIcon';
import { defUserImg } from '@/constant';
import { removeOAuthToken } from '@/utils';

const Home = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  return (
  <div className={styles.indexPage}>
    <div className={styles.topInfo}>
        <Row style={{ height: '74px' }} className={styles.teacherInfo} >
          <Col span={22}>
            <p>{currentUser?.UserId === '未知' && currentUser.wechatUserId ? (
                  <WWOpenDataCom type="userName" openid={currentUser.wechatUserId} />
                ) : (
                  currentUser?.UserId
                )}老师，您好！</p>
            <div>
            <Avatar size={18} style={{height: 0}} src={<Image src={currentUser?.avatar} fallback={defUserImg} />} />
              <span className={styles.school}>未来之星国际学校</span>
            </div>
          </Col>
          <Col span={2}>
            <a onClick={() => {
              setInitialState({ ...initialState!, currentUser: null });
              removeOAuthToken();
              history.replace('/authCallback/overDue');
            }}>
              <IconFont type="icon-tuichu" className={styles.signOut} />
            </a>
          </Col>
        </Row>
      </div>
    <div className={styles.pageContent}>
        <div className={`${styles.noticeArea} ${styles[initialState?.buildOptions.ENV_type || 'dev']}`} />
        {/* <Things/> */}
        <Overview/>
        <Notice/>
    </div>
  </div>
  )
}

export default Home;
