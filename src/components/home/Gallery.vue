<template>
  <div class="imagen">
    <div class="container-img" v-for="img in imagesLoaded" :key="img.id">
      <img :src="loadImageSource(img.image)" alt="" />
      <div class="title-button">
        <button class="mas-recorrido">{{ buttonRecorrido.title }}</button>
      </div>
    </div>
    <div class="imagenes-ver-mas">
      <font-awesome-icon
        :icon="['fa', 'arrow-alt-circle-down']"
        fixed-width
        class="mr-2"
      />
      <span @click="loadMore()">{{ verMas }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
  props: {
    buttonRecorrido: Object,
    titleCiudad: String,
    verMas: String,
    images: {
      type: Array,
    },
  },
  data() {
    return {
      length: 5
    }
  },
  methods: {
    loadImageSource(data) {
      return "data:image/png;base64, " + data.substring(1, data.length - 1);
    },
    loadMore() {
      if (this.length > this.images.length) return;
      this.length = this.length + 3;
    },
  },
  computed: {
    imagesLoaded() {
      return this.images.slice(0, this.length);
    },
  },
};
</script>
