import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";

// vue-typeahead
import VueTypeaheadBootstrap from "vue-typeahead-bootstrap";
//import "bootstrap/scss/bootstrap.scss";
Vue.component("vue-typeahead-bootstrap", VueTypeaheadBootstrap);

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// sass
import "./main.scss";

// vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const configOptions = {
  apiKey: "AIzaSyC6iFx3r8IjBhJ4fHjx3kC1CAHY0MJHntY",
  authDomain: "vue-firebase-auth-2802d.firebaseapp.com",
  projectId: "grupp-3",
  storageBucket: "grupp-3.appspot.com",
  messagingSenderId: "761187785466",
  appId: "1:761187785466:web:6a92dc9d15f604542c8743",
};

// Initialize Firebase
firebase.initializeApp(configOptions);
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false;

store.dispatch("fetchLocalData");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
