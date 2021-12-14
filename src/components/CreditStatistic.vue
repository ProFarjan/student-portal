<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="card-title">
        <span class="font-weight-600">Credit Statistic</span>
      </div>
      <v-chart class="chart" style="height: 300px;" :option="PieOption" />
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
  name: "CreditStatistic",
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
          value: 60.5,
          name: 'Completed'
        }, {
          value: 6,
          name: 'Remaining'
        }, {
          value: 70.5,
          name: 'Incomplete'
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