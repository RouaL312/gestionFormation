import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker-steps',
  templateUrl: './timepicker-steps.component.html',
  styleUrls: ['./timepicker-steps.component.css']
})
export class TimepickerStepsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

}
