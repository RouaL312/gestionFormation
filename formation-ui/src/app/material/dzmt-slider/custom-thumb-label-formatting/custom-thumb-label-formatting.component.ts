import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-thumb-label-formatting',
  templateUrl: './custom-thumb-label-formatting.component.html',
  styleUrls: ['./custom-thumb-label-formatting.component.css']
})
export class CustomThumbLabelFormattingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
