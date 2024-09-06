import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-ticket-chart',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoDirective,
    TranslocoPipe,
  ],
  templateUrl: './ticket-chart.component.html',
  styleUrls: ['./ticket-chart.component.scss'],
})
export class TicketChartComponent implements AfterViewInit {
  chartDateType: string = '';

  ngAfterViewInit() {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        shadowColor: 'rgba(0, 0, 0, 0)',
        axisPointer: {
          type: 'cross',
        },
        extraCssText:
          'padding: 0; border: none; display:flex; width:100px;height:50px; justify-content:center; align-items:center;background-color:transparent;', // Remove padding and border
        formatter: function (params: any) {
          const tooltipHtml = `
            <div style="background-image: url('assets/icons/Stat Container.png');
                          background-size: auto;
                          background-repeat: no-repeat;
                          background-position: center;
                          width: 100px;
                          height: fit-content;
                          color: #fff;
                          font-size: 12px;
                          display: flex;
                          flex-direction: row;
                          flex-wrap: unwrap;
                          align-items: center;
                          justify-content: center;
                          border-radius: 8px;
                           padding: 50px;">
              <strong>${params[0].name}</strong><br/>
              ${params
                .map((item: any) => `${item.seriesName}: ${item.value}`)
                .join('<br/>')}
            </div>`;
          return tooltipHtml;
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
              { offset: 0, color: 'rgb(138, 116, 249)' },
              { offset: 0.5, color: 'rgba(138, 116, 249, 0.2637)' },
              { offset: 1, color: 'rgba(138, 116, 249, 0)' },
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
