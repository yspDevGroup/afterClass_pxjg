/*
 * @description: 新建或编辑用户组件
 * @author: zpl
 * @Date: 2021-11-24 14:47:36
 * @LastEditTime: 2022-03-29 19:24:16
 * @LastEditors: zpl
 */
import { useState, useRef, ChangeEvent } from 'react';
import { Button, Col, message, Row } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ModalForm, ProFormText, ProFormRadio, ProFormSelect } from '@ant-design/pro-form';
import Field from '@ant-design/pro-field';
import { PlusOutlined } from '@ant-design/icons';
import { getUserTypes } from '@/services/after-class-pxjg/user';
import { getTeacherBasis } from '@/services/after-class-pxjg/jzgjbsj';
import { checkUsername } from '@/services/after-class-pxjg/teacherUser';
import { useDebounce } from '@/CustomHooks';
import { TeacherUser } from './type';

import styles from './index.less';
import { DefaultOptionType } from 'antd/lib/select';

const PutUser = (props: {
  CorpID: string;
  defaultValue?: any;
  onSave: (data: API.CreateTeacherUser | API.updateTeacherUser) => Promise<boolean>;
  onCancel?: () => void;
}) => {
  const { CorpID, defaultValue, onSave, onCancel } = props;
  const formRef = useRef<ProFormInstance>();
  const formMode: 'edit' | 'read' = defaultValue ? 'read' : 'edit';
  const [usernameValStatus, setUsernameValStatus] = useState<'success' | 'warning' | 'error' | 'validating'>(
    'validating'
  );
  const [helpText, setHelpText] = useState<string>();
  const [hasTeacherInfo, setHasTeacherInfo] = useState(!!defaultValue?.JZGJBSJ);

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
      formRef={formRef}
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
      initialValues={defaultValue ? { ...defaultValue } : { status: 0 }}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        maskClosable: false,
        closable: false,
        onCancel,
        className: styles.putModel
      }}
      onFinish={async (values) => {
        if (values.password === '') {
          delete values.password;
        }
        const { id, username, password = '', realname, status, JZGJBSJ, UserTypes } = values;
        const JZGJBSJId = typeof JZGJBSJ === 'string' ? JZGJBSJ : JZGJBSJ?.id;
        const usertype = UserTypes.map((type) => (typeof type === 'string' ? type : type.id));
        if (id) {
          const params: API.updateTeacherUser = {
            realname,
            password,
            status,
            JZGJBSJId,
            usertype
          };
          const res = await onSave(params);
          return !!res;
        } else {
          const params: API.CreateTeacherUser = {
            CorpID,
            username,
            realname,
            status,
            password,
            JZGJBSJId,
            usertype
          };
          const res = await onSave(params);
          return !!res;
        }
      }}
    >
      <ProFormText key="id" name="id" hidden />
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
          >
            <Field mode={formMode} />
          </ProFormText>
        </Col>
        <Col span={12}>
          {defaultValue ? (
            <ProFormText key="JZGJBSJ" name="JZGJBSJ" label="教师" convertValue={(value) => value?.XM}>
              <Field mode="read" />
            </ProFormText>
          ) : (
            <ProFormSelect
              key="JZGJBSJ"
              name="JZGJBSJ"
              label="教师"
              showSearch
              request={async () => {
                const res = await getTeacherBasis({ CorpId: CorpID, IsRegistered: false });
                const { status, data } = res;
                if (status === 'ok') {
                  return data?.map((d) => ({ label: d.XM, value: d.id })) || [];
                }
                message.error(res.message || '获取教师列表失败');
                return [];
              }}
              fieldProps={{
                onChange: (value, option) => {
                  setHasTeacherInfo(!!value);
                  formRef.current?.setFieldsValue({ realname: (option as DefaultOptionType | undefined)?.label || '' });
                }
              }}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ProFormText
            key="realname"
            name="realname"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
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
      <ProFormSelect
        key="UserTypes"
        name="UserTypes"
        label="身份"
        convertValue={(value) => value?.map((v: { id: string } | string) => (typeof v === 'string' ? v : v.id))}
        params={{ hasTeacherInfo }}
        request={async () => {
          const res = await getUserTypes();
          const { status, data } = res;
          if (status === 'ok') {
            const f = hasTeacherInfo ? ['管理员', '老师'] : ['管理员'];
            return data
              .filter((role: { name: string }) => {
                return f.includes(role.name);
              })
              .map((role: { name: string; id: string }) => ({
                label: role.name,
                value: role.id
              }));
          } else {
            message.error(res.message || '用户类型获取失败');
            return [];
          }
        }}
        fieldProps={{
          mode: 'multiple',
          width: '200px'
        }}
        placeholder="请指定用户身份"
        rules={[{ required: true, message: '请指定用户身份', type: 'array' }]}
      />
      <Row>
        <Col span={12}>
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
