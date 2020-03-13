<template>
  <div class="card">
    <div class="card-body">
      <h3 class="mb-3">Login</h3>
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input v-model="form.email" type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="email">Full Name</label>
          <input v-model="form.fullName" type="text" class="form-control" id="full-name">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-secondary btn-block mt-4">Submit</button>
      </form>
    </div>
  </div>
</template>

<style lang="css">
  label {
    font-size: 13px;
    color: gray;
  }
  .card { width: 20rem; }
</style>

<script>
export default {
  name: 'form',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      // TODO: login
    }
  },
}
</script>
