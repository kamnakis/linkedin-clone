import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/network', component: () => import('pages/Network.vue') },
      { path: '/jobs', component: () => import('pages/Jobs.vue') },
      { path: '/messages', component: () => import('pages/Messages.vue') },
      { path: '/notifications', component: () => import('pages/Notifications.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
