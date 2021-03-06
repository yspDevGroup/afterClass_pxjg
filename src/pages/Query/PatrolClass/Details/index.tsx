import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Select, Button, Tooltip, DatePicker, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { LeftOutlined, } from '@ant-design/icons';
import { getKHXKJL } from '@/services/after-class-pxjg/khxkjl'
import { getAllSemester } from '@/services/after-class-pxjg/khjyjg'
import styles from '../index.less'
import { useModel } from 'umi';
import { getAllJZGJBSJ, } from '@/services/after-class-pxjg/jzgjbsj';

const { Option } = Select;
const Details = (props: any) => {
  const { KHKCSJ, XXJBSJ, id } = props.location.state
  const [PatrolData, setPatrolData] = useState<any>('');
  const [dataSource, setDataSource] = useState<any>([]);
  const [term, setTerm] = useState<string>();
  const [termList, setTermList] = useState<any>();
  const [teacher, setTeacher] = useState<any>('');
  const [teacherList, setteacherList] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const getXNXQ = async (xxdm: string, jgdm: string) => {
    const res = await getAllSemester({
      KHJYJGId: jgdm,
      XXJBSJId: xxdm,
    });
    if (res?.status === 'ok') {
      const { data = [] } = res;
      const term = [].map.call(data, (item: any) => {
        return {
          value: item.id,
          text: `${item.XN} ${item.XQ}`
        };
      });

      setTermList(term);
    } else {
      message.error(res.message,);
    }
  };
  const getTeacher = async () => {
    const res = await getAllJZGJBSJ({
      KHJYJGId: currentUser?.jgId,
      page: 0,
      pageSize: 0

    })
    if (res.status === 'ok') {
      setteacherList(res.data?.rows)
    }
  }
  useEffect(() => {
    (async () => {
      const res = await getKHXKJL(
        {
          XXJBSJId: XXJBSJ.id,
          KHKCSJId: KHKCSJ.id,
          page: 0,
          pageSize: 0
        }
      )
      setDataSource(res.data?.rows)
    })()
    if (currentUser?.jgId) {
      getXNXQ(XXJBSJ.id, currentUser?.jgId);
    }
    getTeacher()
  }, []),
    useEffect(() => {
      (async () => {
        const res = await getKHXKJL(
          {
            XXJBSJId: XXJBSJ.id,
            KHKCSJId: KHKCSJ.id,
            RQ: PatrolData,
            SKJSId: teacher,
            XNXQId: term,
            page: 0,
            pageSize: 0,
          }
        )
        setDataSource(res.data?.rows)
      })()
    }, [PatrolData, term, teacher])
  const columns: ProColumns<API.KHXSDD>[] | undefined = [
    {
      title: '??????',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '????????????',
      dataIndex: 'RQ',
      key: 'RQ',
      align: 'center',
      width: 120,
      fixed: 'left',
      valueType: 'date'
    },
    {
      title: '????????????',
      dataIndex: 'XKJS',
      key: 'XKJS',
      align: 'center',
      render: (text: any) => text?.XM,
      width: 120
    },
    {
      title: '????????????',
      dataIndex: 'SKJS',
      key: 'SKJS',
      align: 'center',
      render: (text: any) => text?.XM,
      width: 120
    },
    {
      title: '????????????',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      render: (text: any) => text?.BJMC,
      width: 120
    },
    {
      title: '????????????',
      dataIndex: 'SFZSSK',
      key: 'SFZSSK',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '???' : '???'}</span>,
      width: 120
    },
    {
      title: '???????????????',
      dataIndex: 'SFYDJS',
      key: '??SFYDJS',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '???' : '???'}</span>,
      width: 150
    },
    {
      title: '????????????',
      dataIndex: 'SFDM',
      key: '??SFDM',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '???' : '???'}</span>,
      width: 120
    },
    {
      title: '????????????????????????',
      dataIndex: 'RSSFZQ',
      key: '??RSSFZQ',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '???' : '???'}</span>,
      width: 150
    },
    {
      title: '????????????',
      dataIndex: 'YDRS',
      key: 'YDRS',
      align: 'center',
      width: 120,
    },
    {
      title: '????????????',
      dataIndex: 'SDRS',
      key: 'SDRS',
      align: 'center',
      width: 120,
    },
    {
      title: '??????????????????',
      dataIndex: 'QRRS',
      key: 'QRRS',
      align: 'center',
      width: 120,
    },
    {
      title: '????????????',
      dataIndex: 'BZXX',
      key: 'BZXX',
      align: 'center',
      width: 220,
      render: (text) => {
        return (
          <Tooltip title={text}>
            <div style={{
              textOverflow: 'ellipsis',
              width: '100px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textAlign: 'center',
              margin: '0 auto',
            }}>{text}</div>
          </Tooltip>
        )
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
        ???????????????
      </Button>
      <div className={styles.TabList}>
        <div className={styles.TabTop}>
          <span>
            ?????????????????????
            <Select
              value={term}
              style={{ width: 200 }}
              onChange={(value: string) => {
                setTerm(value);
              }}
            >
              {termList?.map((item: any) => {
                return <Option key={item.value} value={item.value}>{item.text}</Option>;
              })}
            </Select>
          </span>
          <span>
            ???????????????<DatePicker
              style={{ width: 150 }}
              onChange={(value) => {
                setPatrolData(value)

              }}
            />
          </span>
          <span>
            ?????????????????????
            <Select
              style={{ width: 150 }}
              allowClear
              onChange={(value: string) => {
                setTeacher(value)
              }}
            >
              {teacherList?.map((item: any) => {
                return <Option key={item.id} value={item.id}>{item.XM}</Option>;
              })}
            </Select>
          </span>
        </div>
        <ProTable
          headerTitle={`${KHKCSJ.KCMC} / ${XXJBSJ.XXMC}`}
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1,
          }}
          scroll={{ x: 1500 }}
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
Details.wrappers = ['@/wrappers/auth'];

export default Details
