<template>
  <div class="container-dibuja-ruta">
    <div>
      <p>{{ time }}</p>
      <div class="circle-direccion">
        <div>
          <div class="circle-green"></div>
          <span class="ciudad-ruta">Fin del recorrido</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true,
      default: "12:00",
    },
  },
};
</script>
