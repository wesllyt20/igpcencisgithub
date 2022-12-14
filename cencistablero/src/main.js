import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'leaflet/dist/leaflet.css'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

