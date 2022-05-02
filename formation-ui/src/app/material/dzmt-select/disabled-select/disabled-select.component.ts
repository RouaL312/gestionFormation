import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-disabled-select',
  templateUrl: './disabled-select.component.html',
  styleUrls: ['./disabled-select.component.css']
})
export class DisabledSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  disableSelect = new FormControl(false);

}
