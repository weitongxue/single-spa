import Router from 'vue-router'
import Home from './components/HelloWorld.vue'

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    }
  ]
})
