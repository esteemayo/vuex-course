import { getRandomNumber } from '@/services/counterService';

const counter = {
  state: () => ({
    counter: 0,
    history: [0],
  }),
  mutations: {
    addToCounter(state, payload) {
      state.counter += payload;
      state.history.push(payload);
    },
    subtractFromCounter(state, payload) {
      state.counter -= payload;
      state.history.push(payload);
    },
  },
  actions: {
    async addRandomNumber({ commit }) {
      const { data } = await getRandomNumber();

      commit('addToCounter', data);
    },
  },
  getters: {
    counter: (state) => state.counter,
    history: (state) => state.history,
    activeIndexes: (state) => (payload) => {
      const indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });

      return indexes;
    },
  },
};

export default counter;
