import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import two from '@/components/two'
import one from '@/components/one'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/two/:color',
      name: 'two',
      component: two,
      children: [
        {
          path: 'one',
          name: 'one',
          component: one
        }
      ]
    }
  ]
})
