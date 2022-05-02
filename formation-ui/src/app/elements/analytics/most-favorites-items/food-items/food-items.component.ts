import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {ChartComponent, ApexNonAxisChartSeries, ApexPlotOptions, ApexChart,  ApexFill, ApexStroke } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
};

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
	
    @Input() data:any;

  constructor() {
        this.chartOptions = {
          series: [66],
          chart: {
            width: 170,
            type: "radialBar",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false
            }
          },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '65%',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 10,
                    opacity: 0.1
                  }
                },
                track: {
                  background: '#efefef',
                  strokeWidth: '100%',
                  margin: 0, // margin is in pixels
                },
            
                dataLabels: {
                  show: true,
                  value: {
                    offsetY:-7,
                    color: '#111',
                    fontSize: '20px',
                    show: true,
                  }
                }
              }
            },
            fill: {
                colors: ['#ff720d'],
            },
            stroke: {
            },
            labels: [''],
        };
      }

  ngOnInit(): void {
  }

}
