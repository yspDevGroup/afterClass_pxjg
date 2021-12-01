import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Space, Button, message, Tag, Input, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'umi';
import { getCourseSchools } from '@/services/after-class-pxjg/khjyjg';
import { LeftOutlined } from '@ant-design/icons';
import styles from '../index.less';
import EllipsisHint from '@/components/EllipsisHint';
import { getTableWidth } from '@/utils';

const { Search } = Input;
const Appraise = (props: any) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { id, KCMC } = props.location?.state?.data;
  const [dataSource, setDataSource] = useState<any>([]);
  const [school, setSchool] = useState<string>();

  const columns: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      align: 'center',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left'
    },
    {
      title: '学校名称',
      dataIndex: 'XXMC',
      key: 'XXMC',
      width: 130,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '所属学段',
      key: 'XD',
      dataIndex: 'XD',
      align: 'center',
      width: 130,
      search: false,
      render: (_: any, record: any) => {
        const text = record?.XD?.split(/,/g);
        return (
          <EllipsisHint
            width="100%"
            text={
              text?.length &&
              text.map((item: any) => {
                return (
                  <Tag key={item} style={{ margin: '4px' }}>
                    {item}
                  </Tag>
                );
              })
            }
          />
        );
      }
    },
    {
      title: '联系人',
      key: 'LXR',
      dataIndex: 'LXR',
      align: 'center',
      width: 110,
      search: false
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 150,
      search: false
    },
    {
      title: '课程评分',
      dataIndex: 'PJFS',
      key: 'PJFS',
      align: 'center',
      width: 180,
      render: (_: any, record: any) => {
        const fs = Number(Number(record.PJFS).toFixed(1)) || 0;
        return <Rate allowHalf defaultValue={fs} disabled={true} />;
      }
    },
    // {
    //   title: '课程数量',
    //   key: 'KHKCSQs',
    //   dataIndex: 'KHKCSQs',
    //   align: 'center',
    //   width: 90,
    //   search: false,
    //   render: (text:any) =>text.length
    // },
    {
      title: '操作',
      align: 'center',
      search: false,
      width: 120,
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space>
            <Link
              to={{
                pathname: '/query/Appraise/class',
                state: { KCMC, KHKCSJId: id, XXMC: record?.XXMC }
              }}
            >
              查看课程班
            </Link>
          </Space>
        );
      }
    }
  ];
  useEffect(() => {
    (async () => {
      const res = await getCourseSchools({
        KHKCSJId: id,
        XXMC: school
      });
      if (res.status === 'ok') {
        setDataSource(res.data?.rows);
      } else {
        message.error(res?.message || '数据获取失败，请联系系统管理员或稍后再试');
      }
    })();
  }, [school]);
  return (
    <div>
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
        <div className={styles.searchs}>
          <span>
            学校名称：
            <Search
              allowClear
              style={{ width: 200 }}
              onSearch={(val) => {
                setSchool(val);
              }}
            />
          </span>
        </div>
        <ProTable
          headerTitle={KCMC}
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
          }}
          scroll={{ x: getTableWidth(columns) }}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
          search={false}
        />
      </div>
    </div>
  );
};
Appraise.wrappers = ['@/wrappers/auth'];
export default Appraise;
