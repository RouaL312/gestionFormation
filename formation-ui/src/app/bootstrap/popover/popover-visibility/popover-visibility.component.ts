import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-visibility',
  templateUrl: './popover-visibility.component.html',
  styleUrls: ['./popover-visibility.component.css']
})
export class PopoverVisibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  lastShown!: Date;
  lastHidden!: Date;

  recordShown() {
    this.lastShown = new Date();
  }

  recordHidden() {
    this.lastHidden = new Date();
  }

}
