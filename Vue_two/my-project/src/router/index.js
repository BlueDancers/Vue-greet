import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/one'
import register from '../pages/two'
import index from '../pages/index'
import resource from 'vue-resource'
import other from '../pages/other'
Vue.use(resource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: '/register',
      component: register
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})
