/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-10-22 10:00:49
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import {
  HomeOutlined,
  FileTextOutlined,
  BlockOutlined,
  AppstoreAddOutlined,
  NotificationOutlined,
  ZoomInOutlined,
  PieChartOutlined
} from '@ant-design/icons';
export default {
  route: {
    path: '/',
    routes: [
      {
        icon: <HomeOutlined />,
        path: '/',
        name: '首页'
      },
      {
        path: '/basicalSetting',
        name: '信息维护',
        icon: <FileTextOutlined />,
        routes: [
          {
            path: '/basicalSetting/infoMaintenance',
            name: '准入申请'
          },
          {
            path: '/basicalSetting/teacherManagement',
            name: '教师管理',
            routes: [
              {
                path: '/basicalSetting/teacherManagement/detail',
                hideInMenu: 'true',
                name: '详情查看'
              }
            ]
          }
        ]
      },
      {
        path: '/businessManagement',
        name: '合作管理',
        icon: <BlockOutlined />,
        routes: [
          {
            path: '/businessManagement/schoolManagement',
            name: '合作学校',
            routes: [
              {
                path: '/businessManagement/schoolManagement/detail',
                hideInMenu: 'true',
                name: '详情查看'
              },
              {
                path: '/businessManagement/schoolManagement/studentList',
                hideInMenu: 'true',
                name: '学生列表'
              }
            ]
          },
          {
            path: '/businessManagement/courseManagement',
            name: '合作课程',
            routes: [
              {
                path: '/businessManagement/courseManagement/detail',
                hideInMenu: 'true',
                name: '详情查看'
              }
            ]
          }
        ]
      },
      {
        path: '/courseManagement',
        name: '课程管理',
        icon: <AppstoreAddOutlined />
      },
      {
        path: '/courseManagement/mechanismCourse/edit',
        name: '课程详情',
        hideInMenu: 'true'
      },
      {
        path: '/announcements',
        name: '通知公告',
        icon: <NotificationOutlined />,
        routes: [
          {
            name: '内部通知',
            path: '/announcements/notice',
            routes: [
              {
                path: '/announcements/notice/EditArticle',
                hideInMenu: 'true',
                name: '编辑文章'
              },
              {
                path: '/announcements/notice/articleDetails',
                hideInMenu: 'true',
                name: '公告详情'
              }
            ]
          },
          {
            path: '/announcements/policy',
            name: '政策公告',
            routes: [
              {
                path: '/announcements/policy/articleDetails',
                hideInMenu: 'true',
                name: '政策详情'
              }
            ]
          }
        ]
      },
      {
        path: '/query',
        name: '信息查询',
        icon: <ZoomInOutlined />,
        routes: [
          {
            path: '/query/patrolclass',
            name: '巡课查询',
            routes: [
              {
                path: '/query/patrolclass/details',
                name: '合作课程页面',
                hideInMenu: 'true'
              }
            ]
          },
          {
            path: '/query/reimbursementclass',
            name: '退课查询',
            routes: [
              {
                path: '/query/reimbursementClass/details',
                name: '退课详情',
                hideInMenu: 'true'
              }
            ]
          },
          {
            path: '/query/appraise',
            name: '评价查询',
            routes: [
              {
                path: '/query/appraise/school',
                name: '评价查询课程',
                hideInMenu: 'true'
              },
              {
                path: '/query/appraise/class',
                name: '评价查询班级',
                hideInMenu: 'true'
              },
              {
                path: '/query/appraise/details',
                name: '评价查询班级',
                hideInMenu: 'true'
              }
            ]
          },
          {
            path: '/query/order',
            name: '订单查询',
            routes: [
              {
                path: '/query/order/classorder',
                name: '课程订单',
                hideInMenu: 'true'
              },
              {
                path: '/query/order/serviceorder',
                name: '服务订单',
                hideInMenu: 'true'
              }
            ]
          }
        ]
      },

      {
        path: '/graphic',
        name: '数据大屏',
        icon: <PieChartOutlined />
      }
    ]
  }
};
