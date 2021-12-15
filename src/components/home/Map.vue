<template>
  <GmapMap :center="center" :zoom="12" class="google-map">
    <GmapMarker
      v-for="image in dataImages"
      :key="image.id"
      :position="{ lat: +image.latitud, lng: +image.length }"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      center: { lat: 25.67752, lng: -100.36162 },
    };
  },
  props: {
    dataImages: Array,
  },
};
</script>