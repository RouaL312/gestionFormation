import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions,
  ApexGrid,
  ApexLegend 
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  plotOptions?: ApexPlotOptions | any;
  grid?: ApexGrid | any;
  legend?: ApexLegend | any;
};

@Component({
  selector: 'app-semi-donut',
  templateUrl: './semi-donut.component.html',
  styleUrls: ['./semi-donut.component.css']
})
export class SemiDonutComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
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
