import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chartjs-doughnut',
  templateUrl: './chartjs-doughnut.component.html',
  styleUrls: ['./chartjs-doughnut.component.css']
})
export class ChartjsDoughnutComponent implements OnInit {

  constructor() { }
  
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  

  ngOnInit(): void {
  }

}
