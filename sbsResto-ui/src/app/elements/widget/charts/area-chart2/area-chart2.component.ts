import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
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
  legend: ApexLegend | any;
  subtitle: ApexTitleSubtitle | any;
  grid: ApexGrid | any;
  colors: string[] | any;
  tooltip: ApexTooltip | any;
};

@Component({
  selector: 'app-area-chart2',
  templateUrl: './area-chart2.component.html',
  styleUrls: ['./area-chart2.component.css']
})
export class AreaChart2Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
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
        "#46FFC8",
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
			  "13 Nov 2017",
			  "14 Nov 2017",
			  "15 Nov 2017",
			  "16 Nov 2017",
			  "17 Nov 2017",
			  "20 Nov 2017",
			  "21 Nov 2017",
			  "22 Nov 2017",
			  "23 Nov 2017",
			  "24 Nov 2017",
			  "27 Nov 2017",
			  "28 Nov 2017",
			  "29 Nov 2017",
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
      legend: {
        horizontalAlign: "left",
		show:false,
      }
    };
  }

  ngOnInit(): void {
  }


}
