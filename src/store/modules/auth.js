import AuthService from "@/services/auth.service";

const userStorage = JSON.parse(localStorage.getItem("user"));

export const auth = {
  namespaced: true,
  state: {
    authorized: userStorage != null ? true : false,
    user: userStorage != null ? userStorage : null,
  },
  mutations: {
    loginSuccess: (state, user) => {
      state.authorized = true;
      state.user = user;
    },
    loginFailure: (state) => {
      state.authorized = false;
      state.user = null;
    },
    logout: (state) => {
      state.authorized = false;
      state.user = null;
    },
  },
  actions: {
    login: ({ commit }, user) => {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout: ({ commit }) => {
      AuthService.logout();
      commit("logout");
    },
  },
};
