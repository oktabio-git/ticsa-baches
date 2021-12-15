<template>
  <div class="container-dibuja-ruta">
    <div>
      <p>
        {{ hora }}:{{ minutes }}
      </p>
      <div class="circle-direccion">
        <div>
          <div class="circle"></div>
          <span class="ciudad-ruta">{{ direccion }}</span>
        </div>
        <div class="line-ruta"></div>
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

      direccion: {
        type: String,
        required: true,
        default: 'Oscar Wilde 173 San Jerónimo, Nuevo León',
      },
    },
  }
</script>
