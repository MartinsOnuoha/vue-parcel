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
import EventBus from './js/eventBus';

export default {
  name: 'app',
  data() {
    return {
      name: 'app',
      componentId: 'home',
      isLoggedIn: localStorage.getItem('user') ? true: false,
    }
  },
  components: {
    login: Login,
    home: Home
  },
  mounted() {
    EventBus.$on('is-logged-in', (data) => {
      console.log('now logged in', data);
      data ? this.componentId = 'home' : this.componentId = 'login'
    });
    const { isLoggedIn } = this;
    isLoggedIn ? this.componentId = 'home' : this.componentId = 'login';
  }
}
</script>
