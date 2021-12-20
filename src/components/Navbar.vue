<template>
  <div class="navbar">
    <div class="nav-container">
      <div class="logo">
        <img src="../assets/logo.png" />
        <span class="logo-text"
          >{{ titleApp0 }}<span class="highlight">{{ titleApp1 }}</span></span
        >
      </div>
    </div>
    <div class="menu" v-if="isLogged">
      <div class="menu1">
        <router-link class="link" to="/home">Inicio</router-link>
        <router-link class="link" to="/travel">Recorridos</router-link>
      </div>
      <div class="menu2">
        <class class="link" @click="signOut()">Cerrar Sesión</class>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/helpers/auth";

export default {
  name: "Navbar",
  data() {
    return {
      titleApp0: "Aura",
      titleApp1: "Road",
    };
  },
  methods: {
    ...mapGetters(["getIsLogged"]),
    signOut() {
      logout();
    }
  },
  computed: {
    isLogged() {
      return this.getIsLogged();
    },
  }
};
</script>
