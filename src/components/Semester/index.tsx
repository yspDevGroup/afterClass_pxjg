/*
 * @Author: wuzhan
 * @Date: 2021-10-27 09:00:26
 * @LastEditTime: 2021-11-01 14:24:14
 * @LastEditors: zpl
 * @Description: In User Settings Edit
 * @FilePath: \afterClass_qxjyj\src\components\SemesterSelect\index.tsx
 */
import type { FC } from 'react';
import { message, Select } from 'antd';
import { getAllXNXQ } from '@/services/after-class-qxjyj/xnxq';
import { useEffect, useState } from 'react';
import { getCurrentXQ } from '@/utils';
import moment from 'moment';
const { Option } = Select;

type SemesterSelectProps = {
  onChange: any;
};
const Semester: FC<SemesterSelectProps> = ({ onChange }) => {
  const [term, setTerm] = useState<string>();
  const [XNXQList, setXNXQList] = useState<string[]>();

  useEffect(() => {
    let XNArr: number[] = [];
    let XNXQArr: string[] = [];
    // 生成一个从 start 到 end 的连续数组
    const generateArray = (start: number, end: number) => {
      return Array.from(new Array(end + 1).keys()).slice(start);
    };
    let XNXQNow = '';
    // 生成当前学年学期
    if (Number(moment(new Date()).format('MM')) > 2 && Number(moment(new Date()).format('MM')) < 9) {
      XNArr = generateArray(Number(moment(new Date()).format('YYYY')) - 4, Number(moment(new Date()).format('YYYY')));
      XNXQNow = `${Number(moment(new Date()).format('YYYY')) - 1}-${Number(
        moment(new Date()).format('YYYY')
      )}-第二学期`;
      setTerm(XNXQNow);
      onChange(XNXQNow);
    } else {
      XNArr = generateArray(
        Number(moment(new Date()).format('YYYY')) - 3,
        Number(moment(new Date()).format('YYYY')) + 1
      );
      if (Number(moment(new Date()).format('MM')) > 8) {
        XNXQNow = `${Number(moment(new Date()).format('YYYY'))}-${Number(
          moment(new Date()).format('YYYY') + 1
        )}-第一学期`;
      } else {
        XNXQNow = `${Number(moment(new Date()).format('YYYY')) - 1}-${Number(
          moment(new Date()).format('YYYY')
        )}-第一学期`;
      }
      setTerm(XNXQNow);
      onChange(XNXQNow);
    }
    XNArr.forEach((item: any) => {
      XNXQArr.push(`${item}-${item + 1}-第一学期`);
      XNXQArr.push(`${item}-${item + 1}-第二学期`);
    });
    setXNXQList(XNXQArr);
  }, []);

  return (
    <Select
      value={term}
      onChange={(value: string) => {
        setTerm(value);
        onChange(value);
      }}
      style={{ width: 170 }}
    >
      {XNXQList?.map((item: any) => {
        return (
          <Option key={item} value={item}>
            {item}
          </Option>
        );
      })}
    </Select>
  );
};
export default Semester;
