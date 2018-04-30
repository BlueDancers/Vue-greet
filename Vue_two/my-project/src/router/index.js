import Vue from 'vue'
import Router from 'vue-router'
import detail from '../pages/detail'
import index from '../pages/index'
import buy from '../components/buy'
import count from '../components/buy/count'
import forecast from '../components/buy/forecast'
import analysis from '../components/buy/analysis'
import issue from '../components/buy/issue'
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
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy,
      redirect: '/buy/forecast',
      children: [
        {
          path: 'count',
          name: 'count',
          component: count
        },
        {
          path: 'forecast',
          name: 'forecast',
          component: forecast
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: analysis
        },
        {
          path: 'issue',
          name: 'issue',
          component: issue
        }
      ]
    }
  ]
})
