import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  dataLabels?: ApexDataLabels | any;
  yaxis?: ApexYAxis | any;
  colors?: string[] | any;
  legend?: ApexLegend | any;
  fill?: ApexFill | any;
};

@Component({
  selector: 'app-area-stacked',
  templateUrl: './area-stacked.component.html',
  styleUrls: ['./area-stacked.component.css']
})
export class AreaStackedComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "South",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "North",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 20
            }
          )
        },
        {
          name: "Central",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 15
            }
          )
        }
      ],
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function(chart: any, e: any) {
            console.log(new Date(e.xaxis.min));
          }
        }
      },
      colors: ["#008FFB", "#00E396", "#CED4DC"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
      }
    };
  }

  public generateDayWiseTimeSeries = function(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };

  ngOnInit(): void {
  }

}
