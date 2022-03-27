import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexStroke,
  ApexLegend,
  ApexChart
} from "ng-apexcharts";
import { githubData } from "./github-data";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  fill?: ApexFill | any;
  legend?: ApexLegend | any;
  yaxis?: ApexYAxis | any;
  xaxis?: ApexXAxis | any;
  stroke?: ApexStroke | any;
  colors?: any;
};


@Component({
  selector: 'app-area-github-style',
  templateUrl: './area-github-style.component.html',
  styleUrls: ['./area-github-style.component.css']
})
export class AreaGithubStyleComponent implements OnInit {
  public chartMonths!: Partial<ChartOptions>;
  public chartYears!: Partial<ChartOptions>;
  public commonOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: "solid"
    },
    xaxis: {
      type: "datetime"
    },
    stroke: {
      width: 0,
      curve: "smooth"
    }
  };

  constructor() {
    this.initCharts();
  }

  public initCharts(): void {
    this.chartMonths = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      chart: {
        id: "chartyear",
        type: "area",
        height: 160,
        background: "#F6F8FA",
        toolbar: {
          show: false,
          autoSelected: "pan"
        },
        events: {
          mounted: function(chart: any) {
            // var commitsEl = document.querySelector(".cmeta span.commits");
            // var commits = chart.getSeriesTotalXRange(
            //   chart.w.globals.minX,
            //   chart.w.globals.maxX
            // );
            // commitsEl.innerHTML = commits;
          },
          updated: function(chart: any) {
            // var commitsEl = document.querySelector(".cmeta span.commits");
            // var commits = chart.getSeriesTotalXRange(
            //   chart.w.globals.minX,
            //   chart.w.globals.maxX
            // );
            // commitsEl.innerHTML = commits;
          }
        }
      },
      colors: ["#FF7F00"],

      yaxis: {
        show: false,
        tickAmount: 3
      }
    };

    this.chartYears = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      chart: {
        height: 200,
        type: "area",
        background: "#F6F8FA",
        toolbar: {
          autoSelected: "selection"
        },
        brush: {
          enabled: true,
          target: "chartyear"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("26 Jan 2014").getTime(),
            max: new Date("29 Mar 2015").getTime()
          }
        }
      },
      colors: ["#7BD39A"],
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
  }

  ngOnInit(): void {
  }

}
