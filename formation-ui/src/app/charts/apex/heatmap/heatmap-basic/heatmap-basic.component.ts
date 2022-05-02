import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  title?: ApexTitleSubtitle | any;
  colors: any;
};

@Component({
  selector: 'app-heatmap-basic',
  templateUrl: './heatmap-basic.component.html',
  styleUrls: ['./heatmap-basic.component.css']
})
export class HeatmapBasicComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: this.generateData(18, {
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
      colors: ["#008FFB"],
      title: {
        text: "HeatMap Chart (Single color)"
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
