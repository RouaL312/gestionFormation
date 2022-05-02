import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
import { dataSeries } from "./data-series";

@Component({
  selector: 'app-zoomable-timeseries',
  templateUrl: './zoomable-timeseries.component.html',
  styleUrls: ['./zoomable-timeseries.component.css']
})
export class ZoomableTimeseriesComponent implements OnInit {
  public series?: ApexAxisChartSeries | any;
  public chart?: ApexChart | any;
  public dataLabels?: ApexDataLabels | any;
  public markers?: ApexMarkers | any;
  public title?: ApexTitleSubtitle | any;
  public fill?: ApexFill | any;
  public yaxis?: ApexYAxis | any;
  public xaxis?: ApexXAxis | any;
  public tooltip?: ApexTooltip | any;

  constructor() {
    this.initChartData();
  }

  public initChartData(): void {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series = [
      {
        name: "XYZ MOTORS",
        data: dates
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function(val:any) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function(val:any) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
  
  ngOnInit(): void {
  }

}
