import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexTooltip,
  ApexFill,
  ApexStates
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  plotOptions?: ApexPlotOptions | any;
  yaxis?: ApexYAxis | any;
  xaxis?: ApexXAxis | any;
  legend?: ApexLegend | any;
  stroke?: ApexStroke | any;
  tooltip?: ApexTooltip | any;
  fill?: ApexFill | any;
  states?: ApexStates | any;
  title?: ApexTitleSubtitle | any;
};


@Component({
  selector: 'app-bar-patterned',
  templateUrl: './bar-patterned.component.html',
  styleUrls: ['./bar-patterned.component.css']
})
export class BarPatternedComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      title: {
        text: "Compare Sales Strategy"
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function(val: any) {
            return val + "K";
          }
        }
      },
      fill: {
        type: "pattern",
        opacity: 1
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      }
    };
  }

  ngOnInit(): void {
  }

}
