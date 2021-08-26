/* eslint-disable max-nested-callbacks */
import React, { useEffect, useState } from 'react'
import { Button, FormInstance, message, Table } from 'antd';
import { history } from 'umi';
import classes from "../index.less";

import CustomForm from '@/components/CustomForm';
import { FormItemType } from '@/components/CustomForm/interfice';
import { getAllKHKCLX } from '@/services/after-class-pxjg/khkclx';
import { getKHJSSJ } from '@/services/after-class-pxjg/khjssj';
import { getAllGrades } from '@/services/after-class-pxjg/khjyjg';
import { createKHKCSJ } from '@/services/after-class-pxjg/khkcsj';
/**
 * 机构端-课程列表-编辑页
 * @returns
 */
 const formItemLayout = {
  labelCol: { flex: '12em' },
  wrapperCol: { span: 16 },
};
const Edit = () => {
  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [forms, setForm] = useState<FormInstance<any>>();
  const [KCLXOptions, setKCLXOptions] = useState<any>([]);
  const [JSSJOptions, setJSSJOptions] = useState<any>([]);
  const [NJDataOption, setNJDataOption] = useState<any>([]);

  useEffect(() => {
    (
      async ()=>{
        // 课程类型
        const res = await getAllKHKCLX({ name: '' });
        if(res.status === 'ok'){
          const data = res.data?.map((item: any)=>{
            return {
              value: item.id,
              text: item.KCLX
            }
          })
          setKCLXOptions(data)
        }
        // 代课老师
        const resTH = await getKHJSSJ({page: 0, pageSize: 0});
        if (resTH.status === 'ok') {
          const datas = resTH.data?.rows?.map((item: any)=>{
            return {
              value: item.id,
              text: item.XM
            }
          })
          setJSSJOptions(datas)
        }
        // 适用年级
        const resNJ = await getAllGrades({page: 0, pageSize: 0});
        if(resNJ.status === 'ok'){
          const nj = ["幼儿园","小学","初中","高中"]
          const dataNJ: any[] = [];
          nj.forEach((items: any)=>{
            resNJ.data?.forEach((item: any)=>{
              if(items === item.XD){
                if(item.XD === '初中'){
                  dataNJ.push({text: item.NJMC, value: item.id});
                }else{
                  dataNJ.push({text: `${item.XD}${item.NJMC}`, value: item.id});
                }
              }
            });
          });
          setNJDataOption(dataNJ);

        }
      }
    )()
  }, []);

  const onFinish = async (values: any) =>{
    const res = await createKHKCSJ(values);
    console.log('res',res);

  }
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
      ],
    },
    {
      type: 'group',
      key: 'group2',
      groupItems: [
        {
          type: 'select',
          label: '课程类型',
          placeholder: '请选择',
          name: 'KCLX',
          disabled,
          key: 'KCLX',
          items: KCLXOptions,
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
          type: 'select',
          label: '适用年级',
          placeholder: '请选择',
          name: 'njIds',
          disabled,
          mode: "multiple",
          key: 'njIds',
          items: NJDataOption,
        },
        {},
      ],
    },
    {
      type: 'group',
      key: 'group4',
      groupItems: [
        {
          type: 'select',
          label: '代课老师',
          placeholder: '请选择',
          key: 'jsIds',
          name: 'jsIds',
          disabled,
          mode: "multiple",
          items: JSSJOptions,
        },
        {},
      ],
    },
    {
      type: 'uploadImage',
      label: '课程封面',
      name: 'KCTP',
      disabled,
      key: 'KCTP',
      imageurl: imageUrl,
      upurl:'',
      accept: '.jpg, .jpeg, .png',
      imagename: 'image',
      handleImageChange,
      // rules: [{ required: true, message: '请上传课程封面' }]
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
  const columns: any = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '联系电话',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '邮箱',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  const data = [{},{}]
  return (
    <div className={classes.content} style={{padding: 16}}>
      <div style={{width: "85%", minWidth: "850px", margin: "0 auto" }}>
        <CustomForm
          values={{}}
          formItems={basicForm}
          formLayout={formItemLayout}
          hideBtn={true}
          onFinish={onFinish}
          setForm={(formValue: FormInstance<any>)=>{
            setForm(formValue);
          }}
        />
        {/* <Table
          title={()=>"代课老师列表"}
          columns={columns}
          dataSource={data}
          pagination={false}
          size='small'
        /> */}
        <div style={{display: "flex",justifyContent: "center", marginTop: 24}}>
          <Button style={{marginRight: 16}} onClick={()=>{history.goBack()}}>取消</Button>
          <Button type='primary'onClick={()=>{
            forms?.submit();
          }}>保存</Button>
        </div>
      </div>
    </div>
  )
}

export default Edit;
