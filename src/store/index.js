import Vue from 'vue'

import Vuex from "vuex"
Vue.use(Vuex)

var store = new Vuex.Store({
    state : {
        userData: {},
        isSettingUserData: false
    },
    mutations : {
        setIsSettingUserData (state, value) {
            state.isSettingUserData = value
        },
        setUserData (state, value) {
            state.userData = value
        }
    },
    actions: {
        setIsSettingUserData: ({ commit }, data) => {
            commit('setIsSettingUserData', data)
        },
        setUserData: ({ commit }, data) => {
            commit('setUserData', data)
        }
    },
    getters : {
        userData(state) {
            return state.userData
        },
        isSettingUserData(state) {
            return state.isSettingUserData
        }
    }
})

export default store