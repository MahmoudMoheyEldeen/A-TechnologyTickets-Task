import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-ticket-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-chart.component.html',
  styleUrls: ['./ticket-chart.component.scss'],
})
export class TicketChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'يناير',
          'فبراير',
          'مارس',
          'إبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر',
        ],
        axisLabel: {
          formatter: function (value: string) {
            return value;
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          name: 'استخدام',
          type: 'line',
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210, 250, 220, 240, 180, 150],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(138, 116, 249)',
              },
              {
                offset: 0.5,
                color: 'rgba(138, 116, 249, 0.2637)',
              },
              {
                offset: 1,
                color: 'rgba(138, 116, 249, 0)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: '#8e44ad', // Line color
          },
          lineStyle: {
            width: 3,
          },
        },
      ],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
    };

    option && myChart.setOption(option);
  }
}
