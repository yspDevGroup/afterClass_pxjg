/* eslint-disable complexity */
import React, { FC, useEffect, useState } from 'react';
import { Button, Form, Input, Image, Divider, Row, Col, Alert, message, Popconfirm, Tooltip, Select } from 'antd';
import { useModel } from 'umi';
import { createKHJYJG, KHJYJG, updateKHJYJG } from '@/services/after-class-pxjg/khjyjg';
import { createKHJGRZSQ, deleteKHJGRZSQ, getKHJGRZSQ, updateKHJGRZSQ } from '@/services/after-class-pxjg/khjgrzsq';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UploadImage from '@/components/CustomForm/components/UploadImage';

import 'antd/es/modal/style';
import styles from './index.less';
import { getAdministrative } from '@/services/after-class-pxjg/sso';

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
  const [applyState, setApplyState] = useState<boolean>(false);

  const onKHJYJG = async () => {
    const res = await KHJYJG({ id: currentUser!.jgId! });
    if (res.status === 'ok') {
      const { XD, ZT, ...info } = res.data;
      const newData = {
        ...info,
        XD: XD === '' ? [] : XD?.split(',')
      };
      if (res.data.ZT === 0) {
        setApplyState(true);
      }
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

  // ??????????????????
  const getRegion = async (type: 'province' | 'city' | 'region', code: string) => {
    const response = await getAdministrative({
      type,
      code
    });
    if (response?.status === 'ok') {
      console.log('response', response);
      return response?.data?.list?.map((item: { name: string; code: string }) => ({ mc: item.name, dm: item.code }));
    } else {
      message.error(response.message);
    }
    return [];
  };

  const requestData = async () => {
    // const response = await fetch('https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/100000_province.json');
    // const provinceData = await response.json();
    const list = await getRegion('province', '');
    setCities(list);
  };
  useEffect(() => {
    requestData();
    if (XZQHM) {
      setCityAdcode(XZQHM);
    }
    if (typeof XZQHM !== 'undefined') {
      (async () => {
        // const response = await fetch(
        //   `https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/_city.json`
        // );
        // const provinceData = await response.json();
        const list1 = await getRegion('city', `${XZQHM?.substring(0, 2)}0000`);
        setSecondCity(list1);
        const list2 = await getRegion('region', `${XZQHM?.substring(0, 4)}00`);
        // setSecondCity(list2);
        // const res = await fetch(
        //   `https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${XZQHM?.substring(0, 4)}00_district.json`
        // );
        // const resData = await res.json();
        // let newArr: any[] = [];
        // resData.rows.forEach((item: any) => {
        //   if (item.adcode.substring(0, 4) === XZQHM?.substring(0, 4)) {
        //     newArr.push(item);
        //   }
        // });
        setCounty(list2);
      })();
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
      setApplyState(true);
      message.success('????????????????????????');
    } else {
      message.error('????????????');
    }
  };
  const unconfirm = async () => {
    const resKHJGRZSQ = await getKHJGRZSQ({
      KHJYJGId: currentUser!.jgId!,
      page: 0,
      pageSize: 0
    });
    const rescreateKHJGRZSQ = await deleteKHJGRZSQ({
      id: resKHJGRZSQ.data.rows[0].id
    });
    await updateKHJGRZSQ(
      {
        id: resKHJGRZSQ.data.rows[1].id
      },
      {
        ZT: 5
      }
    );
    if (rescreateKHJGRZSQ.status === 'ok') {
      onKHJYJG();
      setApplyState(false);
      message.success('??????????????????');
    } else {
      message.error('????????????');
    }
  };

  // ???????????????????????????
  const imageChange = (type: string, e?: any) => {
    if (e.file.status === 'done') {
      const mas = e.file.response.message;
      if (typeof e.file.response === 'object' && e.file.response.status === 'error') {
        message.error(`???????????????${mas}`);
      } else {
        const res = e.file.response;
        if (res.status === 'ok') {
          message.success(`????????????`);
          if (type === 'YYZZTP') {
            setYYZZImageUrl(res.data);
            form.setFieldsValue({ YYZZ: res.data });
          } else if (type === 'QYTBTP') {
            setQYTBImageUrl(res.data);
            form.setFieldsValue({ QYTB: res.data });
          } else {
            setBXXKZImageUrl(res.data);
            form.setFieldsValue({ BXXKZ: res.data });
          }
        }
      }
    } else if (e.file.status === 'error') {
      const mass = e.file.response.message;

      message.error(`???????????????${mass}`);
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
      XZQ: `${provinceVal?.label}${cityVal?.label ? `/${cityVal?.label}` : ''}${
        countyVal?.label ? `/${countyVal?.label}` : ''
      }`,
      XD: XD?.toString()
    };
    if (typeof params.id === 'undefined') {
      if (typeof cityAdcode === 'undefined') {
        message.info('?????????????????????');
      } else {
        const resCreateKHJYJG = await createKHJYJG(data);
        if (resCreateKHJYJG.status === 'ok') {
          const Data: any = resCreateKHJYJG.data;
          form.scrollToField(Data);
          message.success('????????????');
          setDisabled(true);
          onKHJYJG();
          window.location.reload();
        } else {
          message.error(resCreateKHJYJG.message);
        }
      }
    } else {
      const resUpdateKHJYJG = await updateKHJYJG({ id: currentUser!.jgId! }, data);
      if (typeof cityAdcode === 'undefined') {
        message.info('?????????????????????');
      } else if (resUpdateKHJYJG.status === 'ok') {
        message.success('????????????');
        setDisabled(true);
        onKHJYJG();
      } else {
        message.error(resUpdateKHJYJG.message);
      }
    }
  };

  const onReset = () => {
    setDisabled(true);
    onKHJYJG();
  };
  const onEditor = () => {
    setDisabled(false);
    const zxq = Datas?.XZQ || '';
    setProvinceVal({
      value: `${XZQHM?.substring(0, 2)}0000`,
      label: zxq.split('/')?.[0],
      key: `${XZQHM?.substring(0, 2)}0000`
    });
    setCityVal({
      value: `${XZQHM?.substring(0, 4)}00`,
      label: zxq.split('/')?.[1],
      key: `${XZQHM?.substring(0, 4)}00`
    });
    setCountyVal({
      value: XZQHM,
      label: zxq.split('/')?.[2],
      key: XZQHM
    });
  };
  const handleChange = async (type: string, value: any) => {
    console.log(value);
    if (type === 'cities') {
      const list = await getRegion('city', value.value);
      // const response = await fetch(
      //   `https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${value.value}_city.json`
      // );
      // const provinceData = await response.json();
      if (value.value === '810000' || value.value === '820000' || value.value === '710000') {
        setCityAdcode(value.value);
      } else {
        setCityAdcode(undefined);
      }
      setProvinceVal({
        value: value.value,
        label: value.label,
        key: value.value
      });
      setCityVal({});
      setCountyVal({});
      setCounty([]);
      setSecondCity(list);
    } else if (type === 'secondCity') {
      const list = await getRegion('region', value.value);
      // const res = await fetch(
      //   `https://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/csv/${value.value}_district.json`
      // );
      // const resData = await res.json();
      // let newArr: any[] = [];
      // resData.rows.forEach((item: any) => {
      //   if (item.adcode.substring(0, 4) === value.value.substring(0, 4)) {
      //     newArr.push(item);
      //   }
      // });
      setCounty(list);
      setCityVal({
        value: value.value,
        label: value.label,
        key: value.value
      });
      setCountyVal({});
      setCityAdcode(undefined);
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
          {SQDatas?.length === 0 || SQDatas?.[0]?.ZT === 5 ? (
            <Popconfirm
              placement="topRight"
              title="????????????????????????????????????????????????????????????????????????????????????"
              onConfirm={confirm}
              okText="??????"
              cancelText="??????"
              disabled={XZQHM ? false : true}
            >
              <Button type="primary" className={styles.RZbtn} disabled={XZQHM ? false : true}>
                ????????????
              </Button>
            </Popconfirm>
          ) : (
            <>
              {SQDatas?.[0]?.LX === 0 ? (
                SQDatas?.[0]?.ZT === 0 && applyState ? (
                  <>
                    <Alert message="?????????" type="warning" style={{ height: 33 }} />
                    <Popconfirm
                      placement="topRight"
                      title="??????????????????????????????????????????????????????????????????"
                      onConfirm={unconfirm}
                      okText="??????"
                      cancelText="??????"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        ????????????
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0]?.ZT === 1 ? (
                  <>
                    <Alert message="????????????????????????" type="success" style={{ height: 33 }} />
                  </>
                ) : SQDatas?.[0]?.ZT === 2 ? (
                  <>
                    <Tooltip title={SQDatas?.[0]?.BZ}>
                      <Alert
                        message={
                          <>
                            ???????????????
                            <QuestionCircleOutlined />
                          </>
                        }
                        type="error"
                        style={{ height: 33 }}
                      />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="????????????????????????????????????????????????????????????????????????????????????"
                      onConfirm={confirm}
                      okText="??????"
                      cancelText="??????"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        ????????????
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0]?.ZT === 3 ? (
                  <>
                    <Tooltip title={SQDatas?.[0]?.BZ}>
                      <Alert message={<>???????????????</>} type="info" style={{ height: 33 }} />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="????????????????????????????????????????????????????????????????????????????????????"
                      onConfirm={confirm}
                      okText="??????"
                      cancelText="??????"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        ????????????
                      </Button>
                    </Popconfirm>
                  </>
                ) : SQDatas?.[0]?.ZT === 4 ? (
                  <>
                    <Tooltip title={SQDatas?.[0]?.BZ}>
                      <Alert
                        message={
                          <>
                            ????????????
                            <QuestionCircleOutlined />
                          </>
                        }
                        type="error"
                        style={{ height: 33 }}
                      />
                    </Tooltip>
                    <Popconfirm
                      placement="topRight"
                      title="????????????????????????????????????????????????????????????????????????????????????"
                      onConfirm={confirm}
                      okText="??????"
                      cancelText="??????"
                    >
                      <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                        ????????????
                      </Button>
                    </Popconfirm>
                  </>
                ) : (
                  <></>
                )
              ) : SQDatas?.[0]?.ZT === 1 ? (
                <>
                  <Tooltip title={SQDatas?.[0]?.BZ}>
                    <Alert
                      message={
                        <>
                          ????????????????????????
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
                  <Tooltip title={SQDatas?.[0]?.BZ}>
                    <Alert
                      message={
                        <>
                          ????????????????????????
                          <QuestionCircleOutlined />
                        </>
                      }
                      type="info"
                      style={{ height: 33 }}
                    />{' '}
                  </Tooltip>
                  <Popconfirm
                    placement="topRight"
                    title="????????????????????????????????????????????????????????????????????????????????????"
                    onConfirm={confirm}
                    okText="??????"
                    cancelText="??????"
                  >
                    <Button type="primary" className={styles.RZbtn} disabled={currentUser?.jgId ? false : true}>
                      ????????????
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
              <Form.Item name="QYTB" key="QYTB" label="??????LOGO???">
                <UploadImage
                  key="QYTBTP"
                  disabled={disabled}
                  imageurl={QYTBImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  imgWidth={100}
                  imgHeight={100}
                  handleImageChange={(value: any) => {
                    imageChange('QYTBTP', value);
                  }}
                />
              </Form.Item>
              <Form.Item name="QYMC" key="QYMC" label="???????????????">
                <Input placeholder="??????" disabled={true} />
              </Form.Item>
              <Form.Item
                name="ZZJGDM"
                key="ZZJGDM"
                label="???????????????????????????"
                rules={[
                  {
                    required: true,
                    message: '?????????????????????????????????'
                  },
                  {
                    pattern: new RegExp(/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g),
                    message: '??????????????????????????????????????????'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="FRDBXM"
                key="FRDBXM"
                label="???????????????"
                rules={[
                  {
                    required: true,
                    message: '????????????'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="FRDBSFZH"
                key="FRDBSFZH"
                label="?????????????????????"
                rules={[
                  {
                    required: true,
                    message: '???????????????????????????'
                  },
                  {
                    pattern: new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/),
                    message: '??????????????????????????????'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              <Form.Item name="QYJGDZ" key="QYJGDZ" label="???????????????">
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="LXRXM"
                key="LXRXM"
                label="????????????"
                rules={[
                  {
                    required: true,
                    message: '??????????????????'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              <Form.Item
                name="LXDH"
                key="LXDH"
                label="???????????????"
                rules={[
                  {
                    required: true,
                    message: '?????????????????????'
                  },
                  {
                    pattern: new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/),
                    message: '???????????????????????????'
                  }
                ]}
              >
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
            </Col>
            <Col span={2} />
            <Col span={11}>
              {disabled === false ? (
                <Form.Item name="XZQHM" key="XZQHM" label="???????????????">
                  <Select
                    style={{ width: 100, marginRight: 10 }}
                    onChange={(value: any) => {
                      handleChange('cities', value);
                    }}
                    labelInValue
                    value={provinceVal}
                    disabled={disabled}
                  >
                    {cities?.map((item: any) => {
                      return (
                        <Option value={item.dm} key={item.mc}>
                          {item.mc}
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
                  >
                    {secondCity?.map((item: any) => {
                      return (
                        <Option value={item.dm} key={item.mc}>
                          {item.mc}
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
                  >
                    {county?.map((item: any) => {
                      return (
                        <Option value={item.dm} key={item.dm}>
                          {item.mc}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item name="XZQ" key="XZQ" label="???????????????">
                  <Input disabled={disabled} placeholder="??????" />
                </Form.Item>
              )}

              <Form.Item name="JGFWFW" key="JGFWFW" label="?????????????????????">
                <Input placeholder={disabled === false ? '?????????' : '??????'} disabled={disabled} />
              </Form.Item>
              {disabled === true ? (
                <Form.Item
                  name="XD"
                  key="XD"
                  label="??????"
                  rules={[
                    {
                      required: true,
                      message: '???????????????'
                    }
                  ]}
                >
                  <Input disabled={disabled} placeholder="??????" />
                </Form.Item>
              ) : (
                <Form.Item
                  name="XD"
                  key="XD"
                  label="??????"
                  rules={[
                    {
                      required: true,
                      message: '???????????????'
                    }
                  ]}
                >
                  <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="?????????">
                    <Option value="?????????">?????????</Option>
                    <Option value="??????">??????</Option>
                    <Option value="??????">??????</Option>
                    <Option value="??????">??????</Option>
                  </Select>
                </Form.Item>
              )}

              <Form.Item
                name="YYZZ"
                key="YYZZ"
                label="???????????????"
                rules={[
                  {
                    required: true,
                    message: '?????????????????????'
                  }
                ]}
                valuePropName="imageurl"
              >
                <UploadImage
                  key="YYZZTP"
                  disabled={disabled}
                  imageurl={YYZZImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  imgHeight={150}
                  imgWidth={225}
                  handleImageChange={(value: any) => {
                    imageChange('YYZZTP', value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="BXXKZ"
                key="BXXKZ"
                label="??????????????????"
                rules={[
                  {
                    required: true,
                    message: '????????????????????????'
                  }
                ]}
                valuePropName="imageurl"
              >
                <UploadImage
                  key="BXXKZTP"
                  disabled={disabled}
                  imageurl={BXXKZImageUrl}
                  upurl="/api/upload/uploadFile?type=badge&plat=agency"
                  accept=".jpg, .jpeg, .png"
                  imagename="image"
                  imgHeight={150}
                  imgWidth={225}
                  handleImageChange={(value: any) => {
                    imageChange('BXXKZTP', value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="JGJJ" key="JGJJ" label="???????????????">
            <Input.TextArea placeholder={disabled === false ? '?????????' : '??????'} rows={4} disabled={disabled} />
          </Form.Item>
          <Form.Item
            className={styles.bottomBtnCon}
            style={{
              display: SQDatas?.[0]?.ZT === 0 || SQDatas?.[0]?.ZT === 1 || SQDatas?.[0]?.ZT === 4 ? 'none' : 'block'
            }}
          >
            {disabled === true ? (
              <button onClick={onEditor} className={styles.btn}>
                ??????????????????
              </button>
            ) : (
              <>
                <Button type="primary" htmlType="submit">
                  ??????
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  ??????
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
