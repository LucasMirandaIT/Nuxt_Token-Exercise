export default {
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }

    return { top: 0, left: 0 };
  },
  routes: () => ([
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { middleware: 'auth' }
    },
    {
      path: '/custom-path',
      name: 'custom-path',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      // meta: { middleware: 'not-authenticated' }
    }
  ])
} satisfies RouterConfig;
