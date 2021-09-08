/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-09-08 11:28:09
 * @LastEditors: Sissle Lynn
 */
import React from 'react';
import { HomeOutlined, FileTextOutlined, BlockOutlined, AppstoreAddOutlined, NotificationOutlined } from '@ant-design/icons';
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
            name: '入驻申请',
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
        icon: <AppstoreAddOutlined />,
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
      }
    ]
  }
};
