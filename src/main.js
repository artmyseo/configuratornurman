import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Импортировать файлы CSS Bootstrap и Bootstrap Vue (порядок важен)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Сделайте BootstrapVue доступным для всего проекта
Vue.use(BootstrapVue)
// При желании установите плагин компонентов иконок BootstrapVue
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
