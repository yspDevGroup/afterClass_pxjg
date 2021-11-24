/*
 * @Author: wuzhan
 * @Date: 2021-10-27 09:00:26
 * @LastEditTime: 2021-11-18 11:41:55
 * @LastEditors: Sissle Lynn
 * @Description: 学年学期
 */
import type { FC } from 'react';
import { message, Select } from 'antd';
import { useEffect, useState } from 'react';
import { queryXNXQList } from '@/services/local-services/xnxq';

const { Option } = Select;

type SemesterSelectProps = {
  XXJBSJId?: string;
  onChange?: (val: string) => void;
};
const SemesterSelect: FC<SemesterSelectProps> = ({ onChange, XXJBSJId }) => {
  const [termList, setTermList] = useState<any>();
  const [term, setTerm] = useState<string>();
  const getXNXQ = async (xxdm?: string) => {
    const res = await queryXNXQList(xxdm);
    const newData = res.xnxqList;
    const curTerm = res.current;
    if (newData) {
      setTermList(newData);
      setTerm(curTerm?.id || newData[0].id);
      onChange?.(curTerm?.id || newData[0].id);
    } else {
      message.error(res.message);
    }
  };
  useEffect(() => {
    if (XXJBSJId) {
      getXNXQ(XXJBSJId);
    }
  }, [XXJBSJId]);

  return (
    <div>
      <label htmlFor='term'>所属学年学期：</label>
      <Select
        value={term}
        allowClear
        onChange={(value: string) => {
          setTerm(value);
          onChange?.(value);
        }}
      >
        {termList?.map((item: any) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.text}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
export default SemesterSelect;
