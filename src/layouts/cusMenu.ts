/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-09-01 11:54:55
 * @LastEditors: wsl
 */
export default [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/infoMaintenance',
    name: '基础信息管理'
  },
  {
    path: '/courseManagement',
    name: '课程管理'
  },
  {
    path: '/courseManagement/mechanismCourse/edit',
    name: '课程详情',
    hideInMenu: 'true'
  },
  {
    path: '/teachingStaff',
    name: '师资管理',
    routes: [
      {
        path: '/teachingStaff/teacherManagement',
        name: '教师管理',
        routes: [
          {
            path: '/teachingStaff/teacherManagement/detail',
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
    routes: [
      {
        path: '/businessManagement/schoolManagement',
        name: '合作学校',
        routes: [
          {
            path: '/businessManagement/schoolManagement/detail',
            hideInMenu: 'true',
            name: '详情查看'
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
    path: '/announcements',
    name: '通知公告',
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
            path: '/announcements/notice/noticeDetails',
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
];
