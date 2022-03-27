import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-dynamic',
  templateUrl: './nav-dynamic.component.html',
  styleUrls: ['./nav-dynamic.component.css']
})
export class NavDynamicComponent implements OnInit {

  constructor() { }
  
   tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  active: any;

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }
  
  ngOnInit(): void {
  }

}
