import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

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
export class TicketChartComponent implements AfterViewInit, OnDestroy {
  selectedLanguage: string = '';
  private langSubscription: Subscription = new Subscription();
  private myChart: any;

  constructor(private _trans: TranslationService) {
    // Subscribe to language changes
    this.langSubscription = this._trans.selectedLanguage$.subscribe((lang) => {
      this.selectedLanguage = lang;
      this.renderChart(); // Re-render the chart when the language changes
    });
  }

  ngAfterViewInit() {
    this.renderChart(); // Initial render
  }

  // Render or update the chart based on the selected language
  renderChart() {
    // Adding a delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const chartDom = document.getElementById('main');

      // Ensure the DOM element exists and has valid size
      if (
        !chartDom ||
        chartDom.offsetWidth === 0 ||
        chartDom.offsetHeight === 0
      ) {
        console.error('Chart DOM element not available or has invalid size.');
        return; // Exit if DOM is not valid
      }

      // Dispose of the previous chart instance if it exists
      if (this.myChart) {
        this.myChart.dispose();
      }

      // Initialize ECharts on the valid DOM element
      this.myChart = echarts.init(chartDom);

      const monthData =
        this.selectedLanguage === 'ar'
          ? [
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
            ]
          : [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ];

      const option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'transparent',
          shadowColor: 'rgba(0, 0, 0, 0)',
          axisPointer: {
            type: 'cross',
          },
          extraCssText:
            'padding: 0; border: none; display:flex; width:100px;height:50px; justify-content:center; align-items:center;background-color:transparent;',
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
          data: monthData, // Dynamic data based on selected language
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: this.selectedLanguage === 'ar' ? 'استخدام' : 'Usage',
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

      this.myChart.setOption(option);
    }, 100); // Delay of 100ms
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.langSubscription.unsubscribe();
  }
}
