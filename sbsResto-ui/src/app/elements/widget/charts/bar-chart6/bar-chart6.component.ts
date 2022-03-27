import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexYAxis,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  responsive: ApexResponsive[] | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  colors: any;
  grid: ApexGrid | any;
};


@Component({
  selector: 'app-bar-chart6',
  templateUrl: './bar-chart6.component.html',
  styleUrls: ['./bar-chart6.component.css']
})
export class BarChart6Component implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [20, 14,18,25,27,22,12, 24, 20, 14, 18, 16]
        },
        {
          name: "PRODUCT B",
          data: [12,18,14,7,5,10,20, 8, 12, 18, 14, 16]
        },
        /* {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8]
        } */
      ],
      chart: {
        type: "bar",
        height: 200,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
	  dataLabels:{enabled: false},
	  
      colors: ["#5514a4","#f1f3f7"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
		  columnWidth: '18%',
        }
      },
      xaxis: {
        type: "category",
		 labels: {
          show: false,
		 },
        categories: [
          'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
        ],
		 axisBorder: {
			show: false,
		 },
		 crosshairs: {
          show: false,
		},
      },
	  yaxis: {
		show: false,
	  },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
	  grid: {
		  show:false,
	  },
    };
  }

  ngOnInit(): void {
  }

}
