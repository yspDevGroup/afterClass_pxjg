import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Space, Tag, Button } from 'antd';
import { Link, useModel } from 'umi';
import { getKHKCSQ, } from '@/services/after-class-pxjg/khkcsq';
import { useEffect, useState } from 'react'
import EllipsisHint from '@/components/EllipsisHint';
import { LeftOutlined, } from '@ant-design/icons';
import styles from '../index.less'
import WWOpenDataCom from '@/components/WWOpenDataCom';

const PatrolClass = (props:any) => {
  const {id } = props.location.state
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getKHKCSQ({
        JGId: currentUser?.jgId,
        XXJBSJId:id,
        ZT: [1],
        page: 0,
        pageSize: 0
      })
      if (res.status === 'ok') {
        setDataSource(res.data.rows)
      }


    })()

  }, [])
  const columns: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      align: 'center',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
    },
    {
      title: '课程名称',
      dataIndex: 'KHKCSJ',
      key: 'KHKCSJ',
      align: 'center',
      width: 150,
      ellipsis: true,
      render: (_, record) => record.KHKCSJ?.KCMC
    },
    {
      title: '学校名称',
      key: 'XXJBSJ',
      dataIndex: 'XXJBSJ',
      align: 'center',
      width: 150,
      ellipsis: true,
      render: (_, record) => record.XXJBSJ?.XXMC
    },

    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      width: 100,
      search: false,
      ellipsis: true,
      render: (_, record) => {
        return record.KHKCSJ?.KHKCLX?.KCTAG || '-';
      }
    },
    {
      title: '适用年级',
      key: 'SYNJ',
      dataIndex: 'SYNJ',
      align: 'center',
      width: 200,
      render: (_, record) => {
        const grade = record.KHKCSJ?.NJSJs;
        return (
          <EllipsisHint
            width="100%"
            text={grade?.map((item) => {
              return (
                <Tag key={item.id} color="#EFEFEF" style={{ color: '#333' }}>
                  {item.NJMC}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '任课教师',
      key: '',
      dataIndex: '',
      align: 'center',
      width: 150,
      render: (_, record) => {
        const teacher = record.KHKCSJ?.KHKCJs;
        return (
          <EllipsisHint
            width="100%"
            text={teacher?.map((item: any) => {
              const showWXName = item.JZGJBSJ?.XM === '未知' && item.JZGJBSJ?.WechatUserId;
              return <Tag key={item.JZGJBSJId}>{showWXName ? (<WWOpenDataCom type="userName" openid={item.JZGJBSJ.WechatUserId} />):(item.JZGJBSJ.XM)}</Tag>;
            })}
          />
        );
      }
    },

    {
      title: '操作',
      dataIndex: '',
      key: '',
      align: 'center',
      width: 230,
      render: (_, record) => {
        return (
          <Space>
            <Link
              to={{
                pathname: '/query/PatrolClass/Details',
                state: record
              }}
            >
              巡课详情
            </Link>
            {/* <Link
                      to={{
                        pathname: '/courseManagement/mechanismCourse/edit',
                        state: {
                          type: 'course',
                          data: {
                            type: 'detail',
                            xxid: record.XXJBSJId,
                            jgid: currentUser?.jgId,
                            kcid: record.KHKCSJ?.id,
                            xxmc: record.XXJBSJ?.XXMC
                          }
                        }
                      }}
                    >
                      课程详情
                    </Link> */}

          </Space>
        );
      }
    },





  ]
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.go(-1);
        }}
        style={{
          marginBottom: '24px',
        }}
      >
        <LeftOutlined />
        返回上一页
      </Button>
      <div className={styles.TabList}>
        <ProTable
          dataSource={dataSource}
          columns={columns}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false,
          }}
          search={false}


        />

      </div>


    </>
  )
}
PatrolClass.wrappers = ['@/wrappers/auth'];
export default PatrolClass