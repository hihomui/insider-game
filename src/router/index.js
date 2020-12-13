import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegistPlayer from '../views/RegistPlayer.vue'
import ConfirmRole from '../views/ConfirmRole.vue'
import Battle from '../views/Battle.vue'
import RegistTheme from '../views/RegistTheme.vue'
import Entry from '../views/Entry.vue'
import WaitPlayers from '../views/WaitPlayers.vue'
import WhatSecretWord from '../views/WhatSecretWord.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/regist-player',
    name: 'RegistPlayer',
    component: RegistPlayer
  },
  {
    path: '/confirm-role',
    name: 'ConfirmRole',
    component: ConfirmRole
  },
  {
    path: '/battle/:gameId',
    name: 'Battle',
    component: Battle
  },
  {
    path: '/regist-theme',
    name: 'RegistTheme',
    component: RegistTheme
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/wait-players',
    name: 'WaitPlayers',
    component: WaitPlayers
  },
  {
    path: '/what-secret-word',
    name: 'WhatSecretWord',
    component: WhatSecretWord
  },
]

const router = new VueRouter({
  routes
})

export default router
