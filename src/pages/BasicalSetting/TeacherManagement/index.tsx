/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-28 09:22:33
 * @LastEditTime: 2022-04-15 16:47:53
 * @LastEditors: Wu Zhan
 */
/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 14:37:02
 * @LastEditTime: 2021-08-27 09:44:07
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useRef, useState } from 'react';
import ProTable, { RequestData } from '@ant-design/pro-table';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { UploadOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Link, useModel, useAccess } from 'umi';

import styles from './index.less';
import { TableListParams } from '@/constant';
import { Button, Divider, message, Modal, Popconfirm, Upload } from 'antd';
import { getAuthorization, getTableWidth } from '@/utils';
import { getAllJZGJBSJ, deleteJZGJBSJ } from '@/services/after-class-pxjg/jzgjbsj';
import WWOpenDataCom from '@/components/WWOpenDataCom';
import { importWechatTeachers, importTeachers } from '@/services/after-class-pxjg/upload';

const TeacherManagement = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [newFileList, setNewFileList] = useState<any[]>();
  const { isSso, isWechat } = useAccess();
  // 列表对象引用，可主动执行刷新等操作
  const actionRef = useRef<ActionType>();
  // 设置模态框显示状态
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleConfirm = async (id: any) => {
    const res = await deleteJZGJBSJ({ id });
    if (res.status === 'ok') {
      message.success('删除成功');
      actionRef.current?.reload();
    } else {
      message.error(res.message);
    }
  };
  const onClose = async () => {
    const formData = new FormData();

    if (newFileList?.length) {
      const file = newFileList?.[0];
      if (file.status === 'error') {
        message.error('请重新选择文件!');
        return;
      }
      // console.log('newFileList', newFileList?.[0]);
      formData.append('xlsx', file);
      let res;
      if (isSso) {
        formData.append('KHJYJGId', currentUser?.jgId || '');
        res = await importTeachers({ plat: 'agency' }, { body: formData });
      } else if (isWechat) {
        res = await importWechatTeachers({ plat: 'agency' }, { body: formData });
      }
      console.log('res', res);

      if (res?.status === 'ok') {
        if (isWechat) {
          if (res?.data?.fail_count === 0) {
            message.success(`上传成功`);
            setModalVisible(false);
            actionRef.current?.reload();
          } else {
            message.success(`上传成功${res?.data?.success_count}条,失败${res?.data?.fail_count}条`);
          }
        } else {
          actionRef.current?.reload();
          setModalVisible(false);
          message.success(`上传成功`);
        }
      } else {
        message.error(res?.message);
        // console.log('========', file, { file, status: 'error', response: res.message });
        setNewFileList([{ uid: file.uid, name: file.name, status: 'error', response: res.message }]);
      }
    } else {
      message.warning('请选择文件上传!');
    }
  };

  useEffect(() => {
    if (!modalVisible) {
      setNewFileList([]);
    }
  }, [modalVisible]);

  const UploadProps: any = {
    maxCount: 1,
    onRemove: (file: any) => {
      if (newFileList?.length) {
        const index: number = newFileList.indexOf(file);
        const list = newFileList?.slice();
        list?.splice(index, 1);
        setNewFileList(list);
      }
    },
    beforeUpload: (file: any) => {
      const isType =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel';
      if (!isType) {
        message.error('请上传正确表格文件!');
        return isType;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('文件大小不能超过2M');
        return isLt2M;
      }
      setNewFileList([file]);
      return false;
    },
    fileList: newFileList
  };
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 58,
      fixed: 'left',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'XM',
      key: 'XM',
      align: 'center',
      width: 100,
      fixed: 'left',
      render: (_, record) => {
        const showWXName = record.XM === '未知' && record.WechatUserId;
        if (showWXName) {
          return <WWOpenDataCom type="userName" openid={record.WechatUserId} />;
        }
        return record.XM;
      }
    },
    {
      title: '性别',
      dataIndex: 'XB',
      key: 'XB',
      align: 'center',
      width: 80,
      render: (_, record) => record?.XBM?.substring(0, 1)
    },
    {
      title: '联系电话',
      key: 'LXDH',
      dataIndex: 'LXDH',
      align: 'center',
      width: 130
    },
    {
      title: '教授科目',
      key: 'JSKM',
      dataIndex: 'JSKM',
      align: 'center',
      width: 120,
      ellipsis: true
    },
    {
      title: '教龄（年）',
      key: 'JL',
      dataIndex: 'JL',
      align: 'center',
      width: 100,
      ellipsis: true
    },
    {
      title: '操作',
      valueType: 'option',
      width: 150,
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <>
          <Link
            to={{
              pathname: '/basicalSetting/teacherManagement/detail',
              state: {
                type: 'detail',
                data: record
              }
            }}
          >
            详情
          </Link>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: '/basicalSetting/teacherManagement/detail',
              state: {
                type: 'edit',
                data: record
              }
            }}
          >
            编辑
          </Link>
          <Divider type="vertical" />
          <Popconfirm title={`确定要删除 “${record?.XM}” 数据吗?`} onConfirm={() => handleConfirm(record?.id)}>
            <a>删除</a>
          </Popconfirm>
        </>
      )
    }
  ];

  return (
    <>
      <ProTable<any>
        columns={columns}
        className={styles.schoolTable}
        actionRef={actionRef}
        search={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: getTableWidth(columns) }}
        request={async (
          params: any & {
            pageSize?: number;
            current?: number;
            keyword?: string;
          },
          sort,
          filter
        ): Promise<Partial<RequestData<any>>> => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          const opts: TableListParams = {
            ...params,
            sorter: sort && Object.keys(sort).length ? sort : undefined,
            filter
          };
          const res = await getAllJZGJBSJ({ KHJYJGId: currentUser?.jgId, keyWord: opts.keyword, page: 0, pageSize: 0 });
          if (res.status === 'ok') {
            return {
              data: res.data?.rows,
              total: res.data?.count,
              success: true
            };
          }
          return {};
        }}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false,
          search: {
            placeholder: '教师名称/联系电话',
            allowClear: true
          }
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        toolBarRender={() => [
          <Button key="button" type="primary" onClick={() => setModalVisible(true)}>
            <VerticalAlignBottomOutlined /> 导入
          </Button>
        ]}
        rowKey="id"
        dateFormatter="string"
      />
      <Modal
        title="批量导入"
        destroyOnClose
        width="35vw"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="submit" type="primary" onClick={onClose}>
            确定
          </Button>,
          <Button
            key="back"
            onClick={() => {
              setModalVisible(false);
              actionRef.current?.reload();
            }}
          >
            取消
          </Button>
        ]}
        centered
        maskClosable={false}
        bodyStyle={{
          maxHeight: '65vh',
          overflowY: 'auto'
        }}
      >
        <p className={styles.uploadBtn}>
          <Upload {...UploadProps}>
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
          <span className={styles.uploadText}>进行批量导入用户</span>
        </p>
        <p className={styles.uploadDescription}>上传文件从企业微信管理后台通讯录中直接导出即可</p>
      </Modal>
    </>
  );
};

TeacherManagement.wrappers = ['@/wrappers/auth'];

export default TeacherManagement;
