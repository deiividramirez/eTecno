import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/contacto.vue')
  },
  {
    path: '/acerNitro5',
    name: 'Acer Nitro 5',
    component: () => import(/* webpackChunkName: "about" */ '../views/acerNitro5.vue')
  },
  {
    path: '/asus',
    name: 'Asus',
    component: () => import(/* webpackChunkName: "about" */ '../views/asus.vue')
  },
  {
    path: '/diademaJBL',
    name: 'Diadema JBL',
    component: () => import(/* webpackChunkName: "about" */ '../views/diademaJBL.vue')
  },
  {
    path: '/googleHome',
    name: 'Google Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/googleHome.vue')
  },
  {
    path: '/hpGamer',
    name: 'Portatil HP Gamer',
    component: () => import(/* webpackChunkName: "about" */ '../views/hpGamer.vue')
  },
  {
    path: '/kaspersky',
    name: 'Kaspersky',
    component: () => import(/* webpackChunkName: "about" */ '../views/kaspersky.vue')
  },
  {
    path: '/mcAfee',
    name: 'McAfee Antivirus',
    component: () => import(/* webpackChunkName: "about" */ '../views/mcAfee.vue')
  },
  {
    path: '/MesaR3',
    name: 'PC de Mesa Ryzen 3',
    component: () => import(/* webpackChunkName: "about" */ '../views/MesaR3.vue')
  },
  {
    path: '/MesaR5',
    name: 'PC de Mesa Ryzen 5',
    component: () => import(/* webpackChunkName: "about" */ '../views/MesaR5.vue')
  },
  {
    path: '/MesaR7',
    name: 'Pc de Mes Ryzen 7',
    component: () => import(/* webpackChunkName: "about" */ '../views/MesaR7.vue')
  },
  {
    path: '/Office365',
    name: 'Microsoft Office 365',
    component: () => import(/* webpackChunkName: "about" */ '../views/Office365.vue')
  },
  {
    path: '/win10',
    name: 'Licencia Windows 10',
    component: () => import(/* webpackChunkName: "about" */ '../views/win10.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
