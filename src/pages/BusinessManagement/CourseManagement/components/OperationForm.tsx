/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-25 18:29:59
 * @LastEditTime: 2021-08-25 18:33:08
 * @LastEditors: Sissle Lynn
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import type { FormInstance } from 'antd';
import { message } from 'antd';
import CustomForm from '@/components/CustomForm';

const formLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

type PropsType = {
  onCancel?: () => void;
  setModalVisible: (value: boolean) => void;
};

const OperationForm = (props: PropsType) => {
  const { setModalVisible } = props;

  const formItems: any[] = [
    {
      type: 'input',
      label: '名称',
      name: 'FJMC',
      key: 'FJMC',
      fieldProps: {
        autocomplete: 'off',
      },
      rules: [
        { required: true, message: '请填写名称' },
        { max: 10, message: '最长为 10 位' },
      ],
    },
    {
      type: 'input',
      label: '编号',
      name: 'FJBH',
      key: 'FJBH',
      rules: [{ required: true, message: '请填写编号' }],
      fieldProps: {
        autocomplete: 'off',
      },
    }
  ];
  return (
    <>
      <CustomForm
        formItems={formItems}
        formLayout={formLayout}
        hideBtn={true}
        formDisabled={true}
      />
    </>
  );
};

export default OperationForm;
