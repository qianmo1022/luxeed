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
    redirect: '/select/version',
    name: 'Select',
    component: () => import('../views/Select.vue'),
    children: [
      {
        path: 'version',
        name: 'Version',
        component: () => import('../views/select/Version.vue')
      },
      {
        path:'appearance',
        name: 'Appearance',
        component: () => import('../views/select/Appearance.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
