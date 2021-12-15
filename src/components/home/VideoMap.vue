<template>
  <div class="title-button">
    <p class="ml-1">{{ date }}</p>
    <button class="btn-mas-recorrido">{{ button.text }}</button>
  </div>
</template>

<script>
  export default {
    name: 'VideoMap',
    props: {
      date: {
        type: String,
        require: true,
      },
      button: Object,
    },
  }
</script>
