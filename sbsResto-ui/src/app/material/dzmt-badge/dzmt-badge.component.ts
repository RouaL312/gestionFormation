import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dzmt-badge',
  templateUrl: './dzmt-badge.component.html',
  styleUrls: ['./dzmt-badge.component.css']
})
export class DzmtBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  hidden = false;
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
