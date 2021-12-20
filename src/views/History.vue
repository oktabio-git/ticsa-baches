<template>
  <div class="container-history">
    <div class="header">
      <Header :title="title"></Header>
    </div>
    <InformationTravel :id="id" :location="location"></InformationTravel>
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
      id: this.$route.params.id,
      location: this.$route.query.title
    };
  },
  created() {
    console.log(this.location);
  }
};
</script>
