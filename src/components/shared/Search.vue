<template>
  <div class="form-group">
    <label for="search">
      <input type="text" placeholder="Usuario" />
      <span>{{ search }}</span>
    </label>
    <i class="far fa-search"></i>
  </div>
</template>
<script>
  export default {
    name: 'Search',
    props: {
      search: {
        type: String,
        required: true,
        default: 'Buscar',
      },
    },
  }
</script>
