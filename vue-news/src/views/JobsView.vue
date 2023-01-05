<template>
  <div>
    <div :key="item.id" v-for="item in jobsList">
      <a :href="item.url"> {{ item.title }} </a>
      <small>{{ `${item.time_ago}, ${item.domain}` }}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['jobsList']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
