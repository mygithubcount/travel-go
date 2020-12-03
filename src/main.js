import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// reset.css
import './style/index.less'
// 根据不同设备设置基础的font-size值
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
