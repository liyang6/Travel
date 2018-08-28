import Vue from 'vue'
import App from './App.vue'
import router from './router/config.js'
import fastClick from 'fastclick'

import '@/assets/styles/reset.css'
/*解决border 1px在手机下兼容*/
import 'styles/border.css'

import './assets/styles/iconfont.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)



/*fastClick 解决移动端click 300ms*/
fastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
