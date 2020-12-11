export default [
  {
    path: '/',
    exact: true,
    component: '@/pages/index',
    routes: [
      {
        path: '/',
        exact: true,
        component: '@/layouts/index',
      },
    ]
  },
  {
    path: '/login',
    exact: true,
    component: '@/pages/login',
  },
]
