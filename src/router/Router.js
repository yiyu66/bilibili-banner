import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../components/menu.vue'
import Home from '../views/Home.vue'
import Autumn from '../views/Bilibili/Autumn/Autumn.vue'
import Winter from '../views/Bilibili/Winter/Winter.vue'
import Spring from '../views/Bilibili/Spring/Spring.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',redirect: '/bilibili/Spring'},
  { path: '/menu',component: menu},
  { path: '/Home',component: Home},
  { path: '/bilibili/Autumn/',meta: {title: 'Bilibili秋'},component: Autumn },
  { path: '/bilibili/Winter/',meta: {title: 'Bilibili冬'},component: Winter },
  { path: '/bilibili/Spring/',meta: {title: 'Bilibili春'},component: Spring },
]

const router = new VueRouter({
  routes
})

export default router