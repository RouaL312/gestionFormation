import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStates,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";

import { arrayData } from "./data-series";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3"
];

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  plotOptions?: ApexPlotOptions | any;
  yaxis?: ApexYAxis | any;
  xaxis?: ApexXAxis | any;
  grid?: ApexGrid | any;
  subtitle?: ApexTitleSubtitle | any;
  colors?: string[] | any;
  states?: ApexStates | any;
  title?: ApexTitleSubtitle | any;
  legend?: ApexLegend | any;
  tooltip?: any; //ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

window.Apex = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    shared: false
  },
  legend: {
    show: false
  }
};


@Component({
  selector: 'app-column-loaded-chart',
  templateUrl: './column-loaded-chart.component.html',
  styleUrls: ['./column-loaded-chart.component.css']
})
export class ColumnLoadedChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartQuarterOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "year",
          data: this.makeData()
        }
      ],
      chart: {
        id: "barYear",
        height: 400,
        width: "100%",
        type: "bar",
        events: {
          dataPointSelection: (e: any, chart: any, opts: any) => {
          
            var quarterChartEl = document.querySelector("#chart-quarter")!;
            var yearChartEl = document.querySelector("#chart-year")!;

            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl.classList.contains("active")) {
                this.updateQuarterChart(chart, "barQuarter");
              } else {
                yearChartEl.classList.add("chart-quarter-activated");
                quarterChartEl.classList.add("active");
                this.updateQuarterChart(chart, "barQuarter");
              }
            } else {
              this.updateQuarterChart(chart, "barQuarter");
            }

            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl.classList.remove("chart-quarter-activated");
              quarterChartEl.classList.remove("active");
            }
          },
          updated: (chart: any) => {
            this.updateQuarterChart(chart, "barQuarter");
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: "75%",
          dataLabels: {
            position: "bottom"
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },

      colors: colors,

      states: {
        normal: {
          filter: {
            type: "desaturate"
          }
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: "darken",
            value: 1
          }
        }
      },
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function(val: any, opts: any) {
              return opts.w.globals.labels[opts.dataPointIndex];
            }
          }
        }
      },
      title: {
        text: "Yearly Results",
        offsetX: 15
      },
      subtitle: {
        text: "(Click on bar to see details)",
        offsetX: 15
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    };

    this.chartQuarterOptions = {
      series: [
        {
          name: "quarter",
          data: []
        }
      ],
      chart: {
        id: "barQuarter",
        height: 400,
        width: "100%",
        type: "bar",
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          horizontal: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: "Quarterly Results",
        offsetX: 10
      },
      tooltip: {
        x: {
          formatter: function(val: any, opts: any) {
            return opts.w.globals.seriesNames[opts.seriesIndex];
          }
        },
        y: {
          title: {
            formatter: function(val: any, opts: any) {
              return opts.w.globals.labels[opts.dataPointIndex];
            }
          }
        }
      }
    };
  }

  public makeData(): any {
    var dataSet = this.shuffleArray(arrayData);

    var dataYearSeries = [
      {
        x: "2011",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters
      },
      {
        x: "2012",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters
      },
      {
        x: "2013",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters
      },
      {
        x: "2014",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters
      },
      {
        x: "2015",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters
      },
      {
        x: "2016",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters
      }
    ];

    return dataYearSeries;
  }

  public shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  public updateQuarterChart(sourceChart: any, destChartIDToUpdate: any) {
    var series = [];
    var seriesIndex = 0;
    var colors = [];

    if (sourceChart.w.globals.selectedDataPoints[0]) {
      var selectedPoints = sourceChart.w.globals.selectedDataPoints;
      for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
        var selectedIndex = selectedPoints[seriesIndex][i];
        var yearSeries = sourceChart.w.config.series[seriesIndex];
        series.push({
          name: yearSeries.data[selectedIndex].x,
          data: yearSeries.data[selectedIndex].quarters
        });
        colors.push(yearSeries.data[selectedIndex].color);
      }

      if (series.length === 0)
        series = [
          {
            data: []
          }
        ];

      return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
        series: series,
        colors: colors,
        fill: {
          colors: colors
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
