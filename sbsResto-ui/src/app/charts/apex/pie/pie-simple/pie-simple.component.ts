import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels: any;
  legend?: ApexLegend | any;
};

@Component({
  selector: 'app-pie-simple',
  templateUrl: './pie-simple.component.html',
  styleUrls: ['./pie-simple.component.css']
})
export class PieSimpleComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      
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
