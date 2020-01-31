import {
    SET_AUTH,
    PURGE_AUTH,
    SET_ERROR,
    SET_LOADING
} from './../mutations.type'
import {
    LOGIN,
    LOGOUT
} from './../actions.type'
import authAxios from "@/axios/authAxios.js";
import router from "@/router/index.js";

const state = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false
}

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  getUser(state) {
    return state.user
  },
  getError(state) {
    return state.error
  },
  isLoading(state) {
    return state.loading
  }
}

const actions = {
  [LOGIN](context, credentials) {
    context.commit(SET_LOADING, true);
    // Calling POST /tokens
    authAxios.login({
      grant_type: "password",
      username: credentials.username,
      password: credentials.password
    }).then(result => {
      // Put user information
      context.commit(SET_AUTH, result.data);
      context.commit(SET_ERROR, null);
      router.replace("/dashboard");
    }).catch(err => {
      context.commit(SET_ERROR, {
        status: "error",
        message: "Login Failed !!!"
      });
    });
    context.commit(SET_LOADING, false);
  },
  [LOGOUT](context) {
    context.commit(SET_LOADING, true);
    context.commit(PURGE_AUTH, true);
    context.commit(SET_LOADING, false);
    router.replace("/");
  },
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = null;
  },
  [SET_LOADING](state, isLoading) {
    state.loading = isLoading
  }
}

export default {
    state,
    actions,
    mutations,
    getters
}