/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-09-02 18:14:46
 * @LastEditors: Sissle Lynn
 */
export default [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/basicalSetting',
    name: '信息维护',
    routes: [
      {
        path: '/basicalSetting/infoMaintenance',
        name: '机构入驻申请',
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
    path: '/courseManagement',
    name: '课程管理',
    route:[
      {
        path: '/courseManagement/mechanismCourse/edit',
        name: '课程详情',
        hideInMenu: 'true'
      },
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
];
