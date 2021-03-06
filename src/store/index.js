import { createStore } from 'vuex';

// store du cours
// je ne comprends pas à quoi ça sert

const store = createStore({
  state() {
    return {
      count: 0,
      data: {},
    };
  },
  getters: {
    getCount: (state) => state.count,
    getData: (state) => state.data,
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    increment(state) {
      state.count ++;
    },
    setData(state, payload) {
      state.data = payload;
    }
  }
});

export default store;