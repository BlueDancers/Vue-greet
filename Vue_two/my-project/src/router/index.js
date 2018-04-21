import Vue from 'vue'
import Router from 'vue-router'
import detail from '../pages/detail'
import index from '../pages/index'
import resource from 'vue-resource'
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
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
