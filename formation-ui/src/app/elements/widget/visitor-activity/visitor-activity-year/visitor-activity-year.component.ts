import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  title: ApexTitleSubtitle | any;
  colors: string[] | any;
};


@Component({
  selector: 'app-visitor-activity-year',
  templateUrl: './visitor-activity-year.component.html',
  styleUrls: ['./visitor-activity-year.component.css']
})
export class VisitorActivityYearComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My First data set",
          data: [25, 88, 25, 50, 70, 70, 60, 70, 50, 60, 50, 70]
        }
      ],
      chart: {
        height: 300,
        type: "bar"
      },
	  colors: [
        "#FE634E",
      ],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "bottom" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function(val: any) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ],
        position: "bottom",
        labels: {
         /*  offsetY: -18 */
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      yaxis: {
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
        }
      },
      title: {
        text: undefined,		
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
