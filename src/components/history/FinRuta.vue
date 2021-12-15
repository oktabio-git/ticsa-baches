<template>
  <div class="container-dibuja-ruta">
    <div>
      <p>
        {{ hora }}:{{ minutes }}
      </p>
      <div class="circle-direccion">
        <div>
          <div class="circle-green"></div>
          <span class="ciudad-ruta">{{ fin }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      hora: {
        type: Number,
        required: true,
      },
      minutes: {
        type: Number,
        required: true,
      },
      fin: {
        type: String,
        required: true,
        default: 'Fin recorrido',
      },
    },
  }
</script>
