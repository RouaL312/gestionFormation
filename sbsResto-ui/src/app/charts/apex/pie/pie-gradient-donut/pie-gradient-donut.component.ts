import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels: any;
  fill?: ApexFill | any;
  legend?: ApexLegend | any;
  dataLabels?: ApexDataLabels | any;
};

@Component({
  selector: 'app-pie-gradient-donut',
  templateUrl: './pie-gradient-donut.component.html',
  styleUrls: ['./pie-gradient-donut.component.css']
})
export class PieGradientDonutComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val: any, opts: any) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom",
              show: true,
            },
            dataLabels: {
                enabled: false,
            },
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
