import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexYAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  stroke?: ApexStroke | any;
  dataLabels?: ApexDataLabels | any;
  plotOptions?: ApexPlotOptions | any;
  yaxis?: ApexYAxis | any;
  grid?: ApexGrid | any;
  fill?: ApexFill | any;
  colors?: string[] | any;
  labels?: number[] | any;
  title?: ApexTitleSubtitle | any;
};

@Component({
  selector: 'app-bar-images',
  templateUrl: './bar-images.component.html',
  styleUrls: ['./bar-images.component.css']
})
export class BarImagesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "coins",
          data: [
            2,
            4,
            3,
            4,
            3,
            5,
            5,
            6.5,
            6,
            5,
            4,
            5,
            8,
            7,
            7,
            8,
            8,
            10,
            9,
            9,
            12,
            12,
            11,
            12,
            13,
            14,
            16,
            14,
            15,
            17,
            19,
            21
          ]
        }
      ],
      chart: {
        type: "bar",
        height: 410,
        animations: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ["#fff"],
        width: 0.2
      },
      /* labels: Array.apply(null, { length: 39 }).map(function(el, index) {
        return index + 1;
      }), */
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        },
        title: {
          text: "Weight"
        }
      },
      grid: {
        position: "back"
      },
      title: {
        text: "Paths filled by clipped image",
        align: "right",
        offsetY: 30
      },
      fill: {
        type: "image",
        opacity: 0.87,
        image: {
          src: [
            "assets/images/abstract-background-colrful.jpg"
          ],
          width: 615,
          height: 410
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
