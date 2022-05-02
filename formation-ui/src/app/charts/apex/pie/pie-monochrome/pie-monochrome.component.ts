import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexLegend  
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels: any;
  theme?: ApexTheme | any;
  title?: ApexTitleSubtitle | any;
  legend?: ApexLegend | any;
};


@Component({
  selector: 'app-pie-monochrome',
  templateUrl: './pie-monochrome.component.html',
  styleUrls: ['./pie-monochrome.component.css']
})
export class PieMonochromeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        width: "100%",
        type: "pie"
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Number of leads"
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom",
              show: true,
            },
            dataLabels: {
                enabled: false,
            },
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
