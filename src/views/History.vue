<template>
  <div class="container-history">
    <div class="header">
      <Header :title="title"></Header>
    </div>
    <InformationTravel></InformationTravel>
  </div>
</template>
<script>
import Header from "../components/history/Header.vue";
import InformationTravel from "../components/history/InformationTravel.vue";
export default {
  components: {
    Header,
    InformationTravel,
  },
  data() {
    return {
      title: "Información del Recorrido",
    };
  },
};
</script>
