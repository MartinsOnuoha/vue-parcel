<template>
  <div class="container">
    <component :is="componentId"></component>
  </div>
</template>

<script>
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

export default {
  name: 'app',
  data() {
    return {
      name: 'Project Setup',
      componentId: ''
    }
  },
  components: {
    login: Login,
    home: Home
  },
}
</script>
