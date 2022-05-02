import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  tooltip: ApexTooltip | any;
  colors: string[] | any;
};


@Component({
  selector: 'app-all-sales2',
  templateUrl: './all-sales2.component.html',
  styleUrls: ['./all-sales2.component.css']
})
export class AllSales2Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [25, 60, 30, 71, 26, 85, 50]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
		colors:["#FE634E",], 
		width:2
      },
	  colors: [
        "#8BC740",
      ],
      title: {
        text: undefined,
        align: "left"
      },
      grid: {
		show: false,
		xaxis: {
			lines: {
				show: false
			}
		},   
		yaxis: {
			lines: {
				show: false
			}
		},  
        row: {
          colors: undefined, // takes an array which will be repeated on columns
          opacity: 0
        },
      },
      xaxis: {
        labels: {
          show: false,
		 },
		 axisBorder: {
          show: false,
		 },
		 axisTicks: {
          show: false,
		 },
        categories: [
          "Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"
        ],
      },
      yaxis: {
        opposite: false,
		show: false,
      },
	  tooltip: {
		enabled: false,
	  },
    };
  }

  ngOnInit(): void {
  }

}
