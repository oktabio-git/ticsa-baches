<template>
  <div class="wrapper-home">
    <div class="info-container">
      <div class="graphi-title">
        <i class="graphi far fa-chart-line"></i>
        <h2 class="title-graphi">Información General</h2>
      </div>
      <Search :search="search"></Search>
    </div>
    <div class="total-zona">
      <router-link
        class="link line-button"
        :class="{ active: true }"
        to="/Totales"
        >Totales</router-link
      >
      <router-link class="link line-button" to="/Zonas">Zonas</router-link>
    </div>
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
    </div>

    <div class="car-title">
      <div>
        <i class="car fal fa-truck"></i>
        <h2 class="title-graphi">Últimos Recorridos</h2>
      </div>
    </div>

    <VideoMap :date="date" :button="button"></VideoMap>
    <div class="video-mapa">
      <div class="container-mapa-video">
        <div class="description">
          <Description
            v-for="row in videosLoaded"
            :key="row.id"
            :title="row.rute"
            :fecha="row.date"
            :textButton="textButton"
          >
          </Description>
          <div class="ver-mas">
            <div class="header-ver">
              <font-awesome-icon
                :icon="['fa', 'arrow-alt-circle-down']"
                fixed-width
                class="mr-2"
              />
              <span @click="loadMore()">{{ verMas }}</span>
            </div>
          </div>
        </div>
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
import QuantityChart from "../components/home/QuantityChart.vue";
import TypesChart from "../components/home/TypesChart.vue";
import RatingChart from "../components/home/RatingChart.vue";
import VideoMap from "../components/home/VideoMap.vue";
import Description from "../components/home/Description.vue";
import Map from "../components/home/Map.vue";
import IconText from "../components/home/IconText.vue";
import Gallery from "../components/home/Gallery.vue";
import Search from "../components/shared/Search.vue";

export default {
  name: "Home",
  components: {
    QuantityChart,
    TypesChart,
    RatingChart,
    VideoMap,
    Description,
    Map,
    IconText,
    Gallery,
    Search,
  },
  data() {
    return {
      title: "San jeronimo".toUpperCase(),
      fecha: "10:00AM - 12:23 PM",
      lugar: "Oscar Wilde",
      textButton: {
        text: "Ver detalles".toUpperCase(),
      },
      date: "28/Octubre/2021",
      button: {
        text: "+ Nuevo recorrido ".toUpperCase(),
      },
      search: "Buscar",
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
      verMas: "Ver Más",
      text: "Galeria de Fotos",
      titleCiudad: "248 Oscar Wilde",
      buttonRecorrido: {
        title: "Ver Recorrido".toUpperCase(),
      },
      videoData: [],
      dataImages: [],
      analythics: {
        analythicSizes: [],
        analythicTypes: [],
      },
      length: 2,
    };
  },
  created() {
    this.getVideoData();
    this.getDataImages();
    this.getAnalythicData();
  },
  methods: {
    getAnalythicData() {
      this.$api.analythic
        .getAnalythicData()
        .then((res) => {
          this.analythics.analythicTypes = res.data.types;
          this.analythics.analythicSizes = res.data.sizes;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideoData() {
      this.$api.travel
        .getVideoData()
        .then((res) => {
          this.videoData = res.data.rows.recordset;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataImages() {
      this.$api.travel
        .getImageData()
        .then((res) => {
          this.dataImages = res.data.rows.recordset;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadMore() {
      if (this.length > this.videoData.length) return;
      this.length = this.length + 2;
    },
  },
  computed: {
    videosLoaded() {
      return this.videoData.slice(0, this.length);
    },
  },
};
</script>
