import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-slider',
  templateUrl: './configurable-slider.component.html',
  styleUrls: ['./configurable-slider.component.css']
})
export class ConfigurableSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

}
