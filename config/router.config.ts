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
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        exact: true,
        component: '@/pages/home',
      },
    ]
  },
  {
    path: '*',
    component: '@/pages/404.tsx',
  },
]
