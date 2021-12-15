<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    analythicData: Array,
  },
  data: () => ({
    arrTypes: [],
    chartdata: {
      labels: ["Grietas", "Baches"],
      datasets: [
        {
          backgroundColor: ["#ed7d31", "#ffc725"],
          borderWidth: 0
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 80
    },
  }),
  created() {
    this.getTypesData();
  },
  methods: {
    getTypesData() {
      this.analythicData.forEach(element => {
        this.arrTypes.push(element.cantidad);
      });
      this.chartdata.datasets[0].data = this.arrTypes;
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
