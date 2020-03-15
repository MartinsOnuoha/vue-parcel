<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title" v-text="household.Household">Card title</h5>
      <h6 class="card-subtitle badge mb-2 text-muted f-12" v-text="household['Account Number']"></h6>
      <p class="card-text badge badge-warning" v-text="household['Account Type']"></p>
      <p class="card-text f-13">
        <strong>Custodian:</strong>
        <span v-text="household.Custodian"></span>
      </p>

      <p class="card-text f-13">
        <strong>Market Value:</strong>
        <span v-text="household['Market Value']"></span>
      </p>

      <p class="card-text f-13">
        <strong>MarketValue Date:</strong>
        <span v-text="household['MarketValue Date']"></span>
      </p>

      <p class="card-text f-13">
        <strong>Fee Account:</strong>
        <span v-text="household['Fee Account']"></span>
      </p>

      <p class="card-text f-13">
        <strong>Fee Schedule:</strong>
        <span v-text="household['Fee Schedule']"></span>
      </p>

      <hr>
      <p class="card-text" v-text=""></p>
      <a href="#" class="card-link">View Account Details</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
  strong {
    color: #455A64;
  }
</style>
<script>
export default {
  name: 'house-hold',
  props: [ 'household' ],
}
</script>
