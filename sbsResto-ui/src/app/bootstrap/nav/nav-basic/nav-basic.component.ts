import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-basic',
  templateUrl: './nav-basic.component.html',
  styleUrls: ['./nav-basic.component.css']
})
export class NavBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active = 1; 
}
