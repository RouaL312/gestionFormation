import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  fill: any;
  colors: any;
  stroke?: ApexStroke | any;
  title?: ApexTitleSubtitle | any;
  xaxis?: ApexXAxis | any;
  plotOptions?: ApexPlotOptions | any;
};

@Component({
  selector: 'app-heatmap-rounded',
  templateUrl: './heatmap-rounded.component.html',
  styleUrls: ['./heatmap-rounded.component.css']
})
export class HeatmapRoundedComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Metric1",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: this.generateData(20, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: "#008FFB"
              },
              {
                from: 51,
                to: 100,
                color: "#00E396"
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#fff"]
        }
      },
      xaxis: {
        type: "category"
      },
      title: {
        text: "Rounded (Range without Shades)"
      }
    };
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
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
