import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios from 'axios'
import EleForm from 'vue-ele-form'
import './plugins/avue'

Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
Vue.prototype.$http = http
Vue.prototype.$httpajax = http

Vue.use(EleForm)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
