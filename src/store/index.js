import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: {
      rock: [
        { 
          id: 1,
          artist: 'The Beatles',
          category: 'Rock',
          album: 'Abbey Road',
          image: '...'
        },
      ]
    }
  },
/*   getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  } */
});
