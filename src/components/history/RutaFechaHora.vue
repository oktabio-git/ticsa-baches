<template>
  <div class="container-ruta-fecha-Hora">
    <h3>{{ ciudad }}</h3>
    <p>{{ date }}</p>
    <DibujaRuta
      :hora="hora"
      :minutes="minutes"
      :direccion="direccion"
    ></DibujaRuta>
    <DibujaRuta
      :hora="hora"
      :minutes="minutes"
      :direccion="direccion"
    ></DibujaRuta
    ><DibujaRuta
      :hora="hora"
      :minutes="minutes"
      :direccion="direccion"
    ></DibujaRuta>
    <DibujaRuta
      :hora="hora"
      :minutes="minutes"
      :direccion="direccion"
    ></DibujaRuta>
    <DibujaRuta
      :hora="hora"
      :minutes="minutes"
      :direccion="direccion"
    ></DibujaRuta>
    <FinRuta :hora="hora" :minutes="minutes" :fin="fin"></FinRuta>
  </div>
</template>

<script>
import DibujaRuta from "./DibujaRuta.vue";
import FinRuta from "./FinRuta.vue";
export default {
  components: {
    DibujaRuta,
    FinRuta,
  },
  props: {
    ciudad: {
      type: String,
      required: true,
      default: "Información General",
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
  },
  data() {
    return {
      hora: new Date().getHours(),
      minutes: new Date().getMinutes(),
      direccion: "Oscar Wilde 173 San Jerónimo, Nuevo León",
      fin: "Fin de recorrido",
    };
  },
};
</script>