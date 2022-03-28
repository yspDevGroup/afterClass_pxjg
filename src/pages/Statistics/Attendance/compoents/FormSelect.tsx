import { Select, Input, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import type { Moment } from 'moment';
import type { ReactNode } from '@umijs/renderer-react/node_modules/@types/react';
import SearchLayout from '@/components/Search/Layout';
import styles from './index.less';
import { getSchools } from '@/services/after-class-pxjg/khjyjg';
import Semester from '@/components/Semester';

const { Search } = Input;
const { Option } = Select;

const { RangePicker } = DatePicker;
type formSelectProps = {
  getDataSource?: any;
  exportButton: ReactNode;
};

const FormSelect = (props: formSelectProps) => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { getDataSource, exportButton } = props;
  const [XNXQ, setXNXQ] = useState<string>('');
  const [newDate, setNewDate] = useState<Moment[]>([]);
  const [XM, setXM] = useState<string | undefined>(undefined);
  const [XXJBSJId, setXXJBSJId] = useState<string | undefined>(undefined);
  const [XXData, setXXData] = useState<any[]>();

  useEffect(() => {
    if (XNXQ && newDate?.length > 0) {
      if (getDataSource) {
        getDataSource(XNXQ, newDate, XM, XXJBSJId);
      }
    } else {
      getDataSource(XNXQ, '', XM, XXJBSJId);
    }
  }, [newDate]);

  const getXX = async () => {
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
    if (XNXQ) {
      getXX();
    }
  }, [XNXQ]);

  const onSelectChange = (value: string) => {
    setXNXQ(value);
    console.log(value);
  };

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
          <label htmlFor="date">考勤日期：</label>
          <RangePicker
            style={{ width: '220px' }}
            allowClear
            format="YYYY-MM-DD"
            value={newDate}
            onChange={(value: any) => {
              console.log(value, 'value');
              setNewDate(value);
            }}
          />
        </div>
        <div>
          <label htmlFor="xxmc">学校名称： </label>
          <Select
            value={XXJBSJId}
            allowClear
            onChange={(value: string) => {
              setXXJBSJId(value);
              setXM(undefined);
              getDataSource(XNXQ, newDate, '', value);
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
          <label htmlFor="name">教师姓名： </label>
          <Search
            allowClear
            value={XM}
            onChange={(value) => {
              setXM(value.target.value);
            }}
            onSearch={(value) => {
              getDataSource(XNXQ, newDate, value, XXJBSJId);
            }}
          />
        </div>
      </SearchLayout>
      {exportButton}
    </div>
  );
};
export default FormSelect;
