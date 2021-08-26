/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-24 16:46:37
 * @LastEditTime: 2021-08-26 19:26:15
 * @LastEditors: wsl
 */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Image, Divider, Row, Col, Modal, Alert, message, Popconfirm } from 'antd';
import styles from './index.less';
import { useModel } from 'umi';
import AvatarUpload from '@/components/AvatarUpload';
import { createKHJYJG, KHJYJG, updateKHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { createKHJGRZSQ } from '@/services/after-class-pxjg/khjgrzsq';

const InfoMaintenance = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [state, setstate] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [XZQHM, setXZQHM] = useState<string>();
  const [KHJYJGId, setKHJYJGId] = useState<string>();
  const { username, id } = currentUser!;
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      const res = await KHJYJG({ id: currentUser!.jgId! });
      if (res.status === 'ok') {
        console.log(res);
        form.setFieldsValue(res.data);
        setXZQHM(res.data.XZQHM);
        setKHJYJGId(res.data.id);
      } else {
        form.setFieldsValue({});
      }
    })();
  }, []);

  const confirm = async () => {
    // setstate(true);
    const rescreateKHJGRZSQ = await createKHJGRZSQ({
      XZQHM: XZQHM,
      SQR: username,
      SQRId: id,
      KHJYJGId: KHJYJGId
    });
    if (rescreateKHJGRZSQ.status === 'ok') {
      message.success('申请成功');
    } else {
      message.error('申请失败');
    }
  };

  const submit = async (params: any) => {
    console.log(params);
    const { id, ...data } = params;
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
          {state === false ? (
            <Popconfirm
              placement="topRight"
              title="确定机构信息填写完整且信息无误后，点击确定申请加入白名单"
              onConfirm={confirm}
              okText="确定"
              cancelText="取消"
            >
              <Button type="primary" className={styles.btn} disabled={currentUser?.jgId ? false : true}>
                申请入驻
              </Button>
            </Popconfirm>
          ) : (
            <>
              <Alert message="已成功加入资源池" type="success" style={{ height: 34 }} />
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
                <AvatarUpload />
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
                <Input placeholder="请输入" disabled={disabled} />
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
                <Input placeholder="请输入" disabled={disabled} />
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
                <Input placeholder="请输入" disabled={disabled} />
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
                <Input placeholder="请输入" disabled={disabled} />
              </Form.Item>
              <Form.Item name="QYJGDZ" key="QYJGDZ" label="企业机构地址：">
                <Input placeholder="请输入" disabled={disabled} />
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
                <Input placeholder="请输入" disabled={disabled} />
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
                <Input placeholder="请输入" disabled={disabled} />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
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
                <Input placeholder="请输入" disabled={disabled} />
              </Form.Item>
              <Form.Item name="JGFWFW" key="JGFWFW" label="机构服务范围：">
                <Input placeholder="请输入" disabled={disabled} />
              </Form.Item>
              <Form.Item name="JGJJ" key="JGJJ" label="机构简介：">
                <Input.TextArea placeholder="说点什么..." rows={4} disabled={disabled} />
              </Form.Item>
              <Row className={styles.rows}>
                <Col span={12}>
                  <Form.Item name="JGFWYYZZFW" key="YYZZ" label="营业执照：">
                    <AvatarUpload />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="BXXKZ" key="BXXKZ" label="办学许可证：">
                    <AvatarUpload />
                  </Form.Item>
                </Col>
              </Row>
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
        {/* <Modal
          title="申请入驻"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Alert
            message="确定机构信息填写完整且信息无误后，点击确认申请加入白名单。"
            type="warning"
            style={{ marginBottom: '20px' }}
          /> */}
        {/* <Form
            form={RZfrom}
            //  initialValues={InitialValues}
            onFinish={RZsubmit}
          >
            <Form.Item
              name="RZMY"
              key="RZMY"
              label="入驻密钥："
              rules={[
                {
                  required: true,
                  message: '请输入入驻密钥'
                }
              ]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Form> */}
        {/* </Modal> */}
      </div>
    </div>
  );
};
export default InfoMaintenance;
