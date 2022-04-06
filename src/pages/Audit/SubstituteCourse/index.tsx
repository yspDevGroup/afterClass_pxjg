import { useEffect, useRef, useState } from 'react';
import { useModel } from 'umi';
import { Form, Modal, Radio, Select, Input, message, Divider } from 'antd';
import styles from './index.less';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import ShowName from '@/components/ShowName';
import { updateKHJSTDK, getAllByAgency, updateAgency } from '@/services/after-class-pxjg/khjstdk';
import { getTableWidth } from '@/utils';
import SearchLayout from '@/components/Search/Layout';
import Semester from '@/components/Semester';
import { getAllJZGJBSJ } from '@/services/after-class-pxjg/jzgjbsj';
import { getTerm } from '@/pages/Graphic/component/utils';

const { TextArea } = Input;
const { Option } = Select;
const SubstituteFor = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const actionRef = useRef<ActionType>();
  // 选择学年学期
  const [curXNXQId, setCurXNXQId] = useState<string>();
  // 审批状态
  const [SPZT, setSPZT] = useState<any[]>([0, 1, 2, 4, 5]);
  const [SQJS, setSQJS] = useState<string>();
  const [DKJS, setDKJS] = useState<string>();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Datas, setDatas] = useState<any>();
  // 数据
  const [dataSource, setDataSourse] = useState<any>();
  const [XNXQ, setXNXQ] = useState<string>('');
  const [JSData, setJSData] = useState<any[]>();

  const getData = async () => {
    const term = getTerm();
    const obj = {
      LX: [1],
      // 0:申请中;1:同意;2:拒绝;3:撤销;4:代课教师同意;5:代课教师拒绝
      ZT: typeof SPZT?.[0] === 'undefined' ? [0, 1, 2, 4, 5] : SPZT,
      KHJYJGId: currentUser?.jgId || '',
      XN: XNXQ.substring(0, 9) || term?.XN,
      XQ: XNXQ.substring(10, 14) || term?.XQ,
      DKJSId: DKJS,
      SKJSId: SQJS,
      page: 0,
      pageSize: 0
    };
    const resAll = await getAllByAgency(obj);
    if (resAll.status === 'ok') {
      setDataSourse(resAll?.data?.rows);
    } else {
      setDataSourse([]);
    }
  };
  useEffect(() => {
    (async () => {
      // 获取机构教师
      const resJS = await getAllJZGJBSJ({
        KHJYJGId: currentUser?.jgId,
        page: 0,
        pageSize: 0
      });
      if (resJS.status === 'ok') {
        setJSData(resJS.data?.rows);
      }
    })();
  }, []);
  useEffect(() => {
    getData();
  }, [XNXQ, SPZT, SQJS, DKJS]);

  const handleSubmit = async (param: any) => {
    const { ZT, BZ } = param;
    try {
      const res = await updateAgency(
        { id: current?.id },
        {
          ZT,
          KHJYJGId: currentUser?.jgId || '',
          SPJSId: currentUser?.JSId || '',
          DKBZ: BZ
        }
      );
      if (res.status === 'ok') {
        message.success('审批成功');
        setVisible(false);
        setCurrent(undefined);
        form.resetFields();
        getData();
      }
    } catch (err) {
      message.error('代课审批流程出现错误，请联系管理员或稍后重试。');
    }
  };
  // table表格数据
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: 58,
      fixed: 'left'
    },
    {
      title: '申请教师',
      dataIndex: 'XSXM',
      key: 'XSXM',
      align: 'center',
      width: 80,
      fixed: 'left',
      render: (_text: any, record: any) => (
        <ShowName type="userName" openid={record?.SKJS?.WechatUserId} XM={record?.SKJS?.XM} />
      )
    },
    {
      title: '课程名称',
      dataIndex: 'KHQJKCs',
      key: 'KHQJKCs',
      align: 'center',
      ellipsis: true,
      render: (text: any, record: any) => {
        return record?.KHBJSJ?.KHKCSJ?.KCMC;
      },
      width: 120
    },
    {
      title: '课程班名称',
      dataIndex: 'KHQJKCs',
      key: 'KHQJKCs_BJMC',
      align: 'center',
      ellipsis: true,
      render: (text: any, record: any) => {
        return record?.KHBJSJ?.BJMC;
      },
      width: 120
    },
    {
      title: '申请时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 160
    },
    {
      title: '代课教师',
      dataIndex: 'XSXM',
      key: 'XSXM',
      align: 'center',
      width: 80,
      render: (_text: any, record: any) => (
        <ShowName type="userName" openid={record?.DKJS?.WechatUserId} XM={record?.DKJS?.XM} />
      )
    },
    {
      title: '代课教师意见',
      dataIndex: 'YJ',
      key: 'YJ',
      align: 'center',
      ellipsis: true,
      width: 150,
      render: (text: any, record: any) => {
        return (
          <>
            {record.ZT === 4 || record.ZT === 2 || record.ZT === 1 ? '同意' : <>{record.ZT === 5 ? '不同意' : '-'}</>}
          </>
        );
      }
    },
    {
      title: '审批时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      width: 160
    },
    {
      title: '状态',
      dataIndex: 'ZT',
      key: 'ZT',
      valueType: 'select',
      width: 80,
      align: 'center',
      valueEnum: {
        0: {
          text: '审批中',
          status: 'Default'
        },
        1: {
          text: '已通过',
          status: 'Success'
        },
        2: {
          text: '已驳回',
          status: 'Error',
          disabled: true
        },
        4: { text: '待审批', status: 'Processing' },
        5: {
          text: '已驳回',
          status: 'Error',
          disabled: true
        }
      }
    },

    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: (_, record: any) => {
        return (
          <>
            {record.ZT === 4 ? (
              <>
                <a
                  onClick={() => {
                    setCurrent(record);
                    setVisible(true);
                  }}
                >
                  审批
                </a>
                <Divider type="vertical" />
              </>
            ) : (
              ''
            )}

            <a
              onClick={() => {
                setIsModalVisible(true);
                setDatas(record);
              }}
            >
              查看
            </a>
          </>
        );
      }
    }
  ];
  const onSelectChange = (value: string) => {
    setXNXQ(value);
  };

  console.log(dataSource, 'dataSource-----');
  return (
    <>
      <div className={styles.leaveWrapper}>
        <ProTable<any>
          actionRef={actionRef}
          columns={columns}
          rowKey="id"
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
            defaultCurrent: 1
          }}
          dataSource={dataSource}
          scroll={{ x: getTableWidth(columns) }}
          headerTitle={
            <SearchLayout>
              <div>
                <span style={{ fontSize: 14 }}>
                  学年学期：
                  <Semester onChange={onSelectChange} />
                </span>
              </div>
              <div>
                <label htmlFor="status">申请教师：</label>
                <Select
                  allowClear
                  showSearch
                  value={SQJS}
                  onChange={(value: string) => {
                    setSQJS(value);
                  }}
                  // filterOption={(input, option) => option?.children?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0}
                >
                  {JSData?.map((item: any) => {
                    return (
                      <Option key={item?.id} value={item?.id}>
                        <ShowName XM={item.XM} type="userName" openid={item.WechatUserId} />
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div>
                <label htmlFor="status">代课教师：</label>
                <Select
                  allowClear
                  showSearch
                  value={DKJS}
                  onChange={(value: string) => {
                    setDKJS(value);
                  }}
                  // filterOption={(input, option) => option?.children?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0}
                >
                  {JSData?.map((item: any) => {
                    return (
                      <Option key={item?.id} value={item?.id}>
                        <ShowName XM={item.XM} type="userName" openid={item.WechatUserId} />
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div>
                <label htmlFor="status">状态：</label>
                <Select
                  allowClear
                  onChange={(value: any) => {
                    if (value === 2) {
                      setSPZT([2, 5]);
                    } else {
                      setSPZT([value]);
                    }
                  }}
                >
                  <Option key="审批中" value={0}>
                    审批中
                  </Option>
                  <Option key="待审批" value={4}>
                    待审批
                  </Option>
                  <Option key="已通过" value={1}>
                    已通过
                  </Option>
                  <Option key="已驳回" value={2}>
                    已驳回
                  </Option>
                </Select>
              </div>
            </SearchLayout>
          }
          options={{
            setting: false,
            fullScreen: false,
            density: false,
            reload: false
          }}
          search={false}
        />
      </div>
      <Modal
        title="代课审批"
        visible={visible}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          setVisible(false);
          form.resetFields();
          setCurrent(undefined);
        }}
        okText="确认"
        cancelText="取消"
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 15 }}
          form={form}
          initialValues={{ ZT: 1 }}
          onFinish={handleSubmit}
          layout="horizontal"
        >
          <Form.Item label="审批意见" name="ZT">
            <Radio.Group>
              <Radio value={1}>同意</Radio>
              <Radio value={2}>不同意</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="审批说明" name="BZ">
            <TextArea rows={4} maxLength={100} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="查看详情"
        className={styles.modals}
        visible={isModalVisible}
        footer={null}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        {Datas ? (
          <div className={styles.DkDetails}>
            <p>课程名称：{Datas?.KHBJSJ?.KHKCSJ?.KCMC}</p>
            <p>课程班名称：{Datas?.KHBJSJ?.BJMC}</p>
            <p>代课日期：{Datas?.SKRQ}</p>
            <p>
              代课时段：{Datas?.SKJC?.KSSJ.substring(0, 5)}~{Datas?.SKJC?.JSSJ.substring(0, 5)}
            </p>
            <p>代课场地：{Datas?.SKFJ?.FJMC}</p>
            <div className={styles.TkAfter}>
              <div>
                <p className={styles.title}>代课前</p>
                <p>
                  申请教师：
                  <ShowName type="userName" openid={Datas?.SKJS?.WechatUserId} XM={Datas?.SKJS?.XM} />
                </p>
                <p>申请时间：{Datas?.createdAt}</p>
                <p>申请原因：{Datas?.BZ}</p>
              </div>
              <div>
                <p className={styles.title}>代课后</p>
                <p>
                  代课教师： <ShowName type="userName" openid={Datas?.DKJS?.WechatUserId} XM={Datas?.DKJS?.XM} />
                </p>
                <p>审批时间：{Datas?.DKSPSJ || '-'}</p>
                <p>
                  代课意见：
                  {Datas.ZT === 4 || Datas.ZT === 1 || Datas.ZT === 2 ? '同意' : <>{Datas.ZT === 5 ? '不同意' : '-'}</>}
                </p>
                {Datas.ZT === 4 || Datas.ZT === 1 || Datas.ZT === 2 ? (
                  <></>
                ) : (
                  <p>代课原因：{Datas?.ZT === 5 ? Datas?.DKBZ : '-'}</p>
                )}
              </div>
            </div>
            <div className={styles.Line} />
            {Datas?.ZT === 1 || Datas?.ZT === 2 ? (
              <div className={styles.reason}>
                <p className={styles.title}>
                  审批人：
                  <ShowName type="userName" openid={Datas?.SPJS?.WechatUserId} XM={Datas?.SPJS?.XM} />
                </p>
                <p>审批时间：{Datas?.updatedAt}</p>
                <p>审批意见：{Datas?.ZT === 1 ? '同意' : '不同意'}</p>
                <p>审批原因：{Datas?.DKBZ || '-'}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};
SubstituteFor.wrappers = ['@/wrappers/auth'];
export default SubstituteFor;
