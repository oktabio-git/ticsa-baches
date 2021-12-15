<template>
  <div class="container-history">
    <div class="header">
      <Header :title="title"></Header>
    </div>
    <InformationTravel></InformationTravel>
  </div>
</template>
<script>
  import Header from './Header.vue'
  import InformationTravel from './InformationTravel.vue'
  export default {
    components: {
      Header,
      InformationTravel,
    },
    setup() {
      return {
        title: 'Información del Recorrido',
      }
    },
  }
</script>
