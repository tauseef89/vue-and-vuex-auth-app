import axios from "axios";
import router from "../../router";
const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null
};
const getters = {
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user,
  error: state => state.error
};
const actions = {
  // Login Action
  async login({ commit }, user) {
    commit("auth_request");
    try {
      const response = await axios.post(
        "http://localhost:2000/api/user/login",
        user
      );
      if (response.data.success) {
        const token = response.data.token;
        const user = response.data.user;
        // Store the token into the localstorage
        localStorage.setItem("token", token);
        // Set the axios defaults
        axios.defaults.headers.common["auth-token"] = token;
        commit("auth_success", token, user);
      }
      return response;
    } catch (error) {
      commit("auth_error", error);
    }
  },
  // Register User
  async register({ commit }, userData) {
    commit("register_request");
    try {
      const response = await axios.post(
        "http://localhost:2000/api/user/register",
        userData
      );
      if (response.data.success !== undefined) {
        commit("register_success");
      }
      return response;
    } catch (error) {
      commit("register_error", error);
    }
  },
  // Logout the user
  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common["auth-token"];
    router.push("/login");
    return;
  }
};

const mutations = {
  auth_request(state) {
    state.error = null;
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = "success";
    state.error = null;
  },
  auth_error(state, err) {
    state.error = err.response.data.msg;
  },
  register_request(state) {
    state.error = null;
    state.status = "loading";
  },
  register_success(state) {
    state.error = null;
    state.status = "success";
  },
  register_error(state, err) {
    state.error = err.response.data.msg;
  },
  logout(state) {
    state.error = null;
    state.status = "";
    state.token = "";
    state.user = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
