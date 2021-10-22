import styles from '../index.less';
import ListComp from '../components/ListComponent';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { history } from 'umi';
import TopNav from './../components/TopNav'

const AllThings = (props: any) => {
const { allDataSource } = props.location.state

  return (
    <div>
      <TopNav />
    <div className={styles.allThings}>
        <div style={{marginTop: 50}}>
        <ListComp listData={allDataSource} />
        </div>
    </div>
    </div>

  );
};

export default AllThings;
