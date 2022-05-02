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
  selector: 'app-area-chart3',
  templateUrl: './area-chart3.component.html',
  styleUrls: ['./area-chart3.component.css']
})
export class AreaChart3Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6]
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
        curve: "straight",
		width: 1,
      },
	  grid: {
		  show:false,
	  },
	  colors: [
        "#2421da",
      ],
	  tooltip: {
		enabled: false,
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
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ]
      },
      yaxis: {
        opposite: false,
		show: false,
      },
      fill: {
        opacity: 1,
		type: 'solid',
		 colors: ["#918fec"],
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
