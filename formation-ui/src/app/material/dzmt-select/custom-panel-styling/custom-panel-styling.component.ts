import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-panel-styling',
  templateUrl: './custom-panel-styling.component.html',
  styleUrls: ['./custom-panel-styling.component.css'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class CustomPanelStylingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  panelColor = new FormControl('red');

}
