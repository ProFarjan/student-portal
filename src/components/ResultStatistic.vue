<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="card-title">
        <span class="font-weight-600">Semester Wise Mark Sheet Status</span>
        <span class="float-right">
          <select v-model="markSheet">
            <option value="allSemester" selected>All</option>
            <option v-for="(semester,i) in semesters" :key="i" :value="semester">{{ semester }}</option>
            <option value="allSubject">All Subject</option>
          </select>
        </span>
      </div>
      <v-chart class="chart" style="height: 300px;" :option="chartOptions" />
    </div>
  </div>
</template>

<script>
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { BarChart } from "echarts/charts"
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components"
import VChart, { THEME_KEY } from "vue-echarts"

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
  name: "ResultStatistic",
  components: { VChart },
  provide: {
    [THEME_KEY]: 'light'
  },
  data: () => ({
    markSheet: 'allSemester',
    semesters: ['Spring 2019', 'Summer 2019', 'Fall 2019', 'Spring 2020', 'Summer 2020', 'Fall 2020', 'Spring 2021', 'Summer 2021', 'Fall 2021'],
    BarOption: {
      legend: {
        borderRadius: 0,
        orient: 'horizontal',
        x: 'right',
        data: ['Online']
      },
      grid: {
        left: '8px',
        right: '8px',
        bottom: '0',
        containLabel: true
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },
      xAxis: [],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        },
        min: 0,
        max: 4,
        interval: 0.5,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: 'auto'
        }
      }],
      series: []
    },
  }),
  computed: {
    chartOptions () {
      if (this.markSheet == 'allSemester') {
        return this.allSemester;
      } else if(this.markSheet == 'allSubject') {
        return this.allSubject;
      } else {
        return this.allSemester;
      }
    },
    allSemester () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.BarOption.series = [{
        name: 'GPA',
        data: [3.61, 3.01, {
          value: 2.10,
          itemStyle: {color: '#a90000' }
        }, 3.10, 2.86, 3.14, 3.01, 2.51, {
          value: 2.05,
          itemStyle: {color: '#a90000'}
        }, 2.99],
        label: {
          show: false,
          color: '#639'
        },
        type: 'bar',
        color: '#7569b3',
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        }
      }]
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.BarOption.xAxis = [{
        type: 'category',
        data: this.semesters,
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        },
        axisLabel: { interval: 0, rotate: 30 }
      }]
      return this.BarOption;
    },
    allSubject () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.BarOption.series = [{
        name: 'GPA',
        data: [3.21,3.01,3.00,2.89,3.60,4,3.70,2.31,3.1,3.21,3.01,3.00,0,2.89,3.60,4,3.70,3.1,3.21,3.01,3.00,2.89,3.60,4,3.70,3.1,3.21,3.01,3.00,2.89,3.60,4,3.70,2.31,3.1,3.21,3.01,3.00,0,2.89,3.60,4,3.70,3.1,3.21,3.01,3.00,2.89,3.60,4,3.70,3.1],
        type: 'bar',
      }];
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.BarOption.xAxis = [{
        type: 'category',
        data: ['CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540','CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540', 'CSE 1102', 'CSE 1502', 'CSE 2202', 'CSE 6201', 'CSE 1540'],
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        },
        axisLabel: { interval: 0, rotate: 60 }
      }]
      return this.BarOption;
    }
  },
};
</script>

<style scoped>

</style>