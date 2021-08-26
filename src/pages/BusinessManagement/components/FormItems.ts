/*
 * @description: 学校基本信息表单元素
 * @author: Sissle Lynn
 * @Date: 2021-08-02 15:12:46
 * @LastEditTime: 2021-08-26 19:41:07
 * @LastEditors: Sissle Lynn
 */
import { FormItemType } from "@/components/CustomForm/interfice"
export const basicForm: FormItemType[] = [
  {
    type: 'input',
    label: 'id',
    placeholder: '——',
    name: 'id',
    key: 'id',
    hidden: true,
  },
  {
    type: 'group',
    key: 'group1',
    groupItems: [
      {
        type: 'input',
        label: '学校名称',
        placeholder: '——',
        name: 'XXMC',
        key: 'XXMC',
      },
      {
        type: 'input',
        label: '学段',
        placeholder: '——',
        name: 'XD',
        key: 'XD',
      },
    ],
  },
  {
    type: 'group',
    key: 'group2',
    groupItems: [
      {
        type: 'input',
        label: '联系人',
        placeholder: '——',
        name: 'LXR',
        key: 'LXDR',
      },
      {
        type: 'input',
        label: '联系电话',
        placeholder: '——',
        name: 'LXDH',
        key: 'LXDH',
      },
    ]
  },
  {
    type: 'group',
    key: 'group3',
    groupItems: [
      {
        type: 'input',
        label: '学校地址',
        placeholder: '——',
        name: 'XXDZ',
        key: 'XXDZ',
      },
      {
        type: 'input',
        label: '行政区划',
        placeholder: '——',
        name: 'SSQY',
        key: 'SSQY',
      },
    ],
  },
  {
    type: 'group',
    key: 'group4',
    groupItems: [
      {
        type: 'input',
        label: '邮政编码',
        placeholder: '——',
        name: 'XXYZBM',
        key: 'XXYZBM',
      },
      {
        type: 'input',
        label: '电子信箱',
        placeholder: '——',
        name: 'DZXX',
        key: 'DZXX',
      },
    ],
  },
  {
    type: 'group',
    key: 'group8',
    groupItems: [
      {
        type: 'textArea',
        label: '学校简介',
        placeholder: '——',
        name: 'LSYG',
        key: 'LSYG',
      },
    ]
  },
];
