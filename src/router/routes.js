
const routes = [
  {
    path: '/',
    component: () => import('layouts/coop.vue'),
    children: [
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'signup', component: () => import('pages/signup.vue') },
      { path: 'verify', component: () => import('pages/verify.vue') },
      { path: 'plan', component: () => import('pages/Sub-plan.vue') }
    ]
  },
  {
    path: '/second/',
    component: () => import('layouts/secondlayout.vue'),
    children: [
      { path: 'message1', component: () => import('pages/messagebox.vue') },

    ]
  },
  {
    path: '/third/',
    component: () => import('layouts/thirdlayout.vue'),
    children: [
      { path: 'max', component: () => import('pages/maxtaylor.vue') },
      { path: 'ric', component: () => import('pages/ricky.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
