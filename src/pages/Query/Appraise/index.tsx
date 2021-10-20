import { Link, useModel } from 'umi';
import { Select, Rate, Tag } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useEffect, useState } from 'react';
import { getCourseEvaluation } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import { getCourses } from '@/services/after-class-pxjg/jyjgsj';

import styles from './index.less';
import WWOpenDataCom from '@/components/WWOpenDataCom';

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
      fixed: 'left',
      align: 'center'
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      fixed: 'left',
      width: 130,
      ellipsis: true,
      align: 'center'
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      width: 120,
      ellipsis: true,
      render: (_: any, record: any) => {
        const text = record?.KHKCLX;
        return text?.KCTAG || '-';
      }
    },
    {
      title: '任课教师',
      dataIndex: 'KHKCJs',
      key: 'KHKCJs',
      align: 'center',
      width: 130,
      ellipsis: true,
      render: (_: any, record: any) => {
        const teacher = record.KHKCJs;
        return (
          <EllipsisHint
            width="100%"
            text={teacher?.map((item: any) => {
              const showWXName = item.JZGJBSJ.XM === '未知' && item.JZGJBSJ.WechatUserId;
              return <Tag key={item.JZGJBSJId}>{showWXName ? (<WWOpenDataCom type="userName" openid={item.JZGJBSJ.WechatUserId} />) : (item.JZGJBSJ.XM)}</Tag>;
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
      width: 180,
      render: (text: any) => <Rate count={5} defaultValue={text} disabled={true} />
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      width: 120,
      fixed:'right',
      ellipsis: true,
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
        KCMC: course
      });
      setDataSource(res.data.rows);
    })();
  }, [course]);
  return (
    <div className={styles.Tables}>
      <div style={{ padding: '24px 24px 0', backgroundColor: '#fff' }}>
        <span>
          课程名称：
          <Select
            allowClear
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
      <ProTable
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1,
        }}
        scroll={{ x: 900 }}
        search={false}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false
        }}
      />
    </div>
  );
};
Course.wrappers = ['@/wrappers/auth'];
export default Course;
