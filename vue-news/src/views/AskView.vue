<template>
  <div>
    <div :key="item.id" v-for="item in this.$store.state.asks">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
