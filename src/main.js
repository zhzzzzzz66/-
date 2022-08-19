import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Cartoon from '@/components/Cartoon'
Vue.component('Cartoon', Cartoon)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
