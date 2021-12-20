<template>
  <div class="container-ruta-fecha-Hora">
    <h3>{{ ciudad }}</h3>
    <p>{{ getDateFormat(date) }}</p>
    <DibujaRuta
      v-for="(address, index) in addresses"
      :key="index"
      :date="address.date"
      :address="address.address"
    ></DibujaRuta>
    <FinRuta :time="getLastTime(addresses)"></FinRuta>
  </div>
</template>

<script>
import DibujaRuta from "./DibujaRuta.vue";
import FinRuta from "./FinRuta.vue";
export default {
  components: {
    DibujaRuta,
    FinRuta,
  },
  props: {
    ciudad: {
      type: String,
      required: true,
      default: "Información General",
    },
    date: {
      type: String,
      required: true,
      default: "2021-12-10T00:00:00.000Z",
    },
    addresses: {
      type: Array,
      require: true,
    },
  },
  methods: {
    getLastTime(data) {
      const temp = data[data.length - 1].date;
      const date = temp.substring(0, temp.length - 1);
      const dateFormat = new Date(date);
      const hours = dateFormat.getHours();
      const minutes = dateFormat.getMinutes();
      return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`;
    },
    getDateFormat(data) {
      const temp = data.substring(0, data.length - 1);
      const date = new Date(temp);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month < 10) {
        return `${day}/0${month}/${year}`;
      } else {
        return `${day}/${month}/${year}`;
      }
    },
  },
};
</script>