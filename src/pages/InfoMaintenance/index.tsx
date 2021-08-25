/*
 * @description:
 * @author: wsl
 * @Date: 2021-08-24 16:46:37
 * @LastEditTime: 2021-08-24 19:44:39
 * @LastEditors: wsl
 */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Image, Divider, Tooltip, Row, Col, Modal, Alert } from 'antd';
import styles from './index.less';
import AvatarUpload from '@/components/AvatarUpload';

const InfoMaintenance = () => {
  // const [InitialValues, setInitialValues] = useState<TableListItem>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();
  const [RZfrom] = Form.useForm();

  const RZsubmit = async (params: any) => {
    console.log(params);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    RZfrom.submit();
    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const submit = async (params: any) => {
    console.log(params);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={styles.InfoMaintenance}>
      <div>
        <div className={styles.header}>
          <div>
            <Image width={100} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            <div className={styles.name}>梦想家</div>
          </div>

          <Button type="primary" className={styles.btn} onClick={showModal}>
            申请入驻
          </Button>
        </div>

        <Divider />
        <Form
          form={form}
          //  initialValues={InitialValues}
          onFinish={submit}
          className={styles.Forms}
        >
          {/* <Form.Item name="id" hidden>
            <Input disabled />
          </Form.Item> */}
          <Row>
            <Col span={12}>
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
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="FRDBXM" key="FRDBXM" label="法人代表姓名：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="FRDBSFZH" key="FRDBSFZH" label="法人代表身份证号：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="QYJGDZ" key="QYJGDZ" label="企业机构地址：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="LXRXM" key="LXRXM" label="联系人姓名：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="LXDH" key="LXDH" label="联系电话：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="JGFWFW" key="JGFWFW" label="机构服务范围：">
                <Input placeholder="请输入" />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item name="JGFWYYZZFW" key="YYZZ" label="营业执照：">
                    <AvatarUpload />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="BZXK" key="BZXK" label="办学许可证：">
                    <AvatarUpload />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Form.Item name="describe" key="describe" label="机构简介：">
                <Input.TextArea placeholder="说点什么..." rows={5} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title="申请入驻"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <Alert
            message="确定机构信息填写完整且信息无误后，输入“入驻密钥”申请加入白名单。(入驻密钥由区县教育局统一下发)"
            type="warning"
            style={{ marginBottom: '20px' }}
          />
          <Form
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
          </Form>
        </Modal>
      </div>
    </div>
  );
};
export default InfoMaintenance;
