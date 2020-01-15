import {
    SET_AUTH,
    PURGE_AUTH,
    SET_ERROR,
    SET_LOADING
} from './../mutations.type'
import {
    LOGIN,
    LOGOUT,
} from './../actions.type'
import { API_URL } from './../../config/environments'

const state = {
    user: null,
    error: '',
    loading: false,
    isAuthenticated: false
}

const getters = {
    isAuthenticated(state) {
        return state.user !== null
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
        context.commit(SET_LOADING, true)
        console.log(API_URL)
        // TODO: calling POST /token
        context.commit(SET_AUTH, {
            // TODO: put user information here
        });
        context.commit(SET_LOADING, false)
        context.commit(SET_ERROR, null)
    },
    [LOGOUT](context) {
        context.commit(SET_LOADING, true)
        context.commit(PURGE_AUTH, true)
        context.commit(SET_LOADING, false)
    },
}

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error
    },
    [SET_AUTH](state, user) {
        state.user = user
    },
    [PURGE_AUTH](state) {
        state.user = null
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