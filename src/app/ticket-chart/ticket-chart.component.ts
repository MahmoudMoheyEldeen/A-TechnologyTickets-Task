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
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ],
    };
    option && myChart.setOption(option);
  }
}
