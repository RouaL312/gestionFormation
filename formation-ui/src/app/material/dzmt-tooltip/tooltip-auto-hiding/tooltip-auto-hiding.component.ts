import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip-auto-hiding',
  templateUrl: './tooltip-auto-hiding.component.html',
  styleUrls: ['./tooltip-auto-hiding.component.css']
})
export class TooltipAutoHidingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}
