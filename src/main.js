import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button } from 'vant';

function* register(name) {
  Vue.use(name)
};

[
  Button
].forEach(component => register(component).next())

// 挂载api
import api from './api'
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
