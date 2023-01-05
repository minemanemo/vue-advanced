import { createStore } from 'vuex';

import { fetchAskList, fetchJobsList, fetchNewsList } from '../api';

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  getters: {
    newsList(state) {
      return state.news;
    },
    jobsList(state) {
      return state.jobs;
    },
    askList(state) {
      return state.asks;
    },
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_ASKS(state, payload) {
      state.asks = payload;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          context.commit('SET_NEWS', response);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          context.commit('SET_JOBS', response);
        })
        .catch((error) => console.log(error));
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((response) => {
          context.commit('SET_ASKS', response);
        })
        .catch((error) => console.log(error));
    },
  },
});
