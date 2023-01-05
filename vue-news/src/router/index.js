import { createRouter, createWebHistory } from 'vue-router';

import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';

const routes = [
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component: JobsView,
  },
  {
    path: '/news',
    component: NewsView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
