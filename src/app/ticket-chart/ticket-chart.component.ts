import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-ticket-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './ticket-chart.component.html',
  styleUrls: ['./ticket-chart.component.scss'],
  providers: [provideEcharts()],
})
export class TicketChartComponent {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
}
