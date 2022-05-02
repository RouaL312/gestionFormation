import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  plotOptions?: ApexPlotOptions | any;
};

@Component({
  selector: 'app-timeline-basic',
  templateUrl: './timeline-basic.component.html',
  styleUrls: ['./timeline-basic.component.css']
})
export class TimelineBasicComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-04").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-12").getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-12").getTime(),
                new Date("2019-03-18").getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: "datetime"
      }
    };
  }

  ngOnInit(): void {
  }

}
