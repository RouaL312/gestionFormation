import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-timepicker-seconds',
  templateUrl: './timepicker-seconds.component.html',
  styleUrls: ['./timepicker-seconds.component.css']
})
export class TimepickerSecondsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
