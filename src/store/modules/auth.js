import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_PURGE
} from './../mutations.type'
import {
  LOGIN,
  LOGOUT,
  AUTO_LOGIN
} from './../actions.type'
import userService from '@/services/user'
import axios from 'axios'

const state = {
  token: null,
  user: null,
  error: null,
  loading: false,
}

const getters = {
  isAuthenticated(state) {
    return !!state.token
  },
  getUser(state) {
    return state.user
  },
  isError(state) {
    return state.error
  },
  isLoading(state) {
    return state.loading
  }
}

const actions = {
  [LOGIN](context, credentials) {
    context.commit(AUTH_LOADING)
    // Calling POST /tokens
    userService.login(credentials.username, credentials.password).then(result => {
      // Put user information      
      const token = result.data.access_token
      const user = result.data.id_token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      context.commit(AUTH_SUCCESS, token, user)
    }).catch(err => {
      localStorage.removeItem('token')
      context.commit(AUTH_FAIL)
    })
  },
  [AUTO_LOGIN](context) {
    context.commit(AUTH_LOADING)
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // TODO: call GET /profile by using token as a header to get user profile
    context.commit(AUTH_SUCCESS, token, {})
  },
  [LOGOUT](context) {
    context.commit(AUTH_LOADING)
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    context.commit(AUTH_PURGE)
  },
}

const mutations = {
  [AUTH_FAIL](state) {
    state.token = null
    state.user = null
    state.error = true
    state.loading = false
  },
  [AUTH_SUCCESS](state, token, user) {
    state.token = token
    state.user = user
    state.error = false
    state.loading = false
  },
  [AUTH_PURGE](state) {
    state.token = null
    state.user = null
    state.error = false
    state.loading = false
  },
  [AUTH_LOADING](state) {
    state.loading = true
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}