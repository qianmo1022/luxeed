import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/drive',
    name: 'Drive',
    component: () => import('../views/Drive.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/Select.vue')
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
