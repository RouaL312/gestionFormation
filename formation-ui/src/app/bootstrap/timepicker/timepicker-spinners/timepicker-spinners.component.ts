import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-spinners',
  templateUrl: './timepicker-spinners.component.html',
  styleUrls: ['./timepicker-spinners.component.css']
})
export class TimepickerSpinnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  time = {hour: 13, minute: 30};
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }

}
