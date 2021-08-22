import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import './assets/css/reset.css'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
