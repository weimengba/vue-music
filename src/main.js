import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

fastclick.attach(document.body)  //整个body下面的按钮点击都没有300ms的延迟

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
	loading: require('common/images/loading.gif')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
