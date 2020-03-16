<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-3 text-center">
      <div class="">
        <img width="300" :src="user.avatar" class="img-thumbnail" alt="">
      </div>
      <h2 v-text="user.fullName"></h2>
      <h5 class="text-muted" v-text="user.email"></h5>
      <div class="mt-4">
        <button class="btn btn-secondary" @click="changePage('home')">Go Back</button>
      </div>
    </div>

  </div>
</template>

<script>
import { getFromStorage } from '../js/storage';
import EventBus from '../js/eventBus';

export default {
  name: 'profile',
  data() {
    return {
      user: getFromStorage('user')
    }
  },
  methods: {
    changePage(name) {
      EventBus.$emit('change-page', name);
    }
  }
}
</script>
