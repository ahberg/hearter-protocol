import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'

const routes = [
  {
    path: '/',
    name: 'Protokoll',
    component: Home
  },
  {
    path: '/regler',
    name: 'Rules',
    component: Rules
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export default router
