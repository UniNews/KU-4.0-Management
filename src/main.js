import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "material-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

// Install Buefy
Vue.use(Buefy);

new Vue({
  el: "#app",
  router,
  components: { App },
  store,
  render: h => h(App)
});
