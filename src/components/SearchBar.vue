<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Filter By</label>
        </div>
        <select v-model="filterBy" class="custom-select" id="inputGroupSelect01">
          <option value="Custodian">Custodian</option>
          <option value="Household">Household</option>
          <option value="Account Type">Account Type</option>
          <option value="Account Number">Account Number</option>
        </select>
      </div>
    </div>
    <input v-on:keyup="filterData" v-model="query" type="text" class="form-control" aria-label="Text input with dropdown button">
  </div>
</template>

<script>
import { getFromStorage } from '../js/storage'
import EventBus from '../js/eventBus';


export default {
  name: 'search-bar',
  data() {
    return {
      households: getFromStorage('households'),
      filterBy: 'Custodian',
      query: ''
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    filterData(e) {
      const { value } = e.target;
      const result = this.households.filter(x => String(x[`${this.filterBy}`]).toLowerCase().includes(value.toLowerCase()));
      EventBus.$emit('filtered', result);
    }
  }
}
</script>
