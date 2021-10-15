import { Link, useModel } from 'umi';
import { Select, Rate, Tag } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useEffect, useState } from 'react';
import { getCourseEvaluation } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { getCourses } from '@/services/after-class-pxjg/jyjgsj';

import styles from './index.less';

const Course = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [coursName, setcoursName] = useState<any>();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [choseClass, setchoseClass] = useState('');
  const [courseList, setcourseList] = useState<any>([]);
  const [course, setcourse] = useState<any>();
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
      align: 'center'
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      render: (test: any) => {
        return test.KCTAG;
      }
    },
    {
      title: '任课教师',
      dataIndex: 'KHKCJs',
      key: 'KHKCJs',
      align: 'center',
      render: (test: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={test?.map((item: any) => {
              return (
                <Tag color="#EFEFEF" style={{ color: '#333' }} key={item.id}>
                  {item.JZGJBSJ.XM}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '课程评分',
      dataIndex: 'PJFS',
      key: 'PJFS',
      align: 'center',
      width: 200,
      render: (text: any) => <Rate count={5} defaultValue={text} disabled={true} />
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
                data: record
              }
            }}
          >
            详情
          </Link>
        </>
      )
    }
  ];
  useEffect(() => {
    (async () => {
      const res = await getCourses({
        JGId: currentUser?.jgId
      })
      if (res.status === 'ok') {
        setcourseList(res.data?.rows)
      }
    })()
   
  }, []);
  useEffect(() => {
    (async () => {
      const res = await getCourseEvaluation({
        KHJYJGId: currentUser?.jgId,
        KCMC:course
      });
      setDataSource(res.data.rows);
    })();
  }, [course]);
  return (
    <>
      <div style={{ padding: '24px 16px' }}>
      <span style={{ marginLeft: '24px' }}>
          课程名称：
          <Select
            style={{ width: 200 }}
            onChange={(value: string) => {
              setcourse(value)
            }}
          >
            {courseList?.map((item: any) => {
              return <Option key={item.id} value={item.KCMC}>{item.KCMC}</Option>;
            })}
          </Select>
        </span>
      </div>
      <div className={styles.Tables}>
        <ProTable
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          search={false}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
        />
      </div>
    </>
  );
};
Course.wrappers = ['@/wrappers/auth'];
export default Course;
