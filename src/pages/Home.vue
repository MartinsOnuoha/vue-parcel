<template>
  <div class="row mt-5">
    <div class="col-md-4" v-for="(household, i) in householdData" :key="i">
      <HouseHold :household=household />
    </div>
  </div>
</template>

<script>
import HouseHold from '../components/HouseHold.vue';

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
        }
      ]
    }
  },
  components: {
    HouseHold,
  },
};
</script>
