import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Together from '../views/Together.vue'
import RollScenery from '../views/Rollfirst.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/together',
    name: 'Together',
    component: Together
  },
  {
    path: '/scenery',
    name: 'Scenery',
    component: RollScenery
  }
]

const router = new VueRouter({
  routes
})

export default router
