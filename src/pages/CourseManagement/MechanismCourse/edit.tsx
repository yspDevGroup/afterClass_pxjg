/* eslint-disable max-nested-callbacks */
import React, { useEffect, useState } from 'react';
import { history, useModel } from 'umi';
import { Button, FormInstance, message, Table } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import CustomForm from '@/components/CustomForm';
import { FormItemType } from '@/components/CustomForm/interfice';
import { getAllKHKCLX } from '@/services/after-class-pxjg/khkclx';
import { getKHJSSJ } from '@/services/after-class-pxjg/khjssj';
import { getAllGrades } from '@/services/after-class-pxjg/khjyjg';
import { createKHKCSJ, getKHKCSJ, updateKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
import classes from '../index.less';
import { courseColorType } from '@/theme-default';

/**
 * 机构端-课程列表-编辑页
 * @returns
 */
const formItemLayout = {
  labelCol: { flex: '12em' },
  wrapperCol: { span: 16 }
};
const Edit = (props: any) => {
  const { state } = props.location;

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [forms, setForm] = useState<FormInstance<any>>();
  const [KCLXOptions, setKCLXOptions] = useState<any>([]);
  const [JSSJOptions, setJSSJOptions] = useState<any>([]);
  const [NJDataOption, setNJDataOption] = useState<any>([]);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [formValues, setFormValues] = useState({});
  const [teacherData, setTeacherData] = useState<any>([]);
  useEffect(() => {
    if (state?.type === 'info') {
      setDisabled(true);
      // 老师表格数据
      const thData: any[] = [];
      state.KHKCJs.forEach((item: any) => {
        thData.push(item?.KHJSSJ);
      });
      setTeacherData(thData);
    }
    if (state?.id) {
      // form详情
      const params = {
        KCMC: state?.KCMC || '-',
        KCMS: state?.KCMS || '-',
        njIds: state?.NJSJs?.map((item: any) => item?.id) || '-',
        jsIds: state?.KHKCJs?.map((item: any) => item?.KHJSSJ?.id) || '-',
        KCTP: state?.KCTP || '-',
        KHKCLXId: state?.KHKCLXId || '-',
        KBYS: state?.KBYS || '-'
      };
      setImageUrl(state?.KCTP);
      setFormValues(params);
    }
  }, []);
  useEffect(() => {
    (async () => {
      // 课程类型
      const res = await getAllKHKCLX({ name: '' });
      if (res.status === 'ok') {
        const data = res.data?.map((item: any) => {
          return {
            value: item.id,
            text: item.KCTAG
          };
        });
        setKCLXOptions(data);
      }
      // 任课教师
      const resTH = await getKHJSSJ({ JGId: currentUser?.jgId, page: 0, pageSize: 0 });
      if (resTH.status === 'ok') {
        const datas = resTH.data?.rows?.map((item: any) => {
          return {
            value: item.id,
            text: item.XM
          };
        });
        setJSSJOptions(datas);
      }
      // 适用年级
      const resNJ = await getAllGrades({ XD: currentUser?.XD?.split(',') });
      if (resNJ.status === 'ok') {
        const nj = ['幼儿园', '小学', '初中', '高中'];
        const dataNJ: any[] = [];
        nj.forEach((items: any) => {
          resNJ.data?.forEach((item: any) => {
            if (items === item.XD) {
              if (item.XD === '初中') {
                dataNJ.push({ text: item.NJMC, value: item.id });
              } else {
                dataNJ.push({ text: `${item.XD}${item.NJMC}`, value: item.id });
              }
            }
          });
        });
        setNJDataOption(dataNJ);
      }
    })();
  }, []);

  // 提交的回调
  const onFinish = async (values: any) => {
    const params = {
      ...values,
      KCTP: imageUrl || '',
      KCZT: 0,
      KHJYJGId: currentUser?.jgId
      // KHKCLXId: KCLXOptions?.find((item: any) => item.text === '标准课程').value
    };
    if (state) {
      const res = await updateKHKCSJ({ id: state?.id }, { ...params });
      if (res.status === 'ok') {
        message.success('保存成功');
        history.push('/courseManagement');
      } else {
        message.error(res.message);
      }
    } else {
      const res = await createKHKCSJ(params);
      if (res.status === 'ok') {
        message.success('保存成功');
        history.push('/courseManagement');
      } else {
        message.error(res.message);
      }
    }
  };
  // 文件状态改变的回调
  const handleImageChange = (e?: any) => {
    if (e.file.status === 'done') {
      const mas = e.file.response.message;
      if (typeof e.file.response === 'object' && e.file.response.status === 'error') {
        message.error(`上传失败，${mas}`);
      } else {
        const res = e.file.response;
        if (res.status === 'ok') {
          message.success(`上传成功`);
          setImageUrl(res.data);
        }
      }
    } else if (e.file.status === 'error') {
      const mass = e.file.response.message;

      message.error(`上传失败，${mass}`);
    }
  };
  const basicForm: FormItemType[] = [
    {
      type: 'group',
      key: 'group1',
      groupItems: [
        {
          type: 'input',
          label: '课程名称',
          placeholder: '请输入',
          name: 'KCMC',
          key: 'KCMC',
          disabled,
          rules: [{ required: true, message: '请输入课程名称' }]
        },
        {}
      ]
    },
    {
      type: 'group',
      key: 'group2',
      groupItems: [
        {
          type: 'select',
          label: '课程类型',
          placeholder: '请输入',
          name: 'KHKCLXId',
          key: 'KHKCLXId',
          disabled,
          items: KCLXOptions,
          rules: [{ required: true, message: '请选择课程类型' }]
        },
        {}
      ]
    },
    {
      type: 'group',
      key: 'group3',
      groupItems: [
        {
          type: 'select',
          label: '适用年级',
          placeholder: '请选择',
          name: 'njIds',
          disabled,
          mode: 'multiple',
          key: 'njIds',
          items: NJDataOption,
          rules: [{ required: true, message: '请选择适用年级' }]
        },
        {}
      ]
    },
    {
      type: 'group',
      key: 'group4',
      groupItems: [
        {
          type: 'select',
          label: '任课教师',
          placeholder: '请选择',
          key: 'jsIds',
          name: 'jsIds',
          disabled,
          hidden: disabled,
          mode: 'multiple',
          items: JSSJOptions,
          rules: [{ required: true, message: '请选择任课教师' }]
        },
        {}
      ]
    },
    {
      type: 'group',
      key: 'group5',
      groupItems: [
        {
          type: 'select',
          label: '课程颜色',
          name: 'KBYS',
          key: 'KBYS',
          disabled,
          items: [
            { text: '绯红', value: courseColorType.crimson },
            { text: '橙色', value: courseColorType.orange },
            { text: '黄色', value: courseColorType.yellow },
            { text: '蓝色', value: courseColorType.blue },
            { text: '天空蓝', value: courseColorType.skyBlue },
            { text: '紫色', value: courseColorType.violet },
            { text: '紫红色', value: courseColorType.purplishRed }
          ]
        },
        {}
      ]
    },
    {
      type: 'uploadImage',
      label: '课程封面',
      name: 'KCTP',
      disabled,
      key: 'KCTP',
      imageurl: imageUrl,
      upurl: '/api/upload/uploadFile?type=badge&plat=agency',
      accept: '.jpg, .jpeg, .png',
      imagename: 'image',
      handleImageChange
      // rules: [{ required: true, message: '请上传课程封面' }]
    },
    {
      type: 'textArea',
      label: '课程简介',
      placeholder: '请输入',
      name: 'KCMS',
      disabled,
      key: 'KCMS'
    }
  ];
  const columns: any = [
    {
      title: '姓名',
      dataIndex: 'XM',
      key: 'XM',
      align: 'center'
    },
    {
      title: '联系电话',
      dataIndex: 'LXDH',
      key: 'LXDH',
      align: 'center'
    },
    {
      title: '邮箱',
      dataIndex: 'DZXX',
      key: 'DZXX',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'opthion',
      key: 'opthion',
      align: 'center',
      render: (text: any, record: any) => {
        return (
          <a
            onClick={() => {
              history.push({
                pathname: `/basicalSetting/teacherManagement/detail`,
                state: {
                  type: 'detail',
                  data: record
                }
              });
            }}
          >
            详情
          </a>
        );
      }
    }
  ];
  return (
    <>
      {state?.type === 'info' ? (
        <Button
          type="primary"
          onClick={() => {
            history.go(-1);
          }}
          style={{
            marginBottom: '24px'
          }}
        >
          <LeftOutlined />
          返回上一页
        </Button>
      ) : (
        ''
      )}
      <div className={classes.content} style={{ padding: 16 }}>
        <div
          style={{ width: '85%', minWidth: '850px', margin: '0 auto' }}
          className={state?.type === 'info' ? classes.formType : ''}
        >
          <CustomForm
            values={formValues || {}}
            formItems={basicForm}
            formLayout={formItemLayout}
            hideBtn={true}
            onFinish={onFinish}
            setForm={(formValue: FormInstance<any>) => {
              setForm(formValue);
            }}
          />
          <Table
            style={{ display: state?.type === 'info' ? 'initial' : 'none' }}
            title={() => '任课教师列表'}
            columns={columns}
            dataSource={teacherData}
            pagination={false}
            size="small"
          />
          <div
            style={{
              display: state?.type === 'info' ? 'none' : 'flex',
              justifyContent: 'center',
              marginTop: 24
            }}
          >
            <Button
              style={{ marginRight: 16 }}
              onClick={() => {
                history.goBack();
              }}
            >
              取消
            </Button>
            <Button
              type="primary"
              onClick={() => {
                forms?.submit();
              }}
            >
              保存
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
