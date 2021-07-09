import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../components/menu.vue'
import Home from '../views/Home.vue'
import Autumn from '../views/Bilibili/Autumn.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/bilibili'
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/bilibili',
    meta: {
      title: 'Bilibili秋'
    },
    component: Autumn,
    // children: [{
    //     path: '/Autumn',
    //     title: 'Bilibili',
    //     component: Autumn
    //   },
    //   {
    //     path: '/Autumn',
    //     component: Autumn
    //   },
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router