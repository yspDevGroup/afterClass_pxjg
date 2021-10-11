import { Link, useModel } from 'umi';
import { Select, Rate,Tag } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useEffect, useState } from 'react';
import { getAllCourses } from '@/services/after-class-pxjg/khjyjg';
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';

const Course = (data: any) => {
  // const { id } = data.location.state
  const [dataSource, setDataSource] = useState<any>([
    {
      KCMC: '少儿芭蕾舞',
      KHKCLX: '艺术类',
      RKJS: ['李磊','韩梅梅','李艳茹'],
      PJFS: 5
    },
    {
      KCMC: '篮球',
      KHKCLX: '体育',
      RKJS: ['姚明','王治郅','朱芳雨'],
      PJFS: 4
    },
    {
      KCMC: '国画',
      KHKCLX: '艺术类',
      RKJS: ['齐白石','毕加索'],
      PJFS: 5
    }
  ]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [termList, setTermList] = useState<any>([]);
  const { Option } = Select;
  const columns: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center'
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',

    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      render: (test: any) => {
        return test
      },
    },
    {
      title: '任课教师',
      dataIndex: 'RKJS',
      key: 'RKJS',
      align: 'center',
      render: (type:any) => {
    return (
          <EllipsisHint
            width="100%"
            text={type?.map((item: any) => {
              return (
                <Tag color="#EFEFEF" style={{ color: '#333' }}>
                  {item}
                </Tag>
              );
            })}
          />
        )
      
      }


    },
    {
      title: '课程评分',
      dataIndex: 'PJFS',
      key: 'PJFS',
      align: 'center',
      width: 200,
      render: (text: any) => <Rate count={5} defaultValue={text} disabled={true} />,
    },

    {
      title: '合作学校',
      dataIndex: 'XSXM',
      key: 'XSXM',
      align: 'center',
      render: (_, record) => (
        <>
          <Link
            to={{
              pathname: '/query/appraise/school',
              state: {
                type: 'detail',
                data: record,
              },
            }}
          >
            详情
          </Link>
        </>
      ),
    },
  ];
  return (
    <>
      <div style={{ padding: '24px 16px' }}>
        <span  >
          所属学校学年学期：
          <Select
            // value={curXNXQId}
            style={{ width: 200 }}
            onChange={(value: string) => {
              //选择不同学期从新更新页面的数据
              // setCurXNXQId(value);
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
        </span>
      </div>
      <ProTable
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        search={false}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false,
        }}

      />
    </>



  )
}
Course.wrappers = ['@/wrappers/auth']
export default Course