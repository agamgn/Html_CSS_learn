// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
// 300ms延迟
fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  loadding: require('@/common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
