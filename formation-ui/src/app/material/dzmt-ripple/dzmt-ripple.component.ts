import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dzmt-ripple',
  templateUrl: './dzmt-ripple.component.html',
  styleUrls: ['./dzmt-ripple.component.css']
})
export class DzmtRippleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;

}
