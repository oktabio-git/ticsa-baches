<template>
  <div class="information-travel">
    <div class="row-graphi-video">
      <div class="graphics" v-if="dataImages.length != 0">
        <div class="content">
          <p class="center strong">Total {{ dataImages.length }}</p>
          <QuantityChart :dataImages="dataImages"></QuantityChart>
        </div>
        <div class="content">
          <p class="center strong">Tipo</p>
          <TypesChart :analythicData="analythics.analythicTypes"></TypesChart>
        </div>
        <div class="content">
          <p class="center strong">Clasificación</p>
          <RatingChart :analythicData="analythics.analythicSizes"></RatingChart>
        </div>
        <div class="content">
          <VideoText :titleVideo="titleVideo"></VideoText>
        </div>
      </div>
    </div>
    <div class="ruta-mapa">
      <RutaFechaHora
        v-if="addressData.length != 0"
        :ciudad="location.toUpperCase()"
        :date="addressData[0].date"
        :addresses="addressData"
      >
      </RutaFechaHora>
      <div class="mapa">
        <h3>{{ "Mapa de recorrido".toUpperCase() }}</h3>
        <Map :dataImages="dataImages"></Map>
      </div>
    </div>
    <div class="galeria">
      <IconText :text="text"></IconText>
      <Gallery
        :titleCiudad="titleCiudad"
        :verMas="verMas"
        :buttonRecorrido="buttonRecorrido"
        :images="dataImages"
      ></Gallery>
    </div>
  </div>
</template>
<script>
import QuantityChart from "../home/QuantityChart.vue";
import TypesChart from "../home/TypesChart.vue";
import RatingChart from "../home/RatingChart.vue";
import VideoText from "./VideoText.vue";
import RutaFechaHora from "./RutaFechaHora.vue";
import Map from "../home/Map.vue";
import Gallery from "../home/Gallery.vue";
import IconText from "../home/IconText.vue";

export default {
  components: {
    QuantityChart,
    TypesChart,
    RatingChart,
    VideoText,
    RutaFechaHora,
    Map,
    Gallery,
    IconText,
  },
  data() {
    return {
      bache: "Baches",
      potholeNumber: 35,
      tipo: "Tipo",
      grietas: "Grietas",
      grietasNumber: 6,
      clasificacion: "Clasificación",
      pequeno: "Pequeño",
      pequenoNumber: 6,
      mediano: "Mediano",
      medianoNumber: 34,
      grande: "Grande",
      grandeNumber: 67,
      titleVideo: "Video Recorrido".toUpperCase(),
      titleCiudad: "248 Oscar Wilde",
      verMas: "Ver Mas",
      text: "",
      buttonRecorrido: {
        title: "Ver Recorrido".toUpperCase(),
      },
      dataImages: [],
      analythics: {
        analythicSizes: [],
        analythicTypes: [],
      },
      addressData: [],
    };
  },
  props: {
    id: {
      type: Number,
      require: true
    },
    location: {
      type: String,
      require: true,
      default: "Ubicación"
    }
  },
  created() {
    this.getDataImages();
    this.getAnalythicData();
  },
  methods: {
    getAnalythicData() {
      this.$api.analythic
        .getAnalythicTravel(this.id)
        .then((res) => {
          this.analythics.analythicTypes = res.data.types;
          this.analythics.analythicSizes = res.data.sizes;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataImages() {
      this.$api.travel
        .getImageTravelData(this.id)
        .then((res) => {
          this.dataImages = res.data.rows.recordset;
          if (this.dataImages != 0) {
            this.dataImages.forEach((element) => {
              this.getAddressData(
                element.latitud,
                element.length,
                element.timeCapture
              );
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAddressData(lat, lng, date) {
      this.$api.travel
        .getAddressData(lat, lng)
        .then((res) => {
          this.addressData.push({
            address: res.data.results[0].formatted_address,
            date: date,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
