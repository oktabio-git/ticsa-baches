<template>
  <div class="header-ver">
    <i class=" row fal fa-arrow-down"></i>
    <p class="data">{{ verMas }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      verMas: {
        type: String,
        default: 'Ver mas',
      },
    },
  }
</script>
