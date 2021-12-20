<template>
  <div class="container-dibuja-ruta">
    <div>
      <p>{{ getTime(date) }}</p>
      <div class="circle-direccion">
        <div>
          <div class="circle"></div>
          <span class="ciudad-ruta">{{ address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
      default: "2021-04-11T00:00:00.000Z",
    },
    address: {
      type: String,
      required: true,
      default: "Oscar Wilde 173 San Jerónimo, Nuevo León",
    },
  },
  methods: {
    getTime(data) {
      const temp = data.substring(0, data.length - 1);
      const date = new Date(temp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`;
    }
  }
};
</script>
