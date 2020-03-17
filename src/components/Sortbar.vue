<template>
  <button @click="reloadData" class="btn btn-secondary">Reload</button>
</template>

<script>
import EventBus from '../js/eventBus'

export default {
  name: 'app-sortbar',
  methods: {
    reloadData() {
      EventBus.$emit('reload-data');
    }
  }
}
</script>
