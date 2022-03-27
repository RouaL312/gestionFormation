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
  ApexResponsive,
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
  responsive: ApexResponsive[] | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-graph-sales-summary',
  templateUrl: './graph-sales-summary.component.html',
  styleUrls: ['./graph-sales-summary.component.css']
})
export class GraphSalesSummaryComponent implements OnInit {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
            {
                name: "New Clients",
                data: [300, 450, 600, 600, 400, 450, 410, 470, 480, 800, 600, 900, 400]
            }
      ],
      chart: {
        type: "bar",
        height: 370,
        stacked: true,
        toolbar: {
            show: false
        },
      },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                
                colors: {
                    backgroundBarColors: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0','#f0f0f0','#f0f0f0','#f0f0f0','#f0f0f0'],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 5,
                },

            },
            // distributed: true
        },
        colors:['#ff720d'],
        grid: {
            show: false,
        },
        legend: {
            show: false
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
            enabled: false,
        },
        /* stroke: {
			show: true,
          width: 3,
          colors: ['transparent']
        }, */
		
        xaxis: {
         categories: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
          labels: {
           style: {
              colors: '#787878',
              fontSize: '14px',
              fontFamily: 'poppins',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          crosshairs: {
            show: false,
          },
          axisBorder: {
              show: false,
            },
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
        tooltip: {
            x: {
                show: true
            }
        },
         responsive: [{
            breakpoint: 575,
            options: {
                chart: {
                    height: 250,
                }
            }
         }]
    };
  }

  ngOnInit(): void {
  }

}
