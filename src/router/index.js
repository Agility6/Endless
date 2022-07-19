import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/backdrop',
  },
  {
    path: '/Home',
    component: () => import('../views/home/index'),
    children: [
      {
        name: 'study',
        path: 'study',
        component: () => import('../views/study/index')
      },
      {
        name: 'personal',
        path: 'personal',
        component: () => import('../views/personal/index')
      }
    ]
  },
  {
    path: '/backdrop',
    component: () => import('../views/home/backdrop')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
