import { Select, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import type { Moment } from 'moment';
import type { ReactNode } from '@umijs/renderer-react/node_modules/@types/react';
import SearchLayout from '@/components/Search/Layout';
import styles from './index.less';
import { getCourses, getSchools } from '@/services/after-class-pxjg/khjyjg';
import Semester from '@/components/Semester';
import { getAllJZGJBSJ } from '@/services/after-class-pxjg/jzgjbsj';
import ShowName from '@/components/ShowName';

const { Search } = Input;
const { Option } = Select;

type formSelectProps = {
  getDataSource?: any;
  Weeks?: any;
  setWeekNum: React.Dispatch<any>;
  weekNum: any;
};

const FormSelect = (props: formSelectProps) => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { getDataSource, Weeks, setWeekNum, weekNum } = props;
  const [XNXQ, setXNXQ] = useState<string>('');
  const [XXJBSJId, setXXJBSJId] = useState<string | undefined>(undefined);
  const [JSId, setJSId] = useState<string | undefined>(undefined);
  const [KCId, setKCId] = useState<string | undefined>(undefined);
  // 获取合作学习
  const [XXData, setXXData] = useState<any[]>();
  // 获取机构课程
  const [KCData, setKCData] = useState<any[]>();
  const [JSData, setJSData] = useState<any[]>();

  useEffect(() => {
    if (XNXQ) {
      if (getDataSource) {
        getDataSource(XNXQ, XXJBSJId, KCId, JSId);
      }
    }
  }, []);

  const getXX = async () => {
    // 获取机构合作的学校
    const res = await getSchools({
      KHJYJGId: currentUser?.jgId || '',
      XN: XNXQ.substring(0, 9),
      XQ: XNXQ.substring(10, 14)
    });
    if (res?.status === 'ok') {
      setXXData(res?.data);
    }
  };
  useEffect(() => {
    (async () => {
      // 获取机构课程
      const res = await getCourses({
        JGId: currentUser?.jgId,
        page: 0,
        pageSize: 0
      });
      if (res.status === 'ok') {
        setKCData(res.data?.rows);
      }
      // 获取机构教师
      const resJS = await getAllJZGJBSJ({
        KHJYJGId: currentUser?.jgId,
        page: 0,
        pageSize: 0
      });
      if (resJS.status === 'ok') {
        setJSData(resJS.data?.rows);
      }
    })();
  }, []);
  useEffect(() => {
    if (XNXQ) {
      getXX();
    }
  }, [XNXQ]);

  const onSelectChange = (value: string) => {
    setXNXQ(value);
    setXXJBSJId(undefined);
    setJSId(undefined);
    setKCId(undefined);
  };
  console.log(KCId, 'KCId');

  return (
    <div className={styles.FormSelect}>
      <SearchLayout>
        <div>
          <span style={{ fontSize: 14 }}>
            学年学期：
            <Semester onChange={onSelectChange} />
          </span>
        </div>
        <div>
          <label htmlFor="xxmc">学校名称： </label>
          <Select
            value={XXJBSJId}
            allowClear
            placeholder="请选择"
            onChange={(value: string) => {
              setXXJBSJId(value);
              setJSId(undefined);
              setKCId(undefined);
              getDataSource(XNXQ, value, '', '', '');
            }}
          >
            {XXData?.map((item: any) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.XXMC}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <label htmlFor="xxmc">课程名称： </label>
          <Select
            value={KCId}
            allowClear
            placeholder="请选择"
            onChange={(value: string) => {
              setKCId(value);
              setJSId(undefined);
              getDataSource(XNXQ, XXJBSJId, value, '');
            }}
          >
            {KCData?.map((item: any) => {
              return (
                <Option key={item?.id} value={item?.id}>
                  {item?.KCMC}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <label htmlFor="name">教师姓名： </label>
          <Select
            value={JSId}
            allowClear
            placeholder="请选择"
            onChange={(value: string) => {
              setJSId(JSId);
              getDataSource(XNXQ, XXJBSJId, KCId, value);
            }}
          >
            {JSData?.map((item: any) => {
              return (
                <Option key={item?.id} value={item?.id}>
                  <ShowName XM={item.XM} type="userName" openid={item.WechatUserId} />
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <label htmlFor="name">教学周： </label>
          <Select
            value={weekNum?.toString()}
            allowClear
            placeholder="请选择"
            onChange={(value: string) => {
              if (value) {
                setWeekNum([value]);
              } else {
                setWeekNum(undefined);
              }
            }}
          >
            {Weeks?.map((item: any) => {
              return (
                <Option value={item} key={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
      </SearchLayout>
    </div>
  );
};
export default FormSelect;
