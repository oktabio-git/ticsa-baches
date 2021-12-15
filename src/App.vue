<template>
  <div class="wrapper">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";
require("./assets/scss/app.scss");

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapGetters(["getIsLogged", "getLoadCount"]),
  },
  computed: {
    isLogged() {
      return this.getIsLogged();
    },
    showLoader() {
      return this.getLoadCount() > 0 ? true : false;
    }
  }
};
</script>