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
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      align: 'center'
    },
    {
      title: '巡课日期',
      dataIndex: 'RQ',
      key: 'RQ',
      align: 'center',
      width: 120,
      valueType: 'date'
    },
    {
      title: '巡课教师',
      dataIndex: 'XKJS',
      key: 'XKJS',
      align: 'center',
      render: (text: any) => text?.XM,
      width: 120
    },
    {
      title: '授课教师',
      dataIndex: 'SKJS',
      key: 'SKJS',
      align: 'center',
      render: (text: any) => text?.XM,
      width: 120
    },
    {
      title: '班级名称',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      render: (text: any) => text?.BJMC,
      width: 120
    },
    {
      title: '准时上课',
      dataIndex: 'SFZSSK',
      key: 'SFZSSK',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
      width: 120
    },
    {
      title: '为原定教师',
      dataIndex: 'SFYDJS',
      key: ' SFYDJS',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
      width: 150
    },
    {
      title: '课堂点名',
      dataIndex: 'SFDM',
      key: ' SFDM',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
      width: 120
    },
    {
      title: '实到人数是否准确',
      dataIndex: 'RSSFZQ',
      key: ' RSSFZQ',
      align: 'center',
      render: (text) => <span style={{ color: text ? 'black' : 'red' }}>{text ? '是' : '否'}</span>,
      width: 150
    },
    {
      title: '应到人数',
      dataIndex: 'YDRS',
      key: 'YDRS',
      align: 'center',
      width: 120,
    },
    {
      title: '实到人数',
      dataIndex: 'SDRS',
      key: 'SDRS',
      align: 'center',
      width: 120,
    },
    {
      title: '巡课确认人数',
      dataIndex: 'QRRS',
      key: 'QRRS',
      align: 'center',
      width: 120,
    },
    {
      title: '备注信息',
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
        返回上一页
      </Button>
      <div className={styles.TabTop}>
        <span style={{ lineHeight: '32px' }}>{`${KHKCSJ.KCMC}(${XXJBSJ.XXMC})`}</span>
        <span>
          所属学年学期：
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
          巡课日期：<DatePicker
            style={{ width: 150 }}
            onChange={(value) => {
              setPatrolData(value)

            }}
          />
        </span>
        <span>
          机构授课教师：
          <Select
            style={{ width: 150 }}
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
Details.wrappers = ['@/wrappers/auth'];

export default Details
