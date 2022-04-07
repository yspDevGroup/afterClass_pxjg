import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { useState, useEffect, useRef } from 'react';
import { Rate, Button, Modal } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { getAllKHXSPJ } from '@/services/after-class-pxjg/khxspj';
import { getKHBJPJ } from '@/services/after-class-pxjg/khbjpj';
import WWOpenDataCom from '@/components/WWOpenDataCom';

const Details = (props: any) => {
  const { KCMC, XXMC, BJId, BJMC, XNXQId, XNXQMC } = props.location.state;
  // 弹出框显示隐藏
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [DetailsValue, setDetailsValue] = useState('');
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const teacher: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '评价人',
      dataIndex: 'PJR',
      key: 'PJR',
      width: 120,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '评价内容',
      dataIndex: 'PY',
      key: 'PY',
      width: 200,
      align: 'center',
      ellipsis: true
    },
    {
      title: '课程评分',
      dataIndex: 'PJFS',
      key: 'PJFS',
      align: 'center',
      width: 180,
      render: (_, record) => <Rate count={5} defaultValue={record?.PJFS} disabled={true} />
    },
    {
      title: '评价时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 200
    }
  ];

  const student: ProColumns<any>[] | undefined = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '学生姓名',
      dataIndex: 'XSXM',
      key: 'XSXM',
      align: 'center',
      fixed: 'left',
      width: 120,
      render: (_text: any, record: any) => {
        const showWXName = record?.XSJBSJ?.XM === '未知' && record?.XSJBSJ?.XM.WechatUserId;
        return showWXName ? (
          <WWOpenDataCom type="userName" openid={record?.XSJBSJ?.WechatUserId} />
        ) : (
          record?.XSJBSJ?.XM
        );
      }
    },
    {
      title: '行政班名称',
      dataIndex: 'BJSJ',
      key: 'BJSJ',
      align: 'center',
      width: 130,
      ellipsis: true,
      render: (_text: any, record: any) => {
        return `${record?.XSJBSJ?.BJSJ?.NJSJ?.NJMC}${record?.XSJBSJ?.BJSJ?.BJ}`;
      }
    },
    {
      title: '课程班名称',
      dataIndex: 'KHBJSJ',
      key: 'KHBJSJ',
      align: 'center',
      width: 130,
      ellipsis: true,
      render: (_: any, record: any) => {
        return <span>{record?.KHBJSJ?.BJMC}</span>;
      }
    },
    {
      title: '评价时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 170
    },
    {
      title: '该学生课堂评分',
      dataIndex: 'PJFS',
      key: 'PJFS',
      align: 'center',
      width: 180,
      render: (_, record) => <Rate count={5} defaultValue={record?.PJFS} disabled={true} />
    },
    {
      title: '该学生课堂表现',
      dataIndex: 'PY',
      key: 'PY',
      align: 'center',
      fixed: 'right',
      width: 150,
      render: (text: any) => {
        return (
          <a
            onClick={() => {
              setDetailsValue(text);
              setIsModalVisible(true);
            }}
          >
            课堂表现
          </a>
        );
      }
    }
  ];
  const [StuList, setStuList] = useState<API.KHXSDD[] | undefined>([]);
  const [teacherList, setTeacherList] = useState<API.KHXSDD[] | undefined>([]);
  const [activeKey, setActiveKey] = useState<string>('student');
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (async () => {
      const res2 = await getAllKHXSPJ({
        KHBJSJId: BJId,
        XNXQId,
        JSId: '',
        page: 0,
        pageSize: 0
      });
      if (res2.status === 'ok') {
        // 老师给学生的评语
        setStuList(res2.data?.rows);
      }
      const res = await getKHBJPJ({
        // 课后班级数据
        KHBJSJId: BJId,
        XNXQId,
        XSJBSJId: '',
        XXJBSJId: '',
        page: 0,
        pageSize: 0
      });
      if (res?.data?.rows) {
        // 家长给老师的评价
        setTeacherList(res.data.rows);
      }
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
      <div style={{ backgroundColor: '#fff' }}>
        <p
          style={{
            padding: '24px 24px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: 0
          }}
        >{`${XNXQMC} / ${KCMC} / ${XXMC} / ${BJMC}`}</p>
        <ProTable
          columns={activeKey === 'student' ? teacher : student}
          dataSource={activeKey === 'student' ? teacherList : StuList}
          rowKey="id"
          search={false}
          actionRef={actionRef}
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
          }}
          scroll={{ x: 900 }}
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
          toolbar={{
            menu: {
              type: 'tab',
              activeKey,
              items: [
                {
                  key: 'student',
                  label: <span>课程反馈</span>
                },
                {
                  key: 'teacher',
                  label: <span>学生评价</span>
                }
              ],
              onChange: (key) => {
                setActiveKey(key as string);
                actionRef.current?.reload();
              }
            }
          }}
        />
      </div>
      <Modal visible={isModalVisible} onCancel={handleCancel} title="表现详情" footer={null}>
        <span>{DetailsValue}</span>
      </Modal>
    </>
  );
};
Details.wrappers = ['@/wrappers/auth'];
export default Details;
