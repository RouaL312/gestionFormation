import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-configurable-slide-toggle',
  templateUrl: './configurable-slide-toggle.component.html',
  styleUrls: ['./configurable-slide-toggle.component.css']
})
export class ConfigurableSlideToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

}
