import { Component, OnInit, ViewChild } from "@angular/core";
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
  ApexResponsive
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
  responsive: ApexResponsive[] | any;
};

@Component({
  selector: 'app-graph-customer-map1',
  templateUrl: './graph-customer-map1.component.html',
  styleUrls: ['./graph-customer-map1.component.css']
})
export class GraphCustomerMap1Component implements OnInit {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Income',
          data: [80, 24, 80, 90]
        }, {
          name: 'Expense',
          data: [40, 60, 20, 60]
        }, {
          name: 'Others',
          data: [20, 17, 5, 20]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar:{
            show:false
        }
      },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            // endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
			show: true,
          width: 3,
          colors: ['transparent']
        },
		legend: {
            show: false,
			fontSize: '12px',
			 markers: {
			  width: 20,
			  height: 20
			},
			itemMargin: {
				  horizontal: 10,
				  vertical: 10
			  },
		},
        xaxis: {
          categories: [ 'Week1','Week2', 'Week3', 'Week4'],
		  labels: {
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 400
					
				},
			}
        },
        yaxis: {
			labels: {
				offsetX: -15,
					style: {
						colors: '#787878',
						fontSize: '13px',
						fontFamily: 'Poppins',
						fontWeight: 400
						
					},
				}
        },
		colors:['#ff720d','#787878','#C4C4C4'],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val:any) {
              return "$ " + val + " thousands"
            }
          }
        },
    };
  }

  ngOnInit(): void {
  }

}
