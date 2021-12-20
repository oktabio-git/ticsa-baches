<template>
  <div class="title-button">
    <p class="ml-1">{{ date }}</p>
    <button class="btn-mas-recorrido pointer" @click="redirectTo()">
      {{ button.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "VideoMap",
  props: {
    date: {
      type: String,
      require: true,
    },
    button: Object,
  },
  methods: {
    redirectTo() {
      this.$router.push("/travel");
    },
  },
};
</script>
