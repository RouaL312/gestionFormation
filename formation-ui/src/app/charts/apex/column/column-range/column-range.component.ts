import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  plotOptions?: ApexPlotOptions | any;
};

@Component({
  selector: 'app-column-range',
  templateUrl: './column-range.component.html',
  styleUrls: ['./column-range.component.css']
})
export class ColumnRangeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "blue",
          data: [
            {
              x: "Team A",
              y: [1, 5]
            },
            {
              x: "Team B",
              y: [4, 6]
            },
            {
              x: "Team C",
              y: [5, 8]
            },
            {
              x: "Team D",
              y: [3, 11]
            }
          ]
        },
        {
          name: "green",
          data: [
            {
              x: "Team A",
              y: [2, 6]
            },
            {
              x: "Team B",
              y: [1, 3]
            },
            {
              x: "Team C",
              y: [7, 8]
            },
            {
              x: "Team D",
              y: [5, 9]
            }
          ]
        }
      ],
      chart: {
        type: "rangeBar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      }
    };
  }

  ngOnInit(): void {
  }

}
