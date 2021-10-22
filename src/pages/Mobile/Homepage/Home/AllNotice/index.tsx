import { Button } from 'antd';
import ListComp from '../components/ListComponent';
import styles from '../index.less';
import TopNav from './../components/TopNav'

const AllNotice = (props: any) => {
const { allDataSource , type } = props.location.state

  return (
    <div>
      <TopNav />
      <div className={styles.allNotice}>

      <div style={{marginTop: 50}}>
        <ListComp listData={allDataSource} infoType = {type}/>
      </div>
    </div>
    </div>

  );
};

export default AllNotice;
