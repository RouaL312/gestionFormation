import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexYAxis | ApexYAxis[] | any;
  labels?: string[] | any;
  stroke?: ApexStroke | any;
  markers?: ApexMarkers | any;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
};

@Component({
  selector: 'app-mixed-line-area',
  templateUrl: './mixed-line-area.component.html',
  styleUrls: ['./mixed-line-area.component.css']
})
export class MixedLineAreaComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "TEAM A",
          type: "area",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
          name: "TEAM B",
          type: "line",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        curve: "smooth"
      },
      fill: {
        type: "solid",
        opacity: [0.35, 1]
      },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09 ",
        "Dec 10",
        "Dec 11"
      ],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: "Series A"
          }
        },
        {
          opposite: true,
          title: {
            text: "Series B"
          }
        }
      ],
      xaxis: {
        labels: {
          trim: false
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

}
