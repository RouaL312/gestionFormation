import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexStroke,
  ApexDataLabels,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  theme: ApexTheme | any;
  title: ApexTitleSubtitle | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
};

@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.css']
})
export class PieChart1Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [51, 24, 61],
      chart: {
        width: "40%",
        type: "pie",
		zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}	
      },
      labels: [
        "(37.5%)",
        "(17.6%)",
        "(44.9%)"
      ],
	  stroke:{
		width:0,  
	  },
      dataLabels: {
        enabled: false
      },
      theme: {
        monochrome: {
          enabled: true
        }
      },
      /* title: {
        text: "Number of leads",
      }, */
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
