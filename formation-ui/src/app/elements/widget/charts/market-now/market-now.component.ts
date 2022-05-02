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
  ApexGrid,
  ApexFill
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
  grid: ApexGrid | any;
  colors: any;
};

@Component({
  selector: 'app-market-now',
  templateUrl: './market-now.component.html',
  styleUrls: ['./market-now.component.css']
})
export class MarketNowComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [20,14,18,25,27,22,12, 24, 20, 14, 18, 16, 34, 32, 43, 36, 56, 12, 23, 34]
        },
        {
          name: "PRODUCT B",
          data: [32,58,34,37,15,41,24,38,52,38,24,19,54,34,23,34,35,22,43,33]
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
	  dataLabels:{enabled: false},
	  
      colors: ["#2F4CDD","#f1f3f7"],
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
		 axisTicks:{
          show: false, 
		 },
		 crosshairs: {
          show: false,
		},
      },
	  grid:{
		show: false,  
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
      }
    };
  }

  ngOnInit(): void {
  }

}
