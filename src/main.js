import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "material-icons/iconfont/material-icons.css";
import VueLodash from 'vue-lodash';

Vue.config.productionTip = false;
const options = { name: 'lodash' }; // customize the way you want to call it

// Install Buefy
Vue.use(Buefy);

// Install Lodash
Vue.use(VueLodash, options); // options is optional

new Vue({
  el: "#app",
  router,
  components: { App },
  store,
  render: h => h(App)
});
