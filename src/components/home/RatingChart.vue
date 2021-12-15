<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    analythicData: Array,
  },
  data: () => ({
    arrSizes: [],
    chartdata: {
      labels: ["Pequeños", "Medianos", "Grandes"],
      datasets: [
        {
          backgroundColor: ["#ed7d31", "#ffc725", "#86c44d"],
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
    this.getSizesData();
  },
  methods: {
    getSizesData() {
      this.analythicData.forEach(element => {
        this.arrSizes.push(element.cantidad);
      });
      this.chartdata.datasets[0].data = this.arrSizes;
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
