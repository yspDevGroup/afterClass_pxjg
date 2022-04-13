import { useModel, history } from 'umi';
import { Col, Row, Image, Avatar } from 'antd';
import styles from './index.less';
import Overview from './components/Overview';
import Notice from './components/Notice';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import IconFont from '@/components/CustomIcon';
import { defUserImg } from '@/constant';
import { removeOAuthToken } from '@/utils';
import TopBgImg from '@/assets/topInfoBG.png';

const Home = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  return (
    <div className={styles.indexPage}>
      <div className={styles.topInfo} style={{ height: '74px', backgroundImage: 'url(' + TopBgImg + ')' }}>
        <Row className={styles.teacherInfo}>
          <Col span={22}>
            <p>
              {currentUser?.XM === '未知' && currentUser.wechatUserId ? (
                <WWOpenDataCom type="userName" openid={currentUser.wechatUserId} />
              ) : (
                currentUser?.XM
              )}
              老师，您好！
            </p>
            <div>
              <Avatar size={18} style={{ height: 0 }} src={<Image src={currentUser?.avatar} fallback={defUserImg} />} />
              <span className={styles.school}>{currentUser?.QYMC ? currentUser?.QYMC : ''}</span>
            </div>
          </Col>
          <Col span={2}>
            <a
              onClick={() => {
                setInitialState({ ...initialState!, currentUser: null });
                removeOAuthToken();
                const authType: AuthType = (localStorage.getItem('authType') as AuthType) || 'local';
                history.replace(authType === 'wechat' ? '/authCallback/overDue' : '/');
              }}
            >
              <IconFont type="icon-tuichu" className={styles.signOut} />
            </a>
          </Col>
        </Row>
      </div>
      <div className={styles.pageContent}>
        <div className={`${styles.noticeArea} ${styles[initialState?.buildOptions.ENV_type || 'dev']}`} />
        {/* <Things/> */}
        <Overview />
        <Notice />
      </div>
    </div>
  );
};

export default Home;
