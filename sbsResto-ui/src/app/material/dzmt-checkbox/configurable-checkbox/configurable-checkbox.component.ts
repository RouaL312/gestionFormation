import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-checkbox',
  templateUrl: './configurable-checkbox.component.html',
  styleUrls: ['./configurable-checkbox.component.css']
})
export class ConfigurableCheckboxComponent implements OnInit {

  constructor() { }
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  ngOnInit(): void {
  }

}
