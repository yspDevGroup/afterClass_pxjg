/*
 * @description: 新建或编辑用户组件
 * @author: zpl
 * @Date: 2021-11-24 14:47:36
 * @LastEditTime: 2022-03-28 13:42:38
 * @LastEditors: zpl
 */
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Button, Col, message, Row } from 'antd';
import { ModalForm, ProFormText, ProFormRadio } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { checkUsername } from '@/services/after-class-pxjg/teacherUser';
import { useDebounce } from '@/CustomHooks';
import { TeacherUser } from './type';

import styles from './index.less';

const PutUser = (props: {
  CorpID: string;
  defaultValue?: any;
  onSave: (data: TeacherUser.UserInfo) => Promise<boolean>;
  onCancel?: () => void;
}) => {
  const { CorpID, defaultValue, onSave, onCancel } = props;
  const [usernameValStatus, setUsernameValStatus] = useState<'success' | 'warning' | 'error' | 'validating'>(
    'validating'
  );
  const [helpText, setHelpText] = useState<string>();

  // 使用防抖检查用户名重名
  const checkName = useDebounce(async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      const res = await checkUsername({ CorpID, username: value });
      if (res.data && (!defaultValue || defaultValue.username !== value)) {
        setUsernameValStatus('error');
        setHelpText('已有相同用户名');
      } else {
        setUsernameValStatus('success');
        setHelpText('');
      }
    }
  }, 500);

  return (
    <ModalForm<TeacherUser.UserInfo>
      title={defaultValue ? '编辑账号' : '新增账号'}
      trigger={
        <Button type={defaultValue ? 'link' : 'primary'}>
          {!defaultValue && <PlusOutlined />}
          {defaultValue ? '编辑账号' : '新增账号'}
        </Button>
      }
      layout="horizontal"
      width={600}
      labelCol={{ flex: '5em' }}
      wrapperCol={{ flex: 'calc(100% - 6em)' }}
      initialValues={defaultValue ? { ...defaultValue } : {}}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        maskClosable: false,
        closable: false,
        onCancel,
        className: styles.putModel
      }}
      onFinish={async (values) => {
        if (values.password === '********') {
          delete values.password;
        }
        const res = await onSave(values);
        return !!res;
      }}
    >
      <ProFormText key="subPlatId" name="subPlatId" initialValue={CorpID} hidden />
      <Row>
        <Col span={12}>
          <ProFormText
            key="username"
            name="username"
            label="账号"
            disabled={!!defaultValue}
            help={helpText}
            validateStatus={usernameValStatus}
            rules={[{ required: true, message: '请输入账号' }]}
            fieldProps={{
              onChange: checkName
            }}
          />
        </Col>
        <Col span={12}>
          <ProFormText.Password
            key="password"
            name="password"
            label="密码"
            initialValue={defaultValue ? '********' : undefined}
            rules={[
              { required: true, message: '请输入密码' },
              {
                pattern: new RegExp(/^[0-9A-Za-z*@,./-_]{6,}$/),
                message: '密码长度不能小于6位'
              }
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ProFormText
            key="realName"
            name="realName"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            key="mobile"
            name="mobile"
            label="手机"
            rules={[
              {
                pattern: new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
                message: '请输入正确的手机号'
              }
            ]}
          />
        </Col>
      </Row>
      <ProFormText
        key="email"
        name="email"
        label="邮箱"
        rules={[
          {
            pattern: new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
            message: '邮箱格式有误'
          }
        ]}
      />
      <Row>
        <Col span={10}>
          <ProFormRadio.Group
            key="status"
            name="status"
            label="状态"
            radioType="button"
            options={[
              {
                label: '启用',
                value: 1
              },
              {
                label: '禁用',
                value: 0
              }
            ]}
          />
        </Col>
      </Row>
    </ModalForm>
  );
};

export default PutUser;
