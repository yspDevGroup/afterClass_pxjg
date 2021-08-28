/*
 * @description: 学校基本信息表单元素
 * @author: Sissle Lynn
 * @Date: 2021-08-02 15:12:46
 * @LastEditTime: 2021-08-28 15:26:33
 * @LastEditors: Sissle Lynn
 */
import { FormItemType } from "@/components/CustomForm/interfice"
export const basicForm: FormItemType[] = [
  {
    type: 'input',
    label: 'id',
    name: 'id',
    key: 'id',
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
        upurl: '/upload/uploadFile?type=badge',
        accept: '.jpg, .jpeg, .png',
        imagename: 'image',
      },
      {
        type: 'uploadImage',
        label: '资格证书',
        name: 'ZGZS',
        key: 'ZGZS',
        imgWidth: 100,
        imgHeight: 100,
        upurl: '/upload/uploadFile?type=badge',
        accept: '.jpg, .jpeg, .png',
        imagename: 'image',
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
        name: 'XXMC',
        key: 'XXMC',
        rules: [{ required: true, message: '请输入姓名' }],
      },
      {
        type: 'input',
        label: '学历',
        name: 'XL',
        key: 'XL',
      },
    ]
  },
  {
    type: 'group',
    key: 'group3',
    groupItems: [
      {
        type: 'radio',
        name: 'XBM',
        key: 'XBM',
        label: '性别',
        items: [
          {
            text: '男',
            value: '男性',
          },
          {
            text: '女',
            value: '女性',
          },
        ],
      },
      {
        type: 'input',
        label: '教龄',
        name: 'JL',
        key: 'JL',
      },
    ],
  },
  {
    type: 'group',
    key: 'group4',
    groupItems: [
      {
        type: 'time',
        label: '出生日期',
        name: 'LXDH',
        key: 'LXDH',
      },
      {
        type: 'select',
        key: 'SFZJLXM',
        name: 'SFZJLXM',
        label: '证件类型',
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
        name: 'LXR',
        key: 'LXDR',
      },
      {
        type: 'input',
        key: 'SFZJH',
        name: 'SFZJH',
        label: '证件号码',
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
        name: 'SSQY',
        key: 'SSQY',
      },
      {
        type: 'textArea',
        label: '个人简介',
        name: 'BZ',
        key: 'BZ',
      },
    ]
  },
];
