<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted" v-text="household.title"></h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">View Account Details</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'house-hold',
  props: [ 'household' ],
}
</script>
