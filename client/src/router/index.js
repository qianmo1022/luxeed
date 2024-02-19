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
      },
      {
        path:'trim',
        name: 'Trim',
        component: () => import('../views/select/Trim.vue')
      },
      {
        path:'hub',
        name: 'Hub',
        component: () => import('../views/select/Hub.vue')
      },
      {
        path:'seat',
        name: 'Seat',
        component: () => import('../views/select/Seat.vue')
      },
      {
        path:'optional',
        name: 'Optional',
        component: () => import('../views/select/Optional.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/showselectedinfo',
    name: 'ShowSelectedInfo',
    component: () => import('../views/ShowSelectedinfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
