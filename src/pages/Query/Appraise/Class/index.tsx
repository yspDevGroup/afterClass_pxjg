import { Link, useModel } from 'umi';
import { Select, Rate, Button, Tag } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { useState } from 'react';
import { getClassesEvaluation } from '@/services/after-class-pxjg/khbjsj';
import EllipsisHint from '@/components/EllipsisHint';
import styles from './index.less';
// eslint-disable-next-line @typescript-eslint/no-duplicate-imports
import { useEffect } from 'react';
import WWOpenDataCom from '@/components/WWOpenDataCom';
const { Option } = Select;
const Class = (props: any) => {
  const { KCMC, KHKCSJId, XXMC } = props.location.state;
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
      title: '班级名称',
      dataIndex: 'BJMC',
      key: 'BJMC',
      align: 'center',
      fixed: 'left',
      width: 130,
      ellipsis: true
    },
    {
      title: '主班',
      dataIndex: 'KHBJJs',
      key: 'KHBJJs',
      align: 'center',
      width: 130,
      ellipsis: true,
      render: (_: any, record: any) => {
        const teacher = record.KHBJJs;
        return (
          <EllipsisHint
            width="100%"
            text={teacher?.map((item: any) => {
              const showWXName = item.JZGJBSJ.XM === '未知' && item.JZGJBSJ.WechatUserId;
              return (
                <Tag key={item.JZGJBSJId}>
                  {showWXName ? <WWOpenDataCom type="userName" openid={item.JZGJBSJ?.WechatUserId} /> : item.JZGJBSJ.XM}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '评价人数',
      dataIndex: 'pj_count',
      key: ' pj_count',
      align: 'center',
      width: 110,
      ellipsis: true
    },
    {
      title: '班级人数',
      dataIndex: 'xs_count',
      key: 'xs_count ',
      align: 'center',
      width: 110,
      ellipsis: true
    },
    {
      title: '班级评分',
      dataIndex: 'pj_avg',
      key: 'pj_avg',
      align: 'center',
      width: 180,
      ellipsis: true,
      render: (text: any, record: any) => {
        const fs = Number(Number(record.pj_avg).toFixed(1)) || 0;
        return <Rate allowHalf defaultValue={fs} disabled={true} />;
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <>
          <Link
            to={{
              pathname: '/query/appraise/details',
              state: {
                type: 'detail',
                KCMC,
                XXMC,
                BJMC: record?.BJMC,
                BJId: record?.id
              }
            }}
          >
            互评详情
          </Link>
        </>
      )
    }
  ];
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res1 = await getClassesEvaluation({
        KHKCSJId,
        page: 0,
        pageSize: 0
      });
      setDataSource(res1.data.rows);
    })();
  }, []);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.go(-1);
        }}
        style={{
          marginBottom: '24px'
        }}
      >
        <LeftOutlined />
        返回上一页
      </Button>
      <div className={styles.Tables}>
        <ProTable
          headerTitle={`${KCMC} / ${XXMC}`}
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
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
    </>
  );
};
Class.wrappers = ['@/wrappers/auth'];
export default Class;
