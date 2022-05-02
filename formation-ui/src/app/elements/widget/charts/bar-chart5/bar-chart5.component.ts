import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-bar-chart5',
  templateUrl: './bar-chart5.component.html',
  styleUrls: ['./bar-chart5.component.css']
})
export class BarChart5Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "",
          data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76]
        },
      ],
      chart: {
        type: "bar",
        height: 200,
        width: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded"
        }
      },
	  colors: [
        "#5514a4",
      ],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 30,
        colors: ["transparent"]
      },
	  legend: {
		  show:false,
	  },
	  tooltip: {
		enabled: true,
	  },
	  grid: {
		  show:false,
	  },
      xaxis: {
		 labels: {
          show: false,
		 },
		 axisBorder: {
          show: false,
		 },
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
      },
	  yaxis: {
		show: false,
	  },
      fill: {
        opacity: 1
      },

    };
  }

  ngOnInit(): void {
  }

}
