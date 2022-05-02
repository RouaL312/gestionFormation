import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  labels?: string[] | any;
  plotOptions?: ApexPlotOptions | any;
};


@Component({
  selector: 'app-radialbar-basic',
  templateUrl: './radialbar-basic.component.html',
  styleUrls: ['./radialbar-basic.component.css']
})
export class RadialbarBasicComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"]
    };
  }

  ngOnInit(): void {
  }

}
