<template>
  <div class="info-container">
    <div class="graphi-title">
      <i class="car fal fa-truck"></i>
      <h2>{{ title }}</h2>
    </div>
    <Search :search="search"></Search>
  </div>
</template>
<script>
  import Search from '../shared/Search.vue'
  export default {
    name: 'ListTravel',
    components: {
      Search,
    },
    data() {
      return {
        search: 'Buscar'
      }
    },
    props: {
      title: {
        type: String,
        default: 'Lista de Recorrido',
      },
    },
  }
</script>
