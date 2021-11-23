import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router/index'

// Импортировать файлы CSS Bootstrap и Bootstrap Vue (порядок важен)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
