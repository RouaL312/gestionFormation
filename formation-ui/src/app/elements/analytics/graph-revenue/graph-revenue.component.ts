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
    ApexMarkers, 
    ApexGrid, 
    ApexStates, 
    ApexFill,
    ApexTooltip,
    ApexPlotOptions
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
  colors: string[] | any;
  markers: ApexMarkers | any;
  grid: ApexGrid | any;
  states: ApexStates | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  plotOptions: ApexPlotOptions | any;
};

@Component({
  selector: 'app-graph-revenue',
  templateUrl: './graph-revenue.component.html',
  styleUrls: ['./graph-revenue.component.css']
})
export class GraphRevenueComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
            name: 'Net Profit',
            data: [500, 500, 200, 200, 600, 600, 1000, 1000,300, 300,500,500],
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
            show: false,
        },

      },
        plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '55%',
				// endingShape: 'rounded'
			  },
        },
      colors:['#FF720D'],
        dataLabels: {
		  enabled: false,
		},
		markers: {
			shape: "circle",
		},
        legend: {
			show: false,
		},
        stroke: {
		  show: true,
          width: 4,
          curve:'straight',
          colors:['#FF720D'],
		},
        grid: {
			borderColor: '#eee',
		},
		xaxis: {
            
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
			labels: {
				style: {
					colors: ['#7E7F80'],
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			  },
            crosshairs: {
              show: false,
            }
		},
		yaxis: {
			show:true,	
			labels: {
				offsetX: -15,
			   style: {
                  colors: '#7E7F80',
				  fontSize: '14px',
				   fontFamily: 'Poppins',
				  fontWeight: 100,
				  
				},
				 formatter: function (y:any) {
						  return y.toFixed(0) + "k";
						}
			  },
			},
		fill: {
			  opacity: 1,
			  colors:['#FAC7B6']                  
        },
        tooltip: {
          y: {
            formatter: function (val:any) {
              return "$ " + val + " thousands"
            }
          }
        }
        
    };
  }

  ngOnInit(): void {
  }

}
