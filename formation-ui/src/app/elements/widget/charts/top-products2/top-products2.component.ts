import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  labels: string[] | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  subtitle: ApexTitleSubtitle | any;
  grid: ApexGrid | any;
  colors: string[] | any;
  tooltip: ApexTooltip | any;
};


@Component({
  selector: 'app-top-products2',
  templateUrl: './top-products2.component.html',
  styleUrls: ['./top-products2.component.css']
})
export class TopProducts2Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales Stats",
          data: [20, 10, 18, 10, 32, 15, 15, 22, 18, 6, 12, 13]
        }
      ],
      chart: {
        type: "area",
        height: 200,
        width: "100%",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
		width: 1,
      },
	  grid: {
		  show:false,
	  },
	  colors: [
        "#FE634E",
      ],
	  tooltip: {
		enabled: true,
	  },
      /* title: {
        text: "Title",
        align: "left"
      }, */
      /* subtitle: {
        text: "Sub title",
        align: "left"
      }, */
      labels: [
			  "1", "2", "3", "4", "5", "6", "7", "8"
			],
      xaxis: {
        labels: {
          show: false,
		 },
		 axisBorder: {
          show: false,
		 },
        categories: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
      },
      yaxis: {
        opposite: false,
		show: false,
      },
      fill: {
        opacity: 1,
		type: 'solid',
		 colors: ["#FE634E"],
		 gradient: {
			shade: 'light',
			
		 }
      },
      legend: {
        horizontalAlign: "left",
		show:false,
      }
    };
  }

  ngOnInit(): void {
  }

}
