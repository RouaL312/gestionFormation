import { Component, OnInit, ViewChild	 } from '@angular/core';
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexTooltip
} from "ng-apexcharts";

import { dataSeries } from "./data-series";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  dataLabels?: ApexDataLabels | any;
  yaxis?: ApexYAxis | any;
  legend?: ApexLegend | any;
  fill?: ApexFill | any;
  markers?: ApexMarkers | any;
  title?: ApexTitleSubtitle | any;
  tooltip?: ApexTooltip | any;
};

@Component({
  selector: 'app-area-irregular-timeseries',
  templateUrl: './area-irregular-timeseries.component.html',
  styleUrls: ['./area-irregular-timeseries.component.css']
})
export class AreaIrregularTimeseriesComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
    // innerArr: number[];

  constructor() {
  
  // console.log(this.innerArr + "tesT");
  
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: this.generateDataSets(0)
        },
        {
          name: "PRODUCT B",
          data: this.generateDataSets(1)
        },
        {
          name: "PRODUCT C",
          data: this.generateDataSets(2)
        }
      ],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: "#8e8da4"
          },
          offsetX: 0,
          formatter: function(val: any) {
            return (val / 1000000).toFixed(2);
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function(val: any, timestamp: any) {
            return moment(new Date(timestamp)).format("DD MMM YYYY");
          }
        }
      },
      title: {
        text: "Irregular Data in Time Series",
        align: "left",
        offsetX: 14
      },
      tooltip: {
        shared: true
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10
      }
    };
  }

  public generateDataSets = function(t: any) {
    var ts1 = 1388534400000;
    var ts2 = 1388620800000;
    var ts3 = 1389052800000;
    
    var dataSet = [[[0]], [[1]], [[2]]];
    for (let i = 0; i < 12; i++) {
      ts1 = ts1 + 86400000;
      const innerArr = [ts1, dataSeries[2][i].value];
      dataSet[0].push(innerArr);
    }
    for (let i = 0; i < 18; i++) {
      ts2 = ts2 + 86400000;
      const innerArr = [ts2, dataSeries[1][i].value];
      dataSet[1].push(innerArr);
    }
    for (let i = 0; i < 12; i++) {
      ts3 = ts3 + 86400000;
      const innerArr = [ts3, dataSeries[0][i].value];
      dataSet[2].push(innerArr);
    }

     if (t === 0) {
      return dataSet[0];
    } else if (t === 1) {
      return dataSet[1];
    } else {
      return dataSet[2];
    } 
  };

  ngOnInit(): void {
  }

}
