import { Component, OnInit, Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;



/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
  }
}



@Component({
  selector: 'app-timepicker-adapter',
  templateUrl: './timepicker-adapter.component.html',
  styleUrls: ['./timepicker-adapter.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]

})
export class TimepickerAdapterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  time!: '13:30:00';

}
