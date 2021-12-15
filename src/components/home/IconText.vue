<template>
  <div class="wrapper-icon-text">
    <i class="foto far fa-photo-video"></i>
    <h2 class="galeria-title">{{ text }}</h2>
  </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        require: true,
        default: 'Galeria de Fotos',
      },
    },
  }
</script>
