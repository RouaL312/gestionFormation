import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  fill: any;
  colors: any;
  title?: ApexTitleSubtitle | any;
  xaxis?: ApexXAxis | any;
  plotOptions?: ApexPlotOptions | any;
};

@Component({
  selector: 'app-heatmap-multiple-flipped',
  templateUrl: './heatmap-multiple-flipped.component.html',
  styleUrls: ['./heatmap-multiple-flipped.component.css']
})
export class HeatmapMultipleFlippedComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "10:00",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "10:30",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "11:00",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "11:30",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "12:00",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "12:30",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "13:00",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        },
        {
          name: "13:30",
          data: this.generateData(15, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        heatmap: {
          colorScale: {
            inverse: true
          }
        }
      },
      colors: [
        "#F3B415",
        "#F27036",
        "#663F59",
        "#6A6E94",
        "#4E88B4",
        "#00A7C6",
        "#18D8D8",
        "#A9D794",
        "#46AF78",
        "#A93F55",
        "#8C5E58",
        "#2176FF",
        "#33A1FD",
        "#7A918D",
        "#BAFF29"
      ],
      xaxis: {
        type: "category",
        categories: [
          "W1",
          "W2",
          "W3",
          "W4",
          "W5",
          "W6",
          "W7",
          "W8",
          "W9",
          "W10",
          "W11",
          "W12",
          "W13",
          "W14",
          "W15"
        ]
      },
      title: {
        text: "Color Scales flipped Vertically"
      }
    };
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

}
