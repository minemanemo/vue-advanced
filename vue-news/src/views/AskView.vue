<template>
  <div>
    <div :key="item.id" v-for="item in askList">
      <a :href="item.url"> {{ item.title }} </a>
      <small>{{ `${item.time_ago} by ${item.user}` }}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['askList']),
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
