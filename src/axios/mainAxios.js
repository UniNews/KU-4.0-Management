import axios from "axios";
import config from "@/config/environments.js";
import store from "@/store/index.js";

const instance = axios.create();

instance.defaults.baseURL = config.API_URL;

setTimeout(() => {
  instance.interceptors.request.use(config => {
    if(store.getters.isAuthenticated) {
      const userAccessToken = store.getters.getUser.access_token;
      config.headers["Authorization"] = `bearer ${userAccessToken}`;
    };
    console.log("--- Request interceptor ---");
    console.log(config);
    return config;
  });
}, 1000);

export default instance;