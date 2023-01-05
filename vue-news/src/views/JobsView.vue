<template>
  <div>
    <div :key="item.id" v-for="item in jobs">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api';
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList().then((data) => (this.jobs = data));
  },
};
</script>

<style></style>
