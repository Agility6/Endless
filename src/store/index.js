import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeShow: false
  },
  mutations: {
    CHANG_HOME_SHOW: (state, value) => {
      state.homeShow = value
    }
  }, 
  actions: {
    changeHomeShow({ commit }, value) {
      commit('CHANG_HOME_SHOW', value)
    }
  },
  modules: {
  }
})
