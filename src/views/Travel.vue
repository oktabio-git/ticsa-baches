<template>
  <div class="container_travel">
    <div class="row">
      <input
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        ref="file"
        id="imgupload"
        @input="onFileChange($event)"
        style="display: none"
      />
      <div class="rowOne" @click="$refs.file.click()">
        <div class="icon_text">
          <font-awesome-icon
            :icon="['fa', 'cloud-upload-alt']"
            size="5x"
            fixed-width
            class="mb-4"
          />
          <p>{{ loadMessage }}</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div
          class="form-group travel"
          :class="{ error: $v.travel.name.$error }"
        >
          <input
            v-model="$v.travel.name.$model"
            type="text"
            class="form-control"
            placeholder="Recorrido del video"
            @blur="$v.travel.name.$touch()"
          />
        </div>
        <span
          v-if="!$v.travel.name.required && $v.travel.name.$error"
          class="error-message"
        >
          El recorrido es requisito
        </span>
        <div class="submit mt-4">
          <button :disabled="!isFormDataValid" @click="onUploadFile()">
            Subir video
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <input
        type="file"
        accept="image/*"
        ref="file"
        @input="onFileImgChange($event)"
      />
      <button @click="onUploadImgFile()">
        Subir imagen
      </button>
    </div> -->

    <ListTravel></ListTravel>

    <div class="wrapper-data">
      <hr class="line" />
      <div class="container-label">
        <Consult
          :date="date"
          :fileName="fileName"
          :nameTravel="travelColumn"
          :size="size"
          :analysis="analysis"
        ></Consult>
      </div>
      <div class="container-label">
        <ListData
          v-for="row in videoData"
          :key="row.id"
          :ruteId="row.id"
          :date="row.date"
          :videoName="row.videoFile"
          :travel="row.rute"
          :size="row.size"
        ></ListData>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import ListTravel from "../components/travels/ListTravel.vue";
import Consult from "../components/travels/Consult.vue";
import ListData from "../components/travels/ListData.vue";

export default {
  name: "Travel",
  components: {
    ListTravel,
    Consult,
    ListData,
  },
  data() {
    return {
      date: "Fecha",
      fileName: "Archivo",
      travelColumn: "Recorrido",
      size: "Tamaño",
      analysis: "Análisis Video",
      loadMessage: "Arrastra o da click aquí para subir un archivo (.mp4)",
      selectedFile: null,
      selectedImgFile: null,
      videoData: [],
      travel: {
        name: "",
      },
    };
  },
  created() {
    this.getVideoData();
  },
  validations: {
    travel: {
      name: {
        required,
      },
    },
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.selectedFile = selectedFile;
      if (this.selectedFile) this.loadMessage = this.selectedFile.name;
    },
    onUploadFile() {
      if (this.isFormDataValid) {
        const formData = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("rute", this.travel.name);
        this.$api.travel
          .uploadVideoData(formData)
          .then((res) => {
            if (res.status == 200) this.getVideoData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
    onFileImgChange(e) {
      const selectedFile = e.target.files[0];
      this.selectedImgFile = selectedFile;
    },
    onUploadImgFile() {
      const formData = new FormData();
      formData.append("imgFile", this.selectedImgFile);
      this.$api.travel.getMetaData(formData).then(() => {
      }).catch(err => {
        console.log(err);
      })
    }
  },
  computed: {
    isFormDataValid() {
      this.$v.$reset();
      this.$v.$touch();

      return !this.$v.$error && this.selectedFile;
    },
  },
};
</script>