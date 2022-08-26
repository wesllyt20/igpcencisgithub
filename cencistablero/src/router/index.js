import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListEvent from '../views/ListEvent.vue'
import CreateLocation from '../views/CreateLocation.vue'
import SearchLocation from '../views/SearchLocation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listevent',
    name: 'ListEvent',
    component: ListEvent
  },
  {
    path: '/createlocation',
    name: 'CreateLocation',
    component: CreateLocation
  },
  {
    path: '/searchlocation',
    name: 'SearchLocation',
    component: SearchLocation
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
