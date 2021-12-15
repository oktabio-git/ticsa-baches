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
    <div class="menu">
      <div class="menu1">
        <router-link class="link" to="/home">Inicio</router-link>
        <router-link class="link" to="/travel">Recorridos</router-link>
        <router-link class="link" to="/history">Historicos</router-link>
      </div>
      <div class="menu2">
        <router-link class="link" to="/login">Mi perfil</router-link>
        <router-link class="link" to="/config"
          >Configuracion</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      titleApp0: "Aura",
      titleApp1: "Road",
    };
  },
};
</script>
