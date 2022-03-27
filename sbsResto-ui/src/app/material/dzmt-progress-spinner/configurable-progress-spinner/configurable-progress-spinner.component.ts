import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-configurable-progress-spinner',
  templateUrl: './configurable-progress-spinner.component.html',
  styleUrls: ['./configurable-progress-spinner.component.css']
})
export class ConfigurableProgressSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

}
