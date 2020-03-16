<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-md-3">
        <img @click="changePage('profile')" class="img-thumbnail" :src="user.avatar" alt="">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <app-searchbar />
      </div>
      <!-- <div class="col-md-4">
        <app-sortbar />
      </div> -->
    </div>
    <div class="row mt-4">
      <div class="col-md-4" v-if="householdData.length < 1">
        <h2 class="text-muted">Sorry, No Data</h2>
      </div>
      <div class="col-md-4 mt-2" v-for="(household, i) in householdData" :key="i">
        <HouseHold :household=household />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .img-thumbnail {
    cursor: pointer;
  }
</style>
<script>
import HouseHold from '../components/HouseHold.vue';
import Searchbar from '../components/SearchBar.vue';
import Sortbar from '../components/Sortbar.vue';
import { getFromStorage } from '../js/storage';
import EventBus from '../js/eventBus';

export default {
  name: 'home',
  data() {
    return {
      info: 'Welcome',
      householdData: [],
      user: getFromStorage('user')
    }
  },
  components: {
    HouseHold,
    'app-searchbar': Searchbar,
    'app-sortbar': Sortbar
  },
  mounted() {
    EventBus.$on('filtered', (data) => {
      this.householdData = data;
    })
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await getFromStorage('households');
      this.householdData = data;
    },
    changePage(name) {
      EventBus.$emit('change-page', name);
    }
  }
};
</script>
