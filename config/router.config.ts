export default [
  {
    path: '/',
    exact: true,
    redirect: '/login',
  },
  {
    path: '/login',
    exact: true,
    component: '@/pages/login',
  },
  {
    path: '/layouts',
    exact: true,
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        exact: true,
        component: '@/pages/home',
      },
      {
        path: '/my',
        exact: true,
        component: '@/pages/home',
      },
    ]
  },
]
