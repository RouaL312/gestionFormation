import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active = 'top';
}
