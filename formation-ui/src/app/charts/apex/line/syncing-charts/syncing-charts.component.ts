import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
  ApexChart,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  markers: ApexMarkers | any;
  title: ApexTitleSubtitle | any;
  fill: ApexFill | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  grid?: ApexGrid | any;
  colors?: string[] | any;
  toolbar?: any;
};


@Component({
  selector: 'app-syncing-charts',
  templateUrl: './syncing-charts.component.html',
  styleUrls: ['./syncing-charts.component.css']
})
export class SyncingChartsComponent implements OnInit {
  public chart1options!: Partial<ChartOptions>;
  public chart2options!: Partial<ChartOptions>;
  public chart3options!: Partial<ChartOptions>;
  public commonOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    markers: {
      size: 6,
      hover: {
        size: 10
      }
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return "";
          }
        }
      }
    },
    grid: {
      clipMarkers: false
    },
    xaxis: {
      type: "datetime"
    }
  };

  constructor() {
    this.initCharts();
  }

  public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "chart1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        id: "fb",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#008FFB"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart2options = {
      series: [
        {
          name: "chart2",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 30
            }
          )
        }
      ],
      chart: {
        id: "tw",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#546E7A"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart3options = {
      series: [
        {
          name: "chart3",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        id: "yt",
        group: "social",
        type: "area",
        height: 160
      },
      colors: ["#00E396"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };
  }

  public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any): any[] {
    let i = 0;
    let series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }

}
