import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      fullName: "",
      age: "",
    },
    children: [] as { name: string; age: number | null }[],
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, { fullName, age }) {
      state.user.fullName = fullName;
      state.user.age = age;
    },
    setChildren(state, children) {
      state.children = children;
    },
    // addChild(state) {
    //   state.children.push({ name: "", age: null });
    // },
    removeChild(state, index) {
      state.children.splice(index, 1);
    },
  },
  actions: {
    save({ commit }, { user, children }) {
      commit("setUser", user);
      commit("setChildren", children);
    },
    // addChild({ commit }) {
    //   commit("addChild");
    // },

    deleteChild({ commit }, index) {
      commit("removeChild", index);
    },
  },
});
