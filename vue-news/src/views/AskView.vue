<template>
  <div>
    <div :key="item.id" v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api';
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList().then((data) => {
      this.ask = data;
    });
  },
};
</script>

<style></style>
