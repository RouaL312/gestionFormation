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
    ApexTooltip
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
};


@Component({
  selector: 'app-graph-customers',
  templateUrl: './graph-customers.component.html',
  styleUrls: ['./graph-customers.component.css']
})
export class GraphCustomersComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
            name: 'Net Profit',
            data: [500, 500, 300, 300, 600, 600, 400, 400,200, 200,500,500],
        }
      ],
      chart: {
        type: "area",
        height: 100,
        toolbar: {
				show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
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
		  width: 3,
		  curve:'straight',
		  colors:['#FF720D'],
		},
        grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 1,
		  colors:['#FAC7B6']
		},
		tooltip: {
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val:any) {
					return "$" + val + " thousands"
				}
			}
		}
        
    };
  }

  ngOnInit(): void {
  }

}
