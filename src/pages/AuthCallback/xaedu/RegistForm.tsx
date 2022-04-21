/*
 * @description:
 * @author: zpl
 * @Date: 2022-03-18 14:09:58
 * @LastEditTime: 2022-04-21 16:33:32
 * @LastEditors: zpl
 */
import React, { useRef, useState } from 'react';
import { Button, message, Modal } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { history } from 'umi';
import { CheckCircleOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { theme } from '@/theme-default';
import { bindUser, checkCode, getUsers } from '@/services/after-class-pxjg/xaedu';

const SuccessCon = ({ loginHandler }: { loginHandler: () => Promise<void> }) => {
  return (
    <>
      <div style={{ fontSize: '1.6rem', margin: '2rem' }}>恭喜您，账号已绑定成功！</div>
      <CheckCircleOutlined style={{ fontSize: '3rem', color: 'limegreen', margin: '2rem 0 4rem' }} />
      <div>
        <Button
          type="primary"
          onClick={() => {
            loginHandler();
          }}
          style={{ width: '8em' }}
        >
          进入系统
        </Button>
      </div>
    </>
  );
};

const formStyle: React.CSSProperties = {
  height: '60px',
  margin: '0 auto',
  width: '400px',
  textAlign: 'left',
  transform: 'translate(45px, 0px)'
};

type RegistFormProps = {
  show: boolean;
  username: string;
  loginHandler: (teacherId: string, username: string) => Promise<void>;
};

const RegistForm = ({ show, username, loginHandler }: RegistFormProps) => {
  // 按操作步骤控制显示信息
  const [showModel, setShowModel] = useState<'default' | 'mobileSuccess' | 'mobileError' | 'codeSended' | 'success'>(
    'default'
  );
  // 获取到的用户所属学校列表
  const [schoolList, setSchoolList] = useState<
    {
      id?: string;
      GH?: string;
      XM?: string;
      LXDH?: string;
      WechatUserId?: string;
      QYMC?: string;
      CorpID?: string;
    }[]
  >([]);
  // 学校选择下拉框内容
  const [schoolSelect, setSchoolSelect] = useState<{ label: string; value: string }[]>([]);
  const [currentCorpID, setCurrentCorpID] = useState<string | null>(null);
  // 当前选中学校下对应的用户id
  const [teacherId, setTeacherId] = useState<string>('');

  const schoolListformRef = useRef<ProFormInstance<{ CorpID: string }>>();
  const bindformRef = useRef<ProFormInstance<{ code: string }>>();

  return (
    <Modal
      title="用户绑定"
      visible={show}
      okButtonProps={{ hidden: true }}
      cancelText="退出"
      onCancel={() => {
        console.log('退出');
        window.close();
      }}
      width="765px"
      bodyStyle={{ height: '420px', padding: '2rem', textAlign: 'center' }}
    >
      {showModel === 'success' ? (
        <SuccessCon
          loginHandler={async () => {
            loginHandler(teacherId, username);
          }}
        />
      ) : (
        <>
          <div style={{ fontWeight: 'bold', marginBottom: '2.2rem' }}>《课后服务系统》用户绑定</div>
          {showModel === 'default' && <p>我们未找到您在本系统中的账号信息，如果您是第一次登录，请先绑定用户信息。</p>}
          {showModel === 'mobileError' && (
            <p style={{ width: '500px', margin: '0 auto' }}>
              <ExclamationCircleFilled style={{ color: 'coral', marginRight: '.4em' }} />
              您输入的手机号未在课后服务系统中注册，请确认手机号是否正确，或联系您所在学校的管理员，在课后服务系统中更新您的手机号。
            </p>
          )}
          {showModel === 'mobileSuccess' && (
            <p>
              请选择您想要绑定的学校，并点击“
              <span style={{ color: theme.primaryColor }}>获取验证码</span>”。
            </p>
          )}
          {showModel === 'codeSended' && <p>验证码已通过课后服务系统向您发送，请在5分钟内使用。</p>}
          <ProForm<{ phone: string }>
            name="phone"
            layout="inline"
            onFinish={async (formData) => {
              setSchoolList([]);
              setSchoolSelect([]);
              setCurrentCorpID(null);
              const res = await getUsers({ phone: formData.phone, plat: 'agency', username });
              const { status, data } = res;
              if (status === 'ok') {
                if (data?.length) {
                  const list = data.filter((d) => !d.status);
                  setSchoolList(list);
                  setSchoolSelect(list.map((d) => ({ label: d.QYMC!, value: d.CorpID! })));
                  setShowModel('mobileSuccess');
                } else {
                  setShowModel('mobileError');
                }
              } else {
                setShowModel('mobileError');
              }
            }}
            submitter={{
              render: (props) => {
                return (
                  <Button type="primary" ghost onClick={props.submit}>
                    确定
                  </Button>
                );
              }
            }}
            style={{ ...formStyle, marginTop: '2.2rem' }}
          >
            <ProFormText
              name="phone"
              placeholder="请输入您的手机号"
              rules={[
                {
                  required: true,
                  pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
                  message: '请输入手机号'
                }
              ]}
            />
          </ProForm>

          {(showModel === 'mobileSuccess' || showModel === 'codeSended') && (
            <>
              <ProForm<{ CorpID: string }>
                name="schoolList"
                formRef={schoolListformRef}
                layout="inline"
                submitter={{
                  render: () => {
                    return <></>;
                  }
                }}
                onFinish={async (formData) => {
                  const { CorpID } = formData;
                  const res = await bindUser({ teacherId, username, CorpID });
                  const { status } = res;
                  if (status === 'ok') {
                    setShowModel('codeSended');
                  } else {
                    message.error(res.message || '验证码发送失败');
                  }
                }}
                style={formStyle}
              >
                <ProFormSelect
                  name="CorpID"
                  placeholder="请选择学校"
                  options={schoolSelect}
                  rules={[
                    {
                      required: true,
                      message: '请选择您想要绑定的学校'
                    }
                  ]}
                  fieldProps={{
                    value: currentCorpID,
                    onChange: (value) => {
                      setCurrentCorpID(value);
                      setTeacherId(schoolList.find((school) => school.CorpID === value)?.id || '');
                    },
                    style: { width: '17rem' }
                  }}
                />
              </ProForm>
              <ProForm<{ code: string }>
                formRef={bindformRef}
                layout="inline"
                submitter={{
                  render: () => {
                    return [
                      <Button
                        key="getCode"
                        type="primary"
                        ghost
                        onClick={() => {
                          schoolListformRef.current?.submit();
                        }}
                      >
                        获取验证码
                      </Button>
                      // <Button key="submit" type="primary" onClick={props.submit}>
                      //   提交并绑定
                      // </Button>,
                    ];
                  }
                }}
                onFinish={async (formData) => {
                  const { code } = formData;
                  const res = await checkCode({ teacherId, username, code });
                  const { status } = res;
                  if (status === 'ok') {
                    setShowModel('success');
                  } else {
                    message.error(res.message || '验证失败');
                  }
                }}
                style={formStyle}
              >
                <ProFormText
                  name="code"
                  placeholder="验证码"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码'
                    }
                  ]}
                  fieldProps={{ style: { width: '9.6rem' } }}
                />
              </ProForm>
            </>
          )}
          {showModel === 'codeSended' && (
            <Button key="submit" type="primary" onClick={bindformRef?.current?.submit} style={{ marginTop: '1rem' }}>
              提交并绑定
            </Button>
          )}
        </>
      )}
    </Modal>
  );
};

export default RegistForm;
