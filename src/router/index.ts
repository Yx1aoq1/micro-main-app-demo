import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'

const routes = [{
  path: '/',
  name: 'LAYOUT',
  component: MainLayout,
  children: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HOME',
      component: () => import('@/views/Home.vue')
    }
  ]
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {

})

export default router