/*
 * @description:
 * @author: Sissle Lynn
 * @Date: 2021-08-24 17:21:12
 * @LastEditTime: 2021-08-26 20:18:07
 * @LastEditors: Sissle Lynn
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
    name: '课程管理',
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
            name: '详情查看',
          },
        ]
      },
      {
        path: '/businessManagement/courseManagement',
        name: '合作课程',
        routes: [
          {
            path: '/businessManagement/courseManagement/detail',
            hideInMenu: 'true',
            name: '详情查看',
          },
        ]
      }
    ]
  }
];
