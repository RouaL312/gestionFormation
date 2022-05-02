import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  stroke?: ApexStroke | any;
  labels?: number[] | any;
  title?: ApexTitleSubtitle | any;
};


@Component({
  selector: 'app-missing-or-null-values',
  templateUrl: './missing-or-null-values.component.html',
  styleUrls: ['./missing-or-null-values.component.css']
})
export class MissingOrNullValuesComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Peter",
          data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
        },
        {
          name: "Johnny",
          data: [
            10,
            15,
            null,
            12,
            null,
            10,
            12,
            15,
            null,
            null,
            12,
            null,
            14,
            null,
            null,
            null
          ]
        },
        {
          name: "David",
          data: [
            null,
            null,
            null,
            null,
            3,
            4,
            1,
            3,
            4,
            6,
            7,
            9,
            5,
            null,
            null,
            null
          ]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        },
        animations: {
          enabled: false
        }
      },
      stroke: {
        curve: "straight"
      },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      title: {
        text: "Missing data (null values)"
      }
    };
  }
  
  ngOnInit(): void {
  }

}
