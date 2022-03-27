import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-configurable-progress-bar',
  templateUrl: './configurable-progress-bar.component.html',
  styleUrls: ['./configurable-progress-bar.component.css']
})
export class ConfigurableProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

}
