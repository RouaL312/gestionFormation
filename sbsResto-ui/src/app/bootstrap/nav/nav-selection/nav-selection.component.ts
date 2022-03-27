import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-selection',
  templateUrl: './nav-selection.component.html',
  styleUrls: ['./nav-selection.component.css']
})
export class NavSelectionComponent implements OnInit {

  constructor() { }

  active:any;
  disabled = true;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.active = 1;
    }
  }
  
  
  ngOnInit(): void {
  }
  

}
