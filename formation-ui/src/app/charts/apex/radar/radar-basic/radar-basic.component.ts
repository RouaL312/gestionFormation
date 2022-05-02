import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  title?: ApexTitleSubtitle | any;
  xaxis?: ApexXAxis | any;
};


@Component({
  selector: 'app-radar-basic',
  templateUrl: './radar-basic.component.html',
  styleUrls: ['./radar-basic.component.css']
})
export class RadarBasicComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: "Basic Radar Chart"
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
  }

  ngOnInit(): void {
  }

}
