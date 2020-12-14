export default [
  {
    path: '/login',
    exact: true,
    component: '@/pages/login',
  },
  {
    path: '/',
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
      {
        path: '/content',
        exact: true,
        component: '@/pages/content',
      },
      {
        path: '/mine',
        exact: true,
        component: '@/pages/mine',
      },
      {
        path: '/share',
        exact: true,
        component: '@/pages/share',
      },
    ]
  },
  {
    path: '*',
    component: '@/pages/404.tsx',
  },
]
