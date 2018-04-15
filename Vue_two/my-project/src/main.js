// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from '@/components/Layout'
import router from './router'
import resource from 'vue-resource'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,
  components: { Layout },
  template: '<Layout/>'
})
