import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.use(Vuelidate)

Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000':'http://yuming.com'
// axios.defaults.baseUrl = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
