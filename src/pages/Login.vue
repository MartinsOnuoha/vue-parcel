<template>
  <div class="row justify-content-md-center mt-4">
    <div class="col-md-auto mx-auto">
      <loginForm />
    </div>
  </div>
</template>

<style lang="css" scoped>
  .row {
    margin-top: 150px !important;
  }
</style>
<script>
import Form from '../components/Form.vue';

export default {
  name: 'login',
  components: {
    loginForm: Form
  }
}
</script>
