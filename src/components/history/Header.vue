<template>
  <div class="info-container">
    <div class="graphi-title">
      <i class=" graphi far fa-chart-line"></i>
      <h2>{{ title }}</h2>
    </div>

    <div class="form-group">
      <label for="search">
        <input type="text" placeholder="Usuario" />
        <span>Buscar</span>
      </label>
      <i class="far fa-search"></i>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: 'Información General',
      },
    },
  }
</script>
