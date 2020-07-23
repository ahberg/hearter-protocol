import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rules from '../views/Rules.vue'
Vue.use(VueRouter)

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
