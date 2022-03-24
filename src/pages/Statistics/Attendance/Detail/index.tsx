import {
  getTeacherAttendanceDetailByDate,
  getStudentAttendanceDetailByDate,
  exportTeacherAttendanceDetailByDate,
  exportStudentAttendanceDetailByDate
} from '@/services/after-class-pxjg/reports';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal, Spin } from 'antd';
import { DownloadOutlined, LeftOutlined } from '@ant-design/icons';
import ShowName from '@/components/ShowName';
import { agencyStatisticalDetail, getAllKHJSCQ } from '@/services/after-class-pxjg/khjscq';
import { getTableWidth } from '@/utils';

const AttendanceDetail = (props: any) => {
  const { data, XN, XQ, position, startDate, endDate } = props.location.state;
  const [dataSource, setDataSource] = useState<API.KHXSDD[] | undefined>([]);
  const [absenteeismData, setAbsenteeismData] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getAbsenteeismData = async (id: string) => {
    const res = await getAllKHJSCQ({
      JZGJBSJId: data?.id,
      KHBJSJId: id,
      CQZT: ['缺席'],
      startDate,
      endDate
    });
    if (res?.status === 'ok') {
      setAbsenteeismData(res.data);
      setVisible(true);
    }
  };
  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await agencyStatisticalDetail({
        JZGJBSJId: data.id,
        XN,
        XQ,
        startDate,
        endDate,
        output: false
      });
      if (res.status === 'ok') {
        setDataSource(res.data.rows);
        setLoading(false);
      }
    })();
  }, []);
  const teacher: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 58,
      fixed: 'left'
    },
    {
      title: '姓名',
      dataIndex: 'XM',
      key: 'XM',
      align: 'center',
      width: 100,
      fixed: 'left',
      render: () => <ShowName type="userName" openid={data?.WechatUserId} XM={data?.XM} />
    },
    {
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      width: 120,
      align: 'center'
      // render: (text: any) => <div>{text?.KCMC}</div>
    },
    {
      title: '课程班名称',
      dataIndex: 'BJMC',
      key: 'BJMC',
      width: 120,
      align: 'center'
    },
    {
      title: '已排课时总数',
      dataIndex: 'KSS',
      key: 'KSS',
      width: 130,
      align: 'center'
    },
    {
      title: '出勤次数',
      dataIndex: 'attendance',
      key: 'attendance',
      width: 100,
      align: 'center'
    },
    {
      title: '缺勤次数',
      dataIndex: 'absenteeism',
      key: 'absenteeism',
      width: 100,
      align: 'center',
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => {
            if (Number(record.absenteeism) + Number(record.leave) + Number(record.substitute) !== 0)
              getAbsenteeismData(record.id);
          }}
        >
          {Number(record.absenteeism) + Number(record.leave) + Number(record.substitute)}
        </Button>
      )
    }
  ];
  const colomns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 58
    },
    {
      title: '缺勤类型',
      dataIndex: 'CQZT',
      key: 'CQZT',
      align: 'center'
    },
    {
      title: '缺勤日期',
      dataIndex: 'CQRQ',
      key: 'CQRQ',
      align: 'center'
    }
  ];

  const onExportClick = async () => {
    setLoading(true);
    const res = await agencyStatisticalDetail({
      JZGJBSJId: data.id,
      XN,
      XQ,
      startDate,
      endDate,
      output: true
    });
    if (res.status === 'ok') {
      window.location.href = res.data;
      setLoading(false);
    } else {
      message.error(res.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Spin spinning={loading}>
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
        <Button style={{ float: 'right' }} icon={<DownloadOutlined />} type="primary" onClick={onExportClick}>
          导出
        </Button>

        <ProTable
          columns={teacher}
          headerTitle={`${XN} - ${XQ}`}
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
          }}
          scroll={{ x: getTableWidth(teacher) }}
          search={false}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
        />
      </Spin>
      <Modal
        title="缺勤详情"
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        <ProTable
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
          pagination={{
            showQuickJumper: false,
            pageSize: 5,
            pageSizeOptions: ['5', '10', '20', '50'],
            defaultCurrent: 1
          }}
          search={false}
          columns={colomns}
          dataSource={absenteeismData}
        />
      </Modal>
    </div>
  );
};
export default AttendanceDetail;
