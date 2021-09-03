/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Image, Divider, Row, Col, Alert, message, Popconfirm, Tooltip } from 'antd';
import styles from './index.less';
import { useModel } from 'umi';
import { createKHJYJG, KHJYJG, updateKHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { createKHJGRZSQ } from '@/services/after-class-pxjg/khjgrzsq';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UploadImage from '@/components/CustomForm/components/UploadImage';

const InfoMaintenance = (props: any) => {
  const { state } = props.history.location;
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [disabled, setDisabled] = useState(typeof state === 'undefined' ? true : false);
  const [XZQHM, setXZQHM] = useState<string>();
  const [KHJYJGId, setKHJYJGId] = useState<string>();
  const [SQDatas, setSQDatas] = useState<any[]>();
  const [QYTBImageUrl, setQYTBImageUrl] = useState('');
  const [YYZZImageUrl, setYYZZImageUrl] = useState('');
  const [BXXKZImageUrl, setBXXKZImageUrl] = useState('');
  const { username, id } = currentUser!;
  const [form] = Form.useForm();

  const onKHJYJG = async () => {
    const res = await KHJYJG({ id: currentUser!.jgId! });
    if (res.status === 'ok') {
      form.setFieldsValue(res.data);
      setXZQHM(res.data.XZQHM);
      setKHJYJGId(res.data.id);
      setSQDatas(res.data.KHJGRZSQs);
      setQYTBImageUrl(res.data.QYTB!);
      setYYZZImageUrl(res.data.YYZZ!);
      setBXXKZImageUrl(res.data.BXXKZ!);
    } else {
      form.setFieldsValue({});
    }
  };
  useEffect(() => {
    onKHJYJG();
  }, []);

  const confirm = async () => {
    const rescreateKHJGRZSQ = await createKHJGRZSQ({
      XZQHM: XZQHM,
      SQR: username,
      SQRId: id,
      KHJYJGId: KHJYJGId
    });
    if (rescreateKHJGRZSQ.status === 'ok') {
      onKHJYJG();
      message.success('申请成功');
    } else {
      message.error('申请失败');
    }
  };

  // 文件状态改变的回调
  const imageChange = (type: string, e?: any) => {
    if (e.file.status === 'done') {
      const mas = e.file.response.message;
      if (typeof e.file.response === 'object' && e.file.response.status === 'error') {
        message.error(`上传失败，${mas}`);
      } else {
        const res = e.file.response;
        if (res.status === 'ok') {
          message.success(`上传成功`);
          if (type === 'YYZZTP') {
            setYYZZImageUrl(res.data);
          } else if (type === 'QYTBTP') {
            setQYTBImageUrl(res.data);
          } else {
            setBXXKZImageUrl(res.data);
          }
        }
      }
    } else if (e.file.status === 'error') {
      const mass = e.file.response.message;

      message.error(`上传失败，${mass}`);
    }
  };

  const submit = async (params: any) => {
    const { id, ...info } = params;
    const data = {
      ...info,
      QYTB: QYTBImageUrl,
      BXXKZ: BXXKZImageUrl,
      YYZZ: YYZZImageUrl
    };
    if (typeof params.id === 'undefined') {
      const resCreateKHJYJG = await createKHJYJG(data);
      if (resCreateKHJYJG.status === 'ok') {
        const Data = resCreateKHJYJG.data;
        form.scrollToField(Data);
        message.success('保存成功');
        setDisabled(true);
      } else {
        message.error(resCreateKHJYJG.message);
      }
    } else {
      const resUpdateKHJYJG = await updateKHJYJG({ id: currentUser!.jgId! }, data);
      if (resUpdateKHJYJG.status === 'ok') {
        message.success('修改成功');
        setDisabled(true);
      } else {
        message.error(resUpdateKHJYJG.message);
      }
    }
  };

  const onReset = () => {
    setDisabled(true);
  };
  const onEditor = () => {
    setDisabled(false);
  };
  return (
    <div className={styles.InfoMaintenance}>
      <div>
        <div className={styles.header}>
          {SQDatas?.length === 0 ? (
            <Popconfirm
              placement="topRight"
              title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
              onConfirm={confirm}
              okText="确定"
              cancelText="取消"
            >
              <Button type="primary" className={styles.RZbtn}>
                申请入驻
              </Button>
            </Popconfirm>
          ) : (
            <>
              {SQDatas?.[0].LX === 0 ? (
                SQDatas?.[0].ZT === 0 ? (
                  <>
                    <Alert message="申请中" type="warning" style={{ height: 33 }} />
                  </>
                ) : SQDatas?.[0].ZT === 1 ? (
                  <>
                    <Alert message="恭喜您已成功备案" type="success" style={{ height: 33 }} />
                  </>
                ) : SQDatas?.[0].ZT === 2 ? (
                  <>
                    <Tooltip title={SQDatas?.[0].BZ}>
                      <Alert
                        message={
                          <>
                            申请被驳回
                            <QuestionCircleOutlined />
                          </>
                        }
                        type="error"
                        style={{ height: 33 }}
                      />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                      onConfirm={confirm}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        申请入驻
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0].ZT === 3 ? (
                  <>
                    <Tooltip title={SQDatas?.[0].BZ}>
                      <Alert
                        message={
                          <>
                            合作已结束
                            <QuestionCircleOutlined />
                          </>
                        }
                        type="info"
                        style={{ height: 33 }}
                      />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                      onConfirm={confirm}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        申请入驻
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0].ZT === 4 ? (
                  <>
                    <Tooltip title={SQDatas?.[0].BZ}>
                      <Alert
                        message={
                          <>
                            合作终止
                            <QuestionCircleOutlined />
                          </>
                        }
                        type="error"
                        style={{ height: 33 }}
                      />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                      onConfirm={confirm}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        申请入驻
                      </Button>
                    </Popconfirm>
                  </>
                ) : (
                  <></>
                )
              ) : SQDatas?.[0].ZT === 1 ? (
                <>
                  <Tooltip title={SQDatas?.[0].BZ}>
                    <Alert
                      message={
                        <>
                          您已失去备案资格
                          <QuestionCircleOutlined />
                        </>
                      }
                      type="error"
                      style={{ height: 33 }}
                    />
                  </Tooltip>
                </>
              ) : (
                <>
                  <Alert
                    message={
                      <>
                        您已恢复备案资格
                        <QuestionCircleOutlined />
                      </>
                    }
                    type="info"
                    style={{ height: 33 }}
                  />
                  <Popconfirm
                    placement="topRight"
                    title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                    onConfirm={confirm}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                      申请入驻
                    </Button>
                  </Popconfirm>
                </>
              )}
            </>
          )}
        </div>

        <Divider />
        <Form form={form} onFinish={submit} className={styles.Forms}>
          <Row>
            <Col span={11}>
              <Form.Item name="id" hidden>
                <Input disabled />
              </Form.Item>
              <Form.Item name="QYTB" key="QYTB" label="企业LOGO：">
                <UploadImage
                  key="QYTBTP"
                  disabled={disabled}
                  imageurl={QYTBImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  handleImageChange={(value: any) => {
                    imageChange('QYTBTP', value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="QYMC"
                key="QYMC"
                label="企业名称："
                rules={[
                  {
                    required: true,
                    message: '请输入企业名称'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="ZZJGDM"
                key="ZZJGDM"
                label="组织机构代码："
                rules={[
                  {
                    required: true,
                    message: '请输入组织机构代码'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="FRDBXM"
                key="FRDBXM"
                label="法人代表姓名："
                rules={[
                  {
                    required: true,
                    message: '法人代表姓名'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="FRDBSFZH"
                key="FRDBSFZH"
                label="法人代表身份证号："
                rules={[
                  {
                    pattern: new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/),
                    message: '请输入正确的身份证号'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item name="QYJGDZ" key="QYJGDZ" label="企业机构地址：">
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="LXRXM"
                key="LXRXM"
                label="联系人姓名："
                rules={[
                  {
                    required: true,
                    message: '联系人姓名'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="LXDH"
                key="LXDH"
                label="联系电话："
                rules={[
                  {
                    required: true,
                    message: '请输入联系电话'
                  },
                  {
                    pattern: new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
                    message: '请输入正确的手机号'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
            </Col>
            <Col span={2} />
            <Col span={11}>
              <Form.Item
                name="XZQHM"
                key="XZQHM"
                label="行政区编号："
                rules={[
                  {
                    required: true,
                    message: '请输入行政区号码'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item name="JGFWFW" key="JGFWFW" label="机构服务范围：">
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item name="JGJJ" key="JGJJ" label="机构简介：">
                <Input.TextArea placeholder={disabled === false ? '请输入' : '——'} rows={4} disabled={disabled} />
              </Form.Item>
              <Form.Item name="YYZZ" key="YYZZ" label="营业执照：">
                <UploadImage
                  key="YYZZTP"
                  disabled={disabled}
                  imageurl={YYZZImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  handleImageChange={(value: any) => {
                    imageChange('YYZZTP', value);
                  }}
                />
              </Form.Item>
              <Form.Item name="BXXKZ" key="BXXKZ" label="办学许可证：">
                <UploadImage
                  key="BXXKZTP"
                  disabled={disabled}
                  imageurl={BXXKZImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  handleImageChange={(value: any) => {
                    imageChange('BXXKZTP', value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            {disabled === true ? (
              <button onClick={onEditor} className={styles.btn}>
                点击编辑
              </button>
            ) : (
              <>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  取消
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

InfoMaintenance.wrappers = ['@/wrappers/auth'];

export default InfoMaintenance;
