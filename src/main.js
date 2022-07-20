import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //渲染
  store,
  beforeCreate(){
    Vue.prototype.$bus = this//开启全局事件总线
  }
}).$mount("#app")
