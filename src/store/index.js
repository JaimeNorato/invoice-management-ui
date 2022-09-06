import { createStore } from "vuex";

import Repository from "../repository/RepositoryFactory";
const AuthRepository = Repository.get("auth");

export default createStore({
  state: {
    user: null,
    token: null,
    auth: false,
    error: false,
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      state.auth = Boolean(token);
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async logout({ dispatch }) {
      await AuthRepository.logout(this.state.token);
      return dispatch("getUser");
    },
    async login({ commit, dispatch }, payload) {
      let auth = false;
      const response = await AuthRepository.login(payload);
      if (response.status === 200) {
        commit("SET_TOKEN", response.data.access_token);
        commit("SET_ERROR", false);
        auth = true;
      } else {
        commit("SET_TOKEN", null);
        commit("SET_ERROR", true);
        auth = false;
      }
      dispatch("getUser");
      return auth;
    },
    getUser({ commit }) {
      AuthRepository.getMe(this.state.token)
        .then((response) => {
          commit("SET_USER", response.data);
        })
        .catch((error) => {
          commit("SET_USER", null);
          console.log(error);
        });
    },
  },
  modules: {},
});
