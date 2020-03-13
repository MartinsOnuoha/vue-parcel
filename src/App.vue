<template>
  <div class="container">
    <component :is="componentId"></component>
  </div>
</template>

<style lang="css" scoped>
  .container {
    height: 100vh;
  }
</style>

<script>
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

export default {
  name: 'app',
  data() {
    return {
      name: 'app',
      componentId: 'login'
    }
  },
  components: {
    login: Login,
    home: Home
  },
}
</script>
