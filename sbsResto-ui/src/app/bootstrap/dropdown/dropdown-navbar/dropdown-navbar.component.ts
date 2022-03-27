import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-navbar',
  templateUrl: './dropdown-navbar.component.html',
  styleUrls: ['./dropdown-navbar.component.css']
})
export class DropdownNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  collapsed = true;

}
