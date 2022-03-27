import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-clear-button',
  templateUrl: './input-with-clear-button.component.html',
  styleUrls: ['./input-with-clear-button.component.css']
})
export class InputWithClearButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   value = 'Clear me';
}
