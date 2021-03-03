import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../components/menu.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router