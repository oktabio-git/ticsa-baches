<template>
  <div class="video-text">
    <h3>{{ titleVideo }}</h3>
    <video src="../../assets/video.mp4" controls>
      <source type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  props: {
    titleVideo: {
      type: String,
      required: true,
    },
  },
}
</script>
