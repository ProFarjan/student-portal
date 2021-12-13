<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="card-title">
        <span class="font-weight-600">Accounts Statistic</span>
      </div>
      <v-chart class="chart" id="echartPie" style="height: 300px;" :option="PieOption" />
    </div>
  </div>
</template>

<script>
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { PieChart } from "echarts/charts"
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components"
import VChart, { THEME_KEY } from "vue-echarts"

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
  name: "AccountsStatistic",
  components: { VChart },
  provide: {
    [THEME_KEY]: 'light'
  },
  data: () => ({
    PieOption: {
      color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },
      series: [{
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        data: [{
          value: 11500,
          name: 'Admission Fee'
        }, {
          value: 28501,
          name: 'Semester Fee'
        }, {
          value: 3000,
          name: 'Late Fee'
        }, {
          value: 6000,
          name: 'Retake Fee'
        }, {
          value: 15600,
          name: 'Lab Fee'
        }, {
          value: 14500,
          name: 'Course Fee'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    },
  })
};
</script>

<style scoped>

</style>