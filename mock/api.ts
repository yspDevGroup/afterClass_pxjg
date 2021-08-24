export default {
  'POST /api/oauth2/token': {
    status: 'ok',
    data: {
      currentAuthority: ['admin'],
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyODgzNDhlNC03ZGRmLTQ2ZTMtYmMzNC1kZmVkYzVhNWI4MzgiLCJ0eXBlIjoiYWNjb3VudCIsInh4SWQiOiI1MzA5MWYxNi1lNzIzLTQ5MTAtYWNhOS05NzQxY2Q3NWExNGYiLCJ4cUlkIjoiOWVhNzc0MjAtZjU5ZS0xMWViLWI3ZTUtMDBmZjAxNmJhNWI4IiwiaWF0IjoxNjI4MjM5ODIyLCJleHAiOjE2MjgyNDcwMjJ9.JQzNmRY-vMZ7zQjIHj-DHgSqmzr8fMGG_ha6D2wOhfM',
      type: 'account'
    },
    message: ''
  },
  'GET /api/user/currentUser': {
    status: 'ok',
    data: {
      currentUser: {
        auth: '学生',
        XXDM: 'wwaffec655a4978177',
        avatar: 'http://www.xianyunshipei.com/static/avatar.0a3a7de5.png',
        departmentId: '',
        id: '79eb9655-a03a-4c77-9515-91149c33eb60',
        identityId: '',
        loginName: 'admin',
        username: 'admin'
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyODgzNDhlNC03ZGRmLTQ2ZTMtYmMzNC1kZmVkYzVhNWI4MzgiLCJ0eXBlIjoiYWNjb3VudCIsInh4SWQiOiI1MzA5MWYxNi1lNzIzLTQ5MTAtYWNhOS05NzQxY2Q3NWExNGYiLCJ4cUlkIjoiOWVhNzc0MjAtZjU5ZS0xMWViLWI3ZTUtMDBmZjAxNmJhNWI4IiwiaWF0IjoxNjI4MjM5ODIyLCJleHAiOjE2MjgyNDcwMjJ9.JQzNmRY-vMZ7zQjIHj-DHgSqmzr8fMGG_ha6D2wOhfM'
    },
    message: ''
  }
};
