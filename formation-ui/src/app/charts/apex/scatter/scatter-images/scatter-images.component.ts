import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexYAxis | any;
  grid?: ApexGrid | any;
  fill?: ApexFill | any;
  colors?: string[] | any;
  legend: any; //ApexLegend;
  markers?: ApexMarkers | any;
};

@Component({
  selector: 'app-scatter-images',
  templateUrl: './scatter-images.component.html',
  styleUrls: ['./scatter-images.component.css']
})
export class ScatterImagesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Image2",
          data: [
            [16.4, 5.4],
            [21.7, 4],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7],
            [10.9, 8.2],
            [16.4, 4],
            [13.6, 4.3],
            [13.6, 12],
            [29.9, 3],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 8],
            [24.5, 7.1],
            [10.9, 7],
            [8.1, 4.7],
            [19, 10],
            [27.1, 10],
            [24.5, 8],
            [27.1, 3],
            [29.9, 11.5],
            [27.1, 0.8],
            [22.1, 2]
          ]
        },
        {
          name: "Image2",
          data: [
            [6.4, 5.4],
            [11.7, 4],
            [15.4, 3],
            [9, 2],
            [10.9, 11],
            [20.9, 7],
            [12.9, 8.2],
            [6.4, 14],
            [11.6, 12]
          ]
        }
      ],
      chart: {
        height: 350,
        type: "scatter",
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#4D72AA", "#9DD6FF"],
      xaxis: {
        tickAmount: 10,
        min: 0,
        max: 40,
        labels: {
          rotate: 0,
          trim: false
        }
      },
      yaxis: {
        tickAmount: 7
      },
      markers: {
        size: 20
      },
      fill: {
        type: "image",
        opacity: 1,
        image: {
          src: [
            "https://freesvg.org/img/Simple-Water-Icon.png",
            "assets/images/charts/fb.png"
          ],
          width: 40,
          height: 40
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML: [
            function() {
              return '<span><i class="fab fa-facebook"></i></span>';
            },
            function() {
              return '<span><i class="fab fa-instagram"></i></span>';
            }
          ]
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
