/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-26 16:26:59
 * @LastEditTime: 2021-10-20 11:09:01
 * @LastEditors: Sissle Lynn
 */
import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import { Divider, message, Tag, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { getAllCourses } from '@/services/after-class-pxjg/khjyjg';
import EllipsisHint from '@/components/EllipsisHint';
import WWOpenDataCom from '@/components/WWOpenDataCom';

import styles from './index.less';

const CourseList = (props: any) => {
  const { state } = props.history.location;
  const { xxmc, xxid, jgid } = state.data;
  const [courseList, setCourseList] = useState<any>();
  const [oriList, setOriList] = useState<any>();
  const getCourseList = async (xxdm: string, jgdm: string, xnxq?: string) => {
    const res = await getAllCourses({
      KHJYJGId: jgdm,
      XXJBSJId: xxdm,
      XNXQId: xnxq || ''
    });
    if (res?.status === 'ok') {
      setOriList(res.data);
      setCourseList(res.data);
    } else {
      message.error(res.message);
    }
  };
  useEffect(() => {
    if (state.data) {
      getCourseList(xxid, jgid);
    }
  }, [xxid, jgid]);
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
      title: '课程名称',
      dataIndex: 'KCMC',
      key: 'KCMC',
      align: 'center',
      fixed: 'left',
      search: false,
      width: 160
    },
    {
      title: '课程类型',
      dataIndex: 'KHKCLX',
      key: 'KHKCLX',
      align: 'center',
      search: false,
      width: 120,
      render: (text: any) => {
        return text?.KCTAG || '-';
      }
    },
    {
      title: '适用年级',
      key: 'NJSJs',
      dataIndex: 'NJSJs',
      align: 'center',
      width: 200,
      render: (text: any) => {
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              return (
                <Tag key={item.id} color="#EFEFEF" style={{ color: '#333' }}>
                  {`${item.XD}${item.NJMC}`}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '代课老师',
      key: 'KHKCJs',
      dataIndex: 'KHKCJs',
      align: 'center',
      width: 160,
      render: (_, record) => {
        const text = record?.KHKCJs;
        return (
          <EllipsisHint
            width="100%"
            text={text?.map((item: any) => {
              const showWXName = item?.JZGJBSJ?.XM === '未知' && item?.JZGJBSJ?.WechatUserId;
              return (
                <Tag key={item?.JZGJBSJId}>
                  {showWXName ? (
                    <WWOpenDataCom type="userName" openid={item?.JZGJBSJ?.WechatUserId} />
                  ) : (
                    item?.JZGJBSJ?.XM
                  )}
                </Tag>
              );
            })}
          />
        );
      }
    },
    {
      title: '学校评价',
      key: 'KHKCPJs',
      dataIndex: 'KHKCPJs',
      align: 'center',
      ellipsis: true,
      width: 160,
      render: (_, record) => {
        return (
          <EllipsisHint
            width="100%"
            text={record?.KHKCPJs?.length ? record?.KHKCPJs[record?.KHKCPJs?.length - 1]?.PY : ''}
          />
        );
      }
    },
    {
      title: '操作',
      valueType: 'option',
      width: 160,
      fixed: 'right',
      align: 'center',
      render: (_: any, record: { id: any }) => (
        <>
          <Link
            to={{
              pathname: '/courseManagement/mechanismCourse/edit',
              state: {
                ...record,
                type: 'info',
                xxmc: xxmc
              }
            }}
          >
            课程详情
          </Link>
          <Divider type="vertical" />
          <Link
            to={{
              pathname: '/businessManagement/schoolManagement/detail',
              state: {
                type: 'course',
                data: {
                  type: 'detail',
                  xxid: xxid,
                  jgid: jgid,
                  kcid: record.id,
                  xxmc: xxmc
                }
              }
            }}
          >
            班级详情
          </Link>
        </>
      )
    }
  ];
  return (
    <>
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
      <ProTable<any>
        columns={columns}
        className={styles.schoolTable}
        search={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
          defaultCurrent: 1
        }}
        scroll={{ x: 1000 }}
        headerTitle={xxmc}
        dataSource={courseList}
        options={{
          setting: false,
          fullScreen: false,
          density: false,
          reload: false,
          search: {
            placeholder: '课程名称',
            allowClear: true,
            onSearch: (value: string) => {
              if (value && value !== '') {
                const newList = courseList.filter((item: any) => item.KCMC.indexOf(value) > -1);
                setCourseList(newList);
              } else {
                setCourseList(oriList);
              }
              return true;
            }
          }
        }}
        rowKey="id"
        dateFormatter="string"
      />
    </>
  );
};

CourseList.wrappers = ['@/wrappers/auth'];

export default CourseList;
