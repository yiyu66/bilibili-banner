import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Autumn from '../views/Bilibili/Autumn/Autumn.vue'
import Winter from '../views/Bilibili/Winter/Winter.vue'
import Spring from '../views/Bilibili/Spring/Spring.vue'
import Summer from '../views/Bilibili/Summer/Summer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/bilibili/Summer' },
  { path: '/Home', component: Home },
  { path: '/bilibili/Autumn/', meta: { title: 'Bilibili秋' }, component: Autumn },
  { path: '/bilibili/Winter/', meta: { title: 'Bilibili冬' }, component: Winter },
  { path: '/bilibili/Spring/', meta: { title: 'Bilibili春' }, component: Spring },
  { path: '/bilibili/Summer/', meta: { title: 'Bilibili夏' }, component: Summer },
]

const router = new VueRouter({
  routes
})

export default router