<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter By</button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Market Value</a>
        <a class="dropdown-item" href="#">Custodian</a>
        <a class="dropdown-item" href="#">Fee Schedule</a>
        <div role="separator" class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Status</a>
      </div>
    </div>
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
    <div class="input-group-append">
      <span class="input-group-text">Search</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar'
}
</script>
