<template>
  <div>
    <div :key="item.id" v-for="item in news">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';
export default {
  data() {
    return {
      news: [],
    };
  },

  created() {
    fetchNewsList()
      .then((data) => (this.news = data))
      .catch((e) => console.log(e));
  },
};
</script>

<style></style>
