/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Form, Input, Select, Image, Switch, DatePicker, Button, Space, message } from 'antd';
import dayjs from 'dayjs';
// 引入编辑器组件
import type { ExtendControlType } from 'braft-editor';
import BraftEditor from 'braft-editor';
// import { defImg } from './data';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { history, useModel } from 'umi';
import styles from './index.module.less';
import AvatarUpload from './components/AvatarUpload';
import { createKHJYTZGG, KHJYTZGG, updateKHJYTZGG } from '@/services/after-class-pxjg/khjytzgg';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  }
};

/**
 * 主组件
 *
 * @returns
 */
const EditArticle = () => {
  const [id, setId] = useState<string | undefined>(); // 文章ID
  const [pubStatus, setPubStatus] = useState<'草稿' | '已发布' | '已删除' | string>('草稿'); // 发布状态，用于控制表单是否可提交
  const [stateImg, setstateImg] = useState<any>();
  const [form] = Form.useForm();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { jgId } = currentUser!;
  const initialValues = {
    LX: 0,
    BH: 10,
    RQ: dayjs(),
    LY: '本站原创',
    SFTT: false,
    SFTJ: false
  };

  const onValueChange = (value: any) => {
    setstateImg(value);
  };

  const submit = async (params: any) => {
    const { NR, RQ, SFTT, SFTJ } = params;
    const data = {
      ...params,
      RQ: RQ.format(),
      SFTJ: SFTJ === true ? 1 : SFTJ,
      SFTT: SFTT === true ? 1 : SFTT,
      NR: NR.toHTML(),
      KHJYJGId: jgId,
      TP: stateImg || ''
    };
    try {
      if (typeof id === 'undefined') {
        const result = await createKHJYTZGG(data);
        if (result.status === 'ok') {
          message.success('保存成功');
          history.push('/announcements/list');
        } else {
          message.error('保存失败，请联系管理员或稍后再试。');
        }
      } else {
        const resUpdateXXTZGG = await updateKHJYTZGG({ id: id }, data);
        if (resUpdateXXTZGG.status === 'ok') {
          message.success('修改成功');
          history.push('/announcements/list');
        } else {
          message.error('修改失败，请联系管理员或稍后再试。');
        }
      }
    } catch (err) {
      message.error('保存失败，请联系管理员或稍后再试。');
    }
  };

  useEffect(() => {
    // 判断url中是否有id
    const url = new URL(window.location.href);
    const editId = url.searchParams.get('id');
    if (editId && !id) {
      setId(editId);
    }
  }, []);

  // 如果有id参数，说明是编辑文章，需要回填信息
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const result = await KHJYTZGG({ id: id });
          if (result.status === 'ok') {
            const { data } = result;
            const initData = {
              ...data,
              RQ: dayjs(data.RQ),
              NR: BraftEditor.createEditorState(data.NR)
            };
            form.setFieldsValue(initData);
            setPubStatus(data!.ZT!);
            setstateImg(data!.TP!);
          } else {
            message.error('获取文章内容失败，请联系管理员或稍后再试。');
          }
        }
      } catch (err) {
        message.error('获取文章内容失败，请联系管理员或稍后再试。');
      }
    })();
  }, [id]);

  const disabled = pubStatus !== '草稿';
  return (
    <>
      <div className={styles.container}>
        <Form {...formItemLayout} form={form} initialValues={initialValues} onFinish={submit}>
          <Divider orientation="left">文章属性</Divider>
          <Form.Item name="id" hidden>
            <Input disabled />
          </Form.Item>
          <Row>
            <Col className="gutter-row" sm={12} xs={24}>
              <Form.Item
                name="BT"
                label="文章标题："
                rules={[
                  {
                    required: true,
                    message: '请输入文章标题！'
                  }
                ]}
              >
                <Input placeholder="请输入" disabled={disabled} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={12} xs={24}>
              <Form.Item name="FBT" label="副标题：">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col className="gutter-row" sm={12} xs={24}>
              <Form.Item name="GJC" label="关键词：">
                <Input disabled={disabled} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" sm={6} xs={12}>
              <Form.Item
                name="LX"
                label="文章类型："
                labelCol={{ sm: { span: 8 } }}
                rules={[
                  {
                    required: true,
                    message: '请选择文章类型！'
                  }
                ]}
              >
                <Select disabled={disabled}>
                  <Option value={0}>公告</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={6} xs={12}>
              <Form.Item name="BH" label="排序值：" labelCol={{ sm: { span: 8 } }}>
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col className="gutter-row" sm={12} xs={24}>
              <Form.Item name="ZY" label="文章摘要：">
                <Input.TextArea placeholder="说点什么..." showCount maxLength={200} rows={4} disabled={disabled} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={12} xs={24}>
              <Form.Item name="TP" label="标题图片：">
                <AvatarUpload img={stateImg} onValueChange={onValueChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col className="gutter-row" sm={6} xs={12}>
              <Form.Item name="ZZ" label="作者：" labelCol={{ sm: { span: 8 } }}>
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={6} xs={12}>
              <Form.Item
                name="RQ"
                label="时间："
                labelCol={{ sm: { span: 8 } }}
                rules={[
                  {
                    required: true,
                    message: '请选择时间！'
                  }
                ]}
              >
                <DatePicker showTime disabled={disabled} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={6} xs={12}>
              <Form.Item name="LY" label="来源：" labelCol={{ sm: { span: 8 } }}>
                <Input disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col className="gutter-row" sm={3} xs={6}>
              <Form.Item name="SFTT" label="是否头条：" valuePropName="checked" labelCol={{ sm: { span: 16 } }}>
                <Switch disabled={disabled} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" sm={3} xs={6}>
              <Form.Item name="SFTJ" label="是否推荐：" valuePropName="checked" labelCol={{ sm: { span: 16 } }}>
                <Switch disabled={disabled} />
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left">文章内容</Divider>
          <Form.Item
            name="NR"
            rules={[
              {
                required: true,
                message: '请输入正文内容！'
              }
            ]}
          >
            <BraftEditor
              className="my-editor"
              placeholder="请输入正文内容"
              // media={{
              //   uploadFn: upload
              // }}
            />
          </Form.Item>
          <Row justify="end">
            <Col>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                  <Button
                    htmlType="button"
                    onClick={() => {
                      history.push('/announcements/list');
                    }}
                  >
                    取消
                  </Button>
                </Space>
              </Form.Item>
            </Col>
            <Col span={1} />
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditArticle;
