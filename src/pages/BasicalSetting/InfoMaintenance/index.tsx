/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Image, Divider, Row, Col, Alert, message, Popconfirm, Tooltip, Select } from 'antd';
import { useModel } from 'umi';
import { createKHJYJG, KHJYJG, updateKHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { createKHJGRZSQ } from '@/services/after-class-pxjg/khjgrzsq';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UploadImage from '@/components/CustomForm/components/UploadImage';
import $ from 'jquery';

import 'antd/es/modal/style';
import styles from './index.less';

const { Option } = Select;

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
  const [cities, setCities] = useState<any>();
  const [cityAdcode, setCityAdcode] = useState<string>();
  const [secondCity, setSecondCity] = useState<any>();
  const [county, setCounty] = useState<any>();
  const [provinceVal, setProvinceVal] = useState<any>();
  const [cityVal, setCityVal] = useState<any>();
  const [countyVal, setCountyVal] = useState<any>();
  const [Datas, setDatas] = useState<any>();
  const onKHJYJG = async () => {
    const res = await KHJYJG({ id: currentUser!.jgId! });
    if (res.status === 'ok') {
      console.log(res.data);
      const { XD, ...info } = res.data;
      const newData = {
        ...info,
        XD: XD?.split(',')
      };
      form.setFieldsValue(newData);
      setXZQHM(res.data.XZQHM);
      setKHJYJGId(res.data.id);
      setSQDatas(res.data.KHJGRZSQs);
      setQYTBImageUrl(res.data.QYTB!);
      setYYZZImageUrl(res.data.YYZZ!);
      setBXXKZImageUrl(res.data.BXXKZ!);
      setDatas(res.data);
    } else {
      form.setFieldsValue({});
    }
  };
  useEffect(() => {
    onKHJYJG();
  }, []);
  const requestData = () => {
    $.ajax({
      url: 'http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/100000_province.json',
      data: {},
      success: function (data: { rows: any }) {
        setCities(data.rows);
      }
    });
  };
  useEffect(() => {
    requestData();
    if (typeof XZQHM !== 'undefined') {
      $.ajax({
        url: `http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${XZQHM?.substring(0, 2)}0000_city.json`,
        data: {},
        success: function (data: { rows: any }) {
          setSecondCity(data.rows);
        }
      });
      $.ajax({
        url: `http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${XZQHM?.substring(0, 4)}00_district.json`,
        data: {},
        success: function (data: { rows: any[] }) {
          let newArr: any[] = [];
          data.rows.forEach((item: any) => {
            if (item.adcode.substring(0, 4) === XZQHM?.substring(0, 4)) {
              newArr.push(item);
            }
          });
          setCounty(newArr);
        }
      });
    }
  }, [XZQHM]);

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
    const { id, XD, ...info } = params;
    const data = {
      ...info,
      QYTB: QYTBImageUrl,
      BXXKZ: BXXKZImageUrl,
      YYZZ: YYZZImageUrl,
      XZQHM: cityAdcode || Datas?.XZQHM,
      XZQ: `${provinceVal?.label}/${cityVal?.label}/${countyVal?.label}`,
      XD: XD.toString()
    };
    if (typeof params.id === 'undefined') {
      if (typeof cityAdcode === 'undefined') {
        message.info('请选择行政区域');
      } else {
        const resCreateKHJYJG = await createKHJYJG(data);
        if (resCreateKHJYJG.status === 'ok') {
          const Data: any = resCreateKHJYJG.data;
          form.scrollToField(Data);
          message.success('保存成功');
          setDisabled(true);
          window.location.reload();
        } else {
          message.error(resCreateKHJYJG.message);
        }
      }
    } else {
      const resUpdateKHJYJG = await updateKHJYJG({ id: currentUser!.jgId! }, data);
      if (resUpdateKHJYJG.status === 'ok') {
        message.success('修改成功');
        setDisabled(true);
        onKHJYJG();
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
    setProvinceVal({
      value: `${XZQHM?.substring(0, 2)}0000`,
      label: Datas?.XZQ?.split('/')[0],
      key: `${XZQHM?.substring(0, 2)}0000`
    });
    setCityVal({
      value: `${XZQHM?.substring(0, 4)}00`,
      label: Datas?.XZQ?.split('/')[1],
      key: `${XZQHM?.substring(0, 4)}00`
    });
    setCountyVal({
      value: XZQHM,
      label: Datas?.XZQ?.split('/')[2],
      key: XZQHM
    });
  };
  const handleChange = (type: string, value: any) => {
    if (type === 'cities') {
      $.ajax({
        url: `http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${value.value}_city.json`,
        data: {},
        success: function (data: { rows: any }) {
          setSecondCity(data.rows);
          setProvinceVal({
            value: value.value,
            label: value.label,
            key: value.value
          });
          setCityVal({});
          setCountyVal({});
        }
      });
    } else if (type === 'secondCity') {
      $.ajax({
        url: `http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${value.value}_district.json`,
        data: {},
        success: function (data: { rows: any[] }) {
          let newArr: any[] = [];
          data.rows.forEach((item: any) => {
            if (item.adcode.substring(0, 4) === value.value.substring(0, 4)) {
              newArr.push(item);
            }
          });
          setCounty(newArr);
          setCityVal({
            value: value.value,
            label: value.label,
            key: value.value
          });
          setCountyVal({});
        }
      });
    } else if (type === 'county') {
      setCityAdcode(value.value);
      setCountyVal({
        value: value.value,
        label: value.label,
        key: value.value
      });
    }
  };
  return (
    <div className={styles.InfoMaintenance}>
      <div>
        <div className={styles.header}>
          {SQDatas?.length === 0 || typeof SQDatas === 'undefined' ? (
            <Popconfirm
              placement="topRight"
              title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
              onConfirm={confirm}
              okText="确定"
              cancelText="取消"
              disabled={typeof SQDatas === 'undefined' ? true : false}
            >
              <Button type="primary" className={styles.RZbtn} disabled={typeof SQDatas === 'undefined' ? true : false}>
                申请备案
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
                        申请备案
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0].ZT === 3 ? (
                  <>
                    <Tooltip title={SQDatas?.[0].BZ}>
                      <Alert message={<>合作已结束</>} type="info" style={{ height: 33 }} />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                      onConfirm={confirm}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        申请备案
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
                        申请备案
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
                  <Tooltip title={SQDatas?.[0].BZ}>
                    <Alert
                      message={
                        <>
                          您已恢复备案资格
                          <QuestionCircleOutlined />
                        </>
                      }
                      type="info"
                      style={{ height: 33 }}
                    />{' '}
                  </Tooltip>
                  <Popconfirm
                    placement="topRight"
                    title="确定本机构信息填写完整且无误后，点击“确定”申请备案资格"
                    onConfirm={confirm}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                      申请备案
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
                label="法人姓名："
                rules={[
                  {
                    required: true,
                    message: '法人姓名'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="FRDBSFZH"
                key="FRDBSFZH"
                label="法人身份证号："
                rules={[
                  {
                    pattern: new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/),
                    message: '请输入正确的身份证号'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item name="QYJGDZ" key="QYJGDZ" label="办公地址：">
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="LXRXM"
                key="LXRXM"
                label="联系人："
                rules={[
                  {
                    required: true,
                    message: '联系人'
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
              {disabled === false ? (
                <Form.Item name="XZQHM" key="XZQHM" label="行政区域：">
                  <Select
                    style={{ width: 100, marginRight: 10 }}
                    onChange={(value: any) => {
                      handleChange('cities', value);
                    }}
                    labelInValue
                    value={provinceVal}
                    disabled={disabled}
                    placeholder={disabled === false ? '请选择' : '——'}
                  >
                    {cities?.map((item: any) => {
                      return (
                        <Option value={item.adcode} key={item.name}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                  <Select
                    style={{ width: 100, marginRight: 10 }}
                    onChange={(value: any) => {
                      handleChange('secondCity', value);
                    }}
                    labelInValue
                    value={cityVal}
                    disabled={disabled}
                    placeholder={disabled === false ? '请选择' : '——'}
                  >
                    {secondCity?.map((item: any) => {
                      return (
                        <Option value={item.adcode} key={item.name}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                  <Select
                    style={{ width: 100 }}
                    onChange={(value: any) => {
                      handleChange('county', value);
                    }}
                    labelInValue
                    value={countyVal}
                    disabled={disabled}
                    placeholder={disabled === false ? '请选择' : '——'}
                  >
                    {county?.map((item: any) => {
                      return (
                        <Option value={item.adcode} key={item.adcode}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item name="XZQ" key="XZQ" label="行政区域：">
                  <Input disabled={disabled} placeholder="——" />
                </Form.Item>
              )}

              <Form.Item name="JGFWFW" key="JGFWFW" label="机构服务范围：">
                <Input placeholder={disabled === false ? '请输入' : '——'} disabled={disabled} />
              </Form.Item>
              {disabled === true ? (
                <Form.Item name="XD" key="XD" label="学段">
                  <Input disabled={disabled} placeholder="——" />
                </Form.Item>
              ) : (
                <Form.Item
                  name="XD"
                  key="XD"
                  label="学段"
                  rules={[
                    {
                      required: true,
                      message: '请选择学段'
                    }
                  ]}
                >
                  <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="请选择">
                    <Option value="幼儿园">幼儿园</Option>
                    <Option value="小学">小学</Option>
                    <Option value="初中">初中</Option>
                    <Option value="高中">高中</Option>
                  </Select>
                </Form.Item>
              )}

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
                更改备案信息
              </button>
            ) : (
              <>
                <Button type="primary" htmlType="submit">
                  提交
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
