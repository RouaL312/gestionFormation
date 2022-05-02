import { Component, OnInit } from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker-config',
  templateUrl: './timepicker-config.component.html',
  styleUrls: ['./timepicker-config.component.css'],
  providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers
})
export class TimepickerConfigComponent implements OnInit {


  
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = true;
  }
  
  ngOnInit(): void {
  }
  

}
