<template>
  <div class="card">
    <div class="card-body">
      <h6 class="card-subtitle badge mb-2 text-muted f-12" v-text="account['Account Number']"></h6>
      <p class="card-text badge badge-warning" v-text="account['Account Type']"></p>
      <p class="card-text f-13">
        <strong>Custodian:</strong>
        <span v-text="account.Custodian"></span>
      </p>

      <p class="card-text f-13">
        <strong>Market Value:</strong>
        <span v-text="formatNumber(account['Market Value'])"></span>
      </p>

      <p class="card-text f-13">
        <strong>MarketValue Date:</strong>
        <span v-text="formatDate(account['MarketValue Date'])"></span>
      </p>

      <p class="card-text f-13">
        <strong>Fee Account:</strong>
        <span class="badge badge-success" v-text="account['Fee Account']"></span>
      </p>

      <p class="card-text f-13">
        <strong>Fee Schedule:</strong>
        <span v-text="account['Fee Schedule']"></span>
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
  strong {
    color: #455A64;
  }
</style>
<script>
import { formatDate, formatCurrency } from '../js/formatter';

export default {
  name: 'account',
  props: [ 'account' ],
  methods: {
    formatDate(value) {
      return formatDate(value);
    },
    formatNumber(value) {
      return formatCurrency(value);
    },
  },
}
</script>
