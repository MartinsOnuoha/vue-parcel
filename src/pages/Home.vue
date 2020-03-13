<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <app-searchbar />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4" v-for="(household, i) in householdData" :key="i">
        <HouseHold :household=household />
      </div>
    </div>
  </div>
</template>

<script>
import HouseHold from '../components/HouseHold.vue';
import Searchbar from '../components/SearchBar.vue';

export default {
  name: 'home',
  data() {
    return {
      info: 'Welcome',
      householdData: [
        {
          title: 'Card Title',
          body: 'card body details'
        },
        {
          title: 'Card Title',
          body: 'card body details'
        },
        {
          title: 'Card Title',
          body: 'card body details'
        }
      ]
    }
  },
  components: {
    HouseHold,
    'app-searchbar': Searchbar
  },
};
</script>
