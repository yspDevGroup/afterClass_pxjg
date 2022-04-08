import { useEffect, useState } from 'react';
import { getTerm } from '@/pages/Graphic/component/utils';
import { agencyStatistical } from '@/services/after-class-pxjg/khjscq';
import { Link, useModel } from 'umi';
import { Button, message, Tooltip } from 'antd';
import { DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';
import ShowName from '@/components/ShowName';
import personImg from '@/assets/person.png';
import classImg from '@/assets/class.png';
import normalImg from '@/assets/normal.png';
import abnormalImg from '@/assets/abnormal.png';
import allHoursImg from '@/assets/allHours.png';
import Style from './index.less';
import Table from './compoents/TableList';
import FormSelect from './compoents/FormSelect';
import { isMoment } from 'moment';

const Attendance = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  // 学年学期列表数据
  const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);
  // 统计数据源
  const [collectData, setCollectData] = useState<any>();
  const [CurXN, setCurXN] = useState<any>();
  const [CurXQ, setCurXQ] = useState<any>();
  const [Name, setName] = useState<any>();
  const [newDate, setNewDate] = useState<any[]>([]);

  const getData = async (res: any) => {
    const result = await agencyStatistical({
      KHJYJGId: currentUser?.jgId || '',
      XN: res.XN,
      XQ: res.XQ,
      output: false
    });
    if (result?.status === 'ok' && result.data) {
      const { rows, ...rest } = result.data;
      setCollectData({ ...rest });
      setDataSource(rows);
    }
  };
  const teacher: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'XM',
      key: 'XM',
      align: 'center',
      fixed: 'left',
      width: 100,
      render: (_, record) => <ShowName type="userName" openid={record.WechatUserId} XM={record.XM} />
    },
    {
      title: (
        <span>
          授课班级数&nbsp;
          <Tooltip overlayStyle={{ maxWidth: '30em' }} title={<>以该时段教师实际出勤为基础统计</>}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      ),
      dataIndex: 'BJS',
      key: 'BJS',
      align: 'center',
      width: 110,
      render: (text, record) => record.bj_count
    },
    {
      title: (
        <span>
          已排课时总数&nbsp;
          <Tooltip overlayStyle={{ maxWidth: '30em' }} title={<>仅统计已指定授课教师的排课数据</>}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      ),
      dataIndex: 'KSS',
      key: 'KSS',
      width: 120,
      align: 'center',
      render: (text, record) => record.all_KSS || 0
    },
    {
      title: '出勤次数',
      dataIndex: 'CQS',
      key: 'CQS',
      align: 'center',
      width: 100,
      render: (text, record) => record.attendance || 0
    },
    {
      title: '缺勤次数',
      dataIndex: 'QQS',
      key: 'QQS',
      align: 'center',
      width: 100,
      render: (_: any, record: any) => {
        return Number(record.absenteeism) + Number(record.leave) + Number(record.substitute) || 0;
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      width: 100,
      fixed: 'right',
      render: (_, record) => (
        <>
          <Link
            to={{
              pathname: '/statistics/attendance/detail',
              state: {
                type: 'detail',
                data: record,
                XN: CurXN,
                XQ: CurXQ,
                position: '老师',
                startDate: newDate[0]?.format('YYYY-MM-DD'),
                endDate: newDate[1]?.format('YYYY-MM-DD')
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
    const res = getTerm();
    console.log(res, 'res-------');
    setCurXN(res.XN);
    setCurXQ(res.XQ);
    if (res.XN && res.XQ) {
      getData(res);
    }
  }, []);
  // eslint-disable-next-line max-params
  const getDataSource = async (XNXQ: string, newDate: any, name?: string, XXJBSJId?: string) => {
    let startDate;
    let endDate;
    if (newDate.length > 0) {
      if (isMoment(newDate[0])) {
        startDate = newDate[0].format('YYYY-MM-DD');
      }
      if (isMoment(newDate[1])) {
        endDate = newDate[1].format('YYYY-MM-DD');
      }
    }
    setCurXN(XNXQ.substring(0, 9));
    setCurXQ(XNXQ.substring(10, 14));
    setNewDate(newDate);
    setName(name);
    const params = {
      KHJYJGId: currentUser?.jgId || '',
      XN: XNXQ.substring(0, 9),
      XQ: XNXQ.substring(10, 14),
      startDate,
      endDate,
      JSXM: name,
      XXJBSJId,
      output: false
    };
    const result = await agencyStatistical(params);
    if (result?.status === 'ok' && result.data) {
      const { rows, ...rest } = result.data;
      setCollectData({ ...rest });
      setDataSource(rows);
    }
  };
  // 导出
  const onExportJSClick = async () => {
    let startDate;
    let endDate;
    if (newDate.length > 0) {
      if (isMoment(newDate[0])) {
        startDate = newDate[0].format('YYYY-MM-DD');
      }
      if (isMoment(newDate[1])) {
        endDate = newDate[1].format('YYYY-MM-DD');
      }
    }
    const params = {
      KHJYJGId: currentUser?.jgId || '',
      XN: CurXN,
      XQ: CurXQ,
      startDate,
      endDate,
      JSXM: Name,
      output: true
    };
    const res = await agencyStatistical(params);
    if (res?.status === 'ok') {
      window.location.href = res.data;
    } else {
      message.error(res.message);
    }
  };

  return (
    <>
      <FormSelect
        getDataSource={getDataSource}
        exportButton={
          <Button type="primary" icon={<DownloadOutlined />} style={{ float: 'right' }} onClick={onExportJSClick}>
            导出
          </Button>
        }
      />
      <div className={Style.TopCards}>
        <div>
          <div>
            <span>
              <img src={personImg} />
            </span>
            <div>
              <h3>{collectData?.js_count || 0}</h3>
              <p>考勤教师总数</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={classImg} />
            </span>
            <div>
              <h3>{collectData?.allJS_bj_count || 0}</h3>
              <p>授课班级总数</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={allHoursImg} />
            </span>
            <div>
              <h3>{collectData?.allJS_KSS || 0}</h3>
              <p>已排课时总数</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={normalImg} />
            </span>
            <div>
              <h3>{collectData?.allJS_attendance || 0}</h3>
              <p>出勤总次数</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              <img src={abnormalImg} />
            </span>
            <div>
              <h3>{collectData?.allJS_absenteeism + collectData?.allJS_leave + collectData?.allJS_substitute || 0}</h3>
              <p>缺勤总次数</p>
            </div>
          </div>
        </div>
      </div>
      <Table TableList={{ position: '老师' }} dataSource={dataSource} columns={teacher} />
    </>
  );
};
Attendance.wrappers = ['@/wrappers/auth'];
export default Attendance;
