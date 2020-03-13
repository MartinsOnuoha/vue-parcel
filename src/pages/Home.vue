<template>
  <div>
    <h3 v-text="info"></h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      info: 'Welcome'
    }
  },
}
</script>
