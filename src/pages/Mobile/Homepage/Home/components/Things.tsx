import { useEffect, useState } from 'react';
import noData from '@/assets/noData.png';
import styles from '../index.less';
import { getAllInstitutions, JYJGSJ, toIntroduceCourses } from '@/services/after-class-pxjg/jyjgsj';
import { Link, useModel } from 'umi';
import { Empty, message, Tabs } from 'antd';
import IconFont from '@/components/CustomIcon';
import ListComp from '../components/ListComponent';

const { TabPane } = Tabs;
const Things = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { jgId } = currentUser!;
  const [dataSource, setDataSource] = useState<any>();
  const [allDataSource, setAllDataSource] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const resJYJGSJ = await JYJGSJ({ id: jgId! });
      if (resJYJGSJ.status === 'ok') {

        //待引入课程
        const dyrkcDataRes = await toIntroduceCourses({
          page: 1,
          pageSize: 3,
          XZQHM: resJYJGSJ.data.XZQH,
          // KCMC: param.KCMC
        });

        //待准入机构
        const dzrjgDataRes = await getAllInstitutions(
          {
            ZT: [0],
            LX: 0,
            XZQHM: resJYJGSJ.data.XZQH,
            page: 1,
            pageSize: 3
          },
        );
        if (dzrjgDataRes.status === 'ok') {
          let newData = {
            type: 'picList',
            cls: 'picList',
            list: [...dzrjgDataRes.data?.rows, ...dyrkcDataRes.data?.rows].slice(0, 3) || [],
            noDataText: '暂无课程',
            noDataImg: noData,
          };
          setDataSource(newData);
          setAllDataSource(
            {
              type: 'picList',
              cls: 'picList',
              list: [...dzrjgDataRes.data?.rows, ...dyrkcDataRes.data?.rows] || [],
              noDataText: '暂无课代办',
              noDataImg: noData,
            }
          );
        } else {
          message.error(dzrjgDataRes.message);
          return {};
        }
      }
    }

    fetchData();
  }, []);
  return (
    <div className={styles.things}>
      <Tabs
        centered={false}
        tabBarExtraContent={{
          right: (
            dataSource?.length ? <Link to={{ pathname: '/mobile/homepage/home/allThings', state: { allDataSource } }}>
              查看更多 <IconFont type="icon-gengduo" className={styles.gengduo} />
            </Link> : ''
          ),
        }}
      >
        <TabPane tab="待办事项" key="upcoming">
          {
            dataSource?.list?.length ? <ListComp listData={dataSource} /> :<Empty
            image={noData}
            imageStyle={{
              minHeight: 135
            }}
            style={{ minHeight: 200,background: '#fff',borderRadius: '8px' }}
            description={'暂无待办事项'} />
          }
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Things;
