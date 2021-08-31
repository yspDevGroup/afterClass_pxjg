/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-08-31 10:09:48
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
        name: '通知列表',
        path: '/announcements/list'
      },
      {
        path: '/announcements/recycleBin',
        name: '回收站'
      }
    ]
  }
];
