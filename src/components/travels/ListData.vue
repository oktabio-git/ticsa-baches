<template>
  <div class="label-data">
    <div class="label">
      <div>{{ dateFormat(date) }}</div>
      <div>{{ videoName }}</div>
      <div class="pl-2 pr-2">{{ travel }}</div>
      <div class="pl-2">{{ convertSize(size) + " MB" }}</div>
      <div class="analysis-video center" @click="getMetaVideo(ruteId)">
        <font-awesome-icon
          v-if="!processed"
          :icon="['fa', 'sync-alt']"
          fixed-width
        />
        <font-awesome-icon
          :class="{ done: processed }"
          v-if="processed"
          :icon="['fa', 'check-circle']"
          fixed-width
        />
      </div>
    </div>
    <div>
      <button class="btn-ver" @click="toTravelRoute()" :class="{ active: processed}">Ver recorrido</button>
    </div>
    <div><i class="remove far fa-trash-alt"></i></div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
      default: new Date().toLocaleDateString(),
    },
    videoName: {
      type: String,
      required: true,
      default: "video_name.mp4",
    },
    travel: {
      type: String,
      required: true,
      default: "San Jerónimo - Oscar Wilde",
    },
    size: {
      type: Number,
      required: true,
      default: 0,
    },
    ruteId: {
      type: Number,
      required: true,
      default: 0,
    },
    processed: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  methods: {
    dateFormat(data) {
      const date = new Date(data);
      let d = date.getUTCDate();
      let m = date.getUTCMonth() + 1;
      let y = date.getUTCFullYear();
      if (m < 10) {
        return `${d}/0${m}/${y}`;
      } else {
        return `${d}/${m}/${y}`;
      }
    },
    convertSize(data) {
      var sz = +data;
      return (sz / 1024 / 1024).toFixed(2);
    },
    getMetaVideo(data) {
      this.$api.travel
        .getMetaVideo(data)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    toTravelRoute() {
      if (this.processed)
        this.$router.push(`/history/${this.ruteId}`)
    }
  },
};
</script>
