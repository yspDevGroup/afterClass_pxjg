/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-25 18:29:59
 * @LastEditTime: 2021-09-08 18:11:35
 * @LastEditors: Sissle Lynn
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import type { FormInstance } from 'antd';
import { message } from 'antd';
import CustomForm from '@/components/CustomForm';
import { FormItemType } from '@/components/CustomForm/interfice';

const formLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

type PropsType = {
  current: any;
  setForm: React.Dispatch<React.SetStateAction<FormInstance<any> | undefined>>;
};

const OperationForm = (props: PropsType) => {
  const { current, setForm } = props;
  const [required, setRequired] = useState<boolean>(false);

  const formItems: FormItemType[] = [
    {
      type: 'input',
      label: 'id',
      name: 'id',
      key: 'id',
      hidden: true
    },
    {
      type: 'radio',
      label: '确认合作',
      name: 'ZT',
      key: 'ZT',
      items: [
      {
        text: '同意',
        value: '1'
      },
      {
        text: '不同意',
        value: '2'
      },
      ],
      onChange: (e: any) => {
        setRequired(e.target.value === '2');
      }
    },
    {
      type: 'textArea',
      label: '备注',
      name: 'BZ',
      key: 'BZ',
    }
  ];
  return (
    <>
      <CustomForm
        values={current}
        setForm={setForm}
        formItems={formItems}
        formLayout={formLayout}
        hideBtn={true}
      />
    </>
  );
};

export default OperationForm;
