import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-tooltip-can-be-disabled',
  templateUrl: './tooltip-can-be-disabled.component.html',
  styleUrls: ['./tooltip-can-be-disabled.component.css']
})
export class TooltipCanBeDisabledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  disabled = new FormControl(false);

}
