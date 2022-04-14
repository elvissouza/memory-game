import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerName: '',
    finish: false
  },
  mutations: {
    UPDATE_PLAYERNAME(state, name) {
      state.playerName = name;
    },
    UPDATE_FINISHGAME(state, finish) {
      state.finish = finish;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
