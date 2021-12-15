<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    dataImages: Array,
  },
  data: () => ({
    chartdata: {
      datasets: [
        {
          backgroundColor: "#ed7d31",
          data: [1],
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
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>