import React, { useState } from 'react'
import { Button, message } from 'antd';
import { history } from 'umi';
import classes from "../index.less";

import CustomForm from '@/components/CustomForm';
import { FormItemType } from '@/components/CustomForm/interfice';
/**
 * 机构端-课程列表-编辑页
 * @returns
 */
const Edit = () => {
  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState('');


  const formItemLayout = {
    labelCol: { flex: '12em' },
    wrapperCol: { span: 12 },
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
          name: 'XXMC',
          key: 'XXMC',
          disabled,
          rules: [{ required: true, message: '请输入课程名称' }]
        },
        {
          type: 'uploadImage',
          label: '课程封面',
          name: 'KCFM',
          disabled,
          key: 'KCFM',
          imageurl: imageUrl,
          upurl:'',
          accept: '.jpg, .jpeg, .png',
          imagename: 'image',
          handleImageChange,
          rules: [{ required: true, message: '请上传课程封面' }]
        }
      ],
    },
    {
      type: 'group',
      key: 'group2',
      groupItems: [
        {
          type: 'input',
          label: '课程类型',
          placeholder: '请输入',
          name: 'KCLX',
          disabled,
          key: 'KCLX',
          rules: [{ required: true, message: '请选择课程类型' }]
        },
        {}
      ],
    },
    {
      type: 'group',
      key: 'group3',
      groupItems: [
        {
          type: 'input',
          label: '课程费用',
          placeholder: '请输入',
          name: 'KCFY',
          disabled,
          key: 'KCFY',
        },
        {}
      ],
    },
    {
      type: 'group',
      key: 'group4',
      groupItems: [
        {
          type: 'input',
          label: '适用学段',
          placeholder: '请输入',
          name: 'SYXD',
          disabled,
          key: 'SYXD',
        },
        {
          type: 'input',
          label: '适用年级',
          placeholder: '请输入',
          name: 'SYNJ',
          disabled,
          key: 'SYNJ',
        },
      ],
    },
    {
      type: 'input',
      label: '代课老师',
      placeholder: '请输入',
      name: 'DKLS',
      disabled,
      key: 'DKLS',
    },
    {
      type: 'textArea',
      label: '课程简介',
      placeholder: '请输入',
      name: 'KCJJ',
      disabled,
      key: 'KCJJ',
    },
  ]
  return (
    <div className={classes.content} style={{padding: 16}}>
      <CustomForm
        values={{}}
        formItems={basicForm}
        formLayout={formItemLayout}
        hideBtn={true}
        // formDisabled={true}
      />

      <div style={{display: "flex",justifyContent: "center"}}>
        <Button style={{marginRight: 16}} onClick={()=>{history.goBack()}}>取消</Button>
        <Button type='primary'>保存</Button>
      </div>
    </div>
  )
}

export default Edit;
