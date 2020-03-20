<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              :data-target="`#acc-${household.id}`"
              aria-expanded="true"
              aria-controls="collapseOne"
              v-text="household.name"
            >
            </button>
          </h2>
        </div>

        <div
          :id="`acc-${household.id}`"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body row">
            <div class="col-md-3" v-for="(account, i) in household.accounts" :key="i">
              <Account :account="account" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Account from './Account.vue';

export default {
  name: 'new-house',
  props: ['household'],
  components: {
    Account
  },
}
</script>
