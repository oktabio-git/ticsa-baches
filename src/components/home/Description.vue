<template>
  <div class="container-description">
    <div class="data-video">
      <div class="data-ciudad">
        <div class="circle-text">
          <h3>{{ title | uppercase }}</h3>
          <p class="date">{{ dateFormat(fecha) }}</p>
        </div>
        <div class="data-button">
          <button>{{ textButton.text }}</button>
        </div>
      </div>
      <video
        claas="video"
        width="320"
        src="https://www.youtube.com/watch?v=nhBVL41-_Cw"
        height="240"
        controls>
        <source type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    fecha: {
      type: String,
      require: true,
    },
    textButton: Object,
  },
  methods: {
    dateFormat(data) {
      const date = new Date(data)
      let d = date.getUTCDate()
      let m = date.getUTCMonth() + 1
      let y = date.getUTCFullYear()
      if (m < 10) {
        return `${d}/0${m}/${y}`
      } else {
        return `${d}/${m}/${y}`
      }
    },
  },
}
</script>
