import { createRouter, createWebHistory } from 'vue-router';

import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
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
  {
    path: '/item',
    component: ItemView,
  },
  {
    path: '/user',
    component: UserView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
