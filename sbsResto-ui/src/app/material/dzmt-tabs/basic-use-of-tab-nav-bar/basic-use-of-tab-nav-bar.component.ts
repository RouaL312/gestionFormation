import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-basic-use-of-tab-nav-bar',
  templateUrl: './basic-use-of-tab-nav-bar.component.html',
  styleUrls: ['./basic-use-of-tab-nav-bar.component.css']
})
export class BasicUseOfTabNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

}
