import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexNonAxisChartSeries | any;
  chart?: ApexChart | any;
  responsive?: ApexResponsive[] | any;
  labels: any;
  theme?: ApexTheme | any;
  title?: ApexTitleSubtitle | any;
  fill?: ApexFill | any;
  yaxis?: ApexYAxis | any;
  stroke?: ApexStroke | any;
  legend?: ApexLegend | any;
  plotOptions?: ApexPlotOptions | any;
};

@Component({
  selector: 'app-polar-area-monochrome',
  templateUrl: './polar-area-monochrome.component.html',
  styleUrls: ['./polar-area-monochrome.component.css']
})
export class PolarAreaMonochromeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [42, 39, 35, 29, 26],
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            //    enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        },
         responsive: [{
            breakpoint: 575,
            options: {
                chart: {
                    width: 250,
                }
            }
         }]
    };
  }

  ngOnInit(): void {
  }

}
