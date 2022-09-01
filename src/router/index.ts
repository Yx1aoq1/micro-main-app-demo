import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import AppContainer from '@/layout/AppContainer.vue'

const routes = [
  {
    path: '/',
    name: 'LAYOUT',
    component: MainLayout,
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'HOME',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/demo1:pathMatch(.*)',
        component: AppContainer,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
