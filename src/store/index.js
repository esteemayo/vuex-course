import { createStore } from 'vuex';
import counter from './modules/counter';

const store = createStore({
  modules: {
    counter,
  },
});

export default store;
