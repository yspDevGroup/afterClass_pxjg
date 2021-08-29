/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:24:39
 * @LastEditTime: 2021-08-29 18:31:12
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import CustomForm from '@/components/CustomForm';
import { basicForm } from './FormItems';
import defaultImg from '@/assets/vector.png';

import styles from './components.less';
import { FormInstance, message } from 'antd';
import { FormItemType } from '@/components/CustomForm/interfice';
import moment from 'moment';
import { createKHJSSJ, updateKHJSSJ } from '@/services/after-class-pxjg/khjssj';
import { useModel } from 'umi';

const formItemLayout = {
  labelCol: { flex: '7em' },
  wrapperCol: { flex: 'auto' },
};
type PropsType = {
  values: any;
  setForm: React.Dispatch<React.SetStateAction<FormInstance<any> | undefined>>;
  readonly?: boolean;
};
const SchoolInfo = (props: PropsType) => {
  const { values, setForm, readonly = false } = props;
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [info, setInfo] = useState<any>();
  const [zpUrl, setZPUrl] = useState('');
  const [zgzsUrl, setZGZSUrl] = useState('');
  useEffect(() => {
    if (values) {
      setZPUrl(values.ZP ? values.ZP : '');
      setZGZSUrl(values.ZGZS ? values.ZGZS : '');
      setInfo(values);
    }
  }, [values]);
  // 文件状态改变的回调
  const imageChange = (type: string, e?: any,) => {
    if (e.file.status === 'done') {
      const mas = e.file.response.message;
      if (typeof e.file.response === 'object' && e.file.response.status === 'error') {
        message.error(`上传失败，${mas}`);
      } else {
        const res = e.file.response;
        if (res.status === 'ok') {
          message.success(`上传成功`);
          type === 'ZP' ? setZPUrl(res.data) : setZGZSUrl(res.data);
        }
      }
    } else if (e.file.status === 'error') {
      const mass = e.file.response.message;

      message.error(`上传失败，${mass}`);
    }
  };
  const basicForm: FormItemType[] = [
    {
      type: 'input',
      label: 'id',
      name: 'id',
      key: 'id',
      hidden: true,
    },
    {
      type: 'input',
      label: 'KHJYJGId',
      name: 'KHJYJGId',
      key: 'KHJYJGId',
      hidden: true,
    },
    {
      type: 'group',
      key: 'group1',
      groupItems: [
        {
          type: 'uploadImage',
          label: '个人照片',
          name: 'ZP',
          key: 'ZP',
          imgWidth: 100,
          imgHeight: 100,
          imageurl: zpUrl,
          upurl: '/upload/uploadFile?type=badge',
          accept: '.jpg, .jpeg, .png',
          imagename: 'image',
          handleImageChange: (value: any) => {
            imageChange('ZP', value);
          }
        },
        {
          type: 'uploadImage',
          label: '资格证书',
          name: 'ZGZS',
          key: 'ZGZS',
          imgWidth: 100,
          imgHeight: 100,
          imageurl: zgzsUrl,
          upurl: '/upload/uploadFile?type=badge',
          accept: '.jpg, .jpeg, .png',
          imagename: 'image',
          handleImageChange: (value: any) => {
            imageChange('ZGZS', value);
          }
        },
      ],
    },
    {
      type: 'group',
      key: 'group2',
      groupItems: [
        {
          type: 'input',
          label: '姓名',
          name: 'XM',
          key: 'XM',
          rules: [{ required: true, message: '请输入姓名' }],
          placeholder: readonly ? '-':'',
        },
        {
          type: 'input',
          label: '学历',
          name: 'XL',
          key: 'XL',
          placeholder: readonly ? '-':'',
        },
      ]
    },
    {
      type: 'group',
      key: 'group3',
      groupItems: [
        {
          type: 'radio',
          name: 'XB',
          key: 'XB',
          label: '性别',
          items: [
            {
              text: '男',
              value: '男',
            },
            {
              text: '女',
              value: '女',
            },
          ],
        },
        {
          type: 'inputNumber',
          label: '教龄(月)',
          name: 'JL',
          key: 'JL',
          placeholder: readonly ? '-':'',
        },
      ],
    },
    {
      type: 'group',
      key: 'group4',
      groupItems: [
        {
          type: 'time',
          subtype: 'date',
          label: '出生日期',
          name: 'CSRQ',
          key: 'CSRQ',
          placeholder: readonly ? '-':'',
        },
        {
          type: 'select',
          key: 'SFZJLX',
          name: 'SFZJLX',
          label: '证件类型',
          placeholder: readonly ? '-':'',
          items: [
            {
              value: '居民身份证',
              text: '居民身份证'
            },
            {
              value: '护照',
              text: '护照'
            },
            {
              value: '户口簿',
              text: '户口簿'
            },
            {
              value: '其他',
              text: '其他'
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      key: 'group7',
      groupItems: [
        {
          type: 'input',
          label: '联系电话',
          name: 'LXDH',
          key: 'LXDH',
          placeholder: readonly ? '-':'',
          rules: [{ required: true, message: '请输入联系电话' }],
        },
        {
          type: 'input',
          key: 'SFZJH',
          name: 'SFZJH',
          label: '证件号码',
          placeholder: readonly ? '-':'',
        },
      ]
    },
    {
      type: 'group',
      key: 'group8',
      groupItems: [
        {
          type: 'input',
          label: '电子邮箱',
          name: 'DZXX',
          key: 'DZXX',
          placeholder: readonly ? '-':'',
        },
        {
          type: 'textArea',
          label: '个人简介',
          name: 'BZ',
          key: 'BZ',
          placeholder: readonly ? '-':'',
        },
      ]
    },
  ];
  const onFinish = async (values: any) => {
    let res;
    values.CSRQ = values.CSRQ ? moment(values.CSRQ).format('YYYY-MM-DD') : undefined;
    values.ZGZS = zgzsUrl ? zgzsUrl : values.ZGZS;
    values.ZP = zpUrl ? zpUrl : values.ZP;

    if (values.id) {
      res = await updateKHJSSJ({
        id: values.id,
      }, values);
    } else {
      res = await createKHJSSJ(values);
    }
    if (res.status === 'ok') {
      message.success('保存成功');
      history.go(-1);
    } else {
      let msg = res.message;
      message.error(msg);
    }
  };
  return (
    <div className={styles.teacherWrapper}>
      <div className={styles.teacherInfoBody}>
        <CustomForm
          values={(() => {
            if (info) {
              const { CSRQ, ...rest } = info;
              return {
                CSRQ: CSRQ ? moment(CSRQ) : '',
                ...rest,
              };
            }
            return {
              XB: '男',
              KHJYJGId: currentUser?.jgId
            };
          })()}
          formDisabled={readonly}
          setForm={setForm}
          formItems={basicForm}
          formLayout={formItemLayout}
          onFinish={onFinish}
          hideBtn={true}
        />
      </div>
    </div>
  );
};

export default SchoolInfo;
