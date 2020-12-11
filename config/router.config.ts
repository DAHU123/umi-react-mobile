export default [
  {
    path: '/',
    exact: true,
    component: '@/pages/index',
    routes: [
      {
        path: '/login',
        exact: true,
        component: '@/pages/login',
      },
      {
        path: '/',
        exact: true,
        component: '@/layouts/index',
      },
    ]
  },
]
