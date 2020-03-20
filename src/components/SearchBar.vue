<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Filter By</label>
        </div>
        <select v-model="filterBy" class="custom-select" id="inputGroupSelect01">
          <option value="Household">Household</option>
        </select>
      </div>
    </div>
    <input v-on:keyup="filterData" v-model="query" type="text" class="form-control" aria-label="Text input with dropdown button">
  </div>
</template>

<script>
import { getFromStorage, groupData } from '../js/storage'
import EventBus from '../js/eventBus';


export default {
  name: 'search-bar',
  data() {
    return {
      households: groupData(getFromStorage('households')),
      filterBy: 'Household',
      query: ''
    }
  },
  mounted() {
  },
  methods: {
    filterData(e) {
      const { value } = e.target;
      const result = this.filterHouseHold(value);
      EventBus.$emit('filtered', result);
    },
    filterHouseHold(query) {
      const result = this.households.filter(x => x.name.includes(query));
      return result;
    }
  }
}
</script>
