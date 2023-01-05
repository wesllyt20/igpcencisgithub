import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListEvent from '../views/ListEvent.vue'
import CreateLocation from '../views/CreateLocation.vue'
import SearchLocation from '../views/SearchLocation.vue'
import UserLogin from '../views/UserLogin.vue'
import pdfview from '../components/reports/pdfview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listevent/',
    name: 'ListEvent',
    component: ListEvent
  },
  {
    path: '/pdfview/:reporte',
    name: 'pdfview',
    component: pdfview
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
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin
  },
  /* {
    path: '/about',
    name: 'about',
    component: () => import( <-comentario-- webpackChunkName: "about" ---> '../views/AboutView.vue')
  } 
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
