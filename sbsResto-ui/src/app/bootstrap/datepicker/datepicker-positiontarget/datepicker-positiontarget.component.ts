import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-datepicker-positiontarget',
  templateUrl: './datepicker-positiontarget.component.html',
  styleUrls: ['./datepicker-positiontarget.component.css']
})
export class DatepickerPositiontargetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model!: NgbDateStruct;
  placement = 'bottom';

}
