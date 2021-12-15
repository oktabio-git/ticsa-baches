<template>
  <div class="container-consulta">
    <div class="label opacity">
      <label>{{ date }}</label>
      <label>{{ fileName }}</label>
      <label class="pl-2 pr-2">{{ nameTravel }}</label>
      <label class="pl-2">{{ size }}</label>
      <label class="center">{{ analysis }}</label>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Consult',
    props: {
      date: {
        type: String,
        required: true,
      },
      fileName: {
        type: String,
        required: true,
      },
      nameTravel: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      analysis: {
        type: String,
        required: true,
      },
    },
  }
</script>
