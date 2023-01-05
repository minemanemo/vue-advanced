<template>
  <div class="header">
    <router-link to="/news"><span>News</span></router-link>
    <router-link to="/ask"><span>Ask</span></router-link>
    <router-link to="/jobs"><span>Jobs</span></router-link>
    <router-link to="/user"><span>User</span></router-link>
    <router-link to="/item"><span>Item</span></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active span {
  color: #35495e;
}
.header a span {
  color: white;
}
.header a:not(:last-child)::after {
  content: '|';
  margin: 0 5px;
}
</style>
