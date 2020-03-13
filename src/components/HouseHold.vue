<template>
  <div class="card">
    <img src="https://phandroid.com/wp-content/uploads/2014/12/Ultimate-Material-Lollipop-Collection-407.png" class="card-img-top" alt="house-hold">
    <div class="card-body">
      <h5 class="card-title" v-text="household.title"></h5>
      <p class="card-text" v-html="household.body"></p>
      <a href="#" class="btn btn-secondary">See Account Details</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'house-hold',
  props: [ 'household' ],
  mounted() {
    console.log(this.household.title)
  }
}
</script>
