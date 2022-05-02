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
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.css']
})
export class BarChart2Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
		{
          name: "",
          data: [6, 4, 1, -5, -8, 8, 2]
        },
        {
          name: "Revenue",
          data: [2, -3, -3, 9, 1, 9, 1]
        },
        {
          name: "",
          data: [8, 8, 6, 2, 4, 8, -6]
        }
      ],
      chart: {
        type: "bar",
         height: 140,
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}		 
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          // endingShape: "rounded"
        }
      },
	  colors: [
        "#FE634E",
        "#209F84",
        "#2781D5",
      ],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: [3 , 3 , 3],
        colors: ['transparent','transparent','transparent']
      },
	  legend: {
		  show:false,
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
		 axisTicks: {
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
          "Oct"
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
