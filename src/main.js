import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from './firebase.js'

// vue-typeahead
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
//import "bootstrap/scss/bootstrap.scss";
Vue.component('vue-typeahead-bootstrap', VueTypeaheadBootstrap)

// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// sass
import './main.scss'

// vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.auth.onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})

Vue.config.productionTip = false

store.dispatch('fetchLocalData')

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
