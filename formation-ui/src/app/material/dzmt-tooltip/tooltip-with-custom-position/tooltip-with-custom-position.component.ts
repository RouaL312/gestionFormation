import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip-with-custom-position',
  templateUrl: './tooltip-with-custom-position.component.html',
  styleUrls: ['./tooltip-with-custom-position.component.css']
})
export class TooltipWithCustomPositionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}
